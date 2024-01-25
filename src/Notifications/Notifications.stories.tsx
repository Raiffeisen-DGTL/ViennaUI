import React from 'react';
import { Story, Meta } from 'storybook';
import { Notifications, NotificationsProps } from './Notifications';
import { Notifier } from './NotificationService';
import { Button } from '../Button';
import { Groups } from '../Groups';

export default {
    title: 'Development/Notifications',
    component: Notifications,
} as Meta;

export const Overview: Story<NotificationsProps> = (args) => {
    return (
        <Groups>
            <Notifications service={Notifier} {...args} />
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
