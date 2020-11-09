import React, { HTMLAttributes } from 'react';
import { MasterCard, Mir, Visa } from './Logotypes';
import { Box } from './PaymentLogo.styles';

export interface PaymentLogoProps extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
    children?: React.ReactNode;
    logo?: 'mastercard' | 'mir' | 'visa';
    design?: 'wildsand' | 'whitebox' | 'ghost';
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    clickable?: boolean;
    forwardedRef?: any;
}

export const PaymentLogo: React.FC<PaymentLogoProps> = (props): JSX.Element => {
    const { children, size, logo = 'mastercard', forwardedRef, ...attrs } = props;

    const clickable = props.onClick ?? props.clickable;
    const logotypes = { mastercard: MasterCard, mir: Mir, visa: Visa };

    return (
        <Box {...attrs} size={size} ref={forwardedRef} clickable={clickable}>
            {children ?? React.createElement(logotypes[logo], { size }, null)}
        </Box>
    );
};

PaymentLogo.defaultProps = {
    size: 'm',
    design: 'wildsand',
    logo: 'mastercard',
};

PaymentLogo.displayName = 'PaymentLogo';
export default PaymentLogo;
