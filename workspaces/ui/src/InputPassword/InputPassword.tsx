import React, { useState, useCallback } from 'react';
import { Visible, Invisible } from 'vienna.icons';
import { Input, InputProps } from '../Input';
import { IconWrapper } from './InputPassword.styles';

export const InputPassword: React.FC<InputProps> = React.forwardRef(
    (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
        const [visibility, setVisibility] = useState(false); // Включение / выключение видимости пароля

        const Icon: any = visibility ? Visible : Invisible; // Иконка

        // Клик по иконке
        const handleClickIcon = useCallback(() => {
            setVisibility((visibility) => !visibility);
        }, []);

        // Иконка
        const postfix = (
            <IconWrapper visible={visibility}>
                <Icon onClick={handleClickIcon} />
            </IconWrapper>
        );

        return <Input ref={ref} type={visibility ? 'text' : 'password'} postfix={postfix} {...props} />;
    }
);

InputPassword.displayName = 'InputPassword';
export default InputPassword;
