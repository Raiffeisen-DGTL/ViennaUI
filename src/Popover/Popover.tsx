import React, { ReactNode, ReactElement, useCallback, useRef, forwardRef, Ref, CSSProperties } from 'react';
import { PopoverPopup, PopoverPopupProps } from './PopoverPopup';
import { ITrigger, Trigger, TriggerProps, TriggerRendererPopupProps, TriggerTargetExtends } from '../Trigger';
import { composeRef } from '../Utils/composeRef';
import { omit } from '../Utils/omit';
import { PlacementType } from '@/Utils';

export type PopoverProps<Pop extends TriggerTargetExtends> = Omit<
    TriggerProps<Pop, HTMLDivElement>,
    'renderPopup' | 'renderTarget'
> &
    Omit<PopoverPopupProps, 'onClose' | 'children' | 'content'> & {
        content?: ReactNode | string;
        placement?: PlacementType;
        height?: number;
        size?: Required<PopoverPopupProps>['size'];
        /* Отключает автоматическое позиционирование Popover при нехватке места  */
        disableFlip?: boolean;
        /* Обработчик при открытии элемента */
        onOpen?: () => void;
        /* Обработчик при закрытии элемента */
        onClose?: () => void;
        children: ReactNode | ((ref: Ref<Pop>) => ReactNode);
        className?: string;
        style?: CSSProperties;
        popupStyle?: CSSProperties;
    };

function PopoverInternal<Pop extends TriggerTargetExtends>(
    {
        content,
        width = 250,
        height,
        size,
        style,
        children,
        disableOutsideClick,
        closeOnTargetClick,
        onOpen,
        onClose,
        popupStyle,
        ...attrs
    }: PopoverProps<Pop>,
    forwardedRef: Ref<ITrigger>
) {
    const triggerRef = useRef<ITrigger>(null);
    const closePopoverPopup = useCallback(() => triggerRef.current?.close(), []);
    const omitAttrs = omit(attrs, 'placement', 'refArrow', 'arrowX', 'arrowY', 'visible', 'disableFlip');
    const renderPopup = (ref: Ref<HTMLDivElement>, { styles, attributes }: TriggerRendererPopupProps) => {
        return (
            <PopoverPopup
                ref={ref}
                refArrow={attributes.setArrowEl}
                arrowX={attrs.arrowX ?? attributes.middlewareData.arrow?.x}
                arrowY={attrs.arrowY ?? attributes.middlewareData.arrow?.y}
                width={width}
                height={height}
                size={size}
                placement={attributes.placement}
                style={{ ...style, ...styles, ...popupStyle }}
                onClose={closePopoverPopup}
                // eslint-disable-next-line @typescript-eslint/ban-types
                {...(omitAttrs as {})}>
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
        <Trigger<Pop, HTMLDivElement>
            ref={composeRef(forwardedRef, triggerRef)}
            renderTarget={renderTarget}
            renderPopup={renderPopup}
            disableOutsideClick={disableOutsideClick}
            closeOnTargetClick={closeOnTargetClick}
            onOpen={onOpen}
            onClose={onClose}
            // eslint-disable-next-line @typescript-eslint/ban-types
            {...(attrs as {})}
        />
    );
}

export const Popover = forwardRef(PopoverInternal) as unknown as (<Pop extends TriggerTargetExtends = HTMLElement>(
    p: PopoverProps<Pop> & { ref?: Ref<ITrigger> }
) => ReactElement) & { displayName?: string };

Popover.displayName = 'Popover';
