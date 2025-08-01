import React, {
    useState,
    useCallback,
    Ref,
    forwardRef,
    FC,
    MouseEvent,
    ChangeEventHandler,
    FocusEventHandler,
    useRef,
    useEffect,
} from 'react';
import { useControlState } from 'vienna.react-use';
import { Box, PropsBox, Content, Icon, IconBox, Input } from './Checkbox.styles';
import { ResponsiveProp, Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';
import { composeRef } from '../Utils/composeRef';
import { ViewOnly, WithViewOnlyAndDisabledIcon } from '@/ViewOnly';

export interface CheckboxProps<B = Breakpoints>
    extends Omit<BoxStyled<typeof Box, PropsBox>, 'ref' | 'onChange' | 'onFocus' | 'onBlur'>,
        WithViewOnlyAndDisabledIcon {
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
    checked:
        'M4.53327 8.04834C4.14721 7.68275 3.53994 7.69209 3.1653 8.06938C2.77799 8.45944 2.78762 9.09184 3.18663 9.46993L5.65655 11.8103C6.06758 12.2116 6.6254 12.2214 7.03644 11.8103L12.8551 5.95497C13.2342 5.5735 13.2332 4.95725 12.853 4.57698C12.4711 4.19512 11.8517 4.19597 11.4709 4.57887L6.32906 9.74892L4.53327 8.04834Z',
    indeterminate: 'M2 7H14V9H2z',
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
        viewOnly,
        viewOnlyText,
        viewOnlyDisableIcon,
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
    const inputRef = useRef<HTMLInputElement>(null);

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

    useEffect(() => {
        const $input = inputRef.current;
        if ($input) {
            $input.indeterminate = indeterminate;
        }
    }, [inputRef, indeterminate]);

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
        <Box {...attrs} $disabled={disabled}>
            <IconBox>
                <Input
                    ref={composeRef(inputRef, ref)}
                    type='checkbox'
                    checked={value}
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
