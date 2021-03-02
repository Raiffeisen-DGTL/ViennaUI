/* eslint-disable react/sort-comp */
import React, { ReactNode } from 'react';
import { getPresets, ThemeProvider } from 'vienna.ui-primitives';
import { Notification } from './Notification';
import { Box } from './Notifications.styles';
import { NotificationService } from './NotificationService';

interface Props {
    service: NotificationService;
    delay?: number;
    align?: 'left' | 'center' | 'right';
    valign?: 'top' | 'bottom';
    onClose?: (e, data) => void;
    children?: ReactNode;
    compactBelow?: number;
    limit?: number;
    pinWithMouse?: boolean;
}

interface HTMLAttributeProps {
    id?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
    tabIndex?: number;
}

export type NotificationsProps = HTMLAttributeProps & Props;

export class Notifications extends React.PureComponent<NotificationsProps> {
    public static displayName = 'Notifications';

    public static Notification = Notification;
    public static defaultProps = {
        delay: 5000,
        align: 'center',
        valign: 'top',
    };

    private readonly service: NotificationService;
    private readonly theme;

    public constructor(props) {
        super(props);
        this.service = props.service;
        this.service.init(() => this.forceUpdate(), props.limit);

        this.theme = this.buildTheme();
    }

    public render() {
        const { delay, children, compactBelow, pinWithMouse, ...attrs } = this.props;

        const content = this.service.get().map((props) => {
            const { message, actions, ...attrs } = props;

            const params = {
                key: props.id,
                delay: props.delay ? props.delay : delay,
                compactBelow: props.compactBelow ? props.compactBelow : compactBelow,
                onClose: this.handleClose,
                pinWithMouse,
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
            <ThemeProvider theme={this.theme}>
                <Box {...attrs}>{content}</Box>
            </ThemeProvider>
        );
    }

    public componentWillUnmount() {
        this.service.clear();
    }

    private readonly handleClose = (e, data) => {
        this.service.remove(data.id);

        if (this.props.onClose) {
            this.props.onClose(e, data);
        }
    };

    private readonly buildTheme = () => {
        const presets = getPresets('notifications.notification', {
            design: null,
            button: null,
            actionsGap: null,
            notificationsGap: null,
        });

        return {
            alert: {
                design: presets.design(this.props),
                custom: presets.notificationsGap(this.props),
                buttons: {
                    design: {
                        success: presets.button(this.props),
                        error: presets.button(this.props),
                        warning: presets.button(this.props),
                        plain: presets.button(this.props),
                        accent: presets.button(this.props),
                    },
                },
            },
        };
    };
}

export default Notifications;
