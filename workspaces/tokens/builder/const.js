const path = require('path');
const fs = require('fs');

const cfgPath = process.argv.join(' ').match(/--config (\S*)/);
const innerRoot = path.resolve(__dirname, '..');
const root = process.cwd();
const configPath = path.resolve(root, (cfgPath && cfgPath[1]) || 'preset.config.json');

let config = {
    output: path.resolve(innerRoot, 'dist'),
    rootFolder: path.resolve(innerRoot, 'src'),
    tokensSrc: path.resolve(innerRoot, 'src'),
    presetsSrc: path.resolve(innerRoot, 'src/presets'),
    defaultImports: path.resolve(innerRoot, 'src'),
    prefix: '',
};

if (fs.existsSync(configPath)) {
    const tmp = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    config = { ...config, ...tmp };
}

module.exports.dirs = {
    get output() {
        return path.resolve(root, config.output);
    },
    get rootFolder() {
        return path.resolve(root, config.rootFolder);
    },
    get tokensSrc() {
        return path.resolve(root, config.tokensSrc);
    },
    get presetsSrc() {
        return path.resolve(root, config.presetsSrc);
    },
    get defaultImports() {
        return path.resolve(root, config.defaultImports);
    },
};

module.exports.needPresets = process.argv.find((arg) => arg === '--presets');
module.exports.needTokens = process.argv.find((arg) => arg === '--tokens');
module.exports.needAll = process.argv.find((arg) => arg === '--all');

const pr = process.argv.join(' ').match(/--prefix (\S*)/);
module.exports.prefix = config.prefix || (pr && pr[1]) || '';

module.exports.jsExportTemplate = (str, inner) => {
    return `
'use strict';
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.React = factory());
}(this, (function () {
    'use strict';
    return ${inner};
})));
    `;
};
