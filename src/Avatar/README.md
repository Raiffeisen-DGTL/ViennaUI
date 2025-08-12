# Avatar

Компонент для визуальной идентификации пользователя и компаний. Используется в разных компонентах от шапки до карточек.

## Импорт

```
import { Avatar } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| src | `string` | — |  |
| alt | `string` | — |  |
| hideImageOnError | `boolean` | — |  |
| size | `PropsBox<B>['$size']` | — |  |
| align | `PropsImageLayer['$align']` | — |  |
| valign | `PropsImageLayer['$valign']` | — |  |

## Использование

```
    <Avatar src={ComponentHelpers.Avatar.ImageURL} />
```



## Размеры

Компонент имеет стандартные размеры `xs`, `s`, `l`, `m` и `xl` (по-умолчанию размер `m`)

```
    <Avatar src={ComponentHelpers.Avatar.ImageURL} size='xl' />
    <Avatar src={ComponentHelpers.Avatar.ImageURL} size='l' />
    <Avatar src={ComponentHelpers.Avatar.ImageURL} size='m' />
    <Avatar src={ComponentHelpers.Avatar.ImageURL} size='s' />
    <Avatar src={ComponentHelpers.Avatar.ImageURL} size='xs' />
```

## Использование с IconContainer

Если не передан `src` будет отображено то, что передано в `children`.

```
    <Avatar src='https://bad.url.to.avatar/avatar.png' size='xl'>
        <IconContainer size='xl' color='nice10'>
            B
        </IconContainer>
    </Avatar>
    <Avatar src='https://bad.url.to.avatar/avatar.png' size='l'>
        <IconContainer size='l' color='paris10'>
            U
        </IconContainer>
    </Avatar>
    <Avatar src='https://bad.url.to.avatar/avatar.png' size='m'>
        <IconContainer size='m' color='dubai10'>
            M
        </IconContainer>
    </Avatar>
    <Avatar src='https://bad.url.to.avatar/avatar.png' size='s'>
        <IconContainer size='s' color='sochi10'>
            <ManPersonIcon />
        </IconContainer>
    </Avatar>
    <Avatar src='https://bad.url.to.avatar/avatar.png' size='xs'>
        <IconContainer size='xs' color='seattle10'>
            R
        </IconContainer>
    </Avatar>
```

#### Адаптив

Для компонента Avatar, адаптив применяется к свойству `size`, что позволяет адаптивно менять размер компонента в зависимости от текущей ширины экрана. Для этого задайте свойству `size` объект вида `{ <breakpoint name>: <string value> }`

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

## Замещающий текст и ошибка загрузки

Используйте атрибут `alt` для вывода замещающего текста изображения через стандартный механизм браузера.

Также с помощью свойства `hideImageOnError` есть возможность скрыть битое изображение и замещающий текст в случае ошибки. В этом случае в качестве фолбека будет отображён `children`.

```
    <Avatar size='xl' src='https://bad.url.to.avatar/avatar.png' alt='Wrong image example'>
        <IconContainer size='xl' color='nice10'>
            A
        </IconContainer>
    </Avatar>
    <Avatar size='xl' src='https://bad.url.to.avatar/avatar.png' alt=''>
        <IconContainer size='xl' color='nice10'>
            A
        </IconContainer>
    </Avatar>
    <Avatar size='xl' src='https://bad.url.to.avatar/avatar.png' alt='Wrong image example' hideImageOnError>
        <IconContainer size='xl' color='nice10'>
            A
        </IconContainer>
    </Avatar>
```