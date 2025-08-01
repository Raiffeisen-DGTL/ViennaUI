import React, {
    forwardRef,
    ReactElement,
    Ref,
    useCallback,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import { useControlState } from 'vienna.react-use';
import { FloatingPortal } from '@floating-ui/react';
import {
    IActionStrategy,
    ITrigger,
    TriggerActionType,
    TriggerRendererPopupProps,
    ITriggerRendererTarget,
    BaseActionStrategyOptions,
    TriggerTargetExtends,
} from './types';
import { getStrategy } from './strategies';
import { Floating, FloatingProps, IFloatingRendererPopup } from '../Floating';
import { composeRef, ComponentWrapper } from '../Utils';

export type TriggerProps<Target extends TriggerTargetExtends, Popup extends HTMLElement> = Pick<
    FloatingProps<Target, Popup>,
    'offset' | 'placement' | 'disableFlip'
> & {
    action?: TriggerActionType;
    visible?: boolean;
    defaultVisible?: boolean;
    disabled?: boolean;
    disableOutsideClick?: boolean;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    closeOnTargetClick?: NonNullable<BaseActionStrategyOptions['closeOnTargetClick']>;
    renderTarget: ITriggerRendererTarget<Target>;
    renderPopup?: IFloatingRendererPopup<Popup, TriggerRendererPopupProps>;
    popupPortal?: HTMLElement | React.MutableRefObject<HTMLElement | null> | null;
    onVisibleChange?: (visible: boolean) => void;
    onOpen?: () => void;
    onClose?: () => void;
};

function TriggerInternal<Target extends HTMLElement, Popup extends HTMLElement>(
    {
        action = 'click',
        offset = [0, 0],
        placement = 'auto',
        visible: visibleProp,
        defaultVisible,
        disabled = false,
        disableFlip,
        disableOutsideClick = false,
        mouseEnterDelay = 50,
        mouseLeaveDelay = 50,
        closeOnTargetClick,
        renderTarget,
        renderPopup,
        popupPortal = document.body,
        onVisibleChange,
        onOpen,
        onClose,
    }: TriggerProps<Target, Popup>,
    forwardedRef: Ref<ITrigger>
) {
    const [strategy, setStrategy] = useState<IActionStrategy>();
    const [targetElement, setTargetElement] = useState<Target | null>(null);
    const ownPopupRef = useRef<Popup>(null);

    const [visible, setVisible] = useControlState({
        value: visibleProp,
        defaultValue: defaultVisible,
        defaultStateValue: false,
        onChange: onVisibleChange,
    });

    const open = useCallback(() => {
        setVisible(true);
        onOpen?.();
    }, [setVisible, onOpen]);

    const close = useCallback(() => {
        setVisible(false);
        onClose?.();
    }, [setVisible, onClose]);

    useImperativeHandle(forwardedRef, () => ({ open, close }), [open, close]);

    useEffect(() => {
        if (!targetElement || !renderPopup) return;

        const strategy = getStrategy(action, targetElement, {
            mouseEnterDelay,
            mouseLeaveDelay: mouseEnterDelay > mouseLeaveDelay ? mouseEnterDelay : mouseLeaveDelay,
            onClose: close,
            onOpen: open,
            visible,
            disableOutsideClick,
            closeOnTargetClick,
        });

        setStrategy(strategy);

        // eslint-disable-next-line consistent-return
        return () => strategy.destroy();
    }, [action, mouseEnterDelay, mouseLeaveDelay, close, open, targetElement, visible, renderPopup]);

    useEffect(() => {
        if (!ownPopupRef.current || !strategy) return;
        const clear = strategy.setPopup(ownPopupRef.current);

        // eslint-disable-next-line consistent-return
        return () => clear();
    }, [strategy]);

    const baseRendererProps = { action, visible };

    return (
        <>
            {renderTarget(setTargetElement, baseRendererProps)}
            {visible && !disabled && (
                <ComponentWrapper component={popupPortal ? FloatingPortal : undefined} props={{ root: popupPortal }}>
                    <Floating<Target, Popup>
                        targetElement={targetElement}
                        placement={placement}
                        offset={offset}
                        disableFlip={disableFlip}>
                        {(popupRef, props) =>
                            renderPopup &&
                            renderPopup(composeRef(popupRef, ownPopupRef), { ...props, ...baseRendererProps })
                        }
                    </Floating>
                </ComponentWrapper>
            )}
        </>
    );
}

export const Trigger = forwardRef(TriggerInternal) as <
    Popup extends HTMLElement | SVGElement,
    Target extends HTMLElement,
>(
    p: TriggerProps<Popup, Target> & { ref?: Ref<ITrigger> }
) => ReactElement;
