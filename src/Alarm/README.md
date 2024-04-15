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
| top | string \| undefined |  |
| bottom | string \| undefined  |  |
| left | string \| undefined  |  |
| right | string \| undefined  |  |

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
