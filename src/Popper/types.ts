import { State, Placement } from '@popperjs/core';
import { Rect } from '@popperjs/core/lib/types';
import { CSSProperties, ReactNode, Ref } from 'react';

export type PopperPlacement = Placement;

export type OffsetsFunction = (arg0: {
    popper: Rect;
    reference: Rect;
    placement: Placement;
}) => [number | null | undefined, number | null | undefined];

export type Offset = OffsetsFunction | [number | null | undefined, number | null | undefined];

export interface RendererPopupProps {
    attributes: {
        [key: string]: { [key: string]: string } | undefined;
    };
    styles: { [key: string]: CSSProperties };
}

export type IPopperRendererPopup<Popup extends HTMLElement, Props extends RendererPopupProps = RendererPopupProps> = (
    ref: Ref<Popup>,
    props: Props
) => ReactNode;

export interface IPopper {
    forceUpdate: (() => void) | null;
    update: (() => Promise<Partial<State>>) | null;
}
