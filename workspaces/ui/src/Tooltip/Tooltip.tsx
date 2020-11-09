import React, { useRef, useState, useCallback, useEffect } from 'react';
import { TooltipNative } from './TooltipNative';
import { Box } from './Tooltip.styles';
import { getValidTarget } from './utils';

interface TooltipElement {
    show: () => void;
    hide: () => void;
}

interface TooltipProps {
    id?: string;

    ref?: React.Ref<TooltipElement>;
    /** Значение которое выведется в подсказке */
    content?: React.ReactNode;

    /** Размеры */
    size?: 's' | 'm';

    /** Направление открытия */
    anchor?: 'left' | 'right' | 'top' | 'bottom' | 'auto';

    /** Максимальная ширина подсказки (auto по умолчанию) */
    width?: number;

    /** Цветовая схема */
    design?: 'light' | 'dark';

    disabled?: boolean;
    /** Включает взаимодействие с элементами внутри тултипа */
    allowInteraction?: boolean;

    truncate?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = React.forwardRef(
    (props: React.PropsWithChildren<TooltipProps>, ref: React.Ref<TooltipElement>) => {
        const {
            allowInteraction,
            content,
            children,
            anchor = 'auto',
            width,
            id,
            design,
            truncate,
            size,
            disabled,
        } = props;

        const elementRef = useRef<any>();
        const [showTooltip, setShowTooltip] = useState(false);

        const handleMouseOver = useCallback(() => setShowTooltip(true), []);
        const handleMouseLeave = useCallback(() => setShowTooltip(false), []);

        const constructTooltip = useCallback(
            () =>
                elementRef.current && (
                    <TooltipNative
                        id={id}
                        size={size}
                        target={getValidTarget(elementRef.current)}
                        anchor={anchor}
                        width={width}
                        design={design}
                        allowInteraction={allowInteraction}
                        onClose={handleMouseLeave}>
                        {content}
                    </TooltipNative>
                ),
            [anchor, design, size, content, id, width, elementRef, handleMouseLeave, allowInteraction]
        );

        useEffect(() => {
            const show = handleMouseOver;
            const hide = handleMouseLeave;
            if (typeof ref === 'function') {
                ref({ show, hide });
                return;
            }
            if (ref && 'current' in ref) {
                (ref as any).current = { show, hide };
            }
        }, [ref, handleMouseOver, handleMouseLeave]);

        return React.createElement(
            Box,
            { ref: elementRef, truncate, onMouseLeave: handleMouseLeave, onMouseOver: handleMouseOver },
            children,
            showTooltip && !disabled && constructTooltip()
        );
    }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
