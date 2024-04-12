# Notifications

Компонет высплывающих нотификаций. Используйте компонент Notifications для всплывающих уведомлений, требующих максимального внимания.

## Импорт

```
import { Notifications, Notifier } from 'vienna-ui';
```

## Свойства / Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| service\* | NotificationService |  | Сервис нотификаций |
| delay | number \| undefined |  | Время отображения |
| align | "left" \| "right" \| "center" \| undefined |  | Выравнивание по горизонтали |
| valign | "top" \| "bottom" \| undefined |  | Выравнивание по вертикали |
| onClose | ((e: any, data: any) => void) \| undefined |  |
| compactBelow | number \| undefined |  | Компактный режим |
| limit | number \| undefined |  | Верхняя граница количества отображаемых нотификаций |
| pinWithMouse | boolean \| undefined |  | Возможность взаимодействия пользователя с нотификацией |
| compact | ResponsiveProp<boolean, Breakpoints> \| undefined |



```
    {() => {
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

Компонент `Notifications` является stateless, контролируемым компонентом, ему необходим дополнительный сервис нотификаций, который будет хранит список нотификаций и реализует методы работы с этим списком. Данный сервис передается компоненту `Notifications` через аттрибут `service`.

Чтобы упростить работу с компонентом, Дизайн-система экспортирует класс `NotificationService` и синглтон-инстанс этого класса - Notifier. Notifier позволяет объявить компонент `Notifications` один раз, как глобальный контейнер и добавлять в него нотификации из разных компонентов ниже по дереву, импортируя и вызывая методы Notifier-а.

Если этого недостаточно, то можно создать локальный инстанс, импортируя и инстанциируя класс `NotificationService`.

В примерах ниже, мы используем оба этих подходы. Мы создали глобальный контейнер нотификаций, который расположен вверху по центру и для большинства примеров используем сервис `Notifier` для отображения нотификаций в нем. Но для демонстрации вариантов расположения и custom-нотификаций, мы создаем дополнительные инстансы сервиса нотификаций и передаем в комопненты `Notifications` их.

## Использование

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
        <Button
            onClick={() =>
                Notifier.accent({
                    title: 'Plain notification.',
                    message: 'Для нейтральных уведомлений',
                })
            }>
            Accent
        </Button>
        <Button
            design='accent'
            onClick={() =>
                Notifier.success({
                    title: 'Success notification.',
                    message: 'Для успешных уведомлений.',
                })
            }>
            Success
        </Button>
        <Button
            design='outline-critical'
            onClick={() =>
                Notifier.warning({
                    title: 'Warning notification.',
                    message: 'Для предупреждений.',
                })
            }>
            Warning
        </Button>
        <Button
            design='critical'
            onClick={() =>
                Notifier.error({
                    title: 'Error notification.',
                    message: 'Для ошибок.',
                })
            }>
            Error
        </Button>
    </Groups>
```

#### Расположение

Компонент поддерживает три варианта расположения по горизонтали и два – по вертикали. Положение по горизонтали контролируется свойство `align`, которое может принимать одно из трёх значений: `left | center | right`. Расположение по вертикали контролируется свойством `valign`, которое принимает одно из двух значений: `top | bottom`.

```
    {() => {
        const topLeft = new NotificationService();
        const topCenter = Notifier;
        const topRight = new NotificationService();
        const bottompLeft = new NotificationService();
        const bottomCenter = new NotificationService();
        const bottomRight = new NotificationService();
        return (
            <Groups design='vertical'>
                <div>
                    <Notifications valign='top' align='left' service={topLeft} />
                    <Notifications valign='top' align='right' service={topRight} />
                    <Notifications valign='bottom' align='left' service={bottompLeft} />
                    <Notifications valign='bottom' align='center' service={bottomCenter} />
                    <Notifications valign='bottom' align='right' service={bottomRight} />
                </div>
                <Groups>
                    <Button onClick={() => topLeft.plain({ message: 'Top left', compactBelow: 10000 })}>
                        Top left
                    </Button>
                    <Button onClick={() => Notifier.plain({ message: 'Top center', compactBelow: 10000 })}>
                        Top center
                    </Button>
                    <Button onClick={() => topRight.plain({ message: 'Top right', compactBelow: 10000 })}>
                        Top right
                    </Button>
                    <Button onClick={() => bottompLeft.plain({ message: 'Bottom left', compactBelow: 10000 })}>
                        Bottom left
                    </Button>
                    <Button onClick={() => bottomCenter.plain({ message: 'Bottom center', compactBelow: 10000 })}>
                        Bottom center
                    </Button>
                    <Button onClick={() => bottomRight.plain({ message: 'Bottom right', compactBelow: 10000 })}>
                        Bottom right
                    </Button>
                </Groups>
            </Groups>
        );
    }}
```

#### Адаптивность

<Alert design='warning' title='DEPRECATED' compact={true}>
    Свойство compactBelow устарело и будет удалено, вместо него используйте compact. Смотрите пункт{' '}
    <a href='/components/notifications#адаптив'>адаптив</a>
</Alert>

Как и компонент `Alert`, компонент нотификаций имеет компактный режим отображения, который контролируется параметром `compactBelow`. В него можно передать пороговое значение ширины viewport, ниже которого компонент будет отображаться в компактном виде. При этом `compactBelow` можно передать как параметр отдельной нотификации, так и установить глобально для компонента `Notifications`.

```
    {() => {
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

#### Нотификации с кнопками

Объект нотификации поддерживает свойство `actions`, куда можно передать JSX объект с кнопками. Поддерживается 2 вида дизайнов кнопок 'primary' - вариант по умолчанию, не требующий явно указывать свойство `design`, и `ghost`. При этом при начличии `actions` нотификация всегда отображается в компактном режиме.

```
    {() => {
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
                <Button onClick={() => Notifier.accent({ ...notification })}>Accent</Button>
                <Button design='accent' onClick={() => Notifier.success({ ...notification })}>
                    Success
                </Button>
                <Button design='outline-critical' onClick={() => Notifier.warning({ ...notification })}>
                    Warning
                </Button>
                <Button design='critical' onClick={() => Notifier.error({ ...notification })}>
                    Error
                </Button>
            </Groups>
        );
    }}
```

#### Delay

По умолчанию нотификации автоматически закрываются через 5 секунд (5000 мс). Это значение можно изменить с помощью параметр `delay`. Если установить `delay` в 0, нотификации автоматически закрываться перестанут и их необходимо будет закрывать вручную.

```
    {() => {
        const send = () => {
            Notifier.plain({
                title: 'Default delay',
                message: 'This notification has a default delay of 5s.',
            });
            Notifier.plain({
                title: '3s delay',
                message: 'This notification has a delay of 3s.',
                delay: 3000,
            });
            Notifier.plain({
                title: 'Delay 0',
                message: 'This notification has delay of 0 and only closes manually.',
                delay: 0,
            });
        };
        return <Button onClick={send}>Click me</Button>;
    }}
```

#### Limit

С помощью параметра `limit` можно контролировать количество нотификаций отображающееся за один раз. Дополнительные нотификации будут появляться по мере пропадания нотификаций на экране.

```
    {() => {
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

#### Pin with mouse

Если передать параметр `pinWithMouse` отображаемые ноификации не будут автоматически закрываться, при наведении на них мышкой.

```
    {() => {
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

#### Custom Notifications

В children комопнента также можно передать функцию, которая вызовется для каждой нотификации из списка, и в качестве единственного параметра получит объект нотификации, который был передан в сервис. В дополнение к этому, компонент `Notifications` имеет статическое поле `Notification`, который можно использовать для отрисвки стандартного бокса нотификации. Все это дает возможность гибко настраивать вид и поведение нотификации в ситуациях, когда стандартного поведения недостаточно.

```
    {() => {
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

#### Адаптив

Для компонента Notifications, адаптив применяется к свойству `compact`, что позволяет перевести в компактный режим при достижении соответствующего размера ширины экрана. Для этого свойству нужно задать объект вида `{ <breakpoint name>: <boolean value> }`.

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
    {() => {
        const service = new NotificationService();
        return (
            <>
                <Notifications service={Notifier} compact={{ base: false, s: true, m: false }} />
                <Button
                    design='accent'
                    onClick={() =>
                        Notifier.success({
                            title: 'Success notification.',
                            message: 'Для успешных уведомлений.',
                            delay: 8000,
                        })
                    }>
                    Success
                </Button>
            </>
        );
    }}
```