import React from 'react';
import { Story, Meta } from 'storybook';
import { Textarea, TextareaProps } from './Textarea';
import { Groups } from '@/Groups';
import { Button } from '@/Button';

export default {
    title: 'Development/Textarea',
    component: Textarea,
} as Meta;

export const Overview: Story<TextareaProps> = (args) => {
    const [value, setValue] = React.useState('');
    const handleChange = ({ value }) => setValue(value);
    return <Textarea {...args} showCounter maxLength={30} value={value} maxHeight={200} onChange={handleChange} />;
};

export const WithAdaptive: Story<TextareaProps> = (args) => {
    const [value, setValue] = React.useState('text');
    const handleChange = ({ value }) => setValue(value);
    return <Textarea {...args} size={{ base: 's', s: 's', m: 'l' }} value={value} onChange={handleChange} />;
};

export const UncontrolledTextArea: Story<TextareaProps> = (args) => {
    return <Textarea {...args} placeholder='Текстовое поле' maxLength={10} showCounter />;
};

export const WithMaxCounter: Story<TextareaProps> = (args) => {
    const [value, setValue] = React.useState('');
    const handleChange = ({ value }) => setValue(value);
    return (
        <Textarea
            {...args}
            showCounter
            maxLength={30}
            maxCounter={20}
            value={value}
            maxHeight={200}
            onChange={handleChange}
        />
    );
};

export const ViewOnly: Story<TextareaProps> = (args) => {
    return <Textarea viewOnly showCounter maxLength={30} value={'Какой-то текст'} maxHeight={200} />;
};

export const WithButtonRemoveValue: Story<TextareaProps> = (args) => {
    const [value, setValue] = React.useState('');
    const handleChange = ({ value }) => setValue(value);
    const handleRemoveValue = () => setValue('');

    return (
        <Groups design='vertical'>
            <Textarea {...args} showCounter maxCounter={20} value={value} maxHeight={200} onChange={handleChange} />
            <Button design='accent' onClick={handleRemoveValue}>
                Очистить
            </Button>
        </Groups>
    );
};
