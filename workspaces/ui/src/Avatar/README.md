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
| children | ReactNode                                      | false   |
| size     | "xs" \| "s" \| "m" \| "l" \| "xl" \| undefined | false   | Доступные размеры           |
| align    | "left" \| "center" \| "right" \| undefined     | false   | Выравнивание по горизонтали |
| valign   | "center" \| "top" \| "bottom" \| undefined     | false   | Выравнивание по вертикали   |

## Использование

```
<Avatar src={ImageURL} />
```

## Размеры

##### Свойство `size`

Доступные размеры: `xs`, `s`, `l`, `m` (по умолчанию) и `xl`

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
```
