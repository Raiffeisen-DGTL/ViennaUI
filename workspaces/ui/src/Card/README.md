# Card

Компонент кароточек.


## Импорт

```
import { Card } from 'vienna-ui';
```

## Свойства / Props

Prop | Type | Default | Description
--- | --- | --- | ---
header | React.ReactNode | false | Контент шапки
title | string | false | Заголовок
actions | React.ReactNode | false | Контент в правой части шапки
footer | React.ReactNode | false | Контент подвала
stretch | boolean | false | Может ли компонент растягиваться под родительский контейнер

## Использование

Компонент принимает в качестве дочерних компонентов любой контент.
Компонент также экспортирует вспомогательные подкомпоненты `Card.Title`, `Card.Subtitle` для создания загловка и подзаголовка карточки.
Для создания заголовком внутри тела карточки экпортируется `Card.ContentTitle`.

```jsx
<Card title='Simple card'>
    <div style={{ width: '600px' }}>Content</div>
</Card>
```

## Контент блока "действия"
##### Свойство `actions`

В `actions` можно передать объект с иконкой, который будет отображён в правом верхнем углу карточки.

```jsx
<Card title='Card with actions' actions={<Settings1 />}>
    Content
</Card>
<Card
    title='Card with actions'
    actions={
        <Groups size='xs'>
            <Settings1 />
            <Close />
        </Groups>
    }>
    Content
</Card>
```

## Шапка
##### Свойство `header`, `title`

Для простых заголовков карточки достаточно передать строку в `title`. Для более сложных используется `header`, который приниает JSX-объект. 

```jsx
<Card
    header={
        <Groups alignItems='baseline'>
            <Card.Title>Card title</Card.Title>
            <Card.Subtitle>Card subtitle</Card.Subtitle>
        </Groups>
    }>
    <Demo />
</Card>
```

#### Многострочный заголовок шапки
##### Компонент `Card.Title`, `Card.Subtitle`

Для создания составных заголовском можно использовать компоненты `Card.Title`, `Card.Subtitle` и компонент `Groups`.

```jsx
<Card
    title='Simple card'
    header={
        <Groups design='vertical' size='s'>
            <Card.Title>Card title</Card.Title>
            <Card.Subtitle>Card subtitle</Card.Subtitle>
        </Groups>
    }>
    <Demo />
</Card>
```

## Подвал
##### Свойство `footer`

```jsx
<Card
    title='Card with footer'
    footer={
        <Groups justifyContent='flex-end'>
            <Button design='outline'>Button example</Button>
            <Button design='accent'>Button example</Button>
        </Groups>
    }>
    <Demo />
</Card>
```

## Заголовок в теле карточки
##### Компонент `Card.ContentTitle`

Компонент также экспортирует подкомпонент `Card.ContentTitle` для заголовков внутри контента.

```jsx
<Card title='Content title' actions={<Settings1 />}>
    <Card.ContentTitle>Section header</Card.ContentTitle>
    <Demo />
    <Card.ContentTitle>Section header</Card.ContentTitle>
    <Demo />
</Card>
```

## Адаптивная высота
##### Свойство `stretch`

Свойство `stretch` позволяет растянуть карточку по высоте до 100% высоты родителя.

```jsx
<Card
    stretch
    title='Simple card'
/>
```
