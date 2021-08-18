import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
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
    const [value, setValue] = React.useState();
    const handleChange = React.useCallback((e, data) => {
        setValue(data.value);
    }, []);
    return <InputDateRange value={value} onChange={handleChange} />;
};
