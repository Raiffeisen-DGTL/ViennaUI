#!/usr/bin/env node

const path = require('path');
const { outDir, getFiles, getImports, readFile, format, write } = require('./files');
const sanitizeJSON = require('./sanitizers/json').default;
const sanitizeJsonRaw = require('./sanitizers/json-raw').default;
const sanitizePresets = require('./sanitizers/preset').default;
const config = require('./const');
const { dirs, needPresets, needTokens, needAll, jsExportTemplate } = require('./const');

const prefix = (config.prefix && `${config.prefix}-`) || '';

function load() {
    const result = { tokensWithImports: null, presetesWithImports: null };
    let preformatedTokens = [];
    if (needTokens || needPresets) {
        const tokensFiles = getFiles(dirs.tokensSrc);
        preformatedTokens = tokensFiles.map(readFile);
        result.tokensWithImports = preformatedTokens.map(getImports);
    }
    if (needPresets) {
        const presetsFiles = getFiles(dirs.presetsSrc);
        const preformatedPresets = presetsFiles.map(readFile);
        result.presetesWithImports = preformatedPresets.map((...arg) => getImports(...arg, preformatedTokens));
    }

    return result;
}

function buildTokens(tokensWithImports) {
    const formatedJSON = format(tokensWithImports, sanitizeJsonRaw);
    write(path.resolve(dirs.output, `${prefix}tokens.json`), formatedJSON);

    const formatedJsonRaw = format(tokensWithImports, sanitizeJSON);
    write(path.resolve(dirs.output, `${prefix}tokens-raw.json`), formatedJsonRaw);

    const formatedJsRaw = `export default ${format(tokensWithImports, sanitizeJSON)}`;
    write(path.resolve(dirs.output, `${prefix}tokens-raw.js`), formatedJsRaw);

    const js = jsExportTemplate`${formatedJSON}`;
    write(path.resolve(dirs.output, `${prefix}tokens.js`), js);
}

function buildPresets(presetesWithImports) {
    const formatedPresets = format(presetesWithImports, sanitizePresets);
    write(path.resolve(dirs.output, `${prefix}presets.json`), formatedPresets);

    const js = jsExportTemplate`${formatedPresets}`;
    write(path.resolve(dirs.output, `${prefix}presets.js`), js);
}

function build() {
    try {
        const { tokensWithImports, presetesWithImports } = load();
        if (needTokens || needAll) {
            buildTokens(tokensWithImports);
        }
        if (needPresets || needAll) {
            buildPresets(presetesWithImports);
        }
        if (!needTokens && !needPresets && !needAll) {
            throw new Error('need key --presets or(and) --tokens');
        }
        console.log(`Successfully built`); // eslint-disable-line no-console
    } catch (e) {
        console.log(`Built is errored: `, e); // eslint-disable-line no-console
    }
}

outDir(dirs.output);
build();
