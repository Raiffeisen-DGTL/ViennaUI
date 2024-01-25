import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Notifier } from '../NotificationService';
import { Notifications } from '../Notifications';

describe('Notification shots', () => {
    xit('should show notification', () => {
        render(<Notifications service={Notifier} />);
        Notifier.plain({
            title: 'Plain notification.',
            message: 'Для нейтральных уведомлений',
        });

        const box = screen.queryByTestId('Notification.value.Box');
        expect(box).toBeInTheDocument();
    });

    it.skip('should hide notification when click close button', async () => {
        render(<Notifications service={Notifier} />);
        Notifier.plain({
            title: 'Plain notification.',
            message: 'Для нейтральных уведомлений',
            delay: 0,
        });

        const box = screen.getByTestId('Notification.value.Box');
        const closeButton = screen.getByTestId('Notification.value.CloseBox');
        userEvent.click(closeButton);
        await waitFor(() => expect(window.getComputedStyle(box).opacity).toBe('0'));

        expect(box).not.toBeInTheDocument();
    });

    it.skip('should call onClose when close notification', async () => {
        const fn = jest.fn();
        render(<Notifications service={Notifier} onClose={fn} />);
        Notifier.plain({
            title: 'Plain notification.',
            message: 'Для нейтральных уведомлений',
            delay: 0,
        });

        const box = screen.getByTestId('Notification.value.Box');
        const closeButton = screen.getByTestId('Notification.value.CloseBox');
        userEvent.click(closeButton);
        await waitFor(() => expect(window.getComputedStyle(box).opacity).toBe('0'));

        expect(fn).toBeCalled();
    });
});
