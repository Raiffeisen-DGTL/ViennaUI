# Скрипты миграции компонентов vienna-ui

###### Raiffeisenbank Design System

##### Code modifiers

Скрипты миграции кода (кодмоды) для авторефакторинга кода. Кодмоды написаны с помощью инструмента jscodeshift.

## Запуск

```bash
$ codemods -t <trasform> -s <source path> [...OPTIONS]

   transform - имя кодмода из списка
   path-of-source - путь к файлу или к директории с файлами

   Options:
        --dry, -d           режим отладки (не применяет изменения к файлам). По умолчанию `false`
        --print, -p         вывести измененные файлы в консоль. По умолчанию `false`
        --parser            парсер: babel|flow|tsx. По умолчанию `tsx`
        --transform, -t     имя кодмода
        --source, -s        путь до файла или директории, к которым нужно применить кодмоды
        --help, -h          отображение списка доступных команд и их описания
```

## Скрипты

### icons-import-deprecated

```bash
codemods -t icons-import-deprecated -s <path-to-source>
```

-   Заменяет импорты иконок из пакета `vienna.icons` на импорт из пакета `vienna.deprecated-icons`

### icons-v2-migration

```bash
codemods -t icons-v2-migration -s <path-to-source>
```

-   Заменяет импорты иконок и их использование на новую версию пакета иконок `vienna.icons`
