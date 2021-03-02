# svg2tsx

###### Raiffeisenbank Design System

Инструмент CLI трансформирует `SVG` файлы в React компоненты с поддержкой Typescript.

## Запуск

```bash
$ npx svg2tsx <source> <destination> [options]

Options:
  -r, --report       Create JSON report (default: false)
  -m, --mask <mask>  Set mask for glob (default: "**/*.svg")
  -v, --version      Output the version number
  -h, --help         Display help for command
```

#### Примеры использования

```bash
# Выводить версию инструмента
$ npx svg2tsx -v

# Выводить помощь по инструменту
$ npx svg2tsx build -h
```

Трансформация `SVG` в React компоненты

```bash
# Трансформирует иконки из директории ./source в директорию ./dist
$ npx svg2tsx ./source ./dist

# Трансформирует иконки из директории source в директорию dist
# + создает файл report.json в директории ./dist
$ npx svg2tsx ./source ./dist --report

# Трансформирует иконки из директории source в директорию dist
# + изменяет стандартную маску поиска файлов на **/*.png
$ npx svg2tsx ./source ./destination --mask '**/*.png'
```
