import React, { useState, useCallback, HTMLAttributes } from 'react';
import { Box, Content, Icon, IconBox, Input } from './Checkbox.styles';

export type CheckboxEvent<T> = (event: T, data?: { name?: string; value: boolean }) => void;
export interface CheckboxProps
    extends Omit<HTMLAttributes<HTMLLabelElement>, 'size' | 'onChange' | 'onBlur' | 'onFocus'> {
    /** Отображаемый лейбл */
    children?: React.ReactNode;
    /** Сcылка на нативный элемент input, доступна после отрисовки */
    ref?: React.Ref<HTMLInputElement>;
    /** Размеры */
    size?: 's' | 'm' | 'l';
    /** Имя компонента (важно для группировки) */
    name?: string;
    /** Состояние компонента */
    checked?: boolean;
    /** Компонент неактивен если true */
    disabled?: boolean;
    /** Компонент отображается как ошибочный если true */
    invalid?: boolean;
    /** Состояние компонента (тире если true) нельзя использовать совместно с checked */
    indeterminate?: boolean;
    /** Обработчик события при потере фокуса компонентом  */
    onBlur?: CheckboxEvent<React.FocusEvent<HTMLInputElement>>;
    /** Обработчик события при получении фокуса компонентом  */
    onFocus?: CheckboxEvent<React.FocusEvent<HTMLInputElement>>;
    /** Обработчик события при клике на компонент  */
    onChange?: CheckboxEvent<React.ChangeEvent<HTMLInputElement>>;
}

const fragment = {
    checked: 'M14.207 5.207l-7 7a1 1 0 01-1.414 0l-4-4 1.414-1.414L6.5 10.086l6.293-6.293 1.414 1.414z',
    indeterminate: 'M4 7h8v2H4V7z',
    empty: '',
};

export const Checkbox: React.FC<CheckboxProps> = React.forwardRef(
    (props: React.PropsWithChildren<Omit<CheckboxProps, 'ref'>>, ref: React.Ref<HTMLInputElement>): JSX.Element => {
        const {
            children,
            name,
            checked = false,
            invalid,
            indeterminate = false,
            size = 'm',
            disabled,
            tabIndex,
            onChange,
            onBlur,
            onFocus,
            ...attrs
        } = props;

        const [active, setActive] = useState(false);

        const handleEvent = useCallback(
            (callback: CheckboxEvent<any> | undefined) => {
                return (event: React.FormEvent<HTMLInputElement>) => {
                    if (event.type === 'blur') {
                        setActive(false);
                    }

                    if (!disabled) {
                        if (event.type === 'focus') {
                            setActive(true);
                        }
                        if (typeof callback === 'function') {
                            callback(event, { name, value: event.currentTarget.checked });
                        }
                    }
                };
            },
            [disabled, name]
        );

        return (
            <Box disabled={disabled} {...attrs}>
                <IconBox>
                    <Input
                        ref={ref}
                        type='checkbox'
                        checked={checked || indeterminate}
                        name={name}
                        tabIndex={tabIndex}
                        aria-invalid={!!invalid}
                        onChange={handleEvent(onChange)}
                        onBlur={handleEvent(onBlur)}
                        onFocus={handleEvent(onFocus)}
                    />
                    <Icon
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 16 16'
                        size={size}
                        focusable='false'
                        tabIndex={-1}
                        disabled={disabled}
                        checked={checked}
                        invalid={invalid}
                        indeterminate={indeterminate}
                        active={active}>
                        <path
                            fill='currentColor'
                            d={fragment[indeterminate ? 'indeterminate' : checked ? 'checked' : 'empty']}
                        />
                    </Icon>
                </IconBox>
                {children && <Content size={size}>{children}</Content>}
            </Box>
        );
    }
);

Checkbox.defaultProps = {
    size: 'm',
};

Checkbox.displayName = 'Checkbox';
export default Checkbox;
