import React, { useState, useRef, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import { useOutsideClick, getScrollParent } from 'vienna.react-use';
import { Close } from 'vienna.icons';
import { Wrapper, Message, Header, Content, CloseIcon, ScrollLocker } from './Popover.styles';

export interface PopoverProps {
    [key: string]: any;
    id?: string;
    design?: 'dark' | 'light';
    anchor?: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'auto';
    header?: React.ReactNode | string;
    content?: React.ReactNode | string;
    /** Блокировать прокрутку экрана если элемент активен */
    noScroll?: boolean;
    /** Включить поддержку событий клавиатуры (для Popover = false, для Hint = true) */
    allowKeyboardEvents?: boolean;
    /** Ширина элемента (250px по умолчанию) */
    width?: number;
    /** Отключает иконку закрытия */
    noClose?: boolean;
    /* Обработчик открытия элемента */
    onOpen?: () => void;
    /* Обработчик закрытия элемента */
    onClose?: () => void;
}

interface Pos {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}

interface Ref {
    open: () => void;
    close: () => void;
    isOpen: boolean;
}

const SHIFT = 8;

export const Popover: React.FC<PopoverProps> = React.forwardRef(
    (props: React.PropsWithChildren<PopoverProps>, ref: React.Ref<Ref>) => {
        const {
            id,
            children,
            content,
            header,
            anchor = 'auto',
            design = 'light',
            width = 250,
            allowKeyboardEvents = false,
            noScroll,
            noClose,
            onOpen,
            onClose,
            ...attrs
        } = props;

        const [active, setActive] = useState(false);
        const [toggle, setToggle] = useState(false);
        const [pos, setPos] = useState<Pos>({ top: 22, left: 0 });

        const messageRef = useRef<HTMLDivElement>(null);
        const wrapperRef = useRef<HTMLDivElement>(null);

        const scrollableParent: any = useMemo(
            () => ({
                current: null,
            }),
            []
        );

        const close = useCallback(() => {
            setToggle(false);
            setTimeout(() => setActive(false), 200);
            const parent = scrollableParent.current;
            if (parent && noScroll) {
                parent.style.overflow = '';
            }
            onClose?.();
        }, [scrollableParent, noScroll, onClose]);

        const open = useCallback(() => {
            setActive(true);
            const parent = scrollableParent.current;
            if (parent && noScroll) {
                const temp = parent.scrollTop;
                parent.style.overflow = 'hidden';
                parent.scrollTop = temp;
            }
            onOpen?.();
        }, [scrollableParent, noScroll, onOpen]);

        useOutsideClick(messageRef, close, { isEnabled: active });

        const handleFocus = useCallback(() => {
            if (allowKeyboardEvents) {
                open();
            }
        }, [allowKeyboardEvents, open]);

        const handleKeyDown = useCallback(
            (e) => {
                if (allowKeyboardEvents) {
                    e.stopPropagation();
                    if (e.key === 'Enter' && !active) {
                        open();
                    }
                    if (e.key === 'Escape' && active) {
                        close();
                    }
                }
            },
            [active, close, allowKeyboardEvents, open]
        );

        useEffect(() => {
            if (ref) {
                const refObj = {
                    open,
                    close,
                    get isOpen() {
                        return toggle;
                    },
                };
                if (typeof ref === 'function') {
                    ref(refObj);
                } else {
                    (ref as any).current = refObj;
                }
            }

            return () => {
                if (ref) {
                    if (typeof ref === 'function') {
                        ref(null);
                    } else {
                        (ref as any).current = null;
                    }
                }
            };
        }, [ref, active, close, open]);

        useEffect(() => {
            const cur = messageRef.current;
            scrollableParent.current = getScrollParent(cur);
            return () => {
                const parent = scrollableParent.current;
                if (parent && noScroll) {
                    parent.style.overflow = '';
                }
            };
        }, [scrollableParent, noScroll]);

        useLayoutEffect(() => {
            const cur = messageRef.current;
            const component = wrapperRef.current;
            if (cur && component && active) {
                cur.style.visibility = 'hidden';
                const rect = cur.getBoundingClientRect();
                const comRect = component.getBoundingClientRect();
                const parent = getScrollParent(cur);
                const parentRect = parent.getBoundingClientRect();

                switch (anchor) {
                    case 'left': {
                        setPos({
                            right: comRect.width + SHIFT,
                            [rect.top + rect.height < parentRect.top ? 'top' : 'bottom']: 0,
                        });
                        break;
                    }
                    case 'top': {
                        setPos({
                            bottom: comRect.height + SHIFT,
                            [rect.left - rect.width > parentRect.left ? 'right' : 'left']: 0,
                        });
                        break;
                    }
                    case 'right': {
                        setPos({
                            left: comRect.width + SHIFT,
                            [rect.top + rect.height < parentRect.bottom ? 'top' : 'bottom']: 0,
                        });
                        break;
                    }
                    case 'bottom': {
                        setPos({
                            top: comRect.height + SHIFT,
                            [rect.left - rect.width > parentRect.left ? 'right' : 'left']: 0,
                        });
                        break;
                    }
                    case 'center': {
                        setPos({
                            left: comRect.width / 2 - rect.width / 2,
                            [rect.top + rect.height < parentRect.bottom ? 'top' : 'bottom']: comRect.height + SHIFT,
                        });
                        break;
                    }
                    case 'auto':
                        {
                            // Определяем возможные валидные смещенния 0 - смещение нвозможно, N + SHIFT - смещение доступно
                            const result = {
                                left:
                                    comRect.left + comRect.width + rect.width + SHIFT < parentRect.right
                                        ? comRect.width + SHIFT
                                        : 0,
                                right:
                                    comRect.right - comRect.width - rect.width - SHIFT > parentRect.left
                                        ? comRect.width + SHIFT
                                        : 0,
                                top:
                                    comRect.top + comRect.height + rect.height + SHIFT < parentRect.bottom
                                        ? comRect.height + SHIFT
                                        : 0,
                                bottom:
                                    comRect.bottom - comRect.height - rect.height - SHIFT > parentRect.top
                                        ? comRect.height + SHIFT
                                        : 0,
                            };

                            // Ищем доступное смещение исходя из того что Popover позиционируется всегода со смещением 2comRect.width или comRect.height в одном из четырех направлений
                            // Первым проверяем выход вниз и на лево и так далее по цепочке выход возможен если сумма двух составляющих смещений равна 4comRect.width + comRect.height + [Два сдвига]
                            // Т.е. мы можем сместить Popover по этим направлениям
                            // Затем обнуляем нужное смещение и удаляем лишнии, которые не участвуют в позиционировании
                            const sum = comRect.width + comRect.height + SHIFT * 2;

                            if (result.left + result.top === sum) {
                                result.left = 0;
                                delete result.right;
                                delete result.bottom;
                                setPos(result);
                                break;
                            }
                            if (result.left + result.bottom === sum) {
                                result.left = 0;
                                delete result.right;
                                delete result.top;
                                setPos(result);
                                break;
                            }
                            if (result.right + result.top === sum) {
                                result.right = 0;
                                delete result.left;
                                delete result.bottom;
                                setPos(result);
                                break;
                            }
                            if (result.right + result.bottom === sum) {
                                result.right = 0;
                                delete result.left;
                                delete result.top;
                                setPos(result);
                                break;
                            }
                        }

                        setPos({});
                        break;
                }

                setToggle(true);
                cur.style.visibility = '';
            }
        }, [active, anchor, scrollableParent]);

        const scrollLockerClickHandle = useCallback((e) => {
            e.stopPropagation();
        }, []);

        return (
            <Wrapper
                ref={wrapperRef}
                id={id}
                tabIndex={0}
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
                onClick={active ? undefined : open}
                {...attrs}>
                {children}
                <Message ref={messageRef} active={active} toggle={toggle} design={design} width={width} {...pos}>
                    {!noClose && (
                        <CloseIcon>
                            <Close size='s' onClick={close} />
                        </CloseIcon>
                    )}
                    {header && <Header>{header}</Header>}
                    <Content>{content}</Content>
                </Message>
                {active && noScroll && <ScrollLocker onClick={scrollLockerClickHandle} />}
            </Wrapper>
        );
    }
);

Popover.displayName = 'Popover';
export default Popover;
