# Grid

12 колоночная сетка для компоновки элементов на странице.

## Импорт

```
import { Grid } from 'vienna-ui';
```

## Свойства строки / Row Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| align | 'left' \| 'center' \| 'right' \| 'around' \| 'between' \| 'stretch' | false | Выравнивание по горизонтали |
| valign | 'top' \| 'middle' \| 'bottom' | false | Выравнивание по вертикали |
| columnGap | string \| undefined | '24px' | Расстояние между колонками, пожддерживается любое валидное css значение |
| rowGap | string \| undefined | '0' | Отступ между строками, пожддерживается любое валидное css значение |

## Свойства колонки / Col Props

| Prop   | Type                                                                  | Default | Description    |
| ------ | --------------------------------------------------------------------- | ------- | -------------- |
| size   | 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 11 \| 12 \| 'auto' | 'auto'  | Размер колонки |
| offset | 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 11 \| 12           | 0       | Отступ слева   |

## Использование

Компонент состоит из родительского контейнера `Grid.Row` и дочерних элементов колонок `Grid.Col`.

```jsx
<Grid.Row>
    <Grid.Col size={1}>
        <Demo>1</Demo>
    </Grid.Col>
    <Grid.Col size={11}>
        <Demo>1</Demo>
    </Grid.Col>
</Grid.Row>
<Grid.Row>
    <Grid.Col size={6}>
        <Demo>One of two columns</Demo>
    </Grid.Col>
    <Grid.Col size={6}>
        <Demo>One of two columns</Demo>
    </Grid.Col>
</Grid.Row>
```

## Расстояние между колонками

##### Свойство `columnGap`

Парметр `columnGap` контролирует расстояние между колонками внутри строки. Значение по умолчанию: `24px`

```jsx
<Grid.Row columnGap='12px'>
    <Grid.Col size={1}>
        <Demo>12</Demo>
    </Grid.Col>
    <Grid.Col size={1}>
        <Demo>12</Demo>
    </Grid.Col>
    <Grid.Col size={1}>
        <Demo>12</Demo>
    </Grid.Col>
    <Grid.Col size={1}>
        <Demo>12</Demo>
    </Grid.Col>
    <Grid.Col size={1}>
        <Demo>12</Demo>
    </Grid.Col>
    <Grid.Col size={1}>
        <Demo>12</Demo>
    </Grid.Col>
    <Grid.Col size={1}>
        <Demo>12</Demo>
    </Grid.Col>
    <Grid.Col size={1}>
        <Demo>12</Demo>
    </Grid.Col>
    <Grid.Col size={1}>
        <Demo>12</Demo>
    </Grid.Col>
    <Grid.Col size={1}>
        <Demo>12</Demo>
    </Grid.Col>
    <Grid.Col size={1}>
        <Demo>12</Demo>
    </Grid.Col>
    <Grid.Col size={1}>
        <Demo>12</Demo>
    </Grid.Col>
</Grid.Row>
```

## Расстояние между строками

##### Свойство `rowGap`

Параметр `rowGap` контролирует расстояние между строками. Значение по умолчанию `0`.

```jsx
<Grid.Row rowGap='5px'>
    <Grid.Col size={12}>
        <Demo>5px row gap</Demo>
    </Grid.Col>
</Grid.Row>
<Grid.Row rowGap='10px'>
    <Grid.Col size={12}>
        <Demo>10px row gap</Demo>
    </Grid.Col>
</Grid.Row>
```

## С отступами

##### Свойство `offset`

Используйте свойство `offset`, чтобы настроить отступ у колонки.

```jsx
<Grid.Row>
    <Grid.Col offset={11} size={1}>
        <Demo>1</Demo>
    </Grid.Col>
    <Grid.Col offset={10} size={11}>
        <Demo>2</Demo>
    </Grid.Col>
</Grid.Row>
```

## Адаптивная сетка

В свойствах `size` и `offset` вместо чила можно передать объект

```tsx
type SizeOption = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
```

```json
{
    "xs": SizeOption,
    "s": SizeOption,
    "m": SizeOption,
    "l": SizeOption,
    "xl": SizeOption
}
```

В этом случае, для каждого из размеров viewport будет использовано соответсвущее значение размера или отступа.

```
export const sizes = [
    { xs: 12, s: 10, m: 8, l: 6, xl: 4 },
    { xs: 12, s: 2, m: 4, l: 6, xl: 8 },
    { xs: 12, s: 2, m: 4, l: 6, xl: 8 },
    { xs: 12, s: 2, m: 4, l: 6, xl: 8 },
    { xs: 12, s: 2, m: 4, l: 2, xl: 3 },
];
```

```jsx
<Grid.Row>
    <Grid.Col size={sizes[0]}>
        <Demo>1</Demo>
    </Grid.Col>
    <Grid.Col size={sizes[1]}>
        <Demo>2</Demo>
    </Grid.Col>
</Grid.Row>
<Grid.Row>
    <Grid.Col size={sizes[2]} offset={sizes[3]}>
        <Demo>1</Demo>
    </Grid.Col>
    <Grid.Col size={sizes[4]}>
        <Demo>2</Demo>
    </Grid.Col>
</Grid.Row>
```

## Выравнивание по горизонтали

##### Свойство `align`

В ситуациях, когда ширина блока больше суммарной ширины всех колонок, выравнивание колонок по горизонтали можно контролировать с помощью параметра `align`. Поддерживаются следующие значения параметра `'left' | 'center' | 'right' | 'around' | 'between' | 'stretch'` Если передано значение `stretch`, колонки займут всю ширину контейнера в равной пропорции. В этом случае значение `size` для каждой колонки будет проигнорировано.

```jsx
<Grid.Row align='right'>
    <Grid.Col size={2}>
        <Demo>1</Demo>
    </Grid.Col>
    <Grid.Col size={2}>
        <Demo>1</Demo>
    </Grid.Col>
    <Grid.Col size={2}>
        <Demo>1</Demo>
    </Grid.Col>
</Grid.Row>
```

## Выравнивание по вертикали

##### Свойство `valign`

Когда одна из колонок выше, чем остальные, вертикальное выравние колонок можно контролировать с помощью параметра `valign`. Поддерживаются следующие значения параметра `'top' | 'middle' | 'bottom'` Если параметр `valign` не задан, то все колонки растянутся по вертикали и займут 100% высоты контейнера.

```jsx
<Grid.Row valign='bottom'>
    <Grid.Col size={6}>
        <TallDemo>Tall column</TallDemo>
    </Grid.Col>
    <Grid.Col size={6}>
        <Demo>bottom</Demo>
    </Grid.Col>
</Grid.Row>
```
