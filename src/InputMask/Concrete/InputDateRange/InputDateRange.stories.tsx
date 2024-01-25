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
    const handleChange = useCallback((value) => setValue(value), []);
    return <InputDateRange value={value} onChange={handleChange} />;
};
