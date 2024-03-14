import React, { forwardRef, useEffect } from 'react';
import { useFloating, Placement, offset as floatingOffset, autoPlacement } from '@floating-ui/react';
import { IFloatingRendererPopup, Offset } from './types';

export interface FloatingProps<Target extends HTMLElement = HTMLElement, Popup extends HTMLElement = HTMLElement> {
    targetElement: Target | null;
    placement?: Placement | 'auto' | 'center';
    offset?: Offset;
    children: IFloatingRendererPopup<Popup>;
}

function FloatingInternal<Target extends HTMLElement, Popup extends HTMLElement>({
    targetElement,
    placement,
    offset,
    children,
}: FloatingProps<Target, Popup>) {
    const {
        refs,
        floatingStyles,
        placement: currentPlacement,
    } = useFloating({
        placement: ['auto', 'center'].includes(placement || '') ? undefined : (placement as Placement),
        middleware: [
            placement === 'center'
                ? floatingOffset(({ rects }) => -rects.reference.height / 2 - rects.floating.height / 2)
                : floatingOffset({
                      mainAxis: offset ? offset[0] || 0 : 0,
                      crossAxis: offset ? offset[1] || 0 : 0,
                      alignmentAxis: 0,
                  }),
            ...(placement === 'auto'
                ? [
                      autoPlacement({
                          crossAxis: false,
                      }),
                  ]
                : []),
        ],
    });

    useEffect(() => {
        refs.setReference(targetElement);
    }, [targetElement]);

    return <>{children(refs.setFloating, { styles: floatingStyles, attributes: { placement: currentPlacement } })}</>;
}

export const Floating = forwardRef(FloatingInternal) as <Target extends HTMLElement, Popup extends HTMLElement>(
    p: FloatingProps<Target, Popup> & { ref?: any }
) => JSX.Element;
