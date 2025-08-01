import React, { useCallback, ForwardedRef, FC } from 'react';
import { Box, PropsBox, Input, Icon, Content } from './Radio.styles';
import { ResponsiveProp, Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';
import { OnChangeHandler } from '../Utils/types/values.types';
import { ViewOnly, WithViewOnlyAndDisabledIcon } from '@/ViewOnly';
import { Pretty } from '@/Utils';

export type RadioSize<B = Breakpoints> = ResponsiveProp<'s' | 'm' | 'l', B>;

export type RadioEvent<T> = (event: T, data: { name?: string; value: string }) => void;

export interface RadioProps<B = Breakpoints>
    extends Omit<BoxStyled<typeof Box, PropsBox>, 'ref' | 'onFocus' | 'onBlur' | 'onChange'>,
        WithViewOnlyAndDisabledIcon {
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
    onChange?: OnChangeHandler<string, React.ChangeEvent<HTMLInputElement>>;
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
        viewOnly,
        viewOnlyText,
        viewOnlyDisableIcon,
        onChange,
        onBlur,
        onFocus,
        ...attrs
    }: RadioProps<B>,
    ref: React.Ref<HTMLInputElement>
) {
    const handleEvent = useCallback(
        <T,>(callback: RadioEvent<T> | undefined) => {
            return (event: T) => {
                if (!disabled && typeof callback === 'function') {
                    callback(event, { name, value });
                }
            };
        },
        [disabled, name, value]
    );

    const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
        (event) => onChange?.({ value, event, options: { name } }),
        [disabled, name, value, onChange]
    );

    if (viewOnly) {
        return (
            <ViewOnly
                size={size}
                hasCancel={viewOnlyDisableIcon ? undefined : !checked}
                hasCheck={viewOnlyDisableIcon ? undefined : checked}>
                {viewOnlyText ?? children}
            </ViewOnly>
        );
    }

    return (
        <Box {...attrs} $size={size} $disabled={disabled}>
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
                onChange={handleChange}
                onBlur={handleEvent(onBlur)}
                onFocus={handleEvent(onFocus)}
            />
            <Icon $size={size} $disabled={disabled} $invalid={invalid} />
            {children ? <Content $size={size}>{children}</Content> : null}
        </Box>
    );
}

export namespace Radio {
    export type OnChange = Pretty.Func<OnChangeHandler<string, React.ChangeEvent<HTMLInputElement>>>;
    export type OnBlur = Pretty.Func<RadioEvent<React.FocusEvent<HTMLInputElement>>>;
    export type OnFocus = Pretty.Func<RadioEvent<React.FocusEvent<HTMLInputElement>>>;
}

export const Radio = React.forwardRef(RadioInternal) as <B = Breakpoints>(
    props: RadioProps<B> & { ref?: ForwardedRef<HTMLInputElement> }
) => ReturnType<typeof RadioInternal>;

(Radio as FC).displayName = 'Radio';
