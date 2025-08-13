# IconContainer
## Импорт

```
import { IconContainer } from 'vienna-ui';
``` 

## IconContainerProps

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| type | `'circle' \| 'square' \| 'squircle'` | — |  |
| size | `'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'xxl'` | — |  |
| color | `'white' \| 'seattle10' \| 'seattle60' \| 'oslo10' \| 'oslo60' \| 'miami10' \| 'miami100' \| 'nice10' \| 'nice100' \| 'dubai10' \| 'dubai100' \| 'paris10' \| 'paris100' \| 'sochi10' \| 'sochi100' \| 'tokyo10' \| 'tokyo100' \| 'dublin10' \| 'dublin100' \| 'bern10' \| 'bern100' \| 'manila10' \| 'manila100' \| 'tallin10' \| 'tallin100' \| 'seoul10' \| 'seoul100' \| 'havana10' \| 'havana100' \| 'madrid10' \| 'madrid100' \| 'porto10' \| 'porto100'` | — |  |
| disabled | `boolean` | — |  |
| loading | `boolean` | — |  |
| clickable | `boolean` | — |  |


# IconContainer

Компонент для отображения текста, иконок или изображений в контейнерах с различными стилями и размерами. Компонент
`IconContainer` предназначен для создания визуально привлекательных и легко настраиваемых контейнеров, которые могут содержать текст, иконки или изображения. Он поддерживает различные размеры, цвета и дополнительные свойства для управления состоянием и поведением.



```
    <Groups>
        <IconContainer>M</IconContainer>
        <IconContainer>
            <img src={ComponentHelpers.Avatar.ImageURL} alt='Аватар'/>
        </IconContainer>
        <IconContainer>
           <ManPersonIcon />
        </IconContainer>
    </Groups>
```

## Внешний вид

Компонент `IconContainer` отображает текст, иконку или изображение, переданный в `children`. По умолчанию тип `circle`, цвет `seattle10` и размер `m`.

```
    <IconContainer>M</IconContainer>
```

## Тип

Компонент может быть в трёх типах: круглый, скруглённый и квадратный со скругленными углами. За изменение типа отвечает свойство `type`, которое принимает значения `circle`, `squircle` и `square`

```
    <Groups>
        <IconContainer type='circle'>
            <ManPersonIcon />
        </IconContainer>
        <IconContainer type='squircle'>S</IconContainer>
        <IconContainer type='square'>M</IconContainer>
    </Groups>
```

## Размеры

Компонент имеет стандартные размеры `xs`, `s`, `l`, `m`, `xl` и `xxl`.

```
    <IconContainer size='xxl'>XXL</IconContainer>
    <IconContainer size='xl'>XL</IconContainer>
    <IconContainer size='l'>L</IconContainer>
    <IconContainer size='m'>M</IconContainer>
    <IconContainer size='s'>S</IconContainer>
    <IconContainer size='xs'>XS</IconContainer>
```

## Цвета

Компонент имеет стандартные цвета (по умолчанию `seattle10`)

```
    <IconContainer type='square' color='white'>Wh</IconContainer>
    <IconContainer type='square' color='primary'>Pr</IconContainer>
    <IconContainer type='square' color='seattle05'>S05</IconContainer>
    <IconContainer type='square' color='seattle10'>S10</IconContainer>
    <IconContainer type='square' color='seattle60'>S60</IconContainer>
    <IconContainer type='square' color='seattle120'>S120</IconContainer>
    <IconContainer type='square' color='oslo10'>O1</IconContainer>
    <IconContainer type='square' color='oslo60'>O1</IconContainer>
    <IconContainer type='square' color='miami10'>M1</IconContainer>
    <IconContainer type='square' color='miami100'>M2</IconContainer>
    <IconContainer type='square' color='nice10'>N1</IconContainer>
    <IconContainer type='square' color='nice100'>N1</IconContainer>
    <IconContainer type='square' color='dubai10'>D1</IconContainer>
    <IconContainer type='square' color='dubai100'>D1</IconContainer>
    <IconContainer type='square' color='paris10'>P1</IconContainer>
    <IconContainer type='square' color='paris100'>P1</IconContainer>
    <IconContainer type='square' color='sochi10'>S1</IconContainer>
    <IconContainer type='square' color='sochi100'>S1</IconContainer>
    <IconContainer type='square' color='tokyo10'>T1</IconContainer>
    <IconContainer type='square' color='tokyo100'>T1</IconContainer>
```

Дополнительно представлена **Data Visual** палитра

```
    <IconContainer color='dublin10'>D1</IconContainer>
    <IconContainer color='dublin100'>D1</IconContainer>
    <IconContainer color='bern10'>B1</IconContainer>
    <IconContainer color='bern100'>B1</IconContainer>
    <IconContainer color='manila10'>M1</IconContainer>
    <IconContainer color='manila100'>M1</IconContainer>
    <IconContainer color='tallin10'>T1</IconContainer>
    <IconContainer color='tallin100'>T1</IconContainer>
    <IconContainer color='seoul10'>S1</IconContainer>
    <IconContainer color='seoul100'>S1</IconContainer>
    <IconContainer color='havana10'>H1</IconContainer>
    <IconContainer color='havana100'>H1</IconContainer>
    <IconContainer color='madrid10'>M1</IconContainer>
    <IconContainer color='madrid100'>M1</IconContainer>
    <IconContainer color='osaka10'>M1</IconContainer>
    <IconContainer color='osaka100'>M1</IconContainer>
    <IconContainer color='porto10'>P1</IconContainer>
    <IconContainer color='porto100'>P1</IconContainer>
```

## Цвета с иконками

```
    <IconContainer color='seattle05'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='seattle10'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='seattle60'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='oslo10'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='oslo60'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='miami10'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='miami100'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='nice10'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='nice100'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='dubai10'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='dubai100'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='paris10'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='paris100'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='sochi10'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='sochi100'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='tokyo10'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='tokyo100'>
        <ManPersonIcon />
    </IconContainer>
```

Дополнительно представлена **Data Visual** палитра

```
    <IconContainer color='dublin10'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='dublin100'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='bern10'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='bern100'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='manila10'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='manila100'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='tallin10'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='tallin100'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='seoul10'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='seoul100'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='havana10'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='havana100'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='madrid10'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='madrid100'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='porto10'>
        <ManPersonIcon />
    </IconContainer>
    <IconContainer color='porto100'>
        <ManPersonIcon />
    </IconContainer>
```

#### Адаптив

Для компонента IconContainer, адаптив применяется к свойству `size`, что позволяет адаптивно менять размер компонента в зависимости от текущей ширины экрана. Для этого задайте свойству `size` объект вида `{ <breakpoint name>: <string value> }`

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
    <IconContainer size={{ base: 's', s: 'l', m: 'xl' }}>
        <ManPersonIcon />
    </IconContainer>
```

## Disabled

У компонента есть свойство `disabled`, которое делает компонент неактивным, а также затемняет его

```
    <Groups>
        <IconContainer type='square' color='dublin100' disabled>M</IconContainer>
        <IconContainer type='circle' color='bern100' disabled>
            <ManPersonIcon />
        </IconContainer>
    </Groups>
```

## Loading

У компонента есть свойство `loading`, которое выводит `Spinner`

```
    <Groups>
        <IconContainer type='square' color='dublin100' loading>M</IconContainer>
        <IconContainer type='circle' color='bern100' loading>
            <ManPersonIcon />
        </IconContainer>
    </Groups>
```

## Clickable

У компонента есть свойство `clickable`, которое добавляет `cursor: pointer` на контейнер

```
    <Groups>
        <IconContainer type='square' color='dublin100' clickable>M</IconContainer>
        <IconContainer type='circle' color='bern100' clickable>
            <ManPersonIcon />
        </IconContainer>
    </Groups>
```

## Размеры иконок

Компонент пропорцианально изменяет размеры иконок в зависимости от переданного свойства `size`. Размер иконки можно переопределить

```
    <Groups>
        <IconContainer size="xs"><ManPersonIcon /></IconContainer>
        <IconContainer size="s"><ManPersonIcon /></IconContainer>
        <IconContainer size="m"><ManPersonIcon /></IconContainer>
        <IconContainer size="l"><ManPersonIcon /></IconContainer>
        <IconContainer size="xl"><ManPersonIcon /></IconContainer>
        <IconContainer size="xxl"><ManPersonIcon /></IconContainer>
        <IconContainer size="xxl"><ManPersonIcon size="s" /></IconContainer>
    </Groups>
```