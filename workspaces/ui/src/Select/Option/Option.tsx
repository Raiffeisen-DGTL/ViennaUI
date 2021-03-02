import React, { useCallback, useRef, useLayoutEffect } from 'react';
import { Checkmark } from 'vienna.icons';
import { StyledOption, Value, Icon } from './Option.styles';

export interface OptionProps {
    /** ID компонента */
    id?: string;

    /** Название стиля для компонента (опционально) */
    className?: string;

    /** True - если надо подсветить как активный */
    hover?: boolean;

    /** True - если надо подсветить как выбранный */
    selected?: boolean;

    /** True - если надо подсветить как не активный */
    disabled?: boolean;

    /** Иконка когда selected = true */
    icon?: React.ReactNode;

    /** Значение элемента (должно совпадать по интерфейсу с элементом переданым в value Multiselect) */
    value?: any;

    /** Размеры (наследуются от родителя если не указано иначе) */
    size?: 's' | 'm' | 'l';

    /** Переносить содержимое (по умолчанию троеточие) */
    wrapLine?: boolean;

    /** Наследуется от родителя если не указано иначе */
    valueToString?: (item: any) => string;

    /** Транслируется в onSelect метод родителя может быть перехвачено */
    onClick?: (e, value) => void;
}

export const Option: React.FC<OptionProps> = (props: React.PropsWithChildren<OptionProps>): JSX.Element => {
    const {
        hover,
        selected,
        icon,
        children,
        value,
        onClick,
        wrapLine,
        disabled,
        size,
        valueToString = (item) => (typeof item === 'string' ? item : item?.value),
        ...attrs
    } = props;

    const ref = useRef<HTMLDivElement>(null);
    const localHover = useRef<boolean>(false);

    const handleMouseEnter = useCallback(() => {
        localHover.current = true;
    }, []);

    const handleMouseOut = useCallback(() => {
        localHover.current = false;
    }, []);

    const handleMouseDown = useCallback(
        (e) => {
            e.preventDefault();
            if (!disabled && typeof onClick === 'function') {
                onClick(e, value || children);
            }
        },
        [onClick, value, children, disabled]
    );

    useLayoutEffect(() => {
        if (ref.current && ref.current.parentNode && selected) {
            (ref.current.parentNode as HTMLDivElement).scrollTop = ref.current.offsetTop;
        }
    }, [selected]);

    useLayoutEffect(() => {
        if (ref.current && ref.current.parentNode && hover && !localHover.current) {
            (ref.current.parentNode as HTMLDivElement).scrollTop = ref.current.offsetTop;
        }
    }, [hover]);

    if (!value && !children) {
        console.error('Элемент должен содержать свойство value или children'); // eslint-disable-line
        return <></>;
    }

    const iconSize = size === 's' ? 's' : 'm';

    return (
        <StyledOption
            ref={ref}
            hover={hover}
            selected={selected}
            disabled={disabled}
            wrapLine={wrapLine}
            size={size}
            onMouseEnter={handleMouseEnter}
            onMouseOut={handleMouseOut}
            onMouseDown={handleMouseDown}
            {...attrs}>
            <Value wrapLine={wrapLine}>{children ?? valueToString(value)}</Value>
            {selected && <Icon>{icon ?? <Checkmark size={iconSize} />}</Icon>}
        </StyledOption>
    );
};

export default Option;
