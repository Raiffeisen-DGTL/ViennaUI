# Counter

Компонент отображения количества уведомлений. Используется в навигации второго уровня, табах и в виджетах.

## Импорт

```
import { Counter } from 'vienna-ui';
```

## Свойства / Props


| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| design | CounterDesign \| undefined |  |
| position | "relative" \| "absolute" \| undefined |  |
| top | string \| undefined |  | Свойство для вертикального позиционирования. Зависит от свойства position |
| bottom | string \| undefined |  | Свойство для вертикального позиционирования. Зависит от свойства position |
| left | string \| undefined |  | Свойство для горизонтального позиционирования. Зависит от свойства position |
| right | string \| undefined |  | Свойство для горизонтального позиционирования. Зависит от свойства position |

## Использование

```
    <Groups>
        <Counter>8</Counter>
        <Counter>99</Counter>
        <Counter>99+</Counter>
    </Groups>
```

## Внешний вид

```
    <Groups>
        <Counter design='critical'>9</Counter>
        <Counter design='warning'>12</Counter>
        <Counter design='success'>25</Counter>
        <Counter design='accent'>99+</Counter>
        <Counter design='neutral'>178</Counter>
        <Counter design='disabled'>256</Counter>
    </Groups>
```
