import React from 'react';
import { Close } from 'vienna.icons';
import { Alert } from '../../Alert';
import { CloseBox, Box } from './Notification.styles';

export interface Props {
    children: React.ReactNode;
    title?: React.ReactNode;
    actions?: React.ReactNode;
    design?: 'plain' | 'error' | 'warning' | 'success' | 'accent';
    delay?: number;
    compactBelow?: number;
    pinWithMouse?: boolean;
    onClose: (e, data) => void;
}

interface HTMLAttributeProps {
    id?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
    tabIndex?: number;
}

export type NotificationProps = HTMLAttributeProps & Props;

interface State {
    open: boolean;
}

export class Notification extends React.PureComponent<NotificationProps, State> {
    public static defaultProps = {
        design: 'plain',
    };

    // eslint-disable-next-line react/sort-comp
    private timer;
    private readonly containerRef = React.createRef<HTMLInputElement>();
    // Mouse handlers to pin Notification with mouse
    private readonly mouseHandlers;

    public constructor(props: NotificationProps) {
        super(props);
        this.state = { open: true };
        this.setTimer();
        this.mouseHandlers = props.pinWithMouse
            ? {
                  onMouseEnter: this.cancelTimer,
                  onMouseLeave: this.setTimer,
              }
            : {};
    }

    public componentDidMount() {
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
        const { children, compactBelow, actions, design, ...attrs } = this.props;
        const { open } = this.state;

        return (
            <Box ref={this.containerRef} open={open} compactBelow={compactBelow} {...this.mouseHandlers}>
                <Alert design={design} actions={actions} compactBelow={compactBelow} {...attrs}>
                    {children}
                    <CloseBox design={design} onClick={this.handleClose}>
                        <Close />
                    </CloseBox>
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

        if (onClose) {
            this.setState({ open: false }, () =>
                setTimeout(() => {
                    onClose(e, attrs);
                }, 500)
            );
        }

        this.cancelTimer();
    };
}

export default Notification;
