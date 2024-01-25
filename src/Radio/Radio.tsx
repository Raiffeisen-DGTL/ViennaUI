import React, { useCallback, ForwardedRef, FC } from 'react';
import { Box, PropsBox, Input, Icon, Content } from './Radio.styles';
import { ResponsiveProp, Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';

export type RadioSize<B = Breakpoints> = ResponsiveProp<'s' | 'm' | 'l', B>;

export type RadioEvent<T> = (event: T, data?: { name?: string; value: string }) => void;

export interface RadioProps<B = Breakpoints>
    extends Omit<BoxStyled<typeof Box, PropsBox>, 'onFocus' | 'onBlur' | 'onChange'> {
    /** Размеры */
    size?: ResponsiveProp<'s' | 'm' | 'l', B>;
    /** Имя компонента (важно для группировки) */
    name?: string;
    /** Значение компонента */
    value: string;
    /** Состояние компонента */
    checked?: boolean;
    /** Компонент неактивен если true */
    disabled?: boolean;
    /** Компонент отображается как ошибочный если true */
    invalid?: boolean;
    /** Обработчик события при потере фокуса компонентом  */
    onBlur?: RadioEvent<React.FocusEvent<HTMLInputElement>>;
    /** Обработчик события при получении фокуса компонентом  */
    onFocus?: RadioEvent<React.FocusEvent<HTMLInputElement>>;
    /** Обработчик события при клике на компонент  */
    onChange?: RadioEvent<React.ChangeEvent<HTMLInputElement>>;
}

function RadioInternal<B = void>(
    {
        children,
        size = 'm',
        checked = false,
        disabled = false,
        invalid,
        name,
        value,
        tabIndex,
        onChange,
        onBlur,
        onFocus,
        ...attrs
    }: RadioProps<B>,
    ref: React.Ref<HTMLInputElement>
) {
    const handleEvent = useCallback(
        (callback: RadioEvent<any> | undefined) => {
            return (event: React.FormEvent<HTMLInputElement>) => {
                if (!disabled && typeof callback === 'function') {
                    callback(event, { name, value });
                }
            };
        },
        [disabled, name, value]
    );

    return (
        <Box {...(attrs as {})} $size={size} $disabled={disabled}>
            <Input
                ref={ref}
                type='radio'
                name={name}
                value={value}
                tabIndex={tabIndex}
                $size={size}
                disabled={disabled}
                $disabled={disabled}
                $invalid={invalid}
                aria-invalid={!!invalid}
                checked={checked}
                onChange={handleEvent(onChange)}
                onBlur={handleEvent(onBlur)}
                onFocus={handleEvent(onFocus)}
            />
            <Icon $size={size} $disabled={disabled} $invalid={invalid} />
            {children ? <Content $size={size}>{children}</Content> : null}
        </Box>
    );
}

export const Radio = React.forwardRef(RadioInternal) as <B = Breakpoints>(
    props: RadioProps<B> & { ref?: ForwardedRef<HTMLInputElement> }
) => ReturnType<typeof RadioInternal>;

(Radio as FC).displayName = 'Radio';
