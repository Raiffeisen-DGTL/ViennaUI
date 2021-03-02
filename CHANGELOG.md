# Changelog мажорных версий

## Release v2

#### Обновления Таблицы

<u>Что изменилось:</u>
<ol>
    <li>Текущая таблица переименована в TableDeprecated и будет удалена в одном из следующих махорных релизов. </li>
    <li>
        Изменена логика работы с аттрибутом state. Теперь при его наличии, таблица будет работать в режиме управляемого
        компонента и использовать значение этого аттрибута, вместо внутреннего стейта. Добавился атрибут initState для
        установки начального состояния таблицы.
    </li>
    <li>
        Обработчики `onServiceInit` и `onStateUpdate` помечены как deprecated, они продолжат работать, но будут выводить
        warning в консоль. Вместо них добавлены обработчики `onInit` и `onUpdate` соответсвенно, при этом у onInit
        обновилась сигнатура.
    </li>
</ol>

<u>Как обновиться:</u>
<ol>
    <li>
        При использовании атрибута state необходим обработчик onUpdate, который будет обновлять state во внешнем
        контексте.
    </li>
    <li>
        Если атрибут state используется только для инициализации состояния таблицы, его необхоимо переименовать в
        initState. При этом, если раньше необходимо было передавать полныйstate целиком, то теперь этот объект будет
        мерджиться во внутренний стейт, так что в нем можно объявлять только те свойства, которые необходимо установить.{' '}
    </li>
    <li>Если используется атрибут service, то необходимо обновить сигнатуру передаваемой в него функции.</li>
</ol>
<br />

#### Удаление обратной совместимости Progressbar для свойства design.

<u>Что изменилось:</u> Убрана обратная совместимость для свойства design компонента Progressbar.
<br />
<br />
<u>Как обновиться:</u> Цвет компонента устанавливается с помощью свойства color. Доступные значения можно посмотреть в документации
<br />

#### Обновлены иконки у компонентов и в пакете иконок.

<u>Что изменилось:</u> Старый пакет иконок переехал в vienna.deprecated-icons, новые иконки по-прежнему храняться в пакете
vienna.icons, но с версией 2.x.x. Описание миграции иконок представлено [в проекте Figma](https://www.figma.com/file/mXDoXTwuKMte0e0M2wh6jn/%F0%9F%8C%90-Vienna-RDS-Icons?node-id=3079%3A1055)
<br />
<u>Как обновиться:</u> Для более комфортного переезда на новый Icon Pack в vienna.codemods появились 2-а кодмода (скрипта
миграции кода вашего проекта):

1. icons-import-deprecated - заменяет все импорты из vienna.icons на vienna.deprecated-icons

    До: `import { Down } from 'vienna.icons'`

    После: `import { Down } from 'vienna.deprecated-icons'`

2. icons-v2-migration - заменяет старые иконки на новые и все импорты из vienna.deprecated-icons на vienna.icons

    До: `import { Down } from 'vienna.deprecated-icons' ... <Down /> ...`

    После: `import { SelectOpenDown } from 'vienna.icons' ... <SelectOpenDown /> ...`

<u>Как переехать на новый пакет?</u>
<br />
Запустить сначала кодмод `icons-import-deprecated`, затем - `icons-v2-migration`:

`npm install --save-dev vienna.codemods && npx codemods -t icons-import-deprecated -s <path-to-source> && npx codemods -t icons-v2-migration -s <path-to-source>`

<u>Как оставить текущую версию иконок?</u>
<br />
Запустить кодмод `icons-import-deprecated`

`npm install --save-dev vienna.codemods && npx codemods -t icons-import-deprecated -s <path-to-source>`

<b>PS</b> либо просто остаться на версии 1.x.x `vienna.icons`
<br />

#### Новый дизайн спинера `<Spinner />`.

<u>Что изменилось:</u> Обновлен дизайн спиннера и его анимация.
<br />
<u>Как обновиться:</u> Компонент в новой версии имеет - необходимо проверить насколько текущий дизайн приложения соотносится с новым дизайном компонента `Spinner`.
<br />

#### Обновлен пакет токенов.

<u>Что изменилось:</u> Обновлены названия токенов.
<ol>
    <li>
        У всех токенов размеров убрано обозначение <b>px</b>, и они переведены в тип <b>number</b>
    </li>
    <li>
        Унифицированы названия токенов размерной сетки (пространство <b>size</b>): вместо <b>xs, s, m, l</b> и т.д.
        введены обозначения <b>N*s</b> т.е. <b>s , 2s,...32s</b>
    </li>
    <li>
        Удалены пространства имен токенов <b>icon, text, whitetspace</b>
    </li>
    <li>
        Добавлено пространство имен <b>width</b>
    </li>
    <li>
        Токены <b>color.secondary.basic</b> и <b>color.secondary.datavisual</b> объединены в <b>color.secondary</b>
    </li>
    <li>
        Значение токена изменено с формата <b>ключ:объект</b> на <b>ключ:значение</b>
    </li>
</ol>
<br />
<u>Как обновиться:</u> Если вы используете токены напрямую, нужно сверится с [новыми наименованиями](workspaces/tokens/src) layout.size.
<br />

#### Исправлена ошибка в поведении компонента `Search`.

<u>Что изменилось:</u> Изменено поведение появляения списка. Теперь список после выбора элемента отображается корректно в
зависимости от значения, находящегося в строке input'а.
<br />
<u>Как обновиться:</u> Проверить, что не было зависимости логики поведения компонента на ошибочное отображение списка.