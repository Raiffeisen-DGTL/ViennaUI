import React, { useEffect, useRef } from 'react';
import { Box, PropsBox } from './Item.styles';
import { Breakpoints } from '../../Utils/responsiveness';
import { BoxStyled } from '../../Utils/styled';

export interface ItemProps<B = Breakpoints> extends BoxStyled<typeof Box, PropsBox> {
    /** Размеры */
    size?: PropsBox<B>['$size'];
    /** Состояние hover строки */
    hover?: PropsBox<B>['$hover'];
    /** Состояние selected строки */
    selected?: PropsBox<B>['$selected'];
    /** Компонент неактивен если true */
    disabled?: PropsBox<B>['$disabled'];
    /** Состояние, когда строка не обрезается, а переносится */
    wrapLine?: PropsBox<B>['$wrapLine'];
    /** Следует ли проскролить к этому компоненту */
    scrollWhenHovered?: boolean;
    value?: any;
    custom?: any;
}

export const Item = React.forwardRef<HTMLDivElement, ItemProps>((props, ref) => {
    const { children, hover, size = 'm', scrollWhenHovered = false, disabled, selected, wrapLine, ...attrs } = props;

    const boxRef = useRef<HTMLDivElement>(null);

    // Перенаправляем ref наружу в зависимости от его вида (функция или useRef для react > 16)
    useEffect(() => {
        if (typeof ref === 'function') {
            ref(boxRef.current);
        } else if (ref && 'current' in ref) {
            (ref as any).current = boxRef.current;
        }
    });

    useEffect(() => {
        selected &&
            boxRef?.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
    }, [selected]);

    useEffect(() => {
        if (boxRef.current && boxRef.current.parentNode && hover && scrollWhenHovered) {
            (boxRef.current.parentNode as HTMLDivElement).scrollTop = boxRef.current.offsetTop;
        }
    }, [hover, scrollWhenHovered]);

    return (
        <Box
            {...(attrs as {})}
            ref={boxRef}
            $hover={hover}
            $size={size}
            $disabled={disabled}
            $selected={selected}
            $wrapLine={wrapLine}
            role='option'
            aria-disabled={!!disabled}
            aria-selected={!!selected}>
            {children}
        </Box>
    );
});

Item.displayName = 'Item';
