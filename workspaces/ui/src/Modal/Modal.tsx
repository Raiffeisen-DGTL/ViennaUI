import React, { useCallback, useState, useEffect, ForwardRefExoticComponent, RefAttributes, useRef } from 'react';
import ReactDOM from 'react-dom';
import ReactFocusLock from 'react-focus-lock';
import { useDebounce } from 'vienna.react-use';
import { Close } from 'vienna.icons';
import { Screen, ScreenSlots } from 'vienna.ui-primitives';
import { Fade, Box, CloseIcon } from './Modal.styles';
import { withTabFocusState } from '../Utils';

const ANIMATION_DURATION = 400;

export interface ModalProps extends React.PropsWithChildren<any> {
    id?: string;
    state?: any;
    isOpen?: boolean;
    closeIcon?: React.ReactNode;
    onClose?: (data?: any) => void | boolean | Promise<boolean>;
    onPreDespose?: () => void;
    ref?: any;
}

export interface ModalSlots extends ScreenSlots {
    Layout: typeof Screen;
}

export const Modal: React.FC<ModalProps> & ModalSlots = React.forwardRef((props: ModalProps, ref: any) => {
    const { id, children, state, onClose, onPreDespose, isOpen, closeIcon = <Close size='l' /> } = props;

    const [init, setInit] = useState(false);
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);

    if (state && isOpen) {
        // eslint-disable-next-line no-console
        console.warn('Нельзя одновременно использовать свойства state и isOpen');
    }

    // need for styled-components accept the changes
    const initDebouncer = useDebounce(setInit, ANIMATION_DURATION);
    const toggleDebouncer = useDebounce(setToggle, 100);

    const predesposeHandler = useCallback(() => {
        if (typeof onPreDespose === 'function') {
            onPreDespose();
        }
    }, [onPreDespose]);

    // close animation process
    const playCloseAnimation = useCallback(() => {
        // hide modal box
        toggleDebouncer(false, () => {
            // hide fade
            setShow(false);
        });
        // unmount
        initDebouncer(false, predesposeHandler);
    }, [toggleDebouncer, initDebouncer, predesposeHandler]);

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
        (e) => {
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

    const boxClickHandler = useCallback((event) => event.stopPropagation(), []);

    const boxMouseDown = useCallback((event) => event.stopPropagation(), []);

    // ***** ANIMATION START

    // when isOpen set to true - create portal !!! DONT ADD init TO DEPS ARRAY !!!
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
        if (ref) {
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

    const WrappedCloseIcon = withTabFocusState((props) => (
        <CloseIcon
            tabIndex={0}
            onClick={handleClose}
            onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter') handleClose();
            }}
            {...props}>
            {closeIcon}
        </CloseIcon>
    ));

    return (
        document &&
        ReactDOM.createPortal(
            init && (
                <ReactFocusLock returnFocus>
                    <Fade id={id} show={show} onClick={handleClickFade} onMouseDown={fadeMouseDown}>
                        <Box toggle={toggle} onClick={boxClickHandler} onMouseDown={boxMouseDown}>
                            {children}
                            {closeIcon && <WrappedCloseIcon />}
                        </Box>
                    </Fade>
                </ReactFocusLock>
            ),
            document.body
        )
    );
}) as ForwardRefExoticComponent<ModalProps & RefAttributes<any>> & ModalSlots;

Modal.displayName = 'Modal';

Modal.Layout = Screen;
Modal.Head = Screen.Head;
Modal.Title = Screen.Title;
Modal.SubTitle = Screen.SubTitle;
Modal.Body = Screen.Body;
Modal.Footer = Screen.Footer;
export default Modal;
