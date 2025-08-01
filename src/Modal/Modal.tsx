import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
    forwardRef,
    ForwardRefExoticComponent,
    KeyboardEvent,
    RefAttributes,
    ReactNode,
} from 'react';
import ReactDOM from 'react-dom';
import ReactFocusLock, { FreeFocusInside } from 'react-focus-lock';
import { useDebounce, usePortal } from 'vienna.react-use';
import { CloseCancelXIcon } from 'vienna.icons';
import { Screen } from 'vienna.ui-primitives';
import { Fade, PropsFade, Box, CloseIcon, PropsBox } from './Modal.styles';
import { useLockBody } from '../Utils';
import { BoxStyled } from '../Utils/styled';
import { useModal } from '../Utils/useModal';
import { Breakpoints } from '../Utils/responsiveness';

const ANIMATION_DURATION = 400;

export const defaultModalTestId: ModalProps['testId'] = {
    container: 'modal_container',
    closeIcon: 'modal_close-icon',
};

export interface ModalProps<B = Breakpoints> extends Omit<BoxStyled<typeof Fade, PropsFade>, 'ref'> {
    id?: string;
    containerId?: string;
    state?: {
        children?: ReactNode;
        onClose?: (data?: unknown) => void;
        open?: (() => void) | null;
        close?: (data?: unknown, force?: boolean) => void;
    };
    isOpen?: boolean;
    closeIcon?: ReactNode;
    onClose?: (data?: unknown) => void | boolean | Promise<boolean>;
    /** Callback функция открытия окна с учётом времени выполнения анимации */
    onAfterOpen?: () => void;
    onPreDispose?: () => void;
    closeByFade?: boolean;
    closeByEscape?: boolean;
    hideCloseIcon?: boolean;
    blurOverlay?: boolean;
    stopBubbling?: boolean;
    autoFocus?: boolean;
    children: ReactNode;
    size?: PropsBox<B>['$size'];
    width?: number;
    closeIconRef?: React.MutableRefObject<HTMLDivElement | null>;
    testId?: {
        container?: string;
        closeIcon?: string;
    };
}

export interface RefFunc {
    close: (data: unknown) => void;
}

export const Modal = forwardRef<RefFunc | HTMLDivElement, ModalProps>((props, ref) => {
    const {
        id,
        containerId = 'modal',
        children,
        state,
        onAfterOpen,
        onClose,
        onPreDispose,
        isOpen,
        closeIcon = <CloseCancelXIcon size='m' />,
        closeByFade = true,
        closeByEscape = false,
        closeIconRef,
        hideCloseIcon = false,
        blurOverlay = false,
        stopBubbling = false,
        autoFocus = false,
        tabIndex = 0,
        size,
        width,
        testId = defaultModalTestId,
        ...attrs
    } = props;

    const openTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [init, setInit] = useState(false);
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);
    const containerPortal = usePortal(containerId);
    if (state && isOpen) {
        // eslint-disable-next-line no-console
        console.warn('Нельзя одновременно использовать свойства state и isOpen');
    }

    useLockBody(isOpen);

    // need for styled-components accept the changes
    const initDebouncer = useDebounce(setInit, ANIMATION_DURATION);
    const toggleDebouncer = useDebounce(setToggle, 100);

    const predisposeHandler = useCallback(() => {
        if (typeof onPreDispose === 'function') {
            onPreDispose();
        }
    }, [onPreDispose]);

    // close animation process
    const playCloseAnimation = useCallback(() => {
        // hide modal box
        toggleDebouncer(false, () => {
            // hide fade
            setShow(false);
        });
        // unmount
        initDebouncer(false, predisposeHandler);
    }, [toggleDebouncer, initDebouncer, predisposeHandler]);

    const close = useCallback(
        (data: unknown, force = false) => {
            if (force || typeof onClose !== 'function') {
                playCloseAnimation();
                return;
            }
            const flag = onClose(data);
            if (flag instanceof Promise) {
                flag.then(
                    (flag) => {
                        if (flag || flag === undefined) {
                            playCloseAnimation();
                        }
                    },
                    // eslint-disable-next-line no-console
                    (error: Error) => console.error(error)
                );
                return;
            }
            if (flag === true || flag === undefined) {
                playCloseAnimation();
            }
        },
        [onClose, playCloseAnimation]
    );

    // add methods to incoming modalHook
    if (state) {
        state.children = children;
        state.onClose = onClose;
        state.open = () => setInit(true);
        state.close = close;
    }

    const prevTarget = useRef<HTMLSpanElement>();
    const fadeMouseDown = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            prevTarget.current = e.target as HTMLDivElement;
        },
        [prevTarget]
    );

    const handleClickFade = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            // Ignore the events not coming from the "fade"
            // We don't want to close the dialog when clicking the dialog content.
            if (e.target !== e.currentTarget) {
                return;
            }

            // Make sure the event starts and ends on the same DOM element.
            if (prevTarget.current !== e.target) {
                return;
            }
            close(null);
        },
        [close]
    );

    const handleClose = useCallback(() => close(null), [close]);
    const { useModalEscapeHandler } = useModal({ closeByEscape, handleClose });

    const boxMouseDown = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            if (stopBubbling) {
                event.stopPropagation();
            }
        },
        [stopBubbling]
    );

    // ***** ANIMATION START

    // when isOpen set to true - create portal !!! DON'T ADD init TO DEPS ARRAY !!!
    useEffect(() => {
        if (typeof isOpen === 'boolean') {
            if (isOpen) {
                setInit(true);
                openTimeoutRef.current = setTimeout(() => {
                    onAfterOpen?.();
                }, ANIMATION_DURATION);
            } else if (init) {
                close(null, true);
            }
        }
    }, [isOpen, close]);

    // reset timeout if init state was set to false
    useEffect(() => {
        if (!init && openTimeoutRef.current !== null) {
            clearTimeout(openTimeoutRef.current);
        }
    }, [init]);

    // when portal created show fade
    useEffect(() => {
        if (init) {
            // show fade
            setShow(true);
            // show modal - need foe correct animation
            toggleDebouncer(true);
        }
    }, [init, toggleDebouncer]);

    // ***** ANIMATION END

    useEffect(() => {
        if (typeof ref === 'function') {
            ref({ close: (data?) => close(data) });
        }
    }, [ref, close]);

    // if we unmount component - despose debouncers
    useEffect(
        () => () => {
            initDebouncer.despose();
            toggleDebouncer.despose();
        },
        []
    );

    useModalEscapeHandler();

    if (typeof window === 'undefined') {
        return null;
    }

    return (
        document &&
        ReactDOM.createPortal(
            init && (
                <ReactFocusLock autoFocus={autoFocus}>
                    <FreeFocusInside>
                        <Fade
                            {...attrs}
                            id={id}
                            $show={show}
                            $blur={blurOverlay}
                            onClick={closeByFade ? handleClickFade : () => {}}
                            onMouseDown={fadeMouseDown}>
                            <Box
                                tabIndex={tabIndex}
                                $toggle={toggle}
                                $size={size}
                                $width={width}
                                onMouseDown={boxMouseDown}
                                data-testid={testId?.container}>
                                {children}
                                {!hideCloseIcon && closeIcon && (
                                    <CloseIcon
                                        ref={closeIconRef}
                                        role='button'
                                        aria-label='Close'
                                        tabIndex={0}
                                        onClick={handleClose}
                                        onKeyPress={(e: KeyboardEvent) => {
                                            if (e.key === 'Enter') handleClose();
                                        }}
                                        data-testid={testId?.closeIcon}>
                                        {closeIcon}
                                    </CloseIcon>
                                )}
                            </Box>
                        </Fade>
                    </FreeFocusInside>
                </ReactFocusLock>
            ),
            containerPortal ?? document.body
        )
    );
}) as ForwardRefExoticComponent<ModalProps & RefAttributes<RefFunc | HTMLDivElement>> & {
    Layout: typeof Screen;
    Head: typeof Screen.Head;
    Title: typeof Screen.Title;
    SubTitle: typeof Screen.SubTitle;
    Body: typeof Screen.Body;
    Footer: typeof Screen.Footer;
};

Modal.displayName = 'Modal';

type TitleProps = Parameters<typeof Screen.Title>[0];

// Добавить testId в компоненты ui-primitives при переносе в atlant
const TitleWithTestId: React.FC<TitleProps> = (props) => {
    return <Screen.Title data-testid='screen_title' {...props} />;
};

Modal.Layout = Screen;
Modal.Head = Screen.Head;
Modal.Title = TitleWithTestId;
Modal.SubTitle = Screen.SubTitle;
Modal.Body = Screen.Body;
Modal.Footer = Screen.Footer;
