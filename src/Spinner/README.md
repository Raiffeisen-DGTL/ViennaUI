# Spinner

Визуализация состояния загрузки данных. Используется на страницах или в компонентах (например в компонентах `<Input />` или `<Select />`), когда нужно визуализировать загрузку данных с сервера.

## Импорт

```
import { Spinner } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [HTMLAttributes<HTMLDivElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

| Prop     | Type                                                    | Default | Description |
| -------- | ------------------------------------------------------- | ------- | ----------- |
| size     | ResponsiveProp<"xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl", B extends void ? Breakpoints : B> \| undefined |    |
| position | "relative" \| "absolute" \| undefined                   |    |
| color | 'primary' \| 'accent' \| 'london120' \| 'white' \| undefined                 |    |


# Spinner

Визуализация состояния загрузки данных.

Используется на страницах или в компонентах (например в компонентах `<Input />` или `<Select />`), когда нужно визуализировать загрузку данных данных с сервера.



```
    <Spinner />
```

## Внешний вид

```
    <Spinner />
```

## Размеры

Компонент имеет стандартные размеры `xs`, `s`, `m`, `l` и `xl`.

```
    <Spinner size='xs' />
    <Spinner size='s' />
    <Spinner size='m' />
    <Spinner size='l' />
    <Spinner size='xl' />
```

## Color

#### Primary

По умолчанию

```
    <Spinner size='xs' color='primary' />
    <Spinner size='s' color='primary' />
    <Spinner size='m' color='primary' />
    <Spinner size='l' color='primary' />
    <Spinner size='xl' color='primary' />
```

#### Accent

```
    <Spinner size='xs' color='accent' />
    <Spinner size='s' color='accent' />
    <Spinner size='m' color='accent' />
    <Spinner size='l' color='accent' />
    <Spinner size='xl' color='accent' />
```

#### London120

```
    <Spinner size='xs' color='london120' />
    <Spinner size='s' color='london120' />
    <Spinner size='m' color='london120' />
    <Spinner size='l' color='london120' />
    <Spinner size='xl' color='london120' />
```

#### White

```
    <Spinner size='xs' color='white' />
    <Spinner size='s' color='white' />
    <Spinner size='m' color='white' />
    <Spinner size='l' color='white' />
    <Spinner size='xl' color='white' />
```

## Расположение

Можно добавить свойство `position` в состояние `absolute` для растягивания на всю ширину или высоту родительского элемента.

```
    <Spinner position='absolute' />
```

#### Адаптив

Для компонента Spinner, адаптив применяется к свойству `size`, что позволяет адаптивно менять размер компонента в зависимости от текущей ширины экрана. Для этого задайте свойству `size` объект вида `{ <breakpoint name>: <string value> }`

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
    <Spinner size={{ base: 's', s: 'l', m: 'xl' }} />
```

## Установка data-testid

Атрибут `data-testid` можно передать для `menu`. Передается пропс ` testId?: {container};`.

```
    <Spinner testId={{container: 'test'}} size={{ base: 's', s: 'l', m: 'xl' }} />
```