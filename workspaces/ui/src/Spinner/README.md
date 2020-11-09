# Spinner

Визуализация состояния загрузки данных.
Используется на страницах или в компонентах (например в компонентах `<Input />` или `<Select />`), когда нужно визуализировать загрузку данных с сервера.


## Импорт

```
import { Spinner } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [HTMLAttributes<HTMLDivElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

Prop | Type | Default | Description
--- | --- | --- | ---
size | "xs" \| "s" \| "m" \| "l" \| "xl" \| "xxl" \| undefined | false |
position | "relative" \| "absolute" \| undefined | false |

## Использование

```<Spinner />```

## Размеры
##### Свойство `size`

Компонент имеет стандартные размеры `size`: `xs`, `s`, `m`, `l` и `xl`.

## Расположение
##### Свойство `position`

Можно добавить свойство `position` в состояние `absolute` для растягивания на всю ширину или высоту родительского элемента.

```<Spinner position='absolute' />```
