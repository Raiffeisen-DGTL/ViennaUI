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
| size | "xs" \| "s" \| "m" \| "l" \| "xl" \| undefined | "m" | Доступные размеры |
| color | "seattle10" \| "seattle60" \| "oslo10" \| "oslo60" \| "miami10" \| "miami100" \| "nice10" \| "nice100" \| "dubai10" \| "dubai100" \| "paris10" \| "paris100" \| "sochi10" \| "sochi100" \| "tokyo10" \| ... 17 more ... \| undefined | "lightgrey" | Цвет фона |
| clickable | boolean \| undefined | false | Возможность нажатия на компонент |

## Использование

Компонент `RoundIcon` отображает текст или `<Icon />`, переданный в `children`. По умолчанию цвет `lightgrey` и размер `m`.

```
<RoundIcon>M</RoundIcon>
<RoundIcon><Icon /></RoundIcon>
```

## Размеры

##### Свойство `size`

Компонент имеет стандартные размеры `xs`, `s`, `l`, `m` (по умолчанию) и `xl`.

## Цвета

##### Свойство `color`

Компонент имеет стандартные цвета (по-умолчанию `seattle10`): `'seattle10'`, `'seattle60'`, `'oslo10'`, `'oslo60'`, `'miami10'`, `'miami100'`, `'nice10'`, `'nice100'`, `'dubai10'`, `'dubai100'`, `'paris10'`, `'paris100'`, `'sochi10'`, `'sochi100'`, `'tokyo10'`, `'tokyo100'` Дополнительно представлена **Data Visual** палитра: `'dublin10'`, `'dublin100'`, `'bern10'`, `'bern100'`, `'manila10'`, `'manila100'`, `'tallin10'`, `'tallin100'`, `'seoul10'`, `'seoul100'`, `'havana10'`, `'havana100'`, `'madrid10'`, `'madrid100'`, `'porto10'`, `'porto100'`

## Возможность нажатия на компонент

##### Свойство `clickable`

Свойство контролирует внешний вид курсора и компонента при наведении и нажатии.

`<RoundIcon clickable>M</RoundIcon>`
