import React, {
    useCallback,
    ForwardRefExoticComponent,
    RefAttributes,
    FocusEvent,
    ChangeEvent,
    Ref,
    FormEvent,
} from 'react';
import { Box, Input, Handle, Caption } from './Switcher.styles';
import { ResponsiveProp, Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';

export type Size<B = Breakpoints> = ResponsiveProp<'m' | 'l', B>;

export type SwitcherEvent<T> = (event: T, data?: { name?: string; value: boolean }) => void;

export interface SwitcherProps<B = Breakpoints>
    extends Omit<BoxStyled<typeof Box, {}>, 'onFocus' | 'onBlur' | 'onChange'> {
    /** Размеры */
    size?: Size<B>;
    /** Имя компонента (важно для группировки) */
    name?: string;
    /** Состояние компонента */
    checked?: boolean;
    /** Компонент неактивен если true */
    disabled?: boolean;
    /** Обработчик события при потере фокуса компонентом  */
    onBlur?: SwitcherEvent<FocusEvent<HTMLInputElement>>;
    /** Обработчик события при получении фокуса компонентом  */
    onFocus?: SwitcherEvent<FocusEvent<HTMLInputElement>>;
    /** Обработчик события при клике на компонент  */
    onChange?: SwitcherEvent<ChangeEvent<HTMLInputElement>>;
}

export const Switcher = React.forwardRef(
    <B,>(props: SwitcherProps<B extends void ? Breakpoints : B>, ref: Ref<HTMLInputElement>) => {
        const {
            children,
            size = 'm',
            checked = false,
            disabled,
            name,
            tabIndex,
            onChange,
            onBlur,
            onFocus,
            ...attrs
        } = props;

        const handleEvent = useCallback(
            (callback) => {
                return (event: FormEvent<HTMLInputElement>) => {
                    if (!disabled && typeof callback === 'function') {
                        callback(event, { name, value: event.currentTarget.checked });
                    }
                };
            },
            [disabled, name]
        );

        return (
            <Box {...(attrs as {})}>
                <Handle tabIndex={0} $size={size} $disabled={disabled} $checked={checked} />
                <Input
                    ref={ref}
                    tabIndex={tabIndex}
                    name={name}
                    type='checkbox'
                    checked={checked}
                    disabled={disabled}
                    onChange={handleEvent(onChange)}
                    onBlur={handleEvent(onBlur)}
                    onFocus={handleEvent(onFocus)}
                />
                {children ? (
                    <Caption $size={size} $disabled={disabled}>
                        {children}
                    </Caption>
                ) : null}
            </Box>
        );
    }
) as ForwardRefExoticComponent<SwitcherProps & RefAttributes<HTMLInputElement>>;

Switcher.displayName = 'Switcher';
