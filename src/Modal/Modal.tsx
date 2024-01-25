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
import ReactFocusLock from 'react-focus-lock';
import { useDebounce, usePortal } from 'vienna.react-use';
import { CloseCancelX } from 'vienna.icons';
import { Screen } from 'vienna.ui-primitives';
import { Fade, PropsFade, Box, CloseIcon } from './Modal.styles';
import { useLockBody } from '../Utils';
import { BoxStyled } from '../Utils/styled';

const ANIMATION_DURATION = 400;

export interface ModalProps extends BoxStyled<typeof Fade, PropsFade> {
    id?: string;
    state?: {
        children?: ReactNode;
        onClose?: (data?: unknown) => void;
        open?: (() => void) | null;
        close?: (data?: unknown, force?: boolean) => void;
    };
    isOpen?: boolean;
    closeIcon?: ReactNode;
    onClose?: (data?: unknown) => void | boolean | Promise<boolean>;
    onPreDespose?: () => void;
    onPreDispose?: () => void;
    ref?: any;
    closeByFade?: boolean;
    stopBubling?: boolean;
    autoFocus?: boolean;
    children: ReactNode;
}

interface RefFunc {
    close: (data: unknown) => void;
}

export const Modal = forwardRef<RefFunc, ModalProps>((props, ref) => {
    const {
        id,
        children,
        state,
        onClose,
        onPreDespose,
        onPreDispose,
        isOpen,
        closeIcon = <CloseCancelX size='l' />,
        closeByFade = true,
        stopBubling = true,
        autoFocus = false,
        tabIndex = 0,
        ...attrs
    } = props;

    const [init, setInit] = useState(false);
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);
    const containerPortal = usePortal('modal');
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
            return;
        }

        if (typeof onPreDespose === 'function') {
            // eslint-disable-next-line no-console
            console.warn(
                '"onPreDespose" property is deprecated and will be renamed to "onPreDispose" in the next major version.'
            );
            onPreDespose();
        }
    }, [onPreDespose, onPreDispose]);

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
        (data, force = false) => {
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
                    (error) => console.error(error)
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

    const prevTarget = useRef();
    const fadeMouseDown = useCallback(
        (e: any) => {
            prevTarget.current = e.target;
        },
        [prevTarget]
    );

    const handleClickFade = useCallback(
        (e) => {
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

    const boxMouseDown = useCallback(
        (event) => {
            if (stopBubling) {
                event.stopPropagation();
            }
        },
        [stopBubling]
    );

    // ***** ANIMATION START

    // when isOpen set to true - create portal !!! DON'T ADD init TO DEPS ARRAY !!!
    useEffect(() => {
        if (typeof isOpen === 'boolean') {
            if (isOpen) {
                setInit(true);
            } else if (init) {
                close(null, true);
            }
        }
    }, [isOpen, close]);

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

    if (typeof window === 'undefined') {
        return null;
    }

    return (
        document &&
        ReactDOM.createPortal(
            init && (
                <ReactFocusLock returnFocus autoFocus={autoFocus}>
                    <Fade
                        {...(attrs as {})}
                        id={id}
                        $show={show}
                        onClick={closeByFade ? handleClickFade : () => {}}
                        onMouseDown={fadeMouseDown}>
                        <Box tabIndex={tabIndex} $toggle={toggle} onMouseDown={boxMouseDown}>
                            {children}
                            {closeIcon && (
                                <CloseIcon
                                    role='button'
                                    aria-label='Close'
                                    tabIndex={0}
                                    onClick={handleClose}
                                    onKeyPress={(e: KeyboardEvent) => {
                                        if (e.key === 'Enter') handleClose();
                                    }}>
                                    {closeIcon}
                                </CloseIcon>
                            )}
                        </Box>
                    </Fade>
                </ReactFocusLock>
            ),
            containerPortal ?? document.body
        )
    );
}) as ForwardRefExoticComponent<ModalProps & RefAttributes<RefFunc>> & {
    Layout: typeof Screen;
    Head: typeof Screen.Head;
    Title: typeof Screen.Title;
    SubTitle: typeof Screen.SubTitle;
    Body: typeof Screen.Body;
    Footer: typeof Screen.Footer;
};

Modal.displayName = 'Modal';

Modal.Layout = Screen;
Modal.Head = Screen.Head;
Modal.Title = Screen.Title;
Modal.SubTitle = Screen.SubTitle;
Modal.Body = Screen.Body;
Modal.Footer = Screen.Footer;
