import React, {
    useState,
    useCallback,
    Ref,
    forwardRef,
    FC,
    MouseEvent,
    ChangeEventHandler,
    FocusEventHandler,
} from 'react';
import { useControlState } from '@fcc/react-use';
import { Box, PropsBox, Content, Icon, IconBox, Input } from './Checkbox.styles';
import { ResponsiveProp, Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';

export interface CheckboxProps<B = Breakpoints>
    extends Omit<BoxStyled<typeof Box, PropsBox>, 'onChange' | 'onFocus' | 'onBlur'> {
    size?: ResponsiveProp<'s' | 'm' | 'l', B>;
    indeterminate?: boolean;
    invalid?: boolean;
    active?: boolean;
    disabled?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    name?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
}

const fragment = {
    checked: 'M14.207 5.207l-7 7a1 1 0 01-1.414 0l-4-4 1.414-1.414L6.5 10.086l6.293-6.293 1.414 1.414z',
    indeterminate: 'M4 7h8v2H4V7z',
    empty: '',
};

const stopPropagation = (e: MouseEvent) => e.stopPropagation();

function CheckboxInternal<B = void>(
    {
        name,
        checked = false,
        invalid,
        indeterminate = false,
        size = 'm',
        disabled,
        tabIndex,
        defaultChecked,
        children,
        active: activeProps,
        onChange: onChangeProp,
        onBlur: onBlurProp,
        onFocus: onFocusProp,
        ...attrs
    }: CheckboxProps<B extends void ? Breakpoints : B>,
    ref: Ref<HTMLInputElement>
) {
    const [value, setValue] = useControlState({
        value: checked,
        defaultValue: defaultChecked,
        defaultStateValue: false,
    });

    const [active, setActive] = useState(false);

    const onBlur = useCallback<FocusEventHandler<HTMLInputElement>>(
        (e) => {
            if (!disabled) {
                setActive(false);
                onBlurProp?.(e);
            }
        },
        [onBlurProp, disabled]
    );

    const onFocus = useCallback<FocusEventHandler<HTMLInputElement>>(
        (e) => {
            if (!disabled) {
                setActive(true);
                onFocusProp?.(e);
            }
        },
        [onFocusProp, disabled]
    );

    const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
        (e) => {
            if (!disabled) {
                setValue(e.currentTarget.checked);
                onChangeProp?.(e);
            }
        },
        [setValue, onChangeProp, disabled]
    );

    return (
        <Box {...(attrs as {})} $disabled={disabled}>
            <IconBox>
                <Input
                    ref={ref}
                    type='checkbox'
                    checked={value || indeterminate}
                    name={name}
                    tabIndex={tabIndex}
                    aria-invalid={!!invalid}
                    disabled={disabled}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                />
                <Icon
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    $size={size}
                    $disabled={disabled}
                    $checked={value}
                    $invalid={invalid}
                    $indeterminate={indeterminate}
                    $active={activeProps ?? active}
                    focusable='false'
                    tabIndex={-1}
                    onClick={stopPropagation}>
                    <path
                        fill='currentColor'
                        d={fragment[indeterminate ? 'indeterminate' : value ? 'checked' : 'empty']}
                    />
                </Icon>
            </IconBox>
            {children && (
                <Content $size={size} onClick={stopPropagation}>
                    {children}
                </Content>
            )}
        </Box>
    );
}

export const Checkbox = forwardRef(CheckboxInternal) as <B = Breakpoints>(
    p: CheckboxProps<B> & { ref?: Ref<HTMLInputElement> }
) => JSX.Element;

(Checkbox as FC).displayName = 'Checkbox';
