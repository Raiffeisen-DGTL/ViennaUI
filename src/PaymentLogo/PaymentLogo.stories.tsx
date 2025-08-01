import React from 'react';
import { Story, Meta } from 'storybook';
import { PaymentLogo, PaymentLogoProps } from './PaymentLogo';

export default {
    title: 'Development/PaymentLogo',
    component: PaymentLogo,
} as Meta;

export const Overview: Story<PaymentLogoProps> = (args) => {
    return <PaymentLogo logo='visa' {...args} />;
};
export const Mir: Story<PaymentLogoProps> = (args) => {
    return <PaymentLogo logo='mir' {...args} />;
};
export const Mastercard: Story<PaymentLogoProps> = (args) => {
    return <PaymentLogo logo='mastercard' {...args} />;
};
