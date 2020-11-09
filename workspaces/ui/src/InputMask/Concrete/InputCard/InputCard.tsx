import React from 'react';
import InputMask, { InputMaskProps } from '../../InputMask';

export const InputCard = React.forwardRef((props: InputMaskProps, ref: React.Ref<HTMLInputElement>) => {
    const { mask = '0000 0000 0000 0000', ...attrs } = props;
    return <InputMask placeholder='____ ____ ____ ____' ref={ref} mask={mask} {...attrs} />;
});

InputCard.displayName = 'InputCard';
export default InputCard;
