import React, { useCallback, RefAttributes, FocusEvent, ChangeEvent, Ref } from 'react';
import { Box, Input, Handle, Caption } from './Switcher.styles';
import { ResponsiveProp, Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';
import { OnChangeHandler, Pretty } from '../Utils';
import { ViewOnly, WithViewOnly } from '@/ViewOnly';

export type Size<B = Breakpoints> = ResponsiveProp<'m' | 'l', B>;

export type SwitcherEvent<T> = (event: T, data: { name?: string; value: boolean }) => void;

export interface SwitcherProps<B = Breakpoints>
    extends Omit<BoxStyled<typeof Box, object>, 'ref' | 'onFocus' | 'onBlur' | 'onChange'>,
        WithViewOnly {
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
    onChange?: OnChangeHandler<boolean, ChangeEvent<HTMLInputElement>>;
}

const SwitcherInternal = <B,>(props: SwitcherProps<B>, ref: Ref<HTMLInputElement>) => {
    const {
        children,
        size = 'm',
        checked = false,
        disabled,
        name,
        tabIndex,
        viewOnly,
        viewOnlyText,
        onChange,
        onBlur,
        onFocus,
        ...attrs
    } = props;

    const handleEvent = useCallback(
        (callback: SwitcherProps['onBlur'] | SwitcherProps['onFocus']) => {
            return (event: FocusEvent<HTMLInputElement>) => {
                if (!disabled && typeof callback === 'function') {
                    callback(event, { name, value: event.currentTarget.checked });
                }
            };
        },
        [disabled, name]
    );

    const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
        (event) => {
            if (!disabled && typeof onChange === 'function') {
                onChange({ value: event.currentTarget.checked, event, options: { name } });
            }
        },
        [disabled, onChange, name]
    );

    if (viewOnly) {
        return (
            <ViewOnly hasCancel={!checked} hasCheck={checked}>
                {viewOnlyText ?? children}
            </ViewOnly>
        );
    }

    return (
        <Box {...attrs}>
            <Handle tabIndex={0} $size={size} $disabled={disabled} $checked={checked} />
            <Input
                ref={ref}
                tabIndex={tabIndex}
                name={name}
                type='checkbox'
                checked={checked}
                disabled={disabled}
                onChange={handleChange}
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
};

export namespace Switcher {
    export type OnChange = Pretty.Func<OnChangeHandler<boolean, ChangeEvent<HTMLInputElement>>>;
    export type OnBlur = Pretty.Func<SwitcherEvent<FocusEvent<HTMLInputElement>>>;
    export type OnFocus = Pretty.Func<SwitcherEvent<FocusEvent<HTMLInputElement>>>;
}

export const Switcher = React.forwardRef(SwitcherInternal) as unknown as (<B>(
    props: SwitcherProps<B> & RefAttributes<HTMLInputElement>
) => ReturnType<typeof SwitcherInternal>) & {
    displayName?: string;
};

Switcher.displayName = 'Switcher';
