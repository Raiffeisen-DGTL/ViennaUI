import React, { useState, useCallback } from 'react';
import { NativeInput, NativeInputProps } from './NativeInput';
import InputWrapper from './InputWrapper';

interface Data {
    name?: string;
    value: string;
}
export type InputEvent<T> = (event: T, data: Data) => void;

export interface InputProps extends NativeInputProps {
    /** Сcылка на нативный элемент input, доступна после отрисовки */
    ref?: React.Ref<HTMLInputElement>;
    /** Размеры */
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

    /** Дизайн */
    design?: 'outline' | 'material';

    /** Значанеие отображаемое перед компонентом  */
    prefix?: React.ReactNode;

    /** Значение отображаемое после компонента  */
    postfix?: React.ReactNode;

    /** Принудительный ховер  */
    active?: boolean;

    /** Обработчик события при вводе символов  */
    onChange?: InputEvent<React.FormEvent<HTMLInputElement>>;

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
}

const Input: React.FC<InputProps> = React.forwardRef(
    (props: React.PropsWithChildren<InputProps>, ref: React.Ref<HTMLInputElement>): JSX.Element => {
        const {
            prefix,
            postfix,
            onBlur,
            onChange,
            onFocus,
            disabled,
            invalid,
            name,
            design,
            size,
            style,
            className,
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
                active={active || attrs.active}
                disabled={disabled}
                style={style}
                className={className}
                invalid={invalid}>
                {prefix}
                <NativeInput
                    ref={ref}
                    design={design}
                    size={size}
                    disabled={disabled}
                    name={name}
                    aria-invalid={!!invalid}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    {...attrs}
                />
                {postfix}
            </InputWrapper>
        );
    }
);

Input.displayName = 'Input';
Input.defaultProps = {
    design: 'outline',
    size: 'l',
};

export { Input, NativeInput, InputWrapper };
