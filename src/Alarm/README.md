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
| size |"s" \| "m"  |  |

# Alarm

Короткие уведомления. Используются для основной навигации, раздела пуш-уведомлений (звоночек в шапке).
Может использоваться в различных контекстах для привлечения внимания пользователя к важным событиям или изменениям в системе.

Примеры применения Alarm:
- Уведомление о новых сообщениях или событиях: компонент может сигнализировать о поступлении нового сообщения или события в интерфейсе.
- Индикация ошибок или предупреждений: компонент может указывать на необходимость внимания пользователя к определенному элементу интерфейса.
- Отображение прогресса выполнения задачи: когда выполняются длительные операции, такие как загрузка файлов или обработка данных, компонент может показывать текущий прогресс выполнения задачи.
- Индикация важных действий: в интерфейсах, где пользователю необходимо выполнить определенные действия, компонент может напоминать о важности этих действий и привлечь внимание пользователя.
- Визуализация состояний системы: когда важно отслеживать множество параметров, компонент может использоваться для визуализации текущего состояния системы и выделения критических значений.



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

## Размеры

В компоненте представлены два размера - 's' и 'm'.

```
    <Groups>
        <Alarm design='critical' size='s' />
        <Alarm design='warning' size='s' />
        <Alarm design='success' size='s' />
        <Alarm design='accent' size='s' />
        <Alarm design='neutral' size='s' />
        <Alarm design='disabled' size='s' />
    </Groups>
    <Groups>
        <Alarm design='critical' size='m' />
        <Alarm design='warning' size='m' />
        <Alarm design='success' size='m' />
        <Alarm design='accent' size='m' />
        <Alarm design='neutral' size='m' />
        <Alarm design='disabled' size='m' />
    </Groups>
```