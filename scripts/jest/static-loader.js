const path = require('path');

// Imported by setup.js for tranforming file imports to their path
module.exports = {
    process(src, filename) {
        return `module.exports = ${JSON.stringify(path.relative(__dirname, filename))};`;
    },
};
