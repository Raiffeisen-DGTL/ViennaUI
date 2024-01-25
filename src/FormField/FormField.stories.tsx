import React from 'react';
import { Story, Meta } from 'storybook';
import { FormField, FormFieldProps } from './FormField';
import { Input } from '../Input';

export default {
    title: 'Development/FormField',
    component: FormField,
} as Meta;

export const Overview: Story<FormFieldProps> = (args) => {
    return (
        <FormField {...args}>
            <FormField.Label>Название поля</FormField.Label>
            <FormField.Content>
                <Input />
                <FormField.Message>Сообщение</FormField.Message>
            </FormField.Content>
        </FormField>
    );
};

export const NoMessage: Story<FormFieldProps> = (args) => {
    return (
        <FormField {...args}>
            <FormField.Label>Название поля</FormField.Label>
            <FormField.Content>
                <Input />
            </FormField.Content>
        </FormField>
    );
};
NoMessage.storyName = 'Без сообщения';
export const Required: Story<FormFieldProps> = (args) => {
    return (
        <FormField {...args}>
            <FormField.Label required>Название поля</FormField.Label>
            <FormField.Content>
                <Input />
                <FormField.Message color={'critical'}>Сообщение</FormField.Message>
            </FormField.Content>
        </FormField>
    );
};
Required.storyName = 'Обязательный';
export const WithWarning: Story<FormFieldProps> = (args) => {
    return (
        <FormField {...args}>
            <FormField.Label required>Название поля</FormField.Label>
            <FormField.Content>
                <Input />
                <FormField.Message color={'warning'}>AAAAAAA</FormField.Message>
            </FormField.Content>
        </FormField>
    );
};
WithWarning.storyName = 'С предупреждением';

export const WithText: Story<FormFieldProps> = (args) => {
    return (
        <FormField {...args}>
            <FormField.Label required>Название поля</FormField.Label>
            <FormField.Content>Просто текст</FormField.Content>
        </FormField>
    );
};
WithText.storyName = 'С текстом в контенте';
