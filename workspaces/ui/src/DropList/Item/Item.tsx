import React, { useEffect, useRef } from 'react';
import { Box } from './Item.styles';

export interface Props {
    [key: string]: any;
    /** Отображаемый контент строки */
    children?: React.ReactNode;
    /** Размеры */
    size?: 's' | 'm' | 'l';
    /** Сcылка на нативный элемент div, доступна после отрисовки */
    ref?: React.Ref<HTMLDivElement>;
    /** Состояние hover строки */
    hover?: boolean;
    /** Состояние selected строки */
    selected?: boolean;
    /** Компонент неактивен если true */
    disabled?: boolean;
    /** Состояние, когда строка не обрезается, а переносится */
    wrapLine?: boolean;

    /** Следует ли проскролить к этому компоненту */
    scrollWhenHovered?: boolean;
}

export const Item: React.FC<Props> = React.forwardRef(
    (props: React.PropsWithChildren<Props>, ref: React.Ref<HTMLDivElement>) => {
        const { children, hover, size = 'm', scrollWhenHovered = false, ...attrs } = props;

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
            if (boxRef.current && boxRef.current.parentNode && hover && scrollWhenHovered) {
                (boxRef.current.parentNode as HTMLDivElement).scrollTop = boxRef.current.offsetTop;
            }
        }, [hover, scrollWhenHovered]);

        return (
            <Box
                ref={boxRef}
                hover={hover}
                {...attrs}
                size={size}
                role='option'
                aria-disabled={!!attrs.disabled}
                aria-selected={!!attrs.selected}>
                {children}
            </Box>
        );
    }
);

export default Item;
