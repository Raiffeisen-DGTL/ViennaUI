/* eslint-disable react/sort-comp */
import React, { ReactNode, PureComponent } from 'react';
import { ThemeProvider } from 'vienna.ui-primitives';
import { ResponsiveProp } from '../Utils/responsiveness';
import { Notification } from './Notification';
import { Box, PropsBox } from './Notifications.styles';
import { NotificationService, Notification as NotificationProps } from './NotificationService';
import { BoxStyled } from '../Utils/styled';
import { getPresets } from '../Utils/styling';

export interface NotificationsProps extends BoxStyled<typeof Box, PropsBox> {
    align?: PropsBox['$align'];
    valign?: PropsBox['$valign'];
    service: NotificationService;
    delay?: number;
    onClose?: (e, data) => void;
    children?: ReactNode | ((data: NotificationProps) => ReactNode) | any;
    limit?: number;
    pinWithMouse?: boolean;
    compactBelow?: number;
    compact?: ResponsiveProp<boolean>;
}

export class Notifications extends PureComponent<NotificationsProps> {
    public static displayName = 'Notifications';

    public static Notification = Notification;

    private readonly service: NotificationService;
    private readonly theme;

    public constructor(props) {
        super(props);
        this.service = props.service;
        this.theme = this.buildTheme();
    }

    public componentDidMount() {
        this.service.init(() => this.forceUpdate(), this.props.limit);
    }

    public render() {
        const {
            delay,
            children,
            compactBelow,
            compact,
            pinWithMouse,
            align = 'center',
            valign = 'top',
            ...attrs
        } = this.props;

        const content = this.service.get().map((props) => {
            const { message, actions, ...attrs } = props;

            const params = {
                delay: (props.delay ? props.delay : delay) ?? 5000,
                compactBelow: props.compactBelow ? props.compactBelow : compactBelow,
                compact: props.compact ? props.compact : compact,
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
                <Box {...(attrs as {})} $align={align} $valign={valign}>
                    {content}
                </Box>
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
