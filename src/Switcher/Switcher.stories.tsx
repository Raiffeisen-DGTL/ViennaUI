import React from 'react';
import { Story, Meta } from 'storybook';
import { Switcher, SwitcherProps } from './Switcher';

export default {
    title: 'Development/Switcher',
    component: Switcher,
} as Meta;

export const Overview: Story<SwitcherProps> = (args) => {
    const [value, setValue] = React.useState(false);
    const handleChange = (e, data) => setValue(data.value);
    return (
        <Switcher {...args} checked={value} onChange={handleChange}>
            Switcher
        </Switcher>
    );
};

export const WithAdaptive: Story<SwitcherProps> = (args) => {
    const [value, setValue] = React.useState(false);
    const handleChange = (e, data) => setValue(data.value);
    return (
        <Switcher size={{ m: 'm', s: 'l' }} {...args} checked={value} onChange={handleChange}>
            Switcher
        </Switcher>
    );
};

WithAdaptive.storyName = 'Адаптив';
