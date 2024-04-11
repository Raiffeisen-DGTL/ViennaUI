# CssGrid

Компонент для создания CSS Grid, поддерживает все css-свойства css гридов.

## Импорт

```
import { CssGrid } from 'vienna-ui';
```

## React Props 👇

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| inline | boolean \| undefined   |
| templateRows | string \| undefined |
| templateColumns | string \| undefined   |
| templateAreas | string[] \| undefined |
| gridTemplate | string \| undefined   |
| justifyItems | 'start' \| 'end' \| 'center' \| 'stretch' \| undefined |
| alignItems | 'start' \| 'end' \| 'center' \| 'stretch' \| undefined |
| placeItems | string \| undefined |

| justifyContent | 'start' \| 'end' \| 'center' \| 'stretch' \| 'space-around' \| 'space-between' \| 'space-evenly' \| undefined |
| alignContent | 'start' \| 'end' \| 'center' \| 'stretch' \| 'space-around' \| 'space-between' \| 'space-evenly' \| undefined |
| placeContent | string \| undefined |
| autoColumns | string \| undefined |
| autoRows | string \| undefined |
| autoFlow | 'row' \| 'column' \| 'row dense' \| 'column dense' \| undefined |
| grid | string \| undefined |
| maxHeight | string \| undefined |
| maxWidth | string \| undefined |
| columnGap | Size \| undefined |
| rowGap | Size \| undefined |
| gap | Size \| undefined |
| rowGap | Size \| undefined |
| margin | Whitespace \| undefined | |
| marginTop | Whitespace \| undefined | |
| marginBottom | Whitespace \| undefined | |
| marginLeft | Whitespace \| undefined | |
| marginRight | Whitespace \| undefined | |
| marginHorizontal | Whitespace \| undefined | |
| marginVertical | Whitespace \| undefined | |
| m | Whitespace \| undefined | |
| mt | Whitespace \| undefined | |
| mb | Whitespace \| undefined | |
| ml | Whitespace \| undefined | |
| mr | Whitespace \| undefined | |
| mx | Whitespace \| undefined | |
| my | Whitespace \| undefined | |
| padding | Whitespace \| undefined | |
| paddingTop | Whitespace \| undefined | |
| paddingBottom | Whitespace \| undefined | |
| paddingLeft | Whitespace \| undefined | |
| paddingRight | Whitespace \| undefined | |
| paddingHorizontal | Whitespace \| undefined | |
| paddingVertical | Whitespace \| undefined | |
| p | Whitespace \| undefined | |
| pt | Whitespace \| undefined | |
| pb | Whitespace \| undefined | |
| pl | Whitespace \| undefined | |
| pr | Whitespace \| undefined | |
| px | Whitespace \| undefined | |
| py | Whitespace \| undefined | |


## HTMLAttributes

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| id | string \| undefined | |
| title | string \| undefined | |
| className | string \| undefined | |
| role | string \| undefined | |
| spellCheck | boolean \| undefined | |
| tabIndex | number \| undefined | |
| height | string \| undefined | |
| width | string \| undefined | |


## Иcпользование 

```
    <CssGrid height='100%' templateColumns='100px auto 100px' templateRows='100px auto 50px'>
        <ComponentHelpers.CssGrid.Demo color='lightblue'>1</ComponentHelpers.CssGrid.Demo>
        <ComponentHelpers.CssGrid.Demo color='peachpuff'>2</ComponentHelpers.CssGrid.Demo>
        <ComponentHelpers.CssGrid.Demo color='orchid'>3</ComponentHelpers.CssGrid.Demo>
        <ComponentHelpers.CssGrid.Demo color='darkorange'>4</ComponentHelpers.CssGrid.Demo>
        <ComponentHelpers.CssGrid.Demo color='darkseagreen'>5</ComponentHelpers.CssGrid.Demo>
        <ComponentHelpers.CssGrid.Demo color='gold'>6</ComponentHelpers.CssGrid.Demo>
        <ComponentHelpers.CssGrid.Demo color='deepskyblue'>7</ComponentHelpers.CssGrid.Demo>
        <ComponentHelpers.CssGrid.Demo color='lightgreen'>8</ComponentHelpers.CssGrid.Demo>
        <ComponentHelpers.CssGrid.Demo color='lightsalmon'>9</ComponentHelpers.CssGrid.Demo>
    </CssGrid>
```

## CssGrid.Item

В дополнение экспортируется компонент `CssGrid.Item`, поддерживающий все свойства дочернених элементов грида.

```
    <CssGrid
        height='450px'
        templateColumns='100px auto 100px'
        templateRows='50px 40% 40% 50px'
        templateAreas={[
            'header header header',
            'sidebar content toolbar',
            'sidebar content2 toolbar',
            'footer footer2 footer3',
        ]}>
        <CssGrid.Item area='header'>
            <ComponentHelpers.CssGrid.Demo color='lightblue'>header</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='sidebar'>
            <ComponentHelpers.CssGrid.Demo color='peachpuff'>sidebar</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='content'>
            <ComponentHelpers.CssGrid.Demo color='orchid'>content</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='content2'>
            <ComponentHelpers.CssGrid.Demo color='darkorange'>content 2</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='toolbar'>
            <ComponentHelpers.CssGrid.Demo color='darkseagreen'>toolbar</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='footer'>
            <ComponentHelpers.CssGrid.Demo color='gold'>footer</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='footer2'>
            <ComponentHelpers.CssGrid.Demo color='deepskyblue'>footer 2</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='footer3'>
            <ComponentHelpers.CssGrid.Demo color='lightgreen'>footer 3</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
    </CssGrid>
```

## gap, columnGap и rowGap

Данные свойства задают внутренние отступы элементов грида и поддерживают только фиксированные значения, соотвествующие размерной сетке Дизайн-Системы в 4px. Для значений используются имена размерных токенов: s1..s16, где s1 = 4px (1 \* 4px), s2 = 8px (2 \* 4px) итд.

```
<p>
    <Alert design='error'>
        Ни одно из этих свойств на текущий момент (начало 2021) не поддерживаются (и видимо уже не будут) IE.
    </Alert>
</p>
```

```
    <CssGrid height='100%' templateColumns='100px auto 100px' templateRows='100px auto 50px' rowGap='s1' columnGap='s2'>
        <ComponentHelpers.CssGrid.Demo color='lightblue'>1</ComponentHelpers.CssGrid.Demo>
        <ComponentHelpers.CssGrid.Demo color='peachpuff'>2</ComponentHelpers.CssGrid.Demo>
        <ComponentHelpers.CssGrid.Demo color='orchid'>3</ComponentHelpers.CssGrid.Demo>
        <ComponentHelpers.CssGrid.Demo color='darkorange'>4</ComponentHelpers.CssGrid.Demo>
        <ComponentHelpers.CssGrid.Demo color='darkseagreen'>5</ComponentHelpers.CssGrid.Demo>
        <ComponentHelpers.CssGrid.Demo color='gold'>6</ComponentHelpers.CssGrid.Demo>
        <ComponentHelpers.CssGrid.Demo color='deepskyblue'>7</ComponentHelpers.CssGrid.Demo>
        <ComponentHelpers.CssGrid.Demo color='lightgreen'>8</ComponentHelpers.CssGrid.Demo>
        <ComponentHelpers.CssGrid.Demo color='lightsalmon'>9</ComponentHelpers.CssGrid.Demo>
    </CssGrid>
```

## Whitespace

Компоненты `CssGrid` и `CSSGrid.Item` наследуют так же свойства `Whitespace` для управления внешними и внутренними отступами. С полным списком атрибутов можно ознакомиться на сратнице документации компонента [Whitespace](/components/whitespace)

```
    <CssGrid
        height='450px'
        templateColumns='100px auto 100px'
        templateRows='50px 40% 40% 50px'
        templateAreas={[
            'header header header',
            'sidebar content toolbar',
            'sidebar content2 toolbar',
            'footer footer2 footer3',
        ]}
        margin='s2'>
        <CssGrid.Item area='header' padding='s2'>
            <ComponentHelpers.CssGrid.Demo color='lightblue'>header</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='sidebar' padding='s2'>
            <ComponentHelpers.CssGrid.Demo color='peachpuff'>sidebar</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='content' padding='1rem'>
            <ComponentHelpers.CssGrid.Demo color='orchid'>content</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='content2' padding='1rem'>
            <ComponentHelpers.CssGrid.Demo color='darkorange'>content 2</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='toolbar' padding='s2'>
            <ComponentHelpers.CssGrid.Demo color='darkseagreen'>toolbar</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='footer' padding='s1'>
            <ComponentHelpers.CssGrid.Demo color='gold'>footer</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='footer2' padding='s1'>
            <ComponentHelpers.CssGrid.Demo color='deepskyblue'>footer 2</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='footer3' padding='s1'>
            <ComponentHelpers.CssGrid.Demo color='lightgreen'>footer 3</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
    </CssGrid>
```

## Адаптивность

Все наследуемые свойства от компонента `Whitespace` могут изменяться в зависимости от ширины viewport'а. Этими свойствами являются margin и padding.
Для этого вы можете передать объект вида `{ <breakpoint name>: <string value> }`.

Основные значения breakpoints:

```
defaultBreakpoints = {
    s: 768,
    m: 1024,
    l: 1920,
    xl: 2560,
};

systemBreakpoints: Breakpoints = {
    /* xs */
    xs: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* s */
    s: `(min-width: ${defaultBreakpoints.s}px)`,
    belowS: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* m */
    m: `(min-width: ${defaultBreakpoints.m}px)`,
    belowM: `(max-width: ${defaultBreakpoints.m - 1}px)`,

    /* l */
    l: `(min-width: ${defaultBreakpoints.l}px)`,
    belowL: `(max-width: ${defaultBreakpoints.l - 1}px)`,

    /* xl */
    xl: `(min-width: ${defaultBreakpoints.xl}px)`,
};
```

```
    <CssGrid
        height='450px'
        templateColumns='100px auto 100px'
        templateRows='50px 40% 40% 50px'
        templateAreas={[
            'header header header',
            'sidebar content toolbar',
            'sidebar content2 toolbar',
            'footer footer2 footer3',
        ]}
        margin={{ base: 's2', s: 's1', m: 's3' }}>
        <CssGrid.Item area='header' padding={{ base: 's2', s: 's3', m: 's1' }}>
            <ComponentHelpers.CssGrid.Demo color='lightblue'>header</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='sidebar' padding={{ base: 's2', s: 's3', m: 's1' }}>
            <ComponentHelpers.CssGrid.Demo color='peachpuff'>sidebar</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='content' padding={{ base: '1rem', s: 's3' }}>
            <ComponentHelpers.CssGrid.Demo color='orchid'>content</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='content2' padding={{ base: '1rem', s: 's3', m: 's1' }}>
            <ComponentHelpers.CssGrid.Demo color='darkorange'>content 2</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='toolbar' padding={{ base: 's2', s: 's3', m: 's1' }}>
            <ComponentHelpers.CssGrid.Demo color='darkseagreen'>toolbar</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='footer' padding={{ base: 's2', s: 's3', m: 's1' }}>
            <ComponentHelpers.CssGrid.Demo color='gold'>footer</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='footer2' padding={{ base: 's2', s: 's3', m: 's1' }}>
            <ComponentHelpers.CssGrid.Demo color='deepskyblue'>footer 2</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
        <CssGrid.Item area='footer3' padding={{ base: 's2', s: 's3', m: 's1' }}>
            <ComponentHelpers.CssGrid.Demo color='lightgreen'>footer 3</ComponentHelpers.CssGrid.Demo>
        </CssGrid.Item>
    </CssGrid>
```