import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormField } from '../FormField';

describe('FormField', () => {
    test('w/ content', () => {
        render(
            <FormField>
                <FormField.Label>Label</FormField.Label>
                <FormField.Content>Input</FormField.Content>
            </FormField>
        );

        const label = screen.queryByText('Label');
        expect(label).toBeInTheDocument();

        const content = screen.queryByText('Input');
        expect(content).toBeInTheDocument();
    });
});

test('w/ any props', () => {
    const props = { className: 'className', id: 'alarm', title: 'title', onClick: () => 'FormField' };
    const component = (
        <FormField {...props}>
            <FormField.Label>Label</FormField.Label>
            <FormField.Content>Input</FormField.Content>
        </FormField>
    );

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});

test('w/ label any props', () => {
    const props = { className: 'className', id: 'alarm', title: 'title', onClick: () => 'FormField' };
    const component = (
        <FormField>
            <FormField.Label {...props}>Label</FormField.Label>
            <FormField.Content>Input</FormField.Content>
        </FormField>
    );

    const wrapper = snapshot.shallow(component);
    expect(wrapper.find(FormField.Label)).toHaveLength(1);

    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.find(FormField.Label).props()[key]).toEqual(value);
    }
});

test('w/ message any props', () => {
    const props = { className: 'className', id: 'alarm', title: 'title', onClick: () => 'FormField' };
    const component = (
        <FormField>
            <FormField.Label>Label</FormField.Label>
            <FormField.Content>
                Input
                <FormField.Message {...props}>Message</FormField.Message>
            </FormField.Content>
        </FormField>
    );

    const wrapper = snapshot.shallow(component);
    expect(wrapper.find(FormField.Message)).toHaveLength(1);

    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.find(FormField.Message).props()[key]).toEqual(value);
    }
});
