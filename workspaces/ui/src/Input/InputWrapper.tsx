import React from 'react';
import { Wrapper, Wrapped, Prefix, Postfix } from './Input.styles';
import { NativeInput } from './NativeInput';
import { InputProps } from '.';

interface WrapperProps extends InputProps {
    /** Системное свойство - реализация подсветки ховера у фальшивого инпута обвязки */
    active?: boolean;
    target?: React.ReactNode;
}

const InputWrapper: React.FC<React.PropsWithChildren<WrapperProps>> = (
    props: React.PropsWithChildren<any>
): JSX.Element => {
    const { size, active, target = NativeInput } = props;
    const items: any = React.Children.toArray(props.children);
    const index: number = items.findIndex((c: JSX.Element) => c.type && c.type.toString() === target.toString());

    const prefixes = items.slice(0, index);
    const postfixes = items.slice(index + 1, items.length);

    return (
        <Wrapper {...props}>
            {Boolean(prefixes.length) && (
                <Prefix size={size} active={active}>
                    {prefixes}
                </Prefix>
            )}
            <Wrapped disabled={props.disabled}>{items[index] as JSX.Element}</Wrapped>
            {Boolean(postfixes.length) && (
                <Postfix size={size} active={active}>
                    {postfixes}
                </Postfix>
            )}
        </Wrapper>
    );
};

InputWrapper.displayName = 'InputWrapper';
InputWrapper.defaultProps = { design: 'outline', size: 'l' };

export default InputWrapper;
