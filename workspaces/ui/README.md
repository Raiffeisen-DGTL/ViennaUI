# Библиотека компонентов UIKit (vienna-ui)

###### Raiffeisenbank Design System

Библиотека компонентов для использования в React приложениях. Основной платформой дизайн-системы для разработки приложений являются компоненты (`Button`, `Input`, `Select`, `Autocomplete`, `Table` и другие).

## Использование в проекте

В пакете `vienna-ui` находятся компоненты дизайн-системы, которые содержат собранные `js` файлы (скомпилированные через [Babel](https://babeljs.io)).

```
import React form 'react';
import ReactDOM from 'react-dom';
import { Body, Button } from 'vienna-ui';
import { PlusRing } from 'vienna.icons';

const App = (
    <Body>
        <Button design='accent'>
            Кнопка <PlusRing />
        </Button>
    </Body>
);

ReactDOM.render(app, document.getElementById('root'));
```

## Локализация

Локализация есть у всех компонентов, где есть элементы с текстом. Для этого в свойство `localization` необходимо передать объект с новыми значениями текстовых полей. Интерфейс каждого словаря экпортируется из `vienna-ui`, например, `TableLocalization`

## Технологический стек и браузеры

Компоненты дизайн-системы разработаны с использованием `react@16`, `styled-components@4`. Мы поддерживаем стабильные версии следующих браузеры:

-   Chrome (2 latest)
-   Firefox (2 latest)
-   Safari (2 latest)
-   Yandex (2 latest)
-   Edge (2 latest)
-   IE (11+)
