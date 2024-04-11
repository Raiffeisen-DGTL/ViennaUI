# Alarm

Короткие уведомления. Используются для основной навигации, раздела пуш-уведомлений (звоночек в шапке).

## Импорт

```
import { Alarm } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [HTMLAttributes<HTMLDivElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| design | AlarmDesign \| undefined | |
| position | "relative" \| "absolute" \| undefined | |
| top | string \| undefined | Свойство для вертикального позиционирования. Зависит от свойства position |
| bottom | string \| undefined  | Свойство для вертикального позиционирования. Зависит от свойства position |
| left | string \| undefined  | Свойство для горизонтального позиционирования. Зависит от свойства position |
| right | string \| undefined  | Свойство для горизонтального позиционирования. Зависит от свойства position |

## Использование

```
<Alarm design='success' />
```

## Внешний вид

```
    <Alarm design='critical' />
    <Alarm design='warning' />
    <Alarm design='success' />
    <Alarm design='accent' />
    <Alarm design='neutral' />
    <Alarm design='disabled' />
```
