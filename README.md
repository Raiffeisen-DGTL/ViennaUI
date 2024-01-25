# ViennaUI

###### Raiffeisenbank Design System

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Raiffeisen-DGTL/ViennaUI/blob/master/LICENSE.md) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

<p align='center'>
    <img src='logo.jpg' alt='drawing' width='900' />
</p>

## Установка

Для установки библиотеки React компонентов:

```bash
$ npm i vienna-ui
$ yarn add vienna-ui
```

Дизайн Система Vienna.UI содержит еще 6 пакетов:  `vienna.icons`, `vienna.react-use`,  `vienna.tokens`, `vienna.ui-primitives`, `vienna.ui-theme`, `vienna.utils`

Любой из приведенных выше пакетов также можно установить, вызвав:

```bash
$ npm i <package-name>
$ yarn add <package-name>
```

## Использование

В пакете `vienna-ui` находятся компоненты дизайн-системы, которые содержат собранные `js` файлы (скомпилированные через [Babel](https://babeljs.io)).

```
import React form 'react';
import ReactDOM from 'react-dom';
import { Body, Button } from 'vienna-ui';
import { PlusRing } from 'vienna.icons';

const App = (
    <Button design='accent'>
        Кнопка <PlusRing />
    </Button>
);

ReactDOM.render(app, document.getElementById('root'));
```

## Компоненты
-   [Accordion](src/Accordion/README.md)
-   [Alarm](src/Alarm/README.md)
-   [Alert](src/Alert/README.md)
-   [Avatar](src/Avatar/README.md)
-   [Badge](src/Badge/README.md)
-   [Body](src/Body/README.md)
-   [Breadcrumbs](src/Breadcrumbs/README.md)
-   [Button](src/Button/README.md)
-   [Calendar](src/Calendar/README.md)
-   [Card](src/Card/README.md)
-   [Checkbox](src/Checkbox/README.md)
-   [Chips](src/Chips/README.md)
-   [ComboButton](src/ComboButton/README.md)
-   [Counter](src/Counter/README.md)
-   [CssGrid](src/CssGrid/README.md)
-   [CustomTable](src/CustomTable/README.md)
-   [Datepicker](src/Datepicker/README.md)
-   [DatePickerBeta](src/DatePickerBeta/README.md)
-   [DateTimePicker](src/DateTimePicker/README.md)
-   [DatepickerRange](src/DatepickerRange/README.md)
-   [Drawer](src/Drawer/README.md)
-   [DropList](src/DropList/README.md)
-   [EmptyState](src/EmptyState/README.md)
-   [FileLoader](src/FileLoader/README.md)
-   [FileLoaderButton](src/FileLoaderButton/README.md)
-   [Filter](src/Filter/README.md)
-   [Flex](src/Flex/README.md)
-   [FormField](src/FormField/README.md)
-   [Grid](src/Grid/README.md)
-   [Groups](src/Groups/README.md)
-   [Header](src/Header/README.md)
-   [Hint](src/Hint/README.md)
-   [Input](src/Input/README.md)
-   [InputMask](src/InputMask/README.md)
-   [InputAccount](src/InputMask/Concrete/InputAccount/README.md)
-   [InputCard](src/InputMask/Concrete/InputCard/README.md)
-   [InputDate](src/InputMask/Concrete/InputDate/README.md)
-   [InputDateRange](src/InputMask/Concrete/InputDateRange/README.md)
-   [InputDigital](src/InputMask/Concrete/InputDigital/README.md)
-   [InputNumber](src/InputMask/Concrete/InputNumber/README.md)
-   [InputPassword](src/InputPassword/README.md)
-   [InputPhone](src/InputMask/Concrete/InputPhone/README.md)
-   [InputSlider](src/InputSlider/README.md)
-   [Link](src/Link/README.md)
-   [Logotype](src/Logotype/README.md)
-   [Modal](src/Modal/README.md)
-   [Monthpicker](src/Monthpicker/README.md)
-   [Multiselect](src/Multiselect/README.md)
-   [Notifications](src/Notifications/README.md)
-   [Pagination](src/Pagination/README.md)
-   [PaymentLogo](src/PaymentLogo/README.md)
-   [Popover](src/Popover/README.md)
-   [Progressbar](src/Progressbar/README.md)
-   [Radio](src/Radio/README.md)
-   [RoundIcon](src/RoundIcon/README.md)
-   [Search & Suggest](src/Search/README.md)
-   [Select](src/Select/README.md)
-   [Sidebar](src/Sidebar/README.md)
-   [Spinner](src/Spinner/README.md)
-   [Stepper](src/Stepper/README.md)
-   [Switcher](src/Switcher/README.md)
-   [Table](src/Table/README.md)
-   [Tabs](src/Tabs/README.md)
-   [Textarea](src/Textarea/README.md)
-   [Timer](src/Timer/README.md)
-   [Toolbar](src/Toolbar/README.md)
-   [Tooltip](src/Tooltip/README.md)
-   [Typography](src/Typography/README.md)
-   [UserProfile](src/UserProfile/README.md)
-   [Whitespace](src/Whitesoace/README.md)
-   [Wizard](src/Wizard/README.md)

## Кастомизация компонентов

Компоненты можно кастомизировать с помощью `ThemeProvider` и токенов

## Технологический стек и браузеры

Компоненты дизайн-системы разработаны с использованием `react@18`, `styled-components@6`. Мы поддерживаем стабильные версии следующих браузеры:

-   Chrome (2 latest)
-   Firefox (2 latest)
-   Safari (2 latest)
-   Yandex (2 latest)
-   Edge (2 latest)

