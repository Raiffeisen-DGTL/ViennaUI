import { ReactNode, Ref } from 'react';
import { RendererPopupProps } from '../Floating';

export type TriggerActionType = 'click' | 'hover';
export type TriggerTargetExtends = HTMLElement | SVGElement;

export interface ITrigger {
    open: () => void;
    close: () => void;
}

export type TriggerRendererPopupProps = RendererPopupProps & {
    action: TriggerActionType;
};

export interface TriggerRendererTargetProps {
    action: TriggerActionType;
    visible: boolean;
}

export type ITriggerRendererTarget<Target extends TriggerTargetExtends> = (
    ref: Ref<Target>,
    props: TriggerRendererTargetProps
) => ReactNode;

export interface IActionStrategy {
    destroy: () => void;
    setPopup: (popup: HTMLElement) => () => void;
}

export interface BaseActionStrategyOptions {
    onOpen: () => void;
    onClose: () => void;
    visible: boolean;
    disableOutsideClick?: boolean;
    closeOnTargetClick?: boolean;
}
