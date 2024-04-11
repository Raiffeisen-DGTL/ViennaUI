# Avatar

Компонент для визуальной идентификации пользователя и компаний. Используется в разных компонентах от шапки до карточек.

## Импорт

```
import { Avatar } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [HTMLAttributes<HTMLDivElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

| Prop     | Type                                           | Default | Description                 |
| -------- | ---------------------------------------------- | ------- | --------------------------- |
| children | ReactNode                                      |         |
| size     | ResponsiveProp<'xs' | 's' | 'm' | 'l' | 'xl', B> \| undefined |         | Доступные размеры           |
| align    | "left" \| "center" \| "right" \| undefined     |         | Выравнивание по горизонтали |
| valign   | "center" \| "top" \| "bottom" \| undefined     |         | Выравнивание по вертикали   |
| ref      | Ref<HTMLDivElement> \| undefined               |

## HTMLAttributes

| Prop     | Type                                           | Default | Description                 |
| -------- | ---------------------------------------------- | ------- | --------------------------- |
| src      | string \| undefined                                      |         

## Использование

```
<Avatar src={ComponentHelpers.Avatar.ImageURL} />
```

## Размеры

##### Свойство `size`

Доступные размеры: `xs`, `s`, `l`, `m` (по умолчанию) и `xl`

```
    <Avatar src={ComponentHelpers.Avatar.ImageURL} size='xl' />
    <Avatar src={ComponentHelpers.Avatar.ImageURL} size='l' />
    <Avatar src={ComponentHelpers.Avatar.ImageURL} size='m' />
    <Avatar src={ComponentHelpers.Avatar.ImageURL} size='s' />
    <Avatar src={ComponentHelpers.Avatar.ImageURL} size='xs' />
```

## Использование с `RoundIcon`

Если изображение, переданное в `src` недоступно - отобразиться содержиммое `children`

```jsx
import { Avatar } from 'vienna-ui';
import { RoundIcon } from 'vienna-ui';

<Avatar src='https://bad.url.to.avatar/avatar.png' size='xl'>
    <RoundIcon size='xl' color='nice10'>
        B
    </RoundIcon>
</Avatar>;
<Avatar src='https://bad.url.to.avatar/avatar.png' size='l'>
        <RoundIcon size='l' color='paris10'>
            U
        </RoundIcon>
</Avatar>
<Avatar src='https://bad.url.to.avatar/avatar.png' size='m'>
        <RoundIcon size='m' color='dubai10'>
            M
        </RoundIcon>
</Avatar>
<Avatar src='https://bad.url.to.avatar/avatar.png' size='s'>
        <RoundIcon size='s' color='sochi10'>
            <ManPerson />
        </RoundIcon>
</Avatar>
<Avatar src='https://bad.url.to.avatar/avatar.png' size='xs'>
        <RoundIcon size='xs' color='seattle10'>
            R
        </RoundIcon>
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

```
    <Avatar src='https://bad.url.to.avatar/avatar.png' size={{ base: 's', s: 'l', m: 'xl' }}>
        <RoundIcon size='xl' color='nice10'>
            A
        </RoundIcon>
    </Avatar>
```
