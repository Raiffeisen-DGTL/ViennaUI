import React, { forwardRef } from 'react';
import { InputNumber, InputNumberProps } from '../InputNumber/InputNumber';

export type InputDigitalProps = Omit<InputNumberProps, 'scale' | 'thousandsSeparator' | 'mask'>;

export const InputDigital = forwardRef<HTMLInputElement, InputDigitalProps>((props, ref) => (
    <InputNumber ref={ref} scale={0} thousandsSeparator={''} {...props} />
));

InputDigital.displayName = 'InputDigital';
