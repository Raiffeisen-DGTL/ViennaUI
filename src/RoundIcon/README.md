# RoundIcon

Нефункциональный компонент `RoundIcon` используется для акцентирования внмания на блоках контента, а так же в аватаре как альтернативное представление

## Импорт

```
import { RoundIcon } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [HTMLAttributes<HTMLDivElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| size | ResponsiveProp<'xs' \| 's' \| 'm' \| 'l' \| 'xl', B extends void ? Breakpoints : B> \| undefined |  | Доступные размеры |
| color | "seattle10" \| "seattle60" \| "oslo10" \| "oslo60" \| "miami10" \| "miami100" \| "nice10" \| "nice100" \| "dubai10" \| "dubai100" \| "paris10" \| "paris100" \| "sochi10" \| "sochi100" \| "tokyo10" \| ... 17 more ... \| undefined | | Цвет фона |
| clickable | boolean \| undefined |  | Возможность нажатия на компонент |

## Использование

Компонент `RoundIcon` отображает текст или `<Icon />`, переданный в `children`. По умолчанию цвет `lightgrey` и размер `m`.

```
<RoundIcon>M</RoundIcon>
<RoundIcon><Icon /></RoundIcon>
```

## Внешний вид

Компонент `RoundIcon` отображает текст или `<Icon />`, переданный в `children`. По умолчанию цвет `lightgrey` и размер `m`.

```
    <RoundIcon>M</RoundIcon>
```

## Размеры

Компонент имеет стандартные размеры `xs`, `s`, `l`, `m` и `xl`.

```
    <RoundIcon size='xl'>XL</RoundIcon>
    <RoundIcon size='l'>L</RoundIcon>
    <RoundIcon size='m'>M</RoundIcon>
    <RoundIcon size='s'>S</RoundIcon>
    <RoundIcon size='xs'>XS</RoundIcon>
```

## Цвета

Компонент имеет стандартные цвета (по-умолчанию `seattle10`)

```
    <RoundIcon color='seattle10'>S1</RoundIcon>
    <RoundIcon color='seattle60'>S1</RoundIcon>
    <RoundIcon color='oslo10'>O1</RoundIcon>
    <RoundIcon color='oslo60'>O1</RoundIcon>
    <RoundIcon color='miami10'>M1</RoundIcon>
    <RoundIcon color='miami100'>M2</RoundIcon>
    <RoundIcon color='nice10'>N1</RoundIcon>
    <RoundIcon color='nice100'>N1</RoundIcon>
    <RoundIcon color='dubai10'>D1</RoundIcon>
    <RoundIcon color='dubai100'>D1</RoundIcon>
    <RoundIcon color='paris10'>P1</RoundIcon>
    <RoundIcon color='paris100'>P1</RoundIcon>
    <RoundIcon color='sochi10'>S1</RoundIcon>
    <RoundIcon color='sochi100'>S1</RoundIcon>
    <RoundIcon color='tokyo10'>T1</RoundIcon>
    <RoundIcon color='tokyo100'>T1</RoundIcon>
```

Дополнительно представлена **Data Visual** палитра

```
    <RoundIcon color='dublin10'>D1</RoundIcon>
    <RoundIcon color='dublin100'>D1</RoundIcon>
    <RoundIcon color='bern10'>B1</RoundIcon>
    <RoundIcon color='bern100'>B1</RoundIcon>
    <RoundIcon color='manila10'>M1</RoundIcon>
    <RoundIcon color='manila100'>M1</RoundIcon>
    <RoundIcon color='tallin10'>T1</RoundIcon>
    <RoundIcon color='tallin100'>T1</RoundIcon>
    <RoundIcon color='seoul10'>S1</RoundIcon>
    <RoundIcon color='seoul100'>S1</RoundIcon>
    <RoundIcon color='havana10'>H1</RoundIcon>
    <RoundIcon color='havana100'>H1</RoundIcon>
    <RoundIcon color='madrid10'>M1</RoundIcon>
    <RoundIcon color='madrid100'>M1</RoundIcon>
    <RoundIcon color='porto10'>P1</RoundIcon>
    <RoundIcon color='porto100'>P1</RoundIcon>
```

## Цвета с иконками

```
    <RoundIcon color='seattle10'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='seattle60'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='oslo10'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='oslo60'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='miami10'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='miami100'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='nice10'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='nice100'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='dubai10'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='dubai100'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='paris10'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='paris100'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='sochi10'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='sochi100'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='tokyo10'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='tokyo100'>
        <ManPerson />
    </RoundIcon>
```

Дополнительно представлена **Data Visual** палитра

```
    <RoundIcon color='dublin10'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='dublin100'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='bern10'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='bern100'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='manila10'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='manila100'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='tallin10'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='tallin100'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='seoul10'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='seoul100'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='havana10'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='havana100'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='madrid10'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='madrid100'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='porto10'>
        <ManPerson />
    </RoundIcon>
    <RoundIcon color='porto100'>
        <ManPerson />
    </RoundIcon>
```

#### Адаптив

Для компонента RoundIcon, адаптив применяется к свойству `size`, что позволяет адаптивно менять размер компонента в зависимости от текущей ширины экрана. Для этого задайте свойству `size` объект вида `{ <breakpoint name>: <string value> }`

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
    <RoundIcon size={{ base: 's', s: 'l', m: 'xl' }}>
        <ManPerson />
    </RoundIcon>
```
