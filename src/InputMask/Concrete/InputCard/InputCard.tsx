import React, { forwardRef } from 'react';
import { FactoryOpts } from 'imask';
import { InputMask, InputMaskProps } from '../../InputMask';
import { getMaskOptionsFromProps } from '../../utils';

export type InputCardProps = Omit<InputMaskProps, 'maskOptions'> & FactoryOpts;

export const InputCard = forwardRef<HTMLInputElement, InputCardProps>((props, ref) => {
    // @ts-ignore
    const maskOptions = getMaskOptionsFromProps(props);
    return (
        <InputMask
            ref={ref}
            // @ts-ignore
            maskOptions={{
                ...maskOptions,
                mask: maskOptions.mask || '0000 0000 0000 0000',
            }}
            smartPlaceholder={'____ ____ ____ ____'}
            {...props}
        />
    );
});

InputCard.displayName = 'InputCard';
