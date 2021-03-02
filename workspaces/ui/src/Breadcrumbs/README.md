# Breadcrumbs

Элемент навигации по приложению, сайту.

## Импорт

```
import { Breadcrumbs } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | "s" \| "m" \| "l" \| undefined | "m" |
| onClickHome | ((e: any, data: { value: any; }) => void) \| undefined | false | Обработчик нажатия на кнопку "Домой" |
| localization | [BreadcrumbsLocalization](../Breadcrumbs/localization.ts) | defaultBreadcrumbsLocalization | Локализация |

## Свойства шага / Option Props

| Prop    | Type                | Default | Description          |
| ------- | ------------------- | ------- | -------------------- |
| altText | string \| undefined | false   | Альтернативный текст |

## Использование

Компонент состоит из родительского контейнера `Breadcrumbs` и шагов `Breadcrumbs.Option`. Если был совершен только один шаг, то он будет слегка видоизменен под кнопку `Назад`.

```jsx
<Breadcrumbs>
    <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
    <Breadcrumbs.Option altText='Page 2'>Long Name Page 2</Breadcrumbs.Option>
    <Breadcrumbs.Option altText='Page 3'>Long Name Page 3</Breadcrumbs.Option>
</Breadcrumbs>
```

## Альтернативный текст

##### Свойство `altText`

Для того чтобы компонент мог ужать текст при уменьшении можно задать альтернативный текст `altText`, иначе он будет сокращаться с обрезкой и добавлением `...`

```jsx
<Breadcrumbs>
    <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
    <Breadcrumbs.Option altText='Page 2'>Long Name Page 2</Breadcrumbs.Option>
    <Breadcrumbs.Option altText='Page 3'>Long Name Page 3</Breadcrumbs.Option>
</Breadcrumbs>
```

## Размеры

##### Свойство `size`

Есть размеры - `s`, `m` (по умолчанию), `l`.

## Обработчики клика

##### Свойство `onClick`, `onClickHome`

Для работы с элементами достаточно обрабатывать их событие `onClick`, для случая нажатия на кнопку `Домой` используется событие `onClickHome`

```jsx
<Groups design='vertical'>
    <Breadcrumbs onClickHome={console.log}>
        <Breadcrumbs.Option onClick={console.log} value={{ data: 1 }} altText='Page 1'>
            Long Name Page 1
        </Breadcrumbs.Option>
        <Breadcrumbs.Option onClick={console.log} value={2} altText='Page 2'>
            Long Name Page 2
        </Breadcrumbs.Option>
        <Breadcrumbs.Option onClick={console.log} value='step 3' altText='Page 3'>
            Long Name Page 3
        </Breadcrumbs.Option>
    </Breadcrumbs>
    <Breadcrumbs>
        <Breadcrumbs.Option onClick={console.log} value={1} altText='Page 1'>
            Long Name Page 1
        </Breadcrumbs.Option>
    </Breadcrumbs>
</Groups>
```
