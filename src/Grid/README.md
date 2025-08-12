# Grid

12 колоночная сетка для компоновки элементов на странице.

## Импорт

```
import { Grid } from 'vienna-ui';
```

## Свойства строки / Row Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| align | 'left' \| 'center' \| 'right' \| 'around' \| 'between' \| 'stretch' |  | Выравнивание по горизонтали |
| valign | 'top' \| 'middle' \| 'bottom' |  | Выравнивание по вертикали |
| columnGap | string \| undefined |  | Расстояние между колонками, пожддерживается любое валидное css значение |
| rowGap | string \| undefined |  | Отступ между строками, пожддерживается любое валидное css значение |

## Свойства колонки / Col Props

| Prop   | Type                                                                  | Default | Description    |
| ------ | --------------------------------------------------------------------- | ------- | -------------- |
| size   | ColumnSize \| undefined | | Размер колонки |
| offset | ColumnOffset \| undefined |
| order | ColumnOrder \| undefined |



# Grid

Компонент `Grid` предоставляет инструменты для создания гибких и адаптивных макетов, используя систему сеток на основе 12 колонок. Это позволяет легко управлять расположением и размерами элементов на различных устройствах и экранах.



```
    <Grid.Row>
        <Grid.Col size={6}>
            <ComponentHelpers.Grid.Demo>One of two columns</ComponentHelpers.Grid.Demo>
        </Grid.Col>
        <Grid.Col size={6}>
            <ComponentHelpers.Grid.Demo>One of two columns</ComponentHelpers.Grid.Demo>
        </Grid.Col>
    </Grid.Row>
```

## Использование

```
    <React.Fragment>
        <Grid.Row>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
        <Grid.Row>
            <Grid.Col size={6}>
                <ComponentHelpers.Grid.Demo>One of two columns</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={6}>
                <ComponentHelpers.Grid.Demo>One of two columns</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
        <Grid.Row>
            <Grid.Col size={4}>
                <ComponentHelpers.Grid.Demo>One of three columns</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={4}>
                <ComponentHelpers.Grid.Demo>One of three columns</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={4}>
                <ComponentHelpers.Grid.Demo>One of three columns</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
        <Grid.Row>
            <Grid.Col size={3}>
                <ComponentHelpers.Grid.Demo>One of four columns</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={3}>
                <ComponentHelpers.Grid.Demo>One of four columns</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={3}>
                <ComponentHelpers.Grid.Demo>One of four columns</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={3}>
                <ComponentHelpers.Grid.Demo>One of four columns</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
    </React.Fragment>
```

#### Расстояние между колонками

Параметр `columnGap` контролирует расстояние между колонками внутри строки. Значение по умолчанию: `24px`

```
    <React.Fragment>
        <Grid.Row>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
        <Grid.Row columnGap='12px'>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>12</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>12</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>12</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>12</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>12</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>12</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>12</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>12</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>12</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>12</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>12</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>12</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
        <Grid.Row columnGap='5px'>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>5</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>5</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>5</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>5</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>5</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>5</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>5</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>5</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>5</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>5</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>5</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>5</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
        <Grid.Row columnGap='0'>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>0</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>0</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>0</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>0</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>0</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>0</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>0</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>0</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>0</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>0</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>0</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>0</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
    </React.Fragment>
```

#### Расстояние между строками

Параметр `rowGap` контролирует расстояние между строками. Значение по умолчанию `0`.

```
    <React.Fragment>
        <Grid.Row rowGap='5px'>
            <Grid.Col size={12}>
                <ComponentHelpers.Grid.Demo>5px row gap</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
        <Grid.Row rowGap='10px'>
            <Grid.Col size={12}>
                <ComponentHelpers.Grid.Demo>10px row gap</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
        <Grid.Row>
            <Grid.Col size={12}>
                <ComponentHelpers.Grid.Demo>No row gap</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
        <Grid.Row>
            <Grid.Col size={12}>
                <ComponentHelpers.Grid.Demo>No row gap</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
    </React.Fragment>
```

#### С отступами

Используйте свойство `offset`, чтобы настроить отступ у колонки.

```
    <React.Fragment>
        <Grid.Row>
            <Grid.Col offset={11} size={1}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col offset={10} size={2}>
                <ComponentHelpers.Grid.Demo>2</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col offset={9} size={3}>
                <ComponentHelpers.Grid.Demo>3</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col offset={8} size={4}>
                <ComponentHelpers.Grid.Demo>4</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col offset={7} size={5}>
                <ComponentHelpers.Grid.Demo>5</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col offset={6} size={6}>
                <ComponentHelpers.Grid.Demo>6</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col offset={5} size={7}>
                <ComponentHelpers.Grid.Demo>7</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col offset={4} size={8}>
                <ComponentHelpers.Grid.Demo>8</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col offset={3} size={9}>
                <ComponentHelpers.Grid.Demo>9</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col offset={2} size={10}>
                <ComponentHelpers.Grid.Demo>10</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col offset={1} size={11}>
                <ComponentHelpers.Grid.Demo>11</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
        <Grid.Row gap='0'>
            <Grid.Col offset={3} size={3}>
                <ComponentHelpers.Grid.Demo>offset: 3</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col offset={2} size={3}>
                <ComponentHelpers.Grid.Demo>offset: 2</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
        <Grid.Row gap='0'>
            <Grid.Col size={3}>
                <ComponentHelpers.Grid.Demo>size 3</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col offset={3} size={2}>
                <ComponentHelpers.Grid.Demo>size 2</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col offset={3} size={1}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
    </React.Fragment>
```

#### Адаптивная сетка

В свойствах `size` и `offset` вместо чила можно передать объект

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

export const sizes = [
    { xs: 12, s: 10, m: 8, l: 6, xl: 4 },
    { xs: 12, s: 2, m: 4, l: 6, xl: 8 },
    { xs: 12, s: 2, m: 4, l: 6, xl: 8 },
    { xs: 12, s: 2, m: 4, l: 6, xl: 8 },
    { xs: 12, s: 2, m: 4, l: 2, xl: 3 },
];

```
    <React.Fragment>
        <Grid.Row>
            <Grid.Col size='1'>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size='1'>
                <ComponentHelpers.Grid.Demo>2</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size='1'>
                <ComponentHelpers.Grid.Demo>3</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size='1'>
                <ComponentHelpers.Grid.Demo>4</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size='1'>
                <ComponentHelpers.Grid.Demo>5</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size='1'>
                <ComponentHelpers.Grid.Demo>6</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size='1'>
                <ComponentHelpers.Grid.Demo>7</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size='1'>
                <ComponentHelpers.Grid.Demo>8</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size='1'>
                <ComponentHelpers.Grid.Demo>9</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size='1'>
                <ComponentHelpers.Grid.Demo>10</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size='1'>
                <ComponentHelpers.Grid.Demo>11</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size='1'>
                <ComponentHelpers.Grid.Demo>12</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
        <Grid.Row>
            <Grid.Col size={sizes[0]}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={sizes[1]}>
                <ComponentHelpers.Grid.Demo>2</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
        <Grid.Row>
            <Grid.Col size={sizes[2]} offset={sizes[3]}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={sizes[4]}>
                <ComponentHelpers.Grid.Demo>2</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
    </React.Fragment>
```

#### Выравнивание по горизонтали

В ситуациях, когда ширина блока больше суммарной ширины всех колонок, выравнивание колонок по горизонтали можно контролировать с помощью параметра `align`. Поддерживаются следующие значения параметра `'left' | 'center' | 'right' | 'around' | 'between' | 'stretch'`

##### Left

```
    <React.Fragment>
        <Grid.Row align='left'>
            <Grid.Col size={2}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={2}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={2}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
    </React.Fragment>
```

##### Center

```
    <React.Fragment>
        <Grid.Row align='center'>
            <Grid.Col size={2}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={2}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={2}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
    </React.Fragment>
```

##### Right

```
    <React.Fragment>
        <Grid.Row align='right'>
            <Grid.Col size={2}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={2}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={2}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
    </React.Fragment>
```

##### Around

```
    <React.Fragment>
        <Grid.Row align='around'>
            <Grid.Col size={2}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={2}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={2}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
    </React.Fragment>
```

##### Between

```
    <React.Fragment>
        <Grid.Row align='between'>
            <Grid.Col size={2}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={2}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={2}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
    </React.Fragment>
```

##### Stretch

Если передано значение `stretch`, колонки займут всю ширину контейнера в равной пропорции. В этом случае значение `size` для каждой колонки будет проигнорировано.

```
    <React.Fragment>
        <Grid.Row align='stretch'>
            <Grid.Col>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
    </React.Fragment>
```

#### Выравнивание по вертикали

Когда одна из колонок выше, чем остальные, вертикальное выравние колонок можно контролировать с помощью параметра `valign`. Поддерживаются следующие значения параметра `'top' | 'middle' | 'bottom'`

##### Top

```
    <React.Fragment>
        <Grid.Row valign='top'>
            <Grid.Col size={6}>
                <ComponentHelpers.Grid.TallDemo>Tall column</ComponentHelpers.Grid.TallDemo>
            </Grid.Col>
            <Grid.Col size={6}>
                <ComponentHelpers.Grid.Demo>top</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
    </React.Fragment>
```

##### Middle

```
    <React.Fragment>
        <Grid.Row valign='middle'>
            <Grid.Col size={6}>
                <ComponentHelpers.Grid.TallDemo>Tall column</ComponentHelpers.Grid.TallDemo>
            </Grid.Col>
            <Grid.Col size={6}>
                <ComponentHelpers.Grid.Demo>middle</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
    </React.Fragment>
```

##### Bottom

```
    <React.Fragment>
        <Grid.Row valign='bottom'>
            <Grid.Col size={6}>
                <ComponentHelpers.Grid.TallDemo>Tall column</ComponentHelpers.Grid.TallDemo>
            </Grid.Col>
            <Grid.Col size={6}>
                <ComponentHelpers.Grid.Demo>bottom</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
    </React.Fragment>
```

##### Stretch

Если параметр `valign` не задан, то все колонки растянутся по вертикали и займут 100% высоты контейнера.

```
    <React.Fragment>
        <Grid.Row>
            <Grid.Col size={6}>
                <ComponentHelpers.Grid.TallDemo>Tall column</ComponentHelpers.Grid.TallDemo>
            </Grid.Col>
            <Grid.Col size={6}>
                <ComponentHelpers.Grid.Demo>bottom</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
    </React.Fragment>
```

##### Order

Параметр `order` отвечает за порядок колонок. Значение может быть задано как число от `1` до `12` или как объект с ключами:

```json
{
    "xs": OrderOption,
    "s": OrderOption,
    "m": OrderOption,
    "l": OrderOption,
    "xl": OrderOption
}
```

```
    <React.Fragment>
        <Grid.Row>
            <Grid.Col order={1} size={6}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col order={2} size={6}>
                <ComponentHelpers.Grid.Demo>2</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
        <Grid.Row>
            <Grid.Col order={2} size={6}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col order={1} size={6}>
                <ComponentHelpers.Grid.Demo>2</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
        <Grid.Row>
            <Grid.Col order={{ xs: 1, l: 2 }} size={6}>
                <ComponentHelpers.Grid.Demo>1</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col order={{ xs: 2, l: 1 }} size={6}>
                <ComponentHelpers.Grid.Demo>2</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
    </React.Fragment>
```

#### Размеры

Свойство `size` отвечает за размер колонки. Может принимать одно из значений: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto'.

```
    <React.Fragment>
        <Grid.Row>
            <Grid.Col size={1}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={2}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={3}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={4}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={5}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={6}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={7}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={8}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={9}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={10}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={11}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
            <Grid.Col size={12}>
                <ComponentHelpers.Grid.Demo>24</ComponentHelpers.Grid.Demo>
            </Grid.Col>
        </Grid.Row>
    </React.Fragment>
```