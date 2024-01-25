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
| color | "paris10" \| "paris30" \| "miami10" \| "miami30" \| "dubai10" \| "dubai30" \| "nice10" \| "nice30" \| "seattle05" \| "seattle10" \| undefined | false |
| size | "s" \| "m" \| "l" \| undefined | 'm' | Доступные размеры |
| grid | 0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 11 \| 12 \| undefined |  |
| forwardedRef | any |  | Ссылка на DOM элемент |
| clickable | boolean \| undefined | false | Возможность нажатия на компонент |

## Использование

```
<Badge>Badge text</Badge>
```

## Использование с иконкой

Badge может быть использован с различным контентом, например, с иконкой.

```jsx
<Badge color='paris10'>
    <Clip size='s' /> Badge text
</Badge>
```

## Размеры

##### Свойство `size`

Доступные размеры: `s`, `m` (по умолчанию) и `l`

## Ограничение по длине

##### Свойство `grid`

Свойство `grid` можно использовать для задания максимальной ширины. Например, при использовании в ячейке таблицы.

```jsx
<Badge size='s' grid={1}>
    Badge text
</Badge>
```
