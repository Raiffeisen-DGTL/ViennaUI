# Notifications

Компонет высплывающих нотификаций. Используйте компонент Notifications для всплывающих уведомлений, требующих максимального внимания.


## Импорт

```
import { Notifications, Notifier } from 'vienna-ui';
```

## Свойства / Props

Prop | Type | Default | Description
--- | --- | --- | ---
service* | NotificationService | false | Сервис нотификаций
delay | number \| undefined | false | Время отображения
align | "left" \| "right" \| "center" \| undefined | false | Выравнивание по горизонтали
valign | "top" \| "bottom" \| undefined | false | Выравнивание  по вертикали
onClose | ((e: any, data: any) => void) \| undefined | false |
compactBelow | number \| undefined | false | Компактный  режим
limit | number \| undefined | false | Верхняя граница количества отображаемых нотификаций
pinWithMouse | boolean \| undefined | false | Возможность взаимодействия пользователя с нотификацией

## Использование

Компонент состоит из элемента-контейнера `Notifications` и класса сервиса `NotificationService`.

```{() => {
    const service = new NotificationService();
    return (
        <React.Fragment>
            <Notifications service={service} />
            <Button
                onClick={() =>
                    service.plain({
                        title: 'Plain notification.',
                        message: 'Для нейтральных уведомлений',
                    })
                }>
                Notify Me
            </Button>
        </React.Fragment>
    );
}}
```

## Notification service & Notifier
##### Свойство `service`

Компонент `Notifications` является stateless, контролируемым компонентом, ему необходим дополнительный сервис нотификаций, который будет хранит список нотификаций и реализует методы работы с этим списком. Данный сервис передается компоненту `Notifications` через аттрибут `service`.

Чтобы упростить работу с компонентом, Дизайн-система экспортирует класс `NotificationService` и синглтон-инстанс этого класса - Notifier. Notifier позволяет объявить компонент `Notifications` один раз, как глобальный контейнер и добавлять в него нотификации из разных компонентов ниже по дереву, импортируя и вызывая методы Notifier-а.

Если этого недостаточно, то можно создать локальную экземпляр класса, импортируя и инстанциируя класс `NotificationService`.

В примерах ниже, мы используем оба этих подходы. Мы создали глобальный контейнер нотификаций, который расположен вверху по центру и для большинства примеров используем сервис `Notifier` для отображения нотификаций в нем. Но для демонстрации вариантов расположения и custom-нотификаций, мы создаем дополнительные инстансы сервиса нотификаций и передаем в комопненты `Notifications` их.

```
<Groups>
    <Notifications service={Notifier} />
    <Button
        onClick={() =>
            Notifier.plain({
                title: 'Plain notification.',
                message: 'Для нейтральных уведомлений',
            })
        }>
        Plain
    </Button>
</Groups>
```

## Расположение
##### Свойство `align`
##### Свойство `valign`

Компонент поддерживает три варианта расположения по горизонтали и два – по вертикали. Положение по горизонтали контролируется свойство `align`, которое может принимать одно из трёх значений: `left | center | right`. Расположение по вертикали контролируется свойством `valign`, которое принимает одно из двух значений: `top | bottom`.

```{() => {
    const bottomRight = new NotificationService();
    return (
        <Groups design='vertical'>
            <Notifications valign='bottom' align='right' service={bottomRight} />
            <Button onClick={() => bottomRight.plain({ message: 'Bottom right', compactBelow: 10000 })}>
                Bottom right
            </Button>
        </Groups>
    );
}}
```

## Адаптивность
##### Свойство `compactBelow`

Как и компонент `Alert`, компонент нотификаций имеет компактный режим отображения, который контролируется параметром `compactBelow`. В него можно передать пороговое значение ширины viewport, ниже которого компонент будет отображаться в компактном виде. При этом `compactBelow` можно передать как параметр отдельной нотификации, так и установить глобально для компонента `Notifications`.

```{() => {
    const handlerClick = () => {
        Notifier.plain({
            title: 'Compact.',
            message: 'This notification will be displayed in the compact mode on a viewports widths below 1024px',
            compactBelow: 1024,
        });
    };
    return <Button onClick={handlerClick}>Compact below 1024px</Button>;
}}
```

## Нотификации с кнопками
##### Свойство `actions`

Объект нотификации поддерживает свойство `actions`, куда можно передать JSX объект с кнопками. Поддерживается 2 вида дизайнов кнопок 'primary' - вариант по умолчанию, не требующий явно указывать свойство `design`, и `ghost`. При этом при начличии `actions` нотификация всегда отображается в компактном режиме.

```{() => {
    const notification = {
        title: 'Notification with actions',
        message: 'Some text goes here.',
        actions: (
            <Groups>
                <Button>OK</Button>
                <Button design='ghost'>Cancel</Button>
            </Groups>
        ),
    };
    return (
        <Groups>
            <Button onClick={() => Notifier.plain({ ...notification })}>Plain</Button>
        </Groups>
    );
}}
```

## Время отображения
##### Свойство `delay`

По умолчанию нотификации автоматически закрываются через 5 секунд (5000 мс). Это значение можно изменить с помощью параметр `delay`. Если установить `delay` в 0, нотификации автоматически закрываться перестанут и их необходимо будет закрывать вручную.

```{() => {
    const send = () => {
        Notifier.plain({
            title: '3s delay',
            message: 'This notification has a delay of 3s.',
            delay: 3000,
        });
    };
    return <Button onClick={send}>Click me</Button>;
}}
```

## Верхняя граница количества нотификаций
##### Свойство `limit`

С помощью параметра `limit` можно контролировать количество нотификаций отображающееся за один раз. Дополнительные нотификации будут появляться по мере пропадания нотификаций на экране.

```{() => {
    const NOTIFICATIONS_LIST_SIZE = 10;
    const service = new NotificationService();
    function showBunch() {
        let i = 1;
        while (i <= NOTIFICATIONS_LIST_SIZE) {
            service.plain({
                title: 'Plain notification #' + i,
                message: 'Для нейтральных уведомлений',
            });
            i++;
        }
    }
    return (
        <Groups>
            <Notifications service={service} limit={3} />
            <Button onClick={showBunch}>Send {NOTIFICATIONS_LIST_SIZE} notifications</Button>
        </Groups>
    );
}}
```

## Взаимодействие пользователя с нотификацией
##### Свойство `pinWithMouse`

Если передать параметр `pinWithMouse` отображаемые ноификации не будут автоматически закрываться, при наведении на них мышкой.

```{() => {
    const service = new NotificationService();
    function send() {
        service.plain({
            message: 'Это уведомление не исчесзнет, если навести на него мышкой',
        });
    }
    return (
        <Groups>
            <Notifications service={service} pinWithMouse />
            <Button onClick={send}>Send</Button>
        </Groups>
    );
}}
```

## Custom Notifications
##### `NotificationService.prototype.add`

В children комопнента также можно передать функцию, которая вызовется для каждой нотификации из списка, и в качестве единственного параметра получит объект нотификации, который был передан в сервис. В дополнение к этому, компонент `Notifications` имеет статическое поле `Notification`, который можно использовать для отрисвки стандартного бокса нотификации. Все это дает возможность гибко настраивать вид и поведение нотификации в ситуациях, когда стандартного поведения недостаточно.

```{() => {
    const custom = new NotificationService();
    const send = (isSuccess) => {
        if (isSuccess) {
            custom.add({
                title: 'Custom notification',
                text: 'This is a custom notification',
                description: 'Success',
                status: 'ok',
                button_ok: <Button>OK</Button>,
            });
        } else {
            custom.add({
                title: 'Custom notification',
                text: 'This is a custom error notification',
                description: 'Error',
                status: 'error',
            });
        }
    };
    return (
        <Groups>
            <Notifications align='right' compactBelow={10000} valign='bottom' service={custom}>
                {(notification) => (
                    <Notifications.Notification
                        key={notification.key}
                        design={notification.status === 'ok' ? 'success' : 'error'}
                        title={notification.title}
                        {...notification}>
                        <b style={{ textTransform: 'uppercase' }}>[{notification.status}]: </b>
                        {notification.text}
                        {notification.button_ok && (
                            <div style={{ marginTop: '10px' }}>{notification.button_ok}</div>
                        )}
                    </Notifications.Notification>
                )}
            </Notifications>
            <Button onClick={() => send(true)}>Success</Button>
            <Button onClick={() => send(false)}>Error</Button>
        </Groups>
    );
}}
```
