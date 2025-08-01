import React, { ReactNode } from 'react';
import { Design } from './Notification/Notification';
import { ResponsiveProp } from '../Utils/responsiveness';

export interface NotificationType {
    id?: string;
    design?: Design;
    title?: ReactNode;
    message?: ReactNode;
    actions?: ReactNode;
    delay?: number;
    compact?: ResponsiveProp<boolean>;
    onClose?: (e: React.MouseEvent<HTMLSpanElement> | null, data: NotificationType) => void;
}

export class NotificationService {
    private counter = 0;
    private readonly subscribers: (() => void)[] = [];
    private notifications: NotificationType[] = [];
    private limit?: number = undefined;
    public init(notify: () => void, limit?: number) {
        this.subscribers.push(notify);
        this.limit = limit;
    }

    public get() {
        const limit = this.limit ?? this.notifications.length;
        return this.notifications.slice(0, limit);
    }

    public add(notification: NotificationType) {
        if (notification.id && this.notifications.some(({ id }) => id === notification.id)) {
            // eslint-disable-next-line no-console
            console.error('Одновременно не может выводиться 2 элемента с одинаковым id');
            return;
        }

        if (!notification.id) {
            notification.id = `notification_${this.counter}`;

            this.counter++;
        }

        this.notifications.push(notification);

        this.broadcast();
    }

    public plain(notification: NotificationType) {
        this.add({ design: 'plain', ...notification });
    }

    public success(notification: NotificationType) {
        this.add({ design: 'success', ...notification });
    }

    public warning(notification: NotificationType) {
        this.add({ design: 'warning', ...notification });
    }

    public error(notification: NotificationType) {
        this.add({ design: 'error', ...notification });
    }

    public accent(notification: NotificationType) {
        this.add({ design: 'accent', ...notification });
    }

    public remove(id: string) {
        this.notifications = this.notifications.filter((n) => n.id !== id);

        this.broadcast();
    }

    public clear() {
        this.notifications = [];
        this.subscribers.length = 0;
    }

    private broadcast() {
        this.subscribers.forEach((notify) => {
            notify();
        });
    }
}

export const Notifier = new NotificationService();
