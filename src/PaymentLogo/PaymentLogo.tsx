import React, { forwardRef } from 'react';
import { MasterCard, Mir, Visa } from './Logotypes';
import { Box, PropsBox } from './PaymentLogo.styles';
import { BoxStyled } from '../Utils/styled';

export interface PaymentLogoProps extends BoxStyled<typeof Box, PropsBox> {
    design?: PropsBox['$design'];
    size?: PropsBox['$size'];
    clickable?: PropsBox['$clickable'];
    logo?: 'mastercard' | 'mir' | 'visa';
}

const logotypes = {
    mastercard: MasterCard,
    mir: Mir,
    visa: Visa,
};

export const PaymentLogo = forwardRef<HTMLDivElement, PaymentLogoProps>((props, ref) => {
    const { children, size = 'm', logo = 'mastercard', design = 'wildsand', ...attrs } = props;

    const clickable = Boolean(props.onClick) ?? props.clickable;
    const Logotype = logotypes[logo];

    return (
        <Box {...(attrs as {})} ref={ref} $size={size} $clickable={clickable} $design={design}>
            {children ?? <Logotype size={size} />}
        </Box>
    );
});

PaymentLogo.displayName = 'PaymentLogo';
