# Badge

Для статусов и лейблов. Актуально для таблиц и списков.

## Импорт

```
import { Badge } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [HTMLProps<HTMLAnchorElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1342)

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| color | BadgeColor \| undefined  |
| size | ResponsiveProp<'xs' \|'s' \| 'm' \| 'l', B> \| undefined | Доступные размеры |
| grid | 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 11 \| 12 \| undefined |  |
| children | ReactNode \| undefined | Ссылка на DOM элемент |
| clickable | boolean \| undefined  | Возможность нажатия на компонент |

## Использование

```
<Badge>Badge text</Badge>
```

## Внешний вид

Используют светлые оттенки основной и серой палитры, чтобы не отвлекать пользователей от чтения контента. Цвет компонента управляется дизайнерами в зависимости от потребностей продукта, потому значительных ограничений на палитру нет.

```
    <Badge color='paris10'>Badge text</Badge>
    <Badge color='paris30'>Badge text</Badge>
    <Badge color='miami10'>Badge text</Badge>
    <Badge color='miami30'>Badge text</Badge>
    <Badge color='dubai10'>Badge text</Badge>
    <Badge color='dubai30'>Badge text</Badge>
    <Badge color='nice10'>Badge text</Badge>
    <Badge color='nice30'>Badge text</Badge>
    <Badge color='seattle05'>Badge text</Badge>
    <Badge color='seattle10'>Badge text</Badge>
```

## Использование с иконкой

Badge может быть использован с различным контентом, например, с иконкой.

```jsx
<Badge color='paris10'>
    <Clip size='s' /> Badge text
</Badge>
<Badge color='paris30'>
    <Attach size='s' /> Badge text
</Badge>
<Badge color='miami10'>
    <Attach size='s' /> Badge text
</Badge>
<Badge color='miami30'>
     <Attach size='s' /> Badge text
</Badge>
<Badge color='dubai10'>
    <Attach size='s' /> Badge text
</Badge>
<Badge color='dubai30'>
    <Attach size='s' /> Badge text
</Badge>
<Badge color='nice10'>
    <Attach size='s' /> Badge text
</Badge>
<Badge color='nice30'>
    <Attach size='s' /> Badge text
</Badge>
<Badge color='seattle05'>
    <Attach size='s' /> Badge text
</Badge>
<Badge color='seattle10'>
    <Attach size='s' /> Badge text
</Badge>
```

## Размеры

##### Свойство `size`

Компонент имеет стандартные размеры `xs`, `s`, `m` и `l`

```
    <Badge size='xs'>Badge text</Badge>
    <Badge size='s'>Badge text</Badge>
    <Badge size='m'>Badge text</Badge>
    <Badge size='l'>Badge text</Badge>
```

## Ограничение по длине

Если компоненту необходимо задать определенную ширину в колонке/блоке, текст может зарезаться.

```jsx
<Badge size='s' grid={1}>
    Badge text
</Badge>
<Badge size='m' grid={1}>
    Badge text
</Badge>
<Badge size='l' grid={1}>
    Badge text
</Badge>
```


#### Адаптив

Для компонента Badge, адаптив применяется к свойству `size`, что позволяет адаптивно менять размер компонента в зависимости от текущей ширины экрана. Для этого задайте свойству `size` объект вида `{ <breakpoint name>: <string value> }`

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
    <Badge grid={1} size={{ base: 's', s: 'm', m: 'l' }}>
        <Attach size='s' />
        Пример адаптива
    </Badge>
```



