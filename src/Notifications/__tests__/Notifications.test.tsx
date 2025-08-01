import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Notifier } from '../NotificationService';
import { Notifications } from '../Notifications';

describe('Notification shots', () => {
    it('should show notification', async () => {
        render(<Notifications service={Notifier} testId={{ container: 'Notification.Box' }} />);
        await act(() => {
            Notifier.plain({
                title: 'Plain notification.',
                message: 'Для нейтральных уведомлений',
            });
        });
        const box = screen.queryByTestId('Notification.Box');
        expect(box).toBeInTheDocument();
    });

    it('should hide notification when click close button', async () => {
        render(
            <Notifications
                service={Notifier}
                testId={{ container: 'Notification.Box', alert: { closeIcon: 'Notification.Close' } }}
            />
        );
        await act(() => {
            Notifier.plain({
                title: 'Plain notification.',
                message: 'Для нейтральных уведомлений',
                delay: 0,
            });
        });

        const box = screen.getByTestId('Notification.Box');
        const closeButton = screen.getByTestId('Notification.Close');
        fireEvent.click(closeButton);
        await waitFor(() => {
            expect(box).not.toBeVisible();
        });

        expect(box).not.toBeInTheDocument();
    });

    it('should call onClose when close notification', async () => {
        const fn = jest.fn();
        render(
            <Notifications
                service={Notifier}
                testId={{ container: 'Notification.Box', alert: { closeIcon: 'Notification.Close' } }}
                onClose={fn}
            />
        );
        await act(() => {
            Notifier.plain({
                title: 'Plain notification.',
                message: 'Для нейтральных уведомлений',
                delay: 0,
            });
        });

        const box = screen.getByTestId('Notification.Box');
        const closeButton = screen.getByTestId('Notification.Close');
        fireEvent.click(closeButton);
        await waitFor(() => {
            expect(box).not.toBeVisible();
        });

        expect(fn).toBeCalled();
    });
});
