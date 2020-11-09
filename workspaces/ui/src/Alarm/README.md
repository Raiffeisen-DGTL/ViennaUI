# Alarm

Короткие уведомления. Используются для основной навигации, раздела пуш-уведомлений (звоночек в шапке).


## Импорт

```
import { Alarm } from 'vienna-ui';
```

## Свойства / Props

Свойства наследуются от [HTMLAttributes<HTMLDivElement>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L1746)

Prop | Type | Default | Description
--- | --- | --- | ---
design | "critical" \| "warning" \| "success" \| "accent" \| "neutral" \| "disabled" \| undefined | false |
position | "relative" \| "absolute" \| undefined | false |
top | string \| undefined | false | Свойство для вертикального позиционирования. Зависит от свойства position
bottom | string \| undefined | false | Свойство для вертикального позиционирования. Зависит от свойства position
left | string \| undefined | false | Свойство для горизонтального позиционирования. Зависит от свойства position
right | string \| undefined | false | Свойство для горизонтального позиционирования. Зависит от свойства position

## Использование

```
<Alarm design='success' />
```
