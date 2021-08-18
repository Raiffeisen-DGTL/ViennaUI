const fs = require('fs');
const path = require('path');
const glob = require('glob');
const flowgen = require('flowgen').default;

const target = path.resolve(__dirname, '..', 'dist');

const files = glob.sync('**/*.d.ts', { cwd: target }).filter((filepath) => {
    const parse = path.parse(filepath);

    const name = path.basename(filepath, '.d.ts');
    const dirname = path.basename(parse.dir);

    return name === 'index' || name === dirname;
});

files.forEach((filename) => {
    const filepath = path.resolve(target, filename);
    const flowpath = path.resolve(path.dirname(filepath), `${path.basename(filepath, '.d.ts')}.flow.js`);

    let flowdef = flowgen.compiler.compileDefinitionFile(filepath);

    try {
        flowdef = flowgen.beautify(flowdef);
    } catch (error) {
        // ...
    }

    fs.writeFile(flowpath, flowdef, function () {});
});
