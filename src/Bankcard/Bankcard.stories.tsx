import React from 'react';
import { Meta, Story } from 'storybook';
import { Bankcard, BankcardProps } from './Bankcard';
import { RoubleIcon as Rouble } from 'vienna.icons';
import { Groups } from '@/Groups';

export default {
    title: 'Development/Bankcard',
    component: Bankcard,
    argTypes: {
        width: { control: 'number' },
        type: {
            control: 'select',
            options: [
                null,
                'visaClassicTravel',
                'mir',
                'childCard',
                'salaryPlusGold',
                'goldUnionPay',
                'cashbackMir',
                'days110',
                'goldPackage',
                'cashbackAll',
                'business24',
                'business24Super0',
                'travel24',
            ],
        },
        src: { control: 'text' },
        disabled: { control: 'boolean' },
    },
} as Meta;

export const Overview: Story<BankcardProps> = (args) => {
    return <Bankcard width={250} type={'visaClassicTravel'} {...args} />;
};

export const WithAnyImage: Story<BankcardProps> = (args) => {
    return (
        <Groups design='vertical'>
            <Bankcard
                width={250}
                src={
                    'https://plus.unsplash.com/premium_photo-1670148434900-5f0af77ba500?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                {...args}
            />
            <Bankcard width={250} type={'visaClassicTravel'} {...args} />
        </Groups>
    );
};
export const WithIcon: Story<BankcardProps> = (args) => {
    return <Bankcard width={250} icon={<Rouble />} {...args} />;
};
