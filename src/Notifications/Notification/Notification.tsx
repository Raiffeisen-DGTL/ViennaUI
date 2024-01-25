import React, { ReactNode, PureComponent } from 'react';
import { CloseCancelX } from 'vienna.icons';
import { ResponsiveProp } from '../../Utils/responsiveness';
import { Alert, AlertProps } from '../../Alert';
import { Flex } from '../../Flex';
import { CloseBox, Box } from './Notification.styles';

export type Design = 'plain' | 'error' | 'warning' | 'success' | 'accent';

export interface NotificationProps extends AlertProps {
    title?: ReactNode;
    actions?: ReactNode;
    design?: Design;
    delay?: number;
    compactBelow?: number;
    compact?: ResponsiveProp<boolean>;
    pinWithMouse?: boolean;
    onClose: (e, data) => void;
}

interface State {
    open: boolean;
}

export class Notification extends PureComponent<NotificationProps, State> {
    // eslint-disable-next-line react/sort-comp
    private timer;
    private readonly containerRef = React.createRef<HTMLInputElement>();
    // Mouse handlers to pin Notification with mouse
    private readonly mouseHandlers;

    public constructor(props: NotificationProps) {
        super(props);
        this.state = { open: true };
        this.mouseHandlers = props.pinWithMouse
            ? {
                  onMouseEnter: this.cancelTimer,
                  onMouseLeave: this.setTimer,
              }
            : {};
    }

    public componentDidMount() {
        this.setTimer();
        const container = this.containerRef.current;
        const getContainerHeight = (container) => getComputedStyle(container).height;

        if (container) {
            const height = getContainerHeight(container);

            container.style.height = '0';
            // This hack need for smooth animation
            getContainerHeight(container);

            container.style.height = height;
        }
    }

    public componentWillUnmount() {
        this.cancelTimer();
    }

    public render() {
        const { children, compactBelow, compact, actions, design = 'plain', ...attrs } = this.props;
        const { open } = this.state;

        return (
            <Box {...(this.mouseHandlers as {})} ref={this.containerRef} $open={open} $compactBelow={compactBelow}>
                <Alert
                    {...(attrs as {})}
                    design={design}
                    actions={actions}
                    compact={compact}
                    compactBelow={compactBelow}
                    rightContainer={
                        <CloseBox $design={design} onClick={this.handleClose}>
                            <CloseCancelX />
                        </CloseBox>
                    }>
                    <Flex justifyContent={'space-between'}>{children}</Flex>
                </Alert>
            </Box>
        );
    }

    private readonly setTimer = () => {
        const { delay } = this.props;
        if (delay && delay > 0 && !this.timer) {
            this.timer = window.setTimeout(() => this.handleClose(null), delay);
        }
    };

    private readonly cancelTimer = () => {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    };

    private readonly handleClose = (e) => {
        const { onClose, ...attrs } = this.props;

        this.setState({ open: false }, () => {
            if (onClose) {
                setTimeout(() => {
                    onClose(e, attrs);
                }, 500);
            }
        });

        this.cancelTimer();
    };
}
