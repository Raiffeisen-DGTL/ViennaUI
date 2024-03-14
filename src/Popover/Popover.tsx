import React, { ReactNode, ReactElement, useCallback, useRef, forwardRef, Ref, CSSProperties } from 'react';
import { PopoverPopup, PopoverPopupProps } from './PopoverPopup';
import { ITrigger, Trigger, TriggerProps, TriggerRendererPopupProps } from '../Trigger';
import { composeRef } from '../Utils/composeRef';

export type PopoverProps<Pop extends HTMLElement = HTMLElement> = Omit<TriggerProps, 'renderPopup' | 'renderTarget'> &
    Omit<PopoverPopupProps, 'onClose' | 'children' | 'content'> & {
        content?: ReactNode | string;
        /** Ширина элемента (250px по умолчанию) */
        width?: number;
        /* Обработчик при открытии элемента */
        onOpen?: () => void;
        /* Обработчик при закрытии элемента */
        onClose?: () => void;
        children: ReactNode | ((ref: Ref<Pop>) => ReactNode);
        className?: string;
        style?: CSSProperties;
    };

function PopoverInternal<Pop extends HTMLElement>(
    { content, width = 250, style, children, disableOutsideClick, onOpen, onClose, ...attrs }: PopoverProps<Pop>,
    forwardedRef: Ref<ITrigger>
) {
    const triggerRef = useRef<ITrigger>(null);
    const closePopoverPopup = useCallback(() => triggerRef.current?.close(), []);

    const renderPopup = (ref: Ref<HTMLDivElement>, { styles }: TriggerRendererPopupProps) => {
        return (
            <PopoverPopup
                ref={ref}
                width={width}
                style={{ ...style, ...styles }}
                onClose={closePopoverPopup}
                {...(attrs as {})}>
                {content}
            </PopoverPopup>
        );
    };

    const renderTarget = (ref: Ref<Pop>) => {
        const renderChildren =
            typeof children === 'function'
                ? children
                : () => {
                      const child = children as ReactElement & { ref: Ref<Pop> };
                      return React.cloneElement(child, { ref: composeRef(ref, child.ref) });
                  };

        return renderChildren(ref);
    };

    return (
        <Trigger
            ref={composeRef(forwardedRef, triggerRef)}
            renderTarget={renderTarget}
            renderPopup={renderPopup}
            disableOutsideClick={disableOutsideClick}
            onOpen={onOpen}
            onClose={onClose}
            {...(attrs as {})}
        />
    );
}

export const Popover = forwardRef(PopoverInternal) as <Pop extends HTMLElement = HTMLElement>(
    p: PopoverProps<Pop> & { ref?: Ref<ITrigger> }
) => ReactElement;
// @ts-ignore
Popover.displayName = 'Popover';
