import React from 'react';
import InputMask, { InputMaskProps } from '../../InputMask';

export const InputDigital = React.forwardRef((props: InputMaskProps, ref: React.Ref<HTMLInputElement>) => (
    <InputMask ref={ref} showMask={false} mask={/^[0-9]{0,}$/} {...props} />
));

InputDigital.displayName = 'InputDigital';
export default InputDigital;
