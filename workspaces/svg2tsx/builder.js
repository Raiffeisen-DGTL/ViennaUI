/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const format = require('./src/format');
const cleanup = require('./src/cleanup');
const parser = require('./src/parser');

function getTags(root, source) {
    const tagsFile = path.join(root, source, 'tags.json');
    let tags = {};

    if (fs.existsSync(tagsFile)) {
        try {
            tags = JSON.parse(fs.readFileSync(tagsFile, 'utf8'));
        } catch (e) {
            console.error(`❌ Failed to parse tags JSON: \n`, e);
        }
    }

    return tags;
}

module.exports = (source, destination, options) => {
    const duplicate = {};
    const indexts = [];
    const db = [];

    const root = process.cwd();
    const target = path.join(root, source, options.mask);
    const dist = path.join(root, destination);

    if (!fs.existsSync(dist)) {
        fs.mkdirSync(dist);
    }

    const tags = getTags(root, source);

    glob(target, {}, async (error, files) => {
        if (error) {
            throw new Error(error);
        }

        let allTags = [];

        files.forEach((filepath) => {
            const parse = path.parse(filepath);

            const id = parse.name;
            const name = format.naming(parse.name);
            const category = path.basename(parse.dir);

            // Checks duplicate icon name in different directories
            if (name in duplicate) {
                console.error(`❌ Duplicate icon data ${category}/${name}, ${parse.base}`);
                throw new Error(`Duplicate icon data ${category}/${name}, ${parse.base}`);
            }

            duplicate[name] = true;
            const componentTags = tags[id] || [];
            allTags = allTags.concat(componentTags);

            // Save to db
            db.push({
                id,
                name,
                category,
                filename: parse.base,
                filepath: path.relative(root, filepath),
                tags: componentTags,
            });
        });

        const report = {
            icons: db,
            tags: [...new Set(allTags)], // removing duplicates;
        };

        // Save to db.json
        if (options.report) {
            fs.writeFileSync(path.join(dist, 'report.json'), JSON.stringify(report, null, 2), 'utf-8');
        }

        // Convert svg to React components
        for (const icon of db) {
            const directory = path.join(dist, icon.name);
            const component = path.join(dist, `${icon.name}/${icon.name}.tsx`);
            const indexfile = path.join(dist, `${icon.name}/index.ts`);

            // Get content and cleaned
            const content = fs.readFileSync(path.join(root, icon.filepath), 'utf8');
            const svgo = await cleanup(content);

            // Parse
            const parse = parser.parse(svgo.data);
            const morph = parser.transform(
                parse.children[0] && parse.children[0].tagName === 'svg' ? parse.children[0].children : parse
            );

            // Generate code
            const svg = parser.stringify(morph);
            const code = format.generateCode(icon.name, svg);

            // Write code
            if (!fs.existsSync(directory)) {
                fs.mkdirSync(directory);
            }

            // Write component
            fs.writeFileSync(component, code, 'utf-8');

            // Write index.ts
            fs.writeFileSync(indexfile, `export * from './${icon.name}';`, 'utf-8');

            // Generate global index.ts
            indexts.push(`export * from './${icon.name}';`);
        }

        // Write global src/index.ts
        fs.writeFileSync(path.join(dist, 'index.ts'), indexts.join('\r\n'), 'utf-8');

        // Console report
        console.log(`💈 Starting build compile from ${source} to ${destination} files`);
        console.log(`🚀 Generated ${db.length} React components from ${files.length} svg files`);

        if (options.report) {
            console.log(`📖 Create report to ${path.join(destination, 'report.json')} file`);
        }

        console.log(`✅ Done\n`);
    });
};
