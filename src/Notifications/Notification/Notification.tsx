import React, { useState, useRef, useEffect } from 'react';
import { Alert, AlertProps } from '../../Alert';
import { Flex } from '../../Flex';
import { Box } from './Notification.styles';
import { NotificationType as NotificationService } from '../NotificationService';

export type Design = 'plain' | 'error' | 'warning' | 'success' | 'accent';

export interface NotificationProps
    extends Omit<AlertProps, 'onClose' | 'testId'>,
        Omit<NotificationService, 'id' | 'message'> {
    pinWithMouse?: boolean; // Default is false if not provided, so no need to set a default value here
    onClose: (e: React.MouseEvent | null, data: Omit<NotificationProps, 'onClose'>) => void;
    testId?: {
        container?: string;
        alert?: AlertProps['testId'];
    };
}

export const Notification: React.FC<NotificationProps> = ({
    pinWithMouse,
    delay,
    onClose,
    testId,
    compact,
    design,
    actions,
    children,
    ...attrs
}) => {
    const [open, setOpen] = useState<boolean>(true);
    const containerRef = useRef<HTMLInputElement>(null);

    const setTimer = () => {
        if (delay && delay > 0) {
            return window.setTimeout(() => handleClose(null), delay);
        }
        return null;
    };

    const cancelTimer = () => {
        const timer = setTimer();
        if (timer) {
            clearTimeout(timer);
        }
    };

    const mouseHandlers = pinWithMouse
        ? {
              onMouseEnter: cancelTimer,
              onMouseLeave: setTimer,
          }
        : {};

    useEffect(() => {
        setTimer();
        const container = containerRef.current;
        const getContainerHeight = (container: HTMLInputElement) => getComputedStyle(container).height;

        if (container) {
            const height = getContainerHeight(container);

            container.style.height = '0';
            // This hack need for smooth animation
            getContainerHeight(container);

            container.style.height = height;
        }

        return () => {
            cancelTimer();
        };
    }, [delay, containerRef]);

    const handleClose = (e: React.MouseEvent | null) => {
        setOpen(false);

        if (onClose) {
            setTimeout(() => {
                onClose(e, attrs);
            }, 500);
        }

        cancelTimer();
    };

    return (
        <Box {...mouseHandlers} ref={containerRef} $open={open} $compact={compact} data-testid={testId?.container}>
            <Alert
                {...attrs}
                design={design || 'plain'}
                actions={actions}
                compact={compact}
                testId={testId?.alert}
                onClose={handleClose}>
                <Flex justifyContent={'space-between'}>{children}</Flex>
            </Alert>
        </Box>
    );
};
