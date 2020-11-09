# Hint

Компонент используется для расширенных подсказок. В отличие от тултипа, требует вызова по клику.


## Импорт

```
import { Hint } from 'vienna-ui';
```

## Свойства / Props

Prop | Type | Default | Description
--- | --- | --- | ---
design | "dark" \| "light" \| undefined | "light" |
size | "s" \| "m" \| "l" \| undefined | false |
anchor | "top" \| "bottom" \| "left" \| "right" \| "auto" \| undefined | "auto" | Направление отображения
header | ReactNode | false |
content | ReactNode | false |
width | number | 250 | Ширина компонента в px

## Использование

```jsx
<Hint
    header='This is header'
    content='Ut ut dui non ipsum pharetra aliquam id in libero.'
/>
```

## Контент
##### Свойство `content`

```jsx
<Hint
    content='Ut ut dui non ipsum pharetra aliquam id in libero.'
/>
```

## Заголовок
##### Свойство `header`

```jsx
<Hint
    header='This is header'
    anchor='right'
    content='Ut ut dui non ipsum pharetra aliquam id in libero.'
/>
```

## Якорь
##### Свойство `anchor`

Направление отображения компонента

```jsx
<Hint
    anchor='right'
    content='Ut ut dui non ipsum pharetra aliquam id in libero.'
/>
```

#### Автопозиционирование

Если не указывать `anchor`, то компонент будет отображаться в зависимости от видимости на странице (`auto`).

```jsx
<Hint
    content='Ut ut dui non ipsum pharetra aliquam id in libero.'
/>
```

## Ширина компонента
##### Свойство `width`

```jsx
<Hint
    content='Ut ut dui non ipsum pharetra aliquam id in libero.'
    width={100}
/>
```
