import React, {useCallback, useState} from 'react';
import { Story, Meta } from 'storybook';
import { InputPhone } from './InputPhone';
import { InputMaskProps } from "../../InputMask";

export default {
    title: 'Development/InputPhone',
    component: InputPhone,
} as Meta;

export const Overview: Story<any> = () => {
    const [value, setValue] = useState();
    const changeHandler = useCallback((value) => setValue(value), []);

    return <InputPhone onChange={changeHandler} value={value} />;
};

export const DifferentMask: Story<InputMaskProps> = () => {
    const [value, setValue] = React.useState('')
    const handleChange = React.useCallback((value) => {
        setValue(value)
    }, [])

    return (
        <InputPhone
            value={value}
            mask={'+{42} (000) {234}-00-00'}
            placeholderChar={'#'}
            smartPlaceholder={'+42 (###) 234-##-##'}
            onChange={handleChange}
        />
    )
}

DifferentMask.storyName = 'Вариант с передачей кастомного замещающего символа';
