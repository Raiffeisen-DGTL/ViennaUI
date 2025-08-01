import React, { useState, useCallback } from 'react';
import { NativeInput, NativeInputProps } from './NativeInput';
import { InputWrapper } from './InputWrapper';
import { ResponsiveProp, Breakpoints } from '../Utils/responsiveness';
import { InputDisabledWrapper } from './Input.styles';
import { OnChangeHandler, Pretty } from '../Utils';
import { ViewOnly, WithViewOnly } from '@/ViewOnly';
import { getViewOnlySize } from '@/ViewOnly/utils';

export const defaultInputTestId: InputTestId = {
    input: 'input_input',
    inputDisabledWrapper: 'input_disabled-wrapper',
    inputWrapper: 'input_wrapper',
};

export type InputEvent<T> = (
    event: T,
    data: {
        name?: string;
        value: string;
    }
) => void;

export interface InputTestId {
    input?: string;
    inputDisabledWrapper?: string;
    inputWrapper?: string;
}

export interface InputProps<B = Breakpoints>
    extends Partial<Omit<NativeInputProps<B>, 'prefix' | 'onChange' | 'onFocus' | 'onBlur'>>,
        WithViewOnly {
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

    /** Режим для включения Close icon в компоненте Search */
    additionalPostfix?: React.ReactNode;

    /** Обработчик события при вводе символов  */
    onChange?: OnChangeHandler<string, React.ChangeEvent<HTMLInputElement>>;

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

    testId?: InputTestId;
}

const InputInternal = <B,>(props: InputProps<B>, ref: React.ForwardedRef<HTMLInputElement>) => {
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
        additionalPostfix,
        viewOnly,
        viewOnlyText,
        testId = defaultInputTestId,
        ...attrs
    } = props;

    const [active, setActive] = useState(false);

    const handleEvent = useCallback(
        (event: React.FocusEvent<HTMLInputElement>, callback: InputProps['onFocus'] | InputProps['onBlur']): void => {
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

    const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
        (event) => onChange?.({ value: event.currentTarget.value, event, options: { name } }),
        [onChange, name]
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

    if (viewOnly) {
        return <ViewOnly size={getViewOnlySize(size)}>{viewOnlyText ?? attrs.value}</ViewOnly>;
    }

    return (
        <InputDisabledWrapper className={className} $disabled={disabled} data-testid={testId?.inputDisabledWrapper}>
            <InputWrapper
                design={design}
                size={size}
                active={activeProps ?? active}
                disabled={disabled}
                style={style}
                invalid={invalid}
                data-testid={testId?.inputWrapper}>
                {prefix}
                <NativeInput
                    data-testid={testId?.input}
                    {...attrs}
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
                {additionalPostfix}
                {postfix}
            </InputWrapper>
        </InputDisabledWrapper>
    );
};

export namespace Input {
    export type OnChange = Pretty.Func<OnChangeHandler<string, React.ChangeEvent<HTMLInputElement>>>;
    export type OnBlur = Pretty.Func<InputEvent<React.FocusEvent<HTMLInputElement>>>;
    export type OnFocus = Pretty.Func<InputEvent<React.FocusEvent<HTMLInputElement>>>;
}

export const Input = React.forwardRef(InputInternal) as (<B>(
    props: InputProps<B> & React.RefAttributes<HTMLInputElement>
) => ReturnType<typeof InputInternal>) & {
    displayName?: string;
};

Input.displayName = 'Input';
