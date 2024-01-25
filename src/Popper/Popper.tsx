import { VirtualElement } from '@popperjs/core';
import React, { forwardRef, Ref, useImperativeHandle, useMemo, useState } from 'react';
import { usePopper } from 'react-popper';
import { Offset, PopperPlacement, IPopper, IPopperRendererPopup } from './types';

export interface PopperProps<
    Target extends HTMLElement | VirtualElement = HTMLElement,
    Popup extends HTMLElement = HTMLElement
> {
    targetElement: Target | null;
    offset?: Offset;
    placement?: PopperPlacement | 'center';
    children: IPopperRendererPopup<Popup>;
}

function PopperInternal<Target extends HTMLElement, Popup extends HTMLElement>(
    { targetElement, offset, placement, children }: PopperProps<Target, Popup>,
    ref: Ref<IPopper>
) {
    const [popupElement, setPopupElement] = useState<Popup | null>();

    const computedOffset: [number, number] = useMemo(() => {
        const defaultOffset =
            placement === 'center'
                ? [0, -(popupElement?.offsetHeight || 0) / 2 - (targetElement?.offsetHeight || 0) / 2]
                : [0, 0];
        const propOffset = Array.isArray(offset) ? [offset[0] || 0, offset[1] || 0] : [0, 0];
        return [defaultOffset[0] + propOffset[0], defaultOffset[1] + propOffset[1]];
    }, [offset, placement, popupElement, targetElement]);

    const { styles, attributes, forceUpdate, update } = usePopper(targetElement, popupElement, {
        placement: placement === 'center' ? 'bottom' : placement,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: computedOffset,
                },
            },
        ],
    });

    useImperativeHandle(ref, () => ({ forceUpdate, update }), [forceUpdate, update]);

    return <>{children(setPopupElement, { attributes, styles })}</>;
}

export const Popper = forwardRef(PopperInternal) as <
    Target extends HTMLElement | VirtualElement,
    Popup extends HTMLElement
>(
    p: PopperProps<Target, Popup> & { ref?: Ref<IPopper> }
) => JSX.Element;
