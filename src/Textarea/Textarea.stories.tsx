import React from 'react';
import { Story, Meta } from 'storybook';
import { Textarea, TextareaProps } from './Textarea';

export default {
    title: 'Development/Textarea',
    component: Textarea,
} as Meta;

export const Overview: Story<TextareaProps> = (args) => {
    const [value, setValue] = React.useState('');
    const handleChange = (e, data) => setValue(data.value);
    return <Textarea {...args} showCounter maxLength={150} value={value} onChange={handleChange} />;
};

export const WithAdaptive: Story<TextareaProps> = (args) => {
    const [value, setValue] = React.useState('text');
    const handleChange = (e, data) => setValue(data.value);
    return <Textarea {...args} size={{ base: 'xs', s: 's', m: 'xl' }} value={value} onChange={handleChange} />;
};
