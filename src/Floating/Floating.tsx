import React, { useState, useEffect } from 'react';
import {
    useFloating,
    Placement,
    offset as floatingOffset,
    autoPlacement,
    autoUpdate,
    flip,
    shift,
    arrow,
} from '@floating-ui/react';
import { IFloatingRendererPopup, Offset, RendererPopupProps } from './types';
import { TriggerTargetExtends } from '@/Trigger';

export type FloatingPlacement = Placement | 'auto' | 'center';

export interface FloatingProps<Target extends TriggerTargetExtends, Popup extends HTMLElement> {
    targetElement: Target | null;
    placement?: FloatingPlacement;
    offset?: Offset;
    disableFlip?: boolean;
    children: IFloatingRendererPopup<Popup>;
}

export function Floating<Target extends TriggerTargetExtends, Popup extends HTMLElement>({
    targetElement,
    placement,
    offset,
    disableFlip,
    children,
}: FloatingProps<Target, Popup>) {
    const [arrowEl, setArrowEl] = useState<HTMLDivElement>();
    const {
        refs,
        floatingStyles,
        placement: currentPlacement,
        isPositioned,
        middlewareData,
    } = useFloating({
        placement: ['auto', 'center'].includes(placement || '') ? undefined : (placement as Placement),
        whileElementsMounted: autoUpdate,
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
            ...(!['auto', 'center'].includes(placement || '') && !disableFlip
                ? [flip({ padding: 5, crossAxis: false, fallbackAxisSideDirection: 'start' })]
                : []),
            shift(),
            arrow({
                element: arrowEl as HTMLDivElement,
                padding: 12,
            }),
        ],
    });

    useEffect(() => {
        refs.setReference(targetElement);
    }, [targetElement]);

    // Костыль для floating-ui, чтобы не происходил скачок при позиционировании
    const styles: React.CSSProperties = { ...floatingStyles };
    styles.visibility = isPositioned ? 'visible' : 'hidden';

    return (
        <>
            {children(refs.setFloating, {
                styles,
                attributes: {
                    placement: currentPlacement as Required<RendererPopupProps>['attributes']['placement'],
                    setArrowEl,
                    middlewareData,
                },
            })}
        </>
    );
}
