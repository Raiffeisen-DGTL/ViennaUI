const path = require('path');
const config = require('../../jest.config');
const { name } = require('./package');

module.exports = {
    ...config,
    name: name,
    displayName: name,
    rootDir: '../..',
    testMatch: config.testMatch.map((match) => `<rootDir>/workspaces/${path.basename(__dirname)}/${match}`),
};
