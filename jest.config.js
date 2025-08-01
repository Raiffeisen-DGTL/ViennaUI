const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

module.exports = {
    roots: ['<rootDir>'],
    projects: ['<rootDir>/src/jest.config.js'],
    cacheDirectory: '/tmp/tests',
    coverageDirectory: './coverage',
    collectCoverageFrom: ['./src/**/*.{ts,tsx,js,jsx}', './src/**/*.spec.{ts,tsx,js,jsx}', './src/**/jest.config.js'],
    coveragePathIgnorePatterns: ['/esm', '/dist', '/node_modules', './src/**/*.pw.spec.{ts,tsx,js,jsx}'],
    setupFiles: ['./scripts/jest/setup.js'],
    setupFilesAfterEnv: ['./scripts/jest/setupTests.js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
    transform: {
        '^.+\\.(js|ts)x?$': 'babel-jest',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve(
            './scripts/jest/static-loader.js'
        ),
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    modulePathIgnorePatterns: ['/esm', '/dist', '/node_modules'],
    globals: {
        snapshot: true,
    },
};
