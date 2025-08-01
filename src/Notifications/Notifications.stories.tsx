import React from 'react';
import { Story, Meta } from 'storybook';
import { Notifications, NotificationsProps } from './Notifications';
import { Notification } from './Notification';
import { NotificationService, Notifier } from './NotificationService';
import { Button } from '../Button';
import { Groups } from '../Groups';

export default {
    title: 'Development/Notifications',
    component: Notifications,
} as Meta;

export const Overview: Story<NotificationsProps> = (args) => {
    return (
        <Groups>
            <Notifications service={Notifier} {...args} limit={3} />
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
    );
};
export const WithButton: Story<NotificationsProps> = () => {
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
        <>
            <Notifications service={Notifier} />
            <Button onClick={() => Notifier.plain(notification)}>Plain</Button>
        </>
    );
};
WithButton.storyName = 'С кнопками';

export const WithSameIds: Story<NotificationsProps> = (args) => {
    return (
        <Groups>
            <Notifications service={Notifier} {...args} limit={3} />
            <Button
                onClick={() =>
                    Notifier.plain({
                        title: 'Plain notification.',
                        message: 'Для нейтральных уведомлений',
                        id: '1',
                    })
                }>
                Id 1
            </Button>
            <Button
                onClick={() =>
                    Notifier.accent({
                        title: 'Plain notification.',
                        message: 'Для нейтральных уведомлений',
                        id: '1',
                    })
                }>
                Id 1
            </Button>
            <Button
                design='accent'
                onClick={() =>
                    Notifier.success({
                        title: 'Success notification.',
                        message: 'Для успешных уведомлений.',
                        id: '2',
                    })
                }>
                Id 2
            </Button>
            <Button
                design='outline-critical'
                onClick={() =>
                    Notifier.warning({
                        title: 'Warning notification.',
                        message: 'Для предупреждений.',
                        id: '3',
                    })
                }>
                Id 3
            </Button>
        </Groups>
    );
};

export const CustomNotifications: Story<NotificationsProps> = (args) => {
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
            <Notifications align='right' compact valign='bottom' service={custom}>
                {(notification) => (
                    <Notifications.Notification
                        key={notification.id}
                        actions={notification.actions}
                        delay={notification.delay}
                        compact={notification.compact}
                        onClose={notification.onClose}
                        pinWithMouse={notification.pinWithMouse}
                        testId={notification.testId}
                        design={notification.status === 'ok' ? 'success' : 'error'}
                        title={notification.title}>
                        <b style={{ textTransform: 'uppercase' }}>[{notification.status}]: </b>
                        {notification.text}
                        {notification.button_ok && <div style={{ marginTop: '10px' }}>{notification.button_ok}</div>}
                    </Notifications.Notification>
                )}
            </Notifications>
            <Button onClick={() => send(true)}>Success</Button>
            <Button onClick={() => send(false)}>Error</Button>
        </Groups>
    );
};
