import React, { useCallback, HTMLAttributes } from 'react';
import { Box, Input, Handle, Caption } from './Switcher.styles';

export type SwitcherEvent<T> = (event: T, data?: { name?: string; value: boolean }) => void;
export interface SwitcherProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'size' | 'onChange' | 'onBlur' | 'onFocus'> {
    /** Отображаемый лейбл */
    children?: React.ReactNode;
    /** Сcылка на нативный элемент input, доступна после отрисовки */
    ref?: React.Ref<HTMLInputElement>;
    /** Размеры */
    size?: 'm' | 'l';
    /** Имя компонента (важно для группировки) */
    name?: string;
    /** Состояние компонента */
    checked?: boolean;
    /** Компонент неактивен если true */
    disabled?: boolean;
    /** Обработчик события при потере фокуса компонентом  */
    onBlur?: SwitcherEvent<React.FocusEvent<HTMLInputElement>>;
    /** Обработчик события при получении фокуса компонентом  */
    onFocus?: SwitcherEvent<React.FocusEvent<HTMLInputElement>>;
    /** Обработчик события при клике на компонент  */
    onChange?: SwitcherEvent<React.ChangeEvent<HTMLInputElement>>;
}

export const Switcher: React.FC<SwitcherProps> = React.forwardRef(
    (props: React.PropsWithChildren<SwitcherProps>, ref: React.Ref<HTMLInputElement>): JSX.Element => {
        const { children, size = 'm', checked, disabled, name, tabIndex, onChange, onBlur, onFocus, ...attrs } = props;

        const handleEvent = useCallback(
            (callback: SwitcherEvent<any> | undefined) => {
                return (event: React.FormEvent<HTMLInputElement>) => {
                    if (!disabled && typeof callback === 'function') {
                        callback(event, { name, value: event.currentTarget.checked });
                    }
                };
            },
            [disabled, name]
        );

        return (
            <Box size={size} disabled={disabled} {...attrs}>
                <Handle size={size} disabled={disabled} checked={checked} />
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
                    <Caption size={size} disabled={disabled}>
                        {children}
                    </Caption>
                ) : null}
            </Box>
        );
    }
);

Switcher.defaultProps = {
    size: 'm',
    checked: false,
};

Switcher.displayName = 'Switcher';
export default Switcher;
