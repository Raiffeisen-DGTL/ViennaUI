import React, { forwardRef } from 'react';
import { FactoryOpts } from 'imask';
import { InputMask, InputMaskOnChangeType, InputMaskProps } from '../../InputMask';
import { getMaskOptionsFromProps } from '../../utils';

export type InputCardProps = Omit<InputMaskProps, 'maskOptions' | 'onChange'> &
    FactoryOpts & {
        onChange?: InputMaskOnChangeType<string>;
    };

export const InputCard = forwardRef<HTMLInputElement, InputCardProps>(({ onChange, ...props }, ref) => {
    return (
        <InputMask
            ref={ref}
            maskOptions={{
                mask: '0000 0000 0000 0000',
                ...getMaskOptionsFromProps(props),
            }}
            placeholder={'____ ____ ____ ____'}
            smartPlaceholder={'____ ____ ____ ____'}
            onChange={onChange as InputMaskProps['onChange']}
            {...props}
        />
    );
});

InputCard.displayName = 'InputCard';
