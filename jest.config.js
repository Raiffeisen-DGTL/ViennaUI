module.exports = {
    roots: ['<rootDir>'],
    projects: ['<rootDir>/workspaces/*/jest.config.js'],
    cacheDirectory: '/tmp/tests',
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: [
        '<rootDir>/workspaces/**/*.{ts,tsx,js,jsx}',
        '!<rootDir>/workspaces/**/*.spec.{ts,tsx,js,jsx}',
        '!<rootDir>/workspaces/**/jest.config.js',
    ],
    coveragePathIgnorePatterns: [
        '/esm',
        '/dist',
        '/node_modules',
        '<rootDir>/workspaces/icons',
        '<rootDir>/workspaces/config-eslint',
        '<rootDir>/workspaces/ui-pictogram',
    ],
    setupFiles: ['<rootDir>/scripts/jest/setup.js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    testResultsProcessor: 'jest-bamboo-formatter',
    snapshotSerializers: ['enzyme-to-json/serializer'],
    transform: {
        '^.+\\.(js|ts)x?$': 'babel-jest',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve(
            './scripts/jest/static-loader.js'
        ),
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    modulePathIgnorePatterns: ['/esm', '/dist', '/node_modules'],
    moduleNameMapper: {
        'vienna.icons': '<rootDir>/workspaces/icons/src',
    },
    globals: {
        snapshot: true,
    },
};
