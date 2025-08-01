import React, { useCallback, useState } from 'react';
import { Story, Meta } from 'storybook';
import { InputPhone } from './InputPhone';
import { InputMaskProps } from '../../InputMask';

export default {
    title: 'Development/InputPhone',
    component: InputPhone,
} as Meta;

export const Overview: Story<any> = () => {
    const [value, setValue] = useState();
    const changeHandler = useCallback(({ value: data }) => setValue(data), []);

    return <InputPhone onChange={changeHandler} value={value} />;
};

export const DifferentMask: Story<InputMaskProps> = () => {
    const [value, setValue] = React.useState('');
    const handleChange = React.useCallback(({ value: data }) => {
        setValue(data);
    }, []);

    return (
        <InputPhone
            value={value}
            mask={'+{42} (000) {234}-00-00'}
            placeholderChar={'#'}
            smartPlaceholder={'+42 (###) 234-##-##'}
            placeholder={'+42 (###) 234-##-##'}
            onChange={handleChange}
        />
    );
};

DifferentMask.storyName = 'Вариант с передачей кастомного замещающего символа';

export const MaskWithSetTimeout: Story<InputMaskProps> = () => {
    const [value, setValue] = React.useState('');
    const handleChange = React.useCallback(({ value: data }) => setValue(data), []);

    React.useEffect(() => {
        setTimeout(() => {
            setValue('+7 213 213-12-31');
        }, 2000);
    }, []);

    return <InputPhone value={value} onChange={handleChange} />;
};

MaskWithSetTimeout.storyName = 'Вариант с setTimeout';

export const ViewOnly: Story<any> = () => {
    return <InputPhone viewOnly value={'+7 213 213-12-31'} />;
};
