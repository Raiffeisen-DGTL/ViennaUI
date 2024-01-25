import React from 'react';
import { Story, Meta } from 'storybook';
import { DatepickerRange, DatepickerRangeProps } from './DatepickerRange';

export default {
    title: 'Development/DatepickerRange',
    component: DatepickerRange,
    argTypes: {
        value: {
            control: false,
        },
    },
} as Meta;

export const Overview: Story<DatepickerRangeProps> = () => {
    const [value, setValue] = React.useState();
    const handleChange = React.useCallback((e, data) => {
        setValue(data.value);
    }, []);
    return <DatepickerRange value={value} onChange={handleChange} />;
};
