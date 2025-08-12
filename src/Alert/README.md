# Alert

Alert используется как статичное уведомление для акцента на информации в контенте, требующего внимания или действий.

## Импорт

```
import { Alert } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| actions | ReactNode | | Блок для кнопок |
| design | AlertDesign \| undefined |
| dynamic | boolean \| undefined  | | Контролирует динамическую ширину компонента |
| noIcon | boolean \| undefined  |  |Контролирует отображение иконки |
| compactBelow | number \| undefined |  | Контролирует отображение коммпактного режима, когда ширина просмотра меньше заданного числа |
| compact | ResponsiveProp<boolean, Breakpoints> \| undefined |

## HTMLAttributes
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| title | ReactNode |


## Использование

```jsx
<Alert title='Важно!'>Информация о некритичных подробностях</Alert>
```



## Внешний вид

Внешний вид контролируется параметром `design`. Доступно 5 вариантов дизайна - `plain`, `success`, `warning`, `error` и `accent`

#### Дизайн Plain

Дизайн `plain` используется для нейтральных уведомлений.

```
    <Alert title='Важно!'>Информация о некритичных подробностях</Alert>
```

#### Дизайн Success

Дизайн `success` используется для успешных уведомлений.

```
    <Alert title='Успешно!' design='success'>
        Информация об успешном результате действия
    </Alert>
```

#### Дизайн Warning

Дизайн `warning` используется для предупреждений.

```
    <Alert title='Внимание!' design='warning'>
        Информация о критичных последствиях действия
    </Alert>
```

#### Дизайн Error

Дизайн `error` используется для ошибок.

```
    <Alert title='Ошибка!' design='error'>
        Информация об ошибке в результате действия
    </Alert>
```

#### Дизайн Accent

Дизайн `accent` используется для нейтральных уведомлений.

```
    <Alert title='Важно!' design='accent'>
        Информация о некритичных подробностях
    </Alert>
```

## Без заголовка

Параметр `title` является опциональным.

```
    <Alert design='success'>Информация об успешном результате действия</Alert>
```

## Без иконки

Передав параметр `noIcon` можно убрать иконку из уведомления.

```
    <Alert design='success' noIcon>
        Информация об успешном результате действия
    </Alert>
    <Alert title='Ошибка!' design='error' noIcon>
        Информация об ошибке в результате действия
    </Alert>
```

## Динамический контент

По умолчанию компонент занимает 100% ширины родителя. Если передан параметр `dynamic`, то ширина компонента равна ширине контента.

```
    <Alert title='Успешно!' design='success'>
        Обычный Alert
    </Alert>
    <Alert title='Успешно!' design='success' dynamic={true}>
        Динамический Alert
    </Alert>
```

## Компактный режим

Комопнент поддерживает компактный режим отображения. Параметр `compact` включает отображение в компактном виде.

```
    <Alert title='Успешно!' design='success' compact>
        Информация об успешном результате действия
    </Alert>
    <Alert title='Успешно!' design='success' noIcon compact>
        Информация об успешном результате действия
    </Alert>
    <Alert title='Успешно!' design='success' noIcon dynamic compact>
        Информация об успешном результате действия
    </Alert>
```

## С кнопками

Компонент поддерживает свойство `actions`, куда можно передать JSX объект с кнопками. Поддерживается 2 вида дизайнов кнопок 'primary' - вариант по умолчанию, не требующий явно указывать свойство `design`, и `ghost`. При этом при начличии `actions` нотификация всегда отображается в компактном режиме.

```
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
    <Alert
        title='Успешно!'
        design='success'
        actions={
            <Groups>
                <Button>Complete</Button>
                <Button design='ghost'>Cancel</Button>
            </Groups>
        }>
        Информация об успешном результате действия
    </Alert>
    <Alert
        title='Внимание!'
        design='warning'
        actions={
            <Groups>
                <Button>Complete</Button>
                <Button design='ghost'>Cancel</Button>
            </Groups>
        }>
        Информация о критичных последствиях действия
    </Alert>
    <Alert
        title='Ошибка!'
        design='error'
        actions={
            <Groups>
                <Button>Complete</Button>
                <Button design='ghost'>Cancel</Button>
            </Groups>
        }>
        Информация об ошибке в результате действия
    </Alert>
    <Alert
        title='Важно!'
        design='accent'
        actions={
            <Groups>
                <Button>Complete</Button>
                <Button design='ghost'>Cancel</Button>
            </Groups>
        }>
        Информация о некритичных подробностях
    </Alert>
```

## Слот в правом верхнем углу

У компонента есть свойство `rightContainer` (имеет тип `ReactNode`) - слот в правом верхнем углу. Так же есть свойство `onClose`, которое выводит иконку крестика в правый верхний угол и вызывает функцию переданную в свойство, при клике на крестик.

```
    <Alert
        title={'Успех!'}
        design={'success'}
        actions={
            <Groups>
                <Button>Ок</Button>
            </Groups>
        }
        noIcon
        rightContainer={<CheckmarkIcon/>}>
        Здесь написано что-то хорошее
    </Alert>
    <Alert
        title={'Успех!'}
        design={'success'}
        actions={
            <Groups>
                <Button>Ок</Button>
            </Groups>
        }
        onClose={() => console.log('клик по крестику')}>
        Здесь написано что-то хорошее
    </Alert>
```

## Адаптив

Для компонента Alert, адаптив применяется к свойству `compact`, что позволяет перевести в компактный режим при достижении соответствующего размера ширины экрана. Для этого свойству нужно задать объект вида `{ <breakpoint name>: <boolean value> }`

Основные значения breakpoints:

```
defaultBreakpoints = {
    s: 768,
    m: 1024,
    l: 1920,
    xl: 2560,
};

systemBreakpoints: Breakpoints = {
    /* xs */
    xs: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* s */
    s: `(min-width: ${defaultBreakpoints.s}px)`,
    belowS: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* m */
    m: `(min-width: ${defaultBreakpoints.m}px)`,
    belowM: `(max-width: ${defaultBreakpoints.m - 1}px)`,

    /* l */
    l: `(min-width: ${defaultBreakpoints.l}px)`,
    belowL: `(max-width: ${defaultBreakpoints.l - 1}px)`,

    /* xl */
    xl: `(min-width: ${defaultBreakpoints.xl}px)`,
};
```

Следующий код переведёт компонент в компактный режим на экранах от 768px до 1024px.

```
    <Alert title='Успешно!' design='success' compact={{ base: false, s: true, m: false }}>
        Я обычный текст успешно адаптированный
    </Alert>
```

## Установка data-testid

Атрибут `data-testid` можно передать для иконки закрытия, контейнера, названия, контента, первой иконки. Передается пропс `testId?: { closeIcon, container, title, content, icon, iconContainer }`.

Также добавлены дефолтные значения для `testId`:

```
export const defaultAlertTestId: AlertProps['testId'] = {
    container: 'alert_container',
    title: 'alert_title',
    content: 'alert_content',
    icon: 'alert_icon',
    iconContainer: 'alert_icon-container',
    closeIcon: 'alert_close-icon',
};
```

```
    <Alert title='Успешно!' design='success' onClose={() => console.log('клик по крестику')} testId={{ closeIcon: 'close-icon', container: 'alert_container', title: 'alert_title', content: 'alert_content', icon: 'alert_icon', iconContainer: 'alert_icon-container'}}>
        Информация об успешном результате действия
    </Alert>
```