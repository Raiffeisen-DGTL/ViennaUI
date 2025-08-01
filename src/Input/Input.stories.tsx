import React from 'react';
import { Story, Meta } from 'storybook';
import { Input, InputProps } from './Input';
import { TaskDoneIcon as TaskDone } from 'vienna.icons';

export default {
    title: 'Development/Input',
    component: Input,
} as Meta;

export const Overview: Story<InputProps> = (args) => {
    return <Input {...args} />;
};

export const OutlineAndSizes: Story<InputProps> = (args) => {
    return (
        <>
            <Input
                placeholder='Placeholder'
                design='outline'
                size='xs'
                prefix={<TaskDone size='s' />}
                postfix={'руб.'}
            />
            <Input placeholder='Placeholder' design='outline' size='s' prefix={<TaskDone />} postfix={'руб.'} />
            <Input placeholder='Placeholder' design='outline' size='m' prefix={<TaskDone />} postfix={'руб.'} />
            <Input placeholder='Placeholder' design='outline' size='l' prefix={<TaskDone />} postfix={'руб.'} />
            <Input
                placeholder='Placeholder'
                design='outline'
                size='xl'
                prefix={<TaskDone size='l' />}
                postfix={'руб.'}
            />
            <Input
                placeholder='Placeholder'
                design='outline'
                size='xxl'
                prefix={<TaskDone size='l' />}
                postfix={'руб.'}
            />
        </>
    );
};

export const MaterialAndSizes: Story<InputProps> = (args) => {
    return (
        <>
            <Input
                placeholder='Placeholder'
                design='material'
                size='xs'
                prefix={<TaskDone size='s' />}
                postfix={'руб.'}
            />
            <Input placeholder='Placeholder' design='material' size='s' prefix={<TaskDone />} postfix={'руб.'} />
            <Input placeholder='Placeholder' design='material' size='m' prefix={<TaskDone />} postfix={'руб.'} />
            <Input placeholder='Placeholder' design='material' size='l' prefix={<TaskDone />} postfix={'руб.'} />
            <Input
                placeholder='Placeholder'
                design='material'
                size='xl'
                prefix={<TaskDone size='l' />}
                postfix={'руб.'}
            />
            <Input
                placeholder='Placeholder'
                design='material'
                size='xxl'
                prefix={<TaskDone size='l' />}
                postfix={'руб.'}
            />
        </>
    );
};
export const States: Story<InputProps> = (args) => {
    return (
        <>
            <Input placeholder='Placeholder' design='material' invalid />
            <Input placeholder='Placeholder' design='material' disabled />
        </>
    );
};

export const Placeholders = (args) => {
    return (
        <>
            <Input smartPlaceholder='000000' />
            <Input smartPlaceholder='000000' value='111' />
            <Input placeholder='placeholder' />
            <Input placeholder='placeholder' smartPlaceholder='000000' />
            <Input placeholder='placeholder' smartPlaceholder='000000' value='111' />
        </>
    );
};

export const ViewOnly: Story<InputProps> = (args) => {
    return <Input viewOnly value={'Какой-то текст...'} />;
};
