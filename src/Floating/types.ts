import { CSSProperties, ReactNode, Ref } from 'react';

export type Offset = [number | null | undefined, number | null | undefined];

export interface RendererPopupProps {
    attributes?: { [key: string]: string } | undefined;
    styles: CSSProperties;
}

export type IFloatingRendererPopup<Popup extends HTMLElement, Props extends RendererPopupProps = RendererPopupProps> = (
    ref: Ref<Popup>,
    props: Props
) => ReactNode;
