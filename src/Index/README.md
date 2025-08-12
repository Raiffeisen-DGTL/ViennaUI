# Index


# Библиотека компонентов UIKit (vienna-ui)

Библиотека компонентов для использования в React приложениях. Основной платформой дизайн-системы для разработки приложений являются компоненты (`Button`, `Input`, `Select`, `Autocomplete`, `Table` и другие).

<Package of={pkg} />

## Использование в проекте

Установить библиотеку можно из artifactory.raiffeisen.ru

`npm install @fcc/ui`

В пакете `@fcc/ui` находятся компоненты дизайн-системы, которые содержат собранные `js` файлы (скомпилированные через [Babel](https://babeljs.io)).

```js
const App = (
    <Body>
        <Button design='accent'>
            Кнопка <PlusRingIcon />
        </Button>
    </Body>
);

ReactDOM.render(app, document.getElementById('root'));
```

## Технологический стек и браузеры

Компоненты дизайн-системы разработаны с использованием `react@18`, `styled-components@6`. Мы поддерживаем стабильные версии следующих браузеры:

-   Chrome (3 latest)
-   Firefox (2 latest)
-   Safari (2 latest)
-   Yandex (2 latest)
-   Edge (2 latest)

## FAQ

##### Где можно получить информацию по разработке компонента? Как начать коммитить?!

Информацию как развернуть проект у себя и сделать PR можно найти на странице — [Как внести изменения](https://ds.raiffeisen.ru/web/docs/contributing/#процесс-pull-request). В разделе [разработка компонентов](/docs/components) можно найти информацию как мы разрабатываем компоненты, какую архитектуру и технологический стек используем в разработке.