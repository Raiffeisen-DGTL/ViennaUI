import React from 'react';
import { Groups, Button } from '..';
import { Notifications, Notifier, NotificationService } from './index';

test('Notifications', () => {
    Notifier.plain({
        title: 'Plain notification.',
        message: 'Для нейтральных уведомлений',
    });
    Notifier.success({
        title: 'Success notification.',
        message: 'Для успешных уведомлений.',
    });
    Notifier.warning({
        title: 'Warning notification.',
        message: 'Для предупреждений.',
    });
    Notifier.error({
        title: 'Error notification.',
        message: 'Для ошибок.',
    });

    const snap = snapshot.render(<Notifications service={Notifier} />);
    expect(snap).toMatchSnapshot();
});

test('Notifications w/ position', () => {
    const topLeft = new NotificationService();
    const topCenter = new NotificationService();
    const topRight = new NotificationService();
    const bottompLeft = new NotificationService();
    const bottomCenter = new NotificationService();
    const bottomRight = new NotificationService();

    [topLeft, topCenter, topRight, bottompLeft, bottomCenter, bottomRight].forEach((service) =>
        service.plain({
            title: 'Plain notification.',
            message: 'Для нейтральных уведомлений',
        })
    );

    const snap = snapshot.render(
        <>
            <Notifications valign='top' align='left' service={topLeft} />
            <Notifications valign='top' align='center' service={topLeft} />
            <Notifications valign='top' align='right' service={topRight} />
            <Notifications valign='bottom' align='left' service={bottompLeft} />
            <Notifications valign='bottom' align='center' service={bottomCenter} />
            <Notifications valign='bottom' align='right' service={bottomRight} />
        </>
    );

    expect(snap).toMatchSnapshot();
});

test('Notifications w/ compact', () => {
    Notifier.plain({
        title: 'Plain notification.',
        message: 'Для нейтральных уведомлений',
        compactBelow: 1024,
    });

    const snap = snapshot.render(<Notifications service={Notifier} />);
    expect(snap).toMatchSnapshot();
});

test('Notifications w/ buttons', () => {
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

    Notifier.plain({ ...notification });
    Notifier.success({ ...notification });
    Notifier.warning({ ...notification });
    Notifier.error({ ...notification });

    const snap = snapshot.render(<Notifications service={Notifier} />);
    expect(snap).toMatchSnapshot();
});

test('Notifications w/ limit', () => {
    let i = 1;
    while (i <= 10) {
        Notifier.plain({
            title: 'Plain notification',
            message: 'Для нейтральных уведомлений',
        });
        i++;
    }

    const snap = snapshot.render(<Notifications service={Notifier} limit={3} />);
    expect(snap).toMatchSnapshot();
});

test('Custom notifications', () => {
    const custom = new NotificationService();

    custom.add({
        title: 'Custom notification',
        text: 'This is a custom notification',
        description: 'Success',
        status: 'ok',
        buttonOk: <Button>OK</Button>,
    } as any);
    custom.add({
        title: 'Custom notification',
        text: 'This is a custom error notification',
        description: 'Error',
        status: 'error',
    } as any);

    const snap = snapshot.render(
        <Notifications align='right' compactBelow={10000} valign='bottom' service={custom}>
            {(notification) => (
                <Notifications.Notification
                    key={notification.key}
                    design={notification.status === 'ok' ? 'success' : 'error'}
                    title={notification.title}
                    {...notification}>
                    <b style={{ textTransform: 'uppercase' }}>[{notification.status}]: </b>
                    {notification.text}
                    {notification.buttonOk && <div style={{ marginTop: '10px' }}>{notification.buttonOk}</div>}
                </Notifications.Notification>
            )}
        </Notifications>
    );
    expect(snap).toMatchSnapshot();
});
