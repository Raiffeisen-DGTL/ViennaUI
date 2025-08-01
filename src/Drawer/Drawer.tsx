import React, {
    useCallback,
    ReactNode,
    useState,
    useEffect,
    ForwardRefExoticComponent,
    useRef,
    PropsWithChildren,
    useImperativeHandle,
    MutableRefObject,
    RefAttributes,
} from 'react';
import ReactDOM from 'react-dom';
import ReactFocusLock, { FreeFocusInside } from 'react-focus-lock';
import { useDebounce, usePortal, useWindowResize } from 'vienna.react-use';
import { CloseCancelXIcon } from 'vienna.icons';
import { Screen } from 'vienna.ui-primitives';
import { Fade, Box, CloseIcon, Content } from './Drawer.styles';
import { withTabFocusState, useLockBody } from '../Utils';
import { omit } from '../Utils/omit';
import { useModal } from '../Utils/useModal';
import { RefFunc } from '../Modal/Modal';

const ANIMATION_DURATION = 400;

export const defaultDrawerTestId: DrawerProps['testId'] = {
    btnClose: 'drawer_btn-close',
    overlay: 'drawer_overlay',
};

export type DrawerProps = PropsWithChildren<{
    id?: string;
    state?: {
        children?: ReactNode;
        onClose?: (data?: unknown) => void;
        open?: (() => void) | null;
        close?: (data?: unknown, force?: boolean) => void;
    };
    isOpen?: boolean;
    closeIcon?: ReactNode;
    width?: string | 'auto';
    noScroll?: boolean;
    orientation?: 'left' | 'right' | 'top' | 'bottom';
    onClose?: (data?: unknown) => void | boolean | Promise<boolean>;
    /** Callback функция открытия окна с учётом времени выполнения анимации */
    onAfterOpen?: () => void;
    onPreDispose?: () => void;
    closeByFade?: boolean;
    closeByEscape?: boolean;
    lockBodyScroll?: boolean;
    wrapperPortal?: HTMLElement | React.MutableRefObject<HTMLElement | null> | null;
    testId?: {
        btnClose?: string;
        overlay?: string;
    };
    iconOrientation?: 'left' | 'right';
}>;

export const Drawer = React.forwardRef<RefFunc | HTMLDivElement, DrawerProps>((props, ref) => {
    const {
        id,
        children,
        state,
        onClose,
        onAfterOpen,
        onPreDispose,
        isOpen,
        orientation = 'right',
        closeIcon = <CloseCancelXIcon size='l' />,
        width = '460px',
        closeByFade = true,
        closeByEscape = false,
        lockBodyScroll = false,
        wrapperPortal,
        testId = defaultDrawerTestId,
        iconOrientation = 'left',
    } = props;

    const openTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [init, setInit] = useState(false);
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);

    const drawerPortal = usePortal('drawer');
    const wrapperPortalRef = (wrapperPortal as MutableRefObject<HTMLElement | null>)?.current;
    const containerPortal: HTMLElement | null =
        wrapperPortalRef ?? (wrapperPortal as HTMLElement | null | undefined) ?? drawerPortal;

    const windowRef = useRef<HTMLDivElement>(null); // ref to DrawerBox or DrawerBox, need for getting fact width
    const [rect, setRect] = useState({
        width: ['left', 'right'].includes(orientation) ? width : 'auto',
        height: ['top', 'bottom'].includes(orientation) ? width : 'auto',
    }); // drawer or drawer fact width, need for correct animation
    if (state && isOpen) {
        // eslint-disable-next-line no-console
        console.warn('Нельзя одновременно использовать свойства state и isOpen');
    }
    // need for styled-components accept the changes
    const initDebouncer = useDebounce(setInit, ANIMATION_DURATION);
    const toggleDebouncer = useDebounce(setToggle, 100);

    const predesposeHandler = useCallback(() => {
        if (typeof onPreDispose === 'function') {
            onPreDispose();
        }
    }, [onPreDispose]);

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

    // add methods to incoming drawerHook
    if (state) {
        state.children = children;
        state.onClose = onClose;
        state.open = () => setInit(true);
        state.close = close;
    }

    const prevTarget = useRef<HTMLElement>();
    const fadeMouseDown = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            if (e.target instanceof HTMLElement) {
                prevTarget.current = e.target;
            }
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

    // ***** ANIMATION START

    // when isOpen set to true - create portal !!! DONT ADD init TO DEPS ARRAY !!!
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
    const updateSize = useCallback(() => {
        if (init && windowRef.current) {
            const drawerRect = windowRef.current.getBoundingClientRect();
            const scrollWidth = windowRef.current.scrollWidth;
            if (orientation === 'left' || orientation === 'right') {
                setRect({
                    width: width === 'auto' ? `${drawerRect.width}px` : width,
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

    useLockBody(lockBodyScroll && isOpen);

    useImperativeHandle(ref, () => {
        return { close: (data?: unknown) => close(data), updateSize };
    }, [close, updateSize]);

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

    const WrappedCloseIcon = withTabFocusState((props) => (
        <CloseIcon
            tabIndex={0}
            data-testid={testId?.btnClose}
            onClick={handleClose}
            onKeyPress={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter') handleClose();
            }}
            $orientation={iconOrientation}
            {...omit(props, 'isFocusStateVisible')}>
            {closeIcon}
        </CloseIcon>
    ));

    return (
        document &&
        ReactDOM.createPortal(
            init && (
                <ReactFocusLock autoFocus={false}>
                    <FreeFocusInside>
                        <Fade
                            id={id}
                            $show={show}
                            data-testid={testId?.overlay}
                            onClick={closeByFade ? handleClickFade : () => {}}
                            onMouseDown={fadeMouseDown}>
                            <Box
                                ref={windowRef}
                                $orientation={orientation}
                                $toggle={toggle}
                                $width={rect.width}
                                $height={rect.height}>
                                {closeIcon && <WrappedCloseIcon />}
                                <Content $hasClose={!!closeIcon} $orientation={iconOrientation}>
                                    {children}
                                </Content>
                            </Box>
                        </Fade>
                    </FreeFocusInside>
                </ReactFocusLock>
            ),
            containerPortal ?? document.body
        )
    );
}) as ForwardRefExoticComponent<DrawerProps & RefAttributes<RefFunc | HTMLDivElement>> & {
    Layout: typeof Screen;
    Head: typeof Screen.Head;
    Title: typeof Screen.Title;
    SubTitle: typeof Screen.SubTitle;
    Body: typeof Screen.Body;
    Footer: typeof Screen.Footer;
};

Drawer.displayName = 'Drawer';

Drawer.Layout = Screen;
Drawer.Head = Screen.Head;
Drawer.Title = Screen.Title;
Drawer.SubTitle = Screen.SubTitle;
Drawer.Body = Screen.Body;
Drawer.Footer = Screen.Footer;
