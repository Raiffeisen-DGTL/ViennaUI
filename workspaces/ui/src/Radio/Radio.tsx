import React, { useCallback, HTMLAttributes } from 'react';
import { Box, Input, Icon, Content } from './Radio.styles';

export type RadioEvent<T> = (event: T, data?: { name?: string; value: string }) => void;
export interface RadioProps extends Omit<HTMLAttributes<HTMLLabelElement>, 'size' | 'onChange' | 'onBlur' | 'onFocus'> {
    /** Отображаемый лейбл */
    children?: React.ReactNode;
    /** Сcылка на нативный элемент input, доступна после отрисовки */
    ref?: React.Ref<HTMLInputElement>;
    /** Размеры */
    size?: 's' | 'm' | 'l';
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

export const Radio: React.FC<RadioProps> = React.forwardRef(
    (props: React.PropsWithChildren<Omit<RadioProps, 'ref'>>, ref: React.Ref<HTMLInputElement>): JSX.Element => {
        const {
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
        } = props;

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
            <Box size={size} disabled={disabled} {...attrs}>
                <Input
                    ref={ref}
                    type='radio'
                    name={name}
                    value={value}
                    tabIndex={tabIndex}
                    disabled={disabled}
                    invalid={invalid}
                    aria-invalid={!!invalid}
                    checked={checked}
                    onChange={handleEvent(onChange)}
                    onBlur={handleEvent(onBlur)}
                    onFocus={handleEvent(onFocus)}
                />
                <Icon size={size} disabled={disabled} invalid={invalid} />
                {children ? <Content size={size}>{children}</Content> : null}
            </Box>
        );
    }
);

Radio.defaultProps = {
    size: 'm',
    checked: false,
};

Radio.displayName = 'Radio';
export default Radio;
