import React, { forwardRef, ReactNode, Ref, ReactElement, CSSProperties } from 'react';
import TooltipPopup, { BaseTooltipPopupProps } from './TooltipPopup';
import { composeRef, omit, PlacementType } from '../Utils';
import { Trigger, TriggerProps, TriggerRendererPopupProps, ITrigger, TriggerTargetExtends } from '../Trigger';

const isForwardRefComponent = (element: ReactElement): boolean => {
    return (
        typeof element.type === 'string' ||
        (element.type && (element.type as unknown as { $$typeof: symbol }).$$typeof === Symbol.for('react.forward_ref'))
    );
};

export type TooltipProps<Tlt extends TriggerTargetExtends> = Omit<
    TriggerProps<Tlt, HTMLDivElement>,
    'renderPopup' | 'renderTarget'
> &
    Omit<BaseTooltipPopupProps, 'children' | 'placement'> & {
        /** Направление открытия */
        placement?: PlacementType;
        /** Размеры */
        size?: 's' | 'm';
        disabled?: boolean;
        /** Максимальная ширина подсказки (auto по умолчанию) */
        width?: string | number;
        /** Включает взаимодействие с элементами внутри тултипа */
        allowInteraction?: boolean;
        displayName?: string;
        content?: ReactNode;
        className?: string;
        style?: CSSProperties;
        /* Отключает автоматическое позиционирование Tooltip при нехватке места  */
        disableFlip?: boolean;
        children: ReactNode | ((ref: Ref<Tlt>) => React.ReactNode);
    };

function TooltipInternal<Tlt extends TriggerTargetExtends>(
    {
        size = 's',
        disabled,
        content,
        width = 'auto',
        design,
        className,
        closeOnTargetClick,
        style = {},
        children,
        ...attrs
    }: TooltipProps<Tlt>,
    forwardedRef: Ref<ITrigger>
) {
    const renderPopup = (ref: Ref<HTMLDivElement>, { styles, attributes }: TriggerRendererPopupProps) => {
        if (!content) return null;

        const omitAttrs = omit(
            attrs,
            'allowInteraction',
            'placement',
            'visible',
            'onVisibleChange',
            'refArrow',
            'arrowX',
            'arrowY',
            'mouseLeaveDelay',
            'mouseEnterDelay',
            'action',
            'disableFlip'
        );
        const arrowX = attrs.arrowX || attributes.middlewareData.arrow?.x;
        const arrowY = attrs.arrowY || attributes.middlewareData.arrow?.y;

        return (
            <TooltipPopup
                ref={ref}
                refArrow={attributes.setArrowEl}
                arrowX={arrowX}
                arrowY={arrowY}
                placement={attributes.placement}
                disabled={disabled}
                width={width}
                design={design}
                size={size}
                className={className}
                style={{ ...style, ...styles }}
                {...omitAttrs}>
                {content}
            </TooltipPopup>
        );
    };

    const renderTarget = (ref: Ref<Tlt>) => {
        const renderChildren =
            typeof children === 'function'
                ? children
                : () => {
                      const child = children as ReactElement & { ref: Ref<Tlt> };
                      const element = isForwardRefComponent(child) ? child : <span>{child}</span>;
                      return React.cloneElement(element, { ref: composeRef(ref, child.ref) });
                  };

        return renderChildren(ref);
    };

    return (
        <Trigger
            ref={forwardedRef}
            disabled={disabled}
            closeOnTargetClick={closeOnTargetClick}
            {...attrs}
            renderTarget={renderTarget}
            renderPopup={content ? renderPopup : undefined}
        />
    );
}

export const Tooltip = forwardRef(TooltipInternal) as unknown as (<Tlt extends TriggerTargetExtends = HTMLElement>(
    p: TooltipProps<Tlt> & { ref?: Ref<ITrigger> }
) => ReactElement) & {
    displayName?: string;
};

Tooltip.displayName = 'Tooltip';
