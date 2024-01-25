import React, { useRef } from 'react';
import { Story, Meta } from 'storybook';
import { Datepicker, DatepickerProps } from './Datepicker';

export default {
    title: 'Development/Datepicker',
    component: Datepicker,
} as Meta;

export const Overview: Story<DatepickerProps> = (args) => {
    const [value, setValue] = React.useState();
    const ref = useRef();

    const handleChange = React.useCallback((e, data) => setValue(data.value), []);
    return <Datepicker ref={ref} value={value} onChange={handleChange} {...args} />;
};
