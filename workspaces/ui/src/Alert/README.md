# Alert

Alert используется как статичное уведомление для акцента на информации в контенте, требующего внимания или действий.

## Импорт

```
import { Alert } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| actions | ReactNode | false | Блок для кнопок |
| design | 'plain' \| 'error' \| 'warning' \| 'success' | 'plain' |
| dynamic | boolean \| undefined | false | Контролирует динамическую ширину компонента |
| noIcon | boolean \| undefined | false | Контролирует отображение иконки |
| compactBelow | number \| undefined | false | Контролирует отображение коммпактного режима, когда ширина просмотра меньше заданного числа |

## Использование

```jsx
<Alert title='Важно!'>Информация о некритичных подробностях</Alert>
```

## Дизайн

##### Свойство `design`

Внешний вид контролируется параметром `design`. Доступно 4 варианта дизайна - `plain`, `success`, `warning`, `error`.

```jsx
<Alert design='success'>Информация о некритичных подробностях</Alert>
```

## Заголовок

##### Свойство `title`

Параметр `title` является опциональным.

```jsx
<Alert title='Успешно!' design='success'>
    Информация об успешном результате действия
</Alert>
```

## Без иконки

##### Свойство `noIcon`

Передав параметр `noIcon` можно убрать иконку из уведомления.

```jsx
<Alert design='success' noIcon>
    Информация об успешном результате действия
</Alert>
<Alert title='Ошибка!' design='error' noIcon>
    Информация об ошибке в результате действия
</Alert>
```

## Динамический контент

##### Свойство `dynamic`

По умолчанию компонент занимает 100% ширины родителя. Если передан параметр `dynamic`, то ширина компонента равна ширине контента.

```jsx
<Alert dynamic title='Успешно!' design='success'>
    Динамический Alert
</Alert>
```

## Компактный режим

##### Свойство `compactBelow`

Комопнент поддерживает компактный режим отображения. В параметр `compactBelow` можно передать пороговое значение ширины viewport, ниже которого компонент будет отображаться в компактном виде.

```jsx
<Alert compactBelow={1024} title='Успешно!' design='success'>
    Информация об успешном результате действия
</Alert>
```

Если передать заведомо большее значение, то компонет будет отображаться в компактном виде всегда.

```jsx
<Alert compactBelow={100000} title='Успешно!' design='success'>
    Информация об успешном результате действия
</Alert>
```

## С кнопками

##### Свойство `actions`

Компонент поддерживает свойство `actions`, куда можно передать JSX объект с кнопками. Поддерживается 2 вида дизайнов кнопок 'primary' - вариант по умолчанию, не требующий явно указывать свойство `design`, и `ghost`. При этом при начличии `actions` нотификация всегда отображается в компактном режиме.

```jsx
<Alert
    title='Важно!'
    actions={
        <Groups>
            <Button>Complete</Button>
            <Button design='ghost'>Cancel</Button>
        </Groups>
    }>
    Информация о некритичных подробностях
</Alert>
```
