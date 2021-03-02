# Конфиг Typescript

###### Raiffeisenbank Design System

Пакет содержит конфигурационные файлы для `Typescript`.

## Typescript (tsconfig)

В файле `tsconfig.json` в разделе `extends` добавляем

```json
{
    "extends": "vienna.config-typescript",
    "compilerOptions": {
        "outDir": "./dist"
    },
    "include": ["workspaces/**/*"],
    "exclude": ["node_modules", "dist"],
    "typeRoots": ["./typings"]
}
```
