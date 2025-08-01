import React, { useState, useEffect, ReactNode } from 'react';
import { ThemeProvider } from 'vienna.ui-primitives';
import { notifications } from 'vienna.ui-theme';
import { Notification, NotificationProps } from './Notification';
import { Box, PropsBox } from './Notifications.styles';
import { NotificationService, NotificationType as NotificationServiceProps } from './NotificationService';
import { BoxStyled } from '../Utils/styled';
import { getPresets } from '../Utils/styling';
import { AnyObject } from '../Utils';
import { defaultAlertTestId } from '@/Alert/Alert';

export const defaultNotificationsTestId: NotificationsProps['testId'] = {
    container: 'notifications_container',
    alert: defaultAlertTestId,
};

export interface NotificationsProps
    extends Omit<BoxStyled<typeof Box, PropsBox>, 'children'>,
        Pick<NotificationServiceProps, 'onClose' | 'compact'> {
    align?: PropsBox['$align'];
    valign?: PropsBox['$valign'];
    service: NotificationService;
    delay?: number;
    children?: ReactNode | ((data: NotificationServiceProps) => ReactNode);
    limit?: number;
    pinWithMouse?: boolean;
    testId?: NotificationProps['testId'];
}

export const Notifications: React.FC<NotificationsProps> & {
    Notification: typeof Notification;
} = (props) => {
    const {
        service,
        onClose,
        compact,
        delay,
        children,
        pinWithMouse,
        align = 'center',
        valign = 'top',
        testId = defaultNotificationsTestId,
        limit,
        ...attrs
    } = props;
    const [, setRefresh] = useState(0);
    const [theme, setTheme] = useState<AnyObject>({}); // Initialize with an empty object

    const forceUpdate = () => setRefresh((prev) => prev + 1);

    useEffect(() => {
        const builtTheme = buildTheme();
        setTheme(builtTheme);
        service.init(forceUpdate, limit);

        return () => {
            service.clear();
        };
    }, [service, limit]);

    const handleClose = (
        e: React.MouseEvent<HTMLSpanElement> | null,
        data: NotificationServiceProps,
        handler: NotificationServiceProps['onClose']
    ) => {
        if (data.id) {
            service.remove(data.id);
        }

        if (handler) {
            handler(e, data);
        }

        if (onClose) {
            onClose(e, data);
        }
    };

    const buildTheme = () => {
        const presets = getPresets(
            notifications.notification,
            'notifications.notification'
        )({
            design: null,
            button: null,
            actionsGap: null,
            notificationsGap: null,
        });

        return {
            alert: {
                design: presets.design(props) as AnyObject,
                custom: presets.notificationsGap(props) as AnyObject,
                buttons: {
                    design: {
                        success: presets.button(props) as AnyObject,
                        error: presets.button(props) as AnyObject,
                        warning: presets.button(props) as AnyObject,
                        plain: presets.button(props) as AnyObject,
                        accent: presets.button(props) as AnyObject,
                    },
                },
            },
        };
    };

    const content = service.get().map((props) => {
        const { message, actions, onClose: serviceOnClose, ...attrs } = props;

        const params = {
            delay: (props.delay ? props.delay : delay) ?? 5000,
            compact: props.compact ? props.compact : compact,
            onClose: (e: React.MouseEvent | null, data: NotificationServiceProps) =>
                handleClose(e as React.MouseEvent<HTMLSpanElement>, data, serviceOnClose),
            pinWithMouse,
            testId: testId,
            ...attrs,
        };

        if (children && typeof children === 'function') {
            return children({ message, actions, ...params });
        }

        return (
            <Notification key={props.id} actions={actions} {...params}>
                {message}
            </Notification>
        );
    });

    return (
        <ThemeProvider theme={theme}>
            <Box {...attrs} $align={align} $valign={valign}>
                {content}
            </Box>
        </ThemeProvider>
    );
};
Notifications.displayName = 'Notifications';
Notifications.Notification = Notification;
