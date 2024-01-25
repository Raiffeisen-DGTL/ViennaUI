import React, { useState, useCallback } from 'react';
import { NativeInput, NativeInputProps } from './NativeInput';
import { InputWrapper } from './InputWrapper';
import { ResponsiveProp, Breakpoints } from '../Utils/responsiveness';

export type InputEvent<T> = (
    event: T,
    data: {
        name?: string;
        value: string;
    }
) => void;

export interface InputProps<B = Breakpoints>
    extends Partial<Omit<NativeInputProps<B>, 'prefix' | 'onChange' | 'onFocus' | 'onBlur'>> {
    /** Сcылка на нативный элемент input, доступна после отрисовки */
    ref?: React.Ref<HTMLInputElement>;
    /** Размеры */
    size?: ResponsiveProp<'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl', B>;

    /** Дизайн */
    design?: 'outline' | 'material';

    /** Значанеие отображаемое перед компонентом  */
    prefix?: React.ReactNode;

    /** Значение отображаемое после компонента  */
    postfix?: React.ReactNode;

    /** Принудительный ховер  */
    active?: boolean;

    /** Обработчик события при вводе символов  */
    onChange?: InputEvent<React.ChangeEvent<HTMLInputElement>>;

    /** Обработчик события при потере фокуса компонентом  */
    onBlur?: InputEvent<React.FocusEvent<HTMLInputElement>>;

    /** Обработчик события при получении фокуса компонентом  */
    onFocus?: InputEvent<React.FocusEvent<HTMLInputElement>>;

    /** Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе  */
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;

    /** Обработчик события при отпускании кнопки клавиатуры, когда компонент в фокусе  */
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;

    /** Обработчик события при нажатии и удержании кнопки клавиатуры с печатемым символом, когда компонент в фокусе  */
    onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;

    /** Обработчик вставки  */
    onPaste?: React.ClipboardEventHandler<HTMLInputElement>;

    /** Обработчик копирования  */
    onCopy?: React.ClipboardEventHandler<HTMLInputElement>;

    /** Обработчик вырезки  */
    onCut?: React.ClipboardEventHandler<HTMLInputElement>;

    /** для передачи дополнительных нативных атрибутов,
     *  которые своим названием могут конфликтовать с имеющимися в компоненте пропсами,
     * например size */
    extraNativeProps?: {
        [key: string]: any;
    };
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        prefix,
        postfix,
        onBlur,
        onChange,
        onFocus,
        disabled,
        invalid,
        name,
        design = 'outline',
        size = 'l',
        style,
        className,
        active: activeProps,
        extraNativeProps,
        ...attrs
    } = props;

    const [active, setActive] = useState(false);

    const handleEvent = useCallback(
        (event: React.FormEvent<HTMLInputElement>, callback: InputEvent<any>): void => {
            if (disabled) {
                return;
            }

            const value = event.currentTarget.value;

            if (typeof callback === 'function') {
                callback(event, { name, value });
            }
        },
        [disabled, name]
    );

    const handleChange = useCallback(
        (event: React.FormEvent<HTMLInputElement>): void => {
            if (typeof onChange === 'function') {
                handleEvent(event, onChange);
            }
        },
        [onChange, handleEvent]
    );

    const handleBlur = useCallback(
        (event: React.FocusEvent<HTMLInputElement>): void => {
            setActive(false);
            if (typeof onBlur === 'function') {
                handleEvent(event, onBlur);
            }
        },
        [handleEvent, onBlur]
    );

    const handleFocus = useCallback(
        (event: React.FocusEvent<HTMLInputElement>): void => {
            setActive(true);
            if (typeof onFocus === 'function') {
                handleEvent(event, onFocus);
            }
        },
        [handleEvent, onFocus]
    );

    return (
        <InputWrapper
            design={design}
            size={size}
            active={activeProps ?? active}
            disabled={disabled}
            style={style}
            className={className}
            invalid={invalid}>
            {prefix}
            <NativeInput
                {...(attrs as {})}
                extraNativeProps={extraNativeProps}
                ref={ref}
                design={design}
                size={size}
                disabled={disabled}
                name={name}
                aria-invalid={!!invalid}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
            {postfix}
        </InputWrapper>
    );
});

Input.displayName = 'Input';
