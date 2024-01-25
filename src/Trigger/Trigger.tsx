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
import { useControlState } from '@fcc/react-use';
import { composeRef } from '../Utils/composeRef';
import {
    IActionStrategy,
    ITrigger,
    TriggerActionType,
    TriggerRendererPopupProps,
    ITriggerRendererTarget,
} from './types';
import { getStrategy } from './strategies';
import { GetContainer, Portal } from '../Portal';
import { PopperProps, IPopperRendererPopup, Popper } from '../Popper';

export type TriggerProps<Target extends HTMLElement = HTMLElement, Popup extends HTMLElement = HTMLElement> = Pick<
    PopperProps<Target, Popup>,
    'offset' | 'placement'
> & {
    action?: TriggerActionType;
    visible?: boolean;
    defaultVisible?: boolean;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    renderTarget: ITriggerRendererTarget<Target>;
    renderPopup?: IPopperRendererPopup<Popup, TriggerRendererPopupProps>;
    getContainer?: GetContainer;
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
        mouseEnterDelay = 50,
        mouseLeaveDelay = 50,
        renderTarget,
        renderPopup,
        getContainer,
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
            mouseLeaveDelay,
            onClose: close,
            onOpen: open,
            visible,
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
            <Popper<Target, Popup> targetElement={targetElement} placement={placement} offset={offset}>
                {(popupRef, props) => (
                    <Portal getContainer={getContainer}>
                        {visible &&
                            renderPopup &&
                            renderPopup(composeRef(popupRef, ownPopupRef), { ...props, ...baseRendererProps })}
                    </Portal>
                )}
            </Popper>
        </>
    );
}

export const Trigger = forwardRef(TriggerInternal) as <Popup extends HTMLElement, Target extends HTMLElement>(
    p: TriggerProps<Popup, Target> & { ref?: Ref<ITrigger> }
) => ReactElement;
