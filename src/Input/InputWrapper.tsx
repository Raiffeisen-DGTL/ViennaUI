import React from 'react';
import { Wrapper, Wrapped, Prefix, Postfix } from './Input.styles';
import { NativeInput } from './NativeInput';
import { InputProps } from '.';

export interface WrapperProps extends InputProps {
    /** Системное свойство - реализация подсветки ховера у фальшивого инпута обвязки */
    active?: boolean;
    target?: React.ReactNode | React.FC;
}

export const InputWrapper: React.FC<WrapperProps> = ({
    children,
    size = 'l',
    active,
    target = NativeInput,
    disabled,
    design = 'outline',
    invalid,
    ...attrs
}) => {
    const items = React.Children.toArray(children) as JSX.Element[];
    const index = items.findIndex((c) => c.type && target && c.type.toString() === target.toString());

    const prefixes = items.slice(0, index);
    const postfixes = items.slice(index + 1, items.length);

    return (
        <Wrapper
            {...(attrs as {})}
            $active={active}
            $design={design}
            $disabled={disabled}
            $invalid={invalid}
            $size={size}>
            {Boolean(prefixes.length) && (
                <Prefix $size={size} $active={active}>
                    {prefixes}
                </Prefix>
            )}
            <Wrapped $disabled={disabled}>{items[index]}</Wrapped>
            {Boolean(postfixes.length) && (
                <Postfix $size={size} $active={active}>
                    {postfixes}
                </Postfix>
            )}
        </Wrapper>
    );
};

InputWrapper.displayName = 'InputWrapper';
