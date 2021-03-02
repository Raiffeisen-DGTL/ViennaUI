import React, { useCallback, useState, useEffect, ForwardRefExoticComponent, RefAttributes, useRef } from 'react';
import ReactDOM from 'react-dom';
import ReactFocusLock from 'react-focus-lock';
import { useDebounce, useWindowResize } from 'vienna.react-use';
import { Close } from 'vienna.icons';
import { Screen, ScreenSlots } from 'vienna.ui-primitives';
import { Fade, Box, CloseIcon, Content } from './Drawer.styles';
import { withTabFocusState } from '../Utils';

const ANIMATION_DURATION = 400;

export interface DrawerProps extends React.PropsWithChildren<any> {
    id?: string;
    state?: any;
    isOpen?: boolean;
    closeIcon?: React.ReactNode;
    noScroll?: boolean;
    orientation?: 'left' | 'right' | 'top' | 'bottom';
    onClose?: (data?: any) => void | boolean | Promise<boolean>;
    onPreDespose?: () => void;
    ref?: any;
}

export interface DrawerSlots extends ScreenSlots {
    Layout: typeof Screen;
}

export const Drawer: React.FC<DrawerProps> & DrawerSlots = React.forwardRef((props: DrawerProps, ref: any) => {
    const {
        id,
        children,
        state,
        onClose,
        onPreDespose,
        isOpen,
        orientation = 'right',
        closeIcon = <Close size='l' />,
    } = props;

    const [init, setInit] = useState(false);
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);

    const windowRef = useRef<any>(); // ref to DrawerBox or DrawerBox, need for getting fact width
    const [rect, setRect] = useState({ width: 'auto', height: 'auto' }); // drawer or drawer fact width, need for correct animation

    if (state && isOpen) {
        // eslint-disable-next-line no-console
        console.warn('Нельзя одновременно использовать свойства state и isOpen');
    }

    // need for styled-components accept the changes
    const initDebouncer = useDebounce(setInit, ANIMATION_DURATION);
    const toggleDebouncer = useDebounce(setToggle, 100);

    const predesposeHandler = useCallback(() => {
        setRect({ width: 'auto', height: 'auto' });
        if (typeof onPreDespose === 'function') {
            onPreDespose();
        }
    }, [onPreDespose]);

    // close animation process
    const playCloseAnimation = useCallback(() => {
        // hide drawer box
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

    // add methods to incoming drawerHook
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
    const updateSize = useCallback(() => {
        if (init && windowRef.current) {
            const drawerRect = (windowRef.current as HTMLDivElement).getBoundingClientRect();
            const scrollWidth = (windowRef.current as HTMLDivElement).scrollWidth;

            if (orientation === 'left' || orientation === 'right') {
                setRect({
                    width: `${drawerRect.width}px`,
                    height: '100%',
                });
                return;
            }

            setRect({
                width: scrollWidth === window.innerWidth ? '100%' : `${scrollWidth}px`,
                height: `${drawerRect.height}px`,
            });
        }
    }, [init, orientation]);

    useWindowResize(updateSize);

    useEffect(() => {
        if (init) {
            updateSize();
            // show fade
            setShow(true);
            // show drawer - need foe correct animation
            toggleDebouncer(true);
        }
    }, [init, toggleDebouncer, updateSize]);

    // ***** ANIMATION END

    useEffect(
        () => () => {
            if (typeof ref === 'function') {
                ref({ close: (data?) => close(data), updateSize });
            } else if (ref && 'current' in ref) {
                ref.current = { close: (data?) => close(data), updateSize };
            }
        },
        [ref, close, updateSize]
    );

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
                        <Box
                            ref={windowRef}
                            orientation={orientation}
                            toggle={toggle}
                            width={rect.width}
                            height={rect.height}
                            onClick={boxClickHandler}
                            onMouseDown={boxMouseDown}>
                            {closeIcon && <WrappedCloseIcon />}
                            <Content>{children}</Content>
                        </Box>
                    </Fade>
                </ReactFocusLock>
            ),
            document.body
        )
    );
}) as ForwardRefExoticComponent<DrawerProps & RefAttributes<any>> & DrawerSlots;

Drawer.displayName = 'Drawer';

Drawer.Layout = Screen;
Drawer.Head = Screen.Head;
Drawer.Title = Screen.Title;
Drawer.SubTitle = Screen.SubTitle;
Drawer.Body = Screen.Body;
Drawer.Footer = Screen.Footer;

export default Drawer;
