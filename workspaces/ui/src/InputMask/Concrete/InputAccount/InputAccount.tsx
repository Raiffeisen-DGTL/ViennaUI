import React from 'react';
import InputMask, { InputMaskProps } from '../../InputMask';

export const InputAccount = React.forwardRef((props: InputMaskProps, ref: React.Ref<HTMLInputElement>) => {
    const { mask = '00000{.}000{.}0{.}00000000000', ...attrs } = props;
    return <InputMask placeholder='_____.___._.___________' ref={ref} mask={mask} {...attrs} />;
});

InputAccount.displayName = 'InputAccount';
export default InputAccount;
