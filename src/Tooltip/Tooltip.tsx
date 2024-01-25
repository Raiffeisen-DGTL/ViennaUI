import React, { forwardRef, ReactNode, Ref, ReactElement, CSSProperties } from 'react';
import TooltipPopup, { BaseTooltipPopupProps } from './TooltipPopup';
import { composeRef } from '../Utils/composeRef';
import { Trigger, TriggerProps, TriggerRendererPopupProps, ITrigger } from '../Trigger';
import { omit } from '../Utils/omit';

export type TooltipProps<Tlt extends HTMLElement> = Omit<TriggerProps, 'renderPopup' | 'renderTarget'> &
    Omit<BaseTooltipPopupProps, 'children' | 'placement'> & {
        /** Направление открытия */
        placement?: BaseTooltipPopupProps['anchor'];
        /** Размеры */
        size?: 's' | 'm';
        truncate?: boolean;
        inline?: boolean;
        disabled?: boolean;
        /** Максимальная ширина подсказки (auto по умолчанию) */
        width?: string | number;
        /** Цветовая схема */
        design?: 'light' | 'dark';
        /** Включает взаимодействие с элементами внутри тултипа */
        allowInteraction?: boolean;
        displayName?: string;
        content?: ReactNode;
        className?: string;
        style?: CSSProperties;
        children: ReactNode | ((ref: Ref<Tlt>) => React.ReactNode);
    };

function TooltipInternal<Tlt extends HTMLElement>(
    {
        size = 's',
        truncate,
        inline,
        disabled,
        allowInteraction,
        content,
        width = 'auto',
        design,
        className,
        style = {},
        children,
        ...attrs
    }: TooltipProps<Tlt>,
    forwardedRef: Ref<ITrigger>
) {
    const renderPopup = (ref: Ref<HTMLDivElement>, { styles, attributes }: TriggerRendererPopupProps) => {
        if (!content) return null;
        const placement =
            attributes?.popper &&
            (attributes?.popper['data-popper-placement'] as 'left' | 'right' | 'top' | 'bottom' | undefined);

        const omitAttrs = omit(attrs, 'placement');

        return (
            <TooltipPopup
                ref={ref}
                placement={placement}
                truncate={truncate}
                disabled={disabled}
                inline={inline}
                allowInteraction={allowInteraction}
                width={width}
                design={design}
                size={size}
                className={className}
                style={{ ...style, ...styles.popper }}
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
                      return React.cloneElement(child, { ref: composeRef(ref, child.ref) });
                  };

        return renderChildren(ref);
    };

    return (
        <Trigger
            ref={forwardedRef}
            {...attrs}
            renderTarget={renderTarget}
            renderPopup={content ? renderPopup : undefined}
        />
    );
}

export const Tooltip = forwardRef(TooltipInternal) as <Tlt extends HTMLElement>(
    p: TooltipProps<Tlt> & { ref?: Ref<ITrigger> }
) => ReactElement;
// @ts-ignore
Tooltip.displayName = 'Tooltip';
