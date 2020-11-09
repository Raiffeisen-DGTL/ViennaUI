const { program } = require('commander');
const { description, version } = require('./package.json');
const builder = require('./builder');

program.version(version, '-v, --version').description(description);

program
    .command('build <source> <destination>', { isDefault: true })
    .option('-r, --report', 'Create JSON report', false)
    .option('-m, --mask <mask>', 'Set mask for glob', '**/*.svg')
    .action((source, destination, opts) => {
        builder(source, destination, { report: opts.report, mask: opts.mask });
    });

program.parse(process.argv);
