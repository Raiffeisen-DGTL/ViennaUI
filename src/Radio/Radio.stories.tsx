import React from 'react';
import { Story, Meta } from 'storybook';
import { Radio, RadioProps } from './Radio';

export default {
    title: 'Development/Radio',
    component: Radio,
} as Meta;

export const Overview: Story<RadioProps> = (args) => {
    return <Radio {...args}>Check</Radio>;
};

export const WithAdaptive: Story<RadioProps> = (args) => {
    return (
        <Radio disabled size={{ m: 'm', s: 'l' }} {...args}>
            Check
        </Radio>
    );
};

WithAdaptive.storyName = 'Адаптив';
