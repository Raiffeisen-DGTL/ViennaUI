const meow = require('meow');
const inquirer = require('inquirer');
const globby = require('globby');
const path = require('path');
const execa = require('execa');

const PARSER_LIST = [
    {
        name: 'JavaScript - babel',
        value: 'babel',
    },
    {
        name: 'JavaScript with Flow',
        value: 'flow',
    },
    {
        name: 'TypeScript',
        value: 'tsx',
    },
];

const TRANSFORMER_LIST = [
    {
        value: 'icons-import-deprecated',
        name: 'Updates icons imports for using old icons pack: vienna.icons -> vienna.deprecated-icons',
    },
    {
        value: 'icons-v2-migration',
        name: 'Updates all icons usage to new (v2) icons pack',
    },
];

const transformerDirectory = path.join(__dirname, '../', 'transforms');
const jscodeshiftExecutable = require.resolve('.bin/jscodeshift');

const runTransform = ({ files, parser, transform, flags }) => {
    const { dry, print } = flags;
    const transformScriptsPath = path.join(transformerDirectory, `${transform}.js`);
    let args = [];

    if (dry) {
        args.push('--dry');
    }

    if (print) {
        args.push('--print');
    }

    args.push('--transform', transformScriptsPath);
    args.push('--parser', parser);
    args = args.concat(files);

    const result = execa.sync(jscodeshiftExecutable, args, {
        stdio: 'inherit',
        stripEof: false,
    });

    if (result.error) {
        throw result.error;
    }
};

const expandSourcePaths = (sourcePath) => {
    return globby.sync(sourcePath, {
        expandDirectories: {
            extensions: ['tsx'],
        },
    });
};

const run = () => {
    const cli = meow(
        `
    Usage:
        codemods -t <trasform> -s <path-of-source> [...OPTIONS]
        transform - name of transform
        path-of-source - files of directory to transform

    Options:
        --dry, -d           boolean
                            dry run (no changes are made to files)
                                (default: false)
        --print, -p         boolean
                            print transformed files to stdout, useful for development
                                (default: false)
        --parser            babel|flow|tsx
                            the parser to use for parsing the source files
                                (default: tsx)
        --transform, -t     string
                            codemod name
        --source, -s        string (path)
                            path of the transformed file, directory of template of the path
        --help, -h          boolean
                            print help info
`,
        {
            booleanDefault: undefined,
            inferType: true,
            flags: {
                dry: {
                    type: 'boolean',
                    default: false,
                    alias: 'd',
                },
                print: {
                    type: 'boolean',
                    default: false,
                    alias: 'p',
                },
                parser: {
                    type: 'string',
                    default: 'tsx',
                },
                transform: {
                    type: 'string',
                    alias: 't',
                },
                source: {
                    type: 'string',
                    alias: 's',
                },
                help: {
                    type: 'boolean',
                    alias: 'h',
                    default: false,
                },
            },
        }
    );

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'parser',
                message: 'Which dialect of JavaScript do you use?',
                default: 'tsx',
                when: !cli.flags.parser || !PARSER_LIST.map((it) => it.value).includes(cli.flags.parser),
                pageSize: PARSER_LIST.length,
                choices: PARSER_LIST,
            },
            {
                type: 'list',
                name: 'transform',
                message: 'Which transform would you like to apply?',
                when: !cli.flags.transform || !TRANSFORMER_LIST.map((it) => it.value).includes(cli.flags.transform),
                pageSize: Infinity,
                choices: TRANSFORMER_LIST,
            },
            {
                type: 'input',
                name: 'source',
                message: 'On which files or directory should the codemods be applied?',
                when: !cli.flags.source,
                default: '.',
                filter: (files) => files.trim(),
            },
        ])
        .then((answers) => {
            const { parser, transform, source } = answers;

            const selectedParser = cli.flags.parser || parser;
            const selectedTransform = cli.flags.transform || transform;
            const selectedSourceFiles = expandSourcePaths(cli.flags.source || source);

            return runTransform({
                files: selectedSourceFiles,
                parser: selectedParser,
                transform: selectedTransform,
                flags: cli.flags,
            });
        });
};

module.exports = {
    run: run,
};
