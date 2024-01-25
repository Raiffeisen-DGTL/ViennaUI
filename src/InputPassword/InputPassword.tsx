import React, { useState, useCallback, forwardRef } from 'react';
import { EyeOpened, EyeClosed } from 'vienna.icons';
import { Input, InputProps } from '../Input';
import { IconWrapper } from './InputPassword.styles';

export const InputPassword = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const [visibility, setVisibility] = useState(false); // Включение / выключение видимости пароля

    const Icon = visibility ? EyeOpened : EyeClosed; // Иконка

    // Клик по иконке
    const handleClickIcon = useCallback(() => {
        setVisibility((visibility) => !visibility);
    }, []);

    // Иконка
    const postfix = (
        <IconWrapper $visible={visibility}>
            <Icon onClick={handleClickIcon} />
        </IconWrapper>
    );

    return <Input ref={ref} type={visibility ? 'text' : 'password'} postfix={postfix} {...props} />;
});

InputPassword.displayName = 'InputPassword';
