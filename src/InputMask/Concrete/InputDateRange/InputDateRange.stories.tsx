import React, { useCallback, useState } from 'react';
import { Story, Meta } from 'storybook';
import { InputDateRange } from './InputDateRange';

export default {
    title: 'Development/InputDateRange',
    component: InputDateRange,
    argTypes: {
        value: {
            control: false,
        },
    },
} as Meta;

export const Overview: Story = () => {
    const [value, setValue] = useState();
    const handleChange = useCallback(({ value: data }) => setValue(data), []);
    return <InputDateRange value={value} onChange={handleChange} />;
};

export const ViewOnly: Story = () => {
    return <InputDateRange viewOnly value={'08.04.2024 - 14.04.2024'} />;
};
