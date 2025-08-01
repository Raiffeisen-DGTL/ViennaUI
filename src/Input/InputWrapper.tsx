import React, { forwardRef } from 'react';
import { Wrapper, Wrapped, Prefix, Postfix } from './Input.styles';
import { NativeInput } from './NativeInput';
import { InputProps } from '.';

export interface WrapperProps extends InputProps {
    /** Системное свойство - реализация подсветки ховера у фальшивого инпута обвязки */
    active?: boolean;
    target?: React.ReactNode | React.FC;
    wrap?: boolean;
}

export const InputWrapper = forwardRef<HTMLLabelElement, WrapperProps>(
    (
        { children, size = 'l', active, target = NativeInput, disabled, design = 'outline', invalid, wrap, ...attrs },
        ref
    ) => {
        const items = React.Children.toArray(children) as React.ReactElement<InputProps>[];
        const index = items.findIndex(
            (c: React.ReactElement<InputProps>) => c.type && target && c.type.toString() === target.toString()
        );

        const prefixes = items.slice(0, index);
        const postfixes = items.slice(index + 1, items.length);

        return (
            <Wrapper
                {...attrs}
                ref={ref}
                $wrap={wrap}
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
    }
);

InputWrapper.displayName = 'InputWrapper';
