import React, { useState, useCallback, forwardRef } from 'react';
import { EyeOpenedIcon, EyeClosedIcon } from 'vienna.icons';
import { Input, InputProps } from '../Input';
import { IconWrapper } from './InputPassword.styles';
import { omit } from '@/Utils';

export const defaultInputPasswordTestId: InputPasswordProps['testId'] = {
    postfixIcon: 'input-password_postfix-icon',
};

export interface InputPasswordProps extends Omit<InputProps, 'testId'> {
    testId?: {
        postfixIcon?: string;
    };
}

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>((props, ref) => {
    const { testId = defaultInputPasswordTestId } = props;
    const [visibility, setVisibility] = useState(false); // Включение / выключение видимости пароля

    const Icon = visibility ? EyeOpenedIcon : EyeClosedIcon; // Иконка

    // Клик по иконке
    const handleClickIcon = useCallback(() => {
        setVisibility((visibility) => !visibility);
    }, []);

    // Иконка
    const postfix = (
        <IconWrapper $visible={visibility}>
            <Icon data-testid={testId?.postfixIcon} onClick={handleClickIcon} />
        </IconWrapper>
    );

    return (
        <Input
            ref={ref}
            type={visibility ? 'text' : 'password'}
            postfix={postfix}
            {...omit(props, 'testId', 'postfix', 'ref', 'type')}
        />
    );
});

InputPassword.displayName = 'InputPassword';
