# Сборщик токенов и пресетов
###### Raiffeisenbank Design System

Сборщик токенов и пресетов генерирует файлы

-   tokens-raw.json (компиляция yaml)
-   tokens.json (только токены в формате ключ:значение)
-   tokens.js (только токены)
-   tokens.ts (только токены)
-   presets.json (только пресеты)
-   presets.css (только пресеты)
-   presets.js (только пресеты)
-   presets.ts (только пресеты)
-   Другие платформы (TBD)

## Запуск
###### Raiffeisenbank Design System  

Для единичной сборки или деплоя выполнить

```bash
npm run build
```

Во время разработки можно запустить

```bash
npm run build:watch
```

## Схема YAML

#### Для токенов

```yaml
space: <Пространство имен>
desc: <Необязательное описание>
<Название списка токенов>:
    desc: <Необязательное описание>
    <Название токена>:
        desc: <Необязательное описание>
        value: <Значение токена>
        prop: <Название prop свойства для генерации предпросмотра>
```

#### Для пресетов

```yaml
space: <Пространство имен>
imports: [<Список файлов импорта, необязателен>]
<Название пресета>:
    values: [{ value: $space.tokens.token, prop: color }]
```

Поле `imports` можно не писать. Возможна любая глубина вложенности для сложных пресетов.

#### Refs

```yaml
space: <Пространство имен>
imports: [<Список файлов импорта, необязателен>]
<Название пресета>:
    ref: $preset.part или [$preset.part1, $preset.part2, ...]
    <css-свойство>: значение
```

## CLI

При включенном флаге `cssPresets` возможно написание пресетов в виде `yaml-css`

```bash
npm run build --cssPresets
```

Другие аргументы в `CLI`

```bash
npm run build --cssPresets --css --watch --config preset.config.json --prefix black
```

-   Сгененрировать presets.css используется флаг `--cssPresets` с `--css`
-   Режим наблюдения `--watch`
-   Префикс названия `--prefix <string>`
-   Путь к файлу конфигурации `--config <string>`

## Список разрешенных CSS атрибутов

border-. color background-. padding-. margin-. box-shadow opacity font-. cursor

## Конфигурация

Конфигурация хранится в файле `preset.config.json`

```json
{
    "output": "выходная директория",
    "rootFolder": "корень токенов",
    "tokensSrc": "путь до токенов",
    "presetsSrc": "путь до пресетов",
    "defaultImports": "путь до импортов по умолчанию",
    "htmlTemplateSrc": "путь до шаблона страницы предпросмотра",
    "allowedProps": ["регулярные выражения разрешенных css свойств"],
    "prefix": "Префик названия"
}
```
