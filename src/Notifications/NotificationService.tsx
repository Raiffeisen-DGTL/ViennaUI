import { ReactNode } from 'react';
import { ResponsiveProp } from '../Utils/responsiveness';

export interface Notification {
    id?: string;
    design?: 'plain' | 'error' | 'warning' | 'success' | 'accent';
    title?: ReactNode;
    message?: ReactNode;
    actions?: ReactNode;
    delay?: number;
    compactBelow?: number;
    compact?: ResponsiveProp<boolean>;
}

export class NotificationService {
    private counter = 0;
    private readonly subscribers: (() => void)[] = [];
    private notifications: Notification[] = [];
    private limit?: number = undefined;

    public init(notify, limit?) {
        this.subscribers.push(notify);
        this.limit = limit;
    }

    public get() {
        const limit = this.limit ?? this.notifications.length;
        return this.notifications.slice(0, limit);
    }

    public add(notification: Notification) {
        if (!notification.id) {
            notification.id = `notification_${this.counter}`;
            this.counter++;
        }

        this.notifications.push(notification);
        this.broadcast();
    }

    public plain(notification: Notification) {
        this.add({ design: 'plain', ...notification });
    }

    public success(notification: Notification) {
        this.add({ design: 'success', ...notification });
    }

    public warning(notification: Notification) {
        this.add({ design: 'warning', ...notification });
    }

    public error(notification: Notification) {
        this.add({ design: 'error', ...notification });
    }

    public accent(notification: Notification) {
        this.add({ design: 'accent', ...notification });
    }

    public remove(id) {
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
