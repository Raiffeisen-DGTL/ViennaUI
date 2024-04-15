# Whitespace

Компонент-контейнер, позволяющий управлять внешними и внутренними отступами.


## Импорт

```
import { Whitespace } from 'vienna-ui';
```

# Whitespace

Компонент-контейнер, позволяющий управлять внешними и внутренними отступами.


```
    <Whitespace margin='s3' padding='s2'>
        Whitespace box
    </Whitespace>
```
## Properties

Компонент поддреживает следующие аттрибуты:

##### margins

```
margin
marginHorizontal
marginVertical
marginTop
marginBottom
marginLeft
marginRight
```

##### paddings

```
padding
paddingHorizontal
paddingVertical
paddingTop
paddingBottom
paddingLeft
paddingRight
```

При этом вместо полных имен можно использовать сокращенные alias-ы:

```
m – margin
mx – marginHorizontal
my – marginVertical
mt – marginTop
mb – marginBottom
ml – marginLeft
mr – marginRight
```

```
p – padding
px – paddingHorizontal
py – paddingVertical
pt – paddingTop
pb – paddingBottom
pl – paddingLeft
pr – paddingRight
```

## Values

Для значений используются имена размерных токенов: s1..s16, где s1 = 4px (1 \* 4px), s2 = 8px (2 \* 4px) итд.

```
    <Whitespace mx='s3' my='s4' p='s3'>
        Whitespace box
    </Whitespace>
```

## Custom values

Также в качестве значений можно передать строку, являющуюся валидным css-значением. Такая строка бнз изменений будет передана в качестве значения соотвующего css-свйоства.

```
    <Whitespace padding='1em 2em' ml='-10px'>
        Whitespace box
    </Whitespace>
```

## Адаптивность

Все свойства компонента `Whitespace` могут изменяться в зависимости от ширины viewport'а. Для этого вы можете передать объект вида `{ <breakpoint name>: <string value> }`.

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
    <Whitespace margin={{ base: 's3', s: 's3', m: 's4', l: 's5' }} padding={{ base: 's2', s: 's2', m: 's3', l: 's4' }}>
        Whitespace box
    </Whitespace>
```