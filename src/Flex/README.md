# Flex

Коспонент для создания флекс-боксов, поддерживает все css-свойства флекс-контейнера.

## Импорт

```
import { Flex } from 'vienna-ui';
```

## Свойства Flex

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| direction | ResponsiveProp<'row' \| 'row-reverse' \| 'column' \| 'column-reverse', Breakpoints> \| undefined |
| inline | ResponsiveProp<boolean, Breakpoints> \| undefined |
| center | ResponsiveProp<boolean, Breakpoints> \| undefined |
| justifyContent | ResponsiveProp<'center' \| 'normal' \| 'inherit' \| 'initial' \| 'unset' \| 'flex-start' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly' \| 'stretch', Breakpoints>  \| undefined |
| alignItems | ResponsiveProp<'center' \| 'normal' \| 'inherit' \| 'initial' \| 'unset' \| 'flex-start' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly' \| 'stretch', Breakpoints>  \| undefined |
| alignContent | ResponsiveProp<'center' \| 'normal' \| 'inherit' \| 'initial' \| 'unset' \| 'flex-start' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly' \| 'stretch', Breakpoints>  \| undefined |
| flow | ResponsiveProp<string, Breakpoints> \| undefined |
| gap | ResponsiveProp<Size, Breakpoints> \| undefined
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
| wrap | ResponsiveProp<'wrap' \| 'nowrap' \| 'wrap-reverse', Breakpoints> \| undefined | |
| media | { [x: string]: Props & WithMargin & WithPadding; base?: (Props & WithMargin & WithPadding) \| undefined; xs?: (Props & ... 1 more ... & WithPadding) \| undefined; ... 6 more ...; belowL?: (Props & ... 1 more ... & WithPadding) | undefined; } \| undefined | 

## Item
### React Props 👇

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| columnStart | string \| undefined | |
| columnEnd | string \| undefined | |
| rowStart | string \| undefined | |
| rowEnd | string \| undefined | |
| column | string \| undefined | |
| row | string \| undefined | |
| area | string \| undefined | |
| justifySelf | 'start' | 'end' | 'center' | 'stretch' \| undefined |
| alignSelf | | 'start' | 'end' | 'center' | 'stretch' \| undefined |
| placeSelf | string \| undefined | |
| maxHeight | string \| undefined | |
| maxWidth | string \| undefined | |
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

## Использование

```
<Flex justifyContent='stretch'>
        <ComponentHelpers.Flex.Demo>1</ComponentHelpers.Flex.Demo>
        <ComponentHelpers.Flex.Demo>2</ComponentHelpers.Flex.Demo>
        <ComponentHelpers.Flex.Demo>3</ComponentHelpers.Flex.Demo>
        <ComponentHelpers.Flex.Demo>4</ComponentHelpers.Flex.Demo>
    </Flex>
```

## Flex.Item

В дополнение экспортируется компонент `Flex.Item`, поддерживающий все свойства дочерненго элемента.

```
    <Flex>
        <Flex.Item grow='2'>
            <ComponentHelpers.Flex.Demo>1</ComponentHelpers.Flex.Demo>
        </Flex.Item>
        <Flex.Item grow='1'>
            <ComponentHelpers.Flex.Demo>2</ComponentHelpers.Flex.Demo>
        </Flex.Item>
        <Flex.Item basis='100px'>
            <ComponentHelpers.Flex.Demo>3</ComponentHelpers.Flex.Demo>
        </Flex.Item>
        <Flex.Item basis='200px'>
            <ComponentHelpers.Flex.Demo>4</ComponentHelpers.Flex.Demo>
        </Flex.Item>
    </Flex>
```

## gap

Это свойство задаёт внутренние отступы элементов внутри флекс-контейнера и поддерживает только фиксированные значения, соотвествующие размерной сетке Дизайн-Системы в 4px. Для значений используются имена размерных токенов: s1..s16, где s1 = 4px (1 \* 4px), s2 = 8px (2 \* 4px) итд.

```
<p>
    <Alert design='error'>
        На текущий момент (начало 2021) это свойство не поддерживается IE и находится только в preview в Safari.
    </Alert>
</p>
```

```
    <Flex justifyContent='stretch' gap='s2'>
        <ComponentHelpers.Flex.Demo>1</ComponentHelpers.Flex.Demo>
        <ComponentHelpers.Flex.Demo>2</ComponentHelpers.Flex.Demo>
        <ComponentHelpers.Flex.Demo>3</ComponentHelpers.Flex.Demo>
        <ComponentHelpers.Flex.Demo>4</ComponentHelpers.Flex.Demo>
    </Flex>
```

## Whitespace

Компоненты `Flex` и `Flex.Item` наследуют так же свойства `Whitespace` для управления внешними и внутренними отступами. С полным списком атрибутов можно ознакомиться на сратнице документации компонента [Whitespace](/components/whitespace)

```
    <Flex margin='s2'>
        <Flex.Item grow='2' padding='s3'>
            <ComponentHelpers.Flex.Demo>1</ComponentHelpers.Flex.Demo>
        </Flex.Item>
        <Flex.Item grow='1' padding='s3'>
            <ComponentHelpers.Flex.Demo>2</ComponentHelpers.Flex.Demo>
        </Flex.Item>
        <Flex.Item basis='100px' padding='s3'>
            <ComponentHelpers.Flex.Demo>3</ComponentHelpers.Flex.Demo>
        </Flex.Item>
        <Flex.Item basis='200px' padding='s3'>
            <ComponentHelpers.Flex.Demo>4</ComponentHelpers.Flex.Demo>
        </Flex.Item>
    </Flex>
```

## Адаптивность

Все свойства компонента `Flex` и `Flex.Item` могут изменяться в зависимости от ширины viewport'а. Для этого вы можете передать объект вида `{ <breakpoint name>: <string | boolean value> }`.

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
    <Flex margin={{ base: 's1', s: 's2', m: 's3' }}>
        <Flex.Item grow={{ base: '1', s: '1', m: '3' }} padding={{ s: 's4', m: 's3' }}>
            <ComponentHelpers.Flex.Demo>1</ComponentHelpers.Flex.Demo>
        </Flex.Item>
        <Flex.Item grow={{ base: '3', s: '2', m: '1' }} padding={{ s: 's1', m: 's3', l: 's4' }}>
            <ComponentHelpers.Flex.Demo>2</ComponentHelpers.Flex.Demo>
        </Flex.Item>
        <Flex.Item basis={{ base: '100px', s: '100px', m: '300px' }} padding='s3'>
            <ComponentHelpers.Flex.Demo>3</ComponentHelpers.Flex.Demo>
        </Flex.Item>
        <Flex.Item basis={{ base: '300px', s: '50px', m: '100px' }} padding='s3'>
            <ComponentHelpers.Flex.Demo>4</ComponentHelpers.Flex.Demo>
        </Flex.Item>
    </Flex>
```
