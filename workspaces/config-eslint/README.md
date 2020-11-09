# Конфиг ESLint
###### Raiffeisenbank Design System

Пакет содержит конфигурационные файлы для `ESLint`.

## ESLint

В файле `.eslintrc.js` в раздел `extends` добавляем новые `presets`

```js
module.exports = {
    root: true,
    extends: [
        'vienna.config-eslint',
        'vienna.config-eslint/rules/react',
        'vienna.config-eslint/rules/react-hooks',
        'vienna.config-eslint/rules/prettier',
        'vienna.config-eslint/rules/jest',
    ],
};
```

## ESLint + Typescript

В файле `.eslintrc.js` в раздел `extends` добавляем новые `presets`

```js
module.exports = {
    root: true,
    extends: [
        'vienna.config-eslint',
        'vienna.config-eslint/rules/react',
        'vienna.config-eslint/rules/react-hooks',
        'vienna.config-eslint/rules/prettier',
        'vienna.config-eslint/rules/typescript',
        'vienna.config-eslint/rules/jest',
    ],
    parserOptions: {
        project: './tsconfig.json',
    },
};
```
