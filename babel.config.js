const coreJsVersion = require('core-js/package.json').version;

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: 'commonjs',
                useBuiltIns: 'usage',
                corejs: coreJsVersion,
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: ['babel-plugin-styled-components'],
    env: {
        test: {
            plugins: ['@babel/proposal-class-properties'],
        },
    },
};
