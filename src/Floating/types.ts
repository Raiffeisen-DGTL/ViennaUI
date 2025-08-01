import { CSSProperties, Dispatch, ReactNode, Ref, SetStateAction } from 'react';
import { MiddlewareData } from '@floating-ui/react';

export type Offset = [number | null | undefined, number | null | undefined];

export interface RendererPopupProps {
    attributes: {
        placement: 'top' | 'bottom' | 'left' | 'right';
        popoverPlacement?:
            | 'left'
            | 'right'
            | 'top'
            | 'bottom'
            | 'left-bottom'
            | 'right-bottom'
            | 'center-bottom'
            | 'right-top'
            | 'left-top';
        setArrowEl: Dispatch<SetStateAction<HTMLDivElement | undefined>>;
        middlewareData: MiddlewareData;
    };
    styles: CSSProperties;
}

export type IFloatingRendererPopup<Popup extends HTMLElement, Props extends RendererPopupProps = RendererPopupProps> = (
    ref: Ref<Popup>,
    props: Props
) => ReactNode;
