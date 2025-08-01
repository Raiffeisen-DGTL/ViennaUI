import React from 'react';
import { Story, Meta } from 'storybook';
import { ManPersonIcon } from 'vienna.icons';
import { RoundIcon, RoundIconProps } from './RoundIcon';

export default {
    title: 'Development/RoundIcon',
    component: RoundIcon,
} as Meta;

export const Overview: Story<RoundIconProps> = (args) => {
    return <RoundIcon {...args}>D</RoundIcon>;
};

export const WithIcon: Story<RoundIconProps> = (args) => {
    return (
        <RoundIcon {...args}>
            <ManPersonIcon />
        </RoundIcon>
    );
};
WithIcon.storyName = 'С иконкой';
