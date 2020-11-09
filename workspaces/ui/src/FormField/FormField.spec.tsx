import React from 'react';
import FormField, { FormFieldMessageProps } from './FormField';

test('FormField', () => {
    const snap = snapshot.render(
        <FormField>
            <FormField.Label>Label</FormField.Label>
            <FormField.Content>Input</FormField.Content>
        </FormField>
    );

    expect(snap).toMatchSnapshot();
});

test('FormField w/ exists components', () => {
    const wrapper = snapshot.shallow(
        <FormField>
            <FormField.Label>Label</FormField.Label>
            <FormField.Content>
                Input
                <FormField.Message>Message</FormField.Message>
            </FormField.Content>
        </FormField>
    );

    expect(wrapper.find(FormField.Label)).toHaveLength(1);
    expect(wrapper.find(FormField.Message)).toHaveLength(1);
    expect(wrapper.find(FormField.Content)).toHaveLength(1);
});

test('FormField w/ inline', () => {
    const snap = snapshot.render(
        <FormField inline>
            <FormField.Label>Label</FormField.Label>
            <FormField.Content>
                Input
                <FormField.Message>Message</FormField.Message>
            </FormField.Content>
        </FormField>
    );

    expect(snap).toMatchSnapshot();
});

test('FormField w/ label required', () => {
    const snap = snapshot.render(
        <FormField>
            <FormField.Label required>Label</FormField.Label>
            <FormField.Content>
                Input
                <FormField.Message>Message</FormField.Message>
            </FormField.Content>
        </FormField>
    );

    expect(snap).toMatchSnapshot();
});

test('FormField w/ message', () => {
    const snap = snapshot.render(
        <FormField>
            <FormField.Label>Label</FormField.Label>
            <FormField.Content>
                Input
                <FormField.Message>Message</FormField.Message>
            </FormField.Content>
        </FormField>
    );

    expect(snap).toMatchSnapshot();
});

test('FormField w/ message coloring', () => {
    const colors: FormFieldMessageProps['color'][] = ['critical', 'warning'];

    colors.forEach((color) => {
        const snap = snapshot.render(
            <FormField>
                <FormField.Label required>Label</FormField.Label>
                <FormField.Content>
                    Input
                    <FormField.Message color={color}>Message</FormField.Message>
                </FormField.Content>
            </FormField>
        );

        expect(snap).toMatchSnapshot(color);
    });
});

test('FormField w/ message align', () => {
    const aligns: FormFieldMessageProps['align'][] = ['left', 'center', 'right'];

    aligns.forEach((align) => {
        const snap = snapshot.render(
            <FormField>
                <FormField.Label required>Label</FormField.Label>
                <FormField.Content>
                    Input
                    <FormField.Message align={align}>Message</FormField.Message>
                </FormField.Content>
            </FormField>
        );

        expect(snap).toMatchSnapshot(align);
    });
});

test('FormField w/ messages', () => {
    const snap = snapshot.render(
        <FormField>
            <FormField.Label required>Label</FormField.Label>
            <FormField.Content>
                Input
                <FormField.Message>Message</FormField.Message>
                <FormField.Message>Message #2</FormField.Message>
            </FormField.Content>
        </FormField>
    );

    expect(snap).toMatchSnapshot();
});

test('FormField w/ any props', () => {
    const props = { className: 'className', id: 'alarm', title: 'title', onClick: () => 'FormField' };
    const component = (
        <FormField {...props}>
            <FormField.Label>Label</FormField.Label>
            <FormField.Content>Input</FormField.Content>
        </FormField>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});

test('FormField w/ label any props', () => {
    const props = { className: 'className', id: 'alarm', title: 'title', onClick: () => 'FormField' };
    const component = (
        <FormField>
            <FormField.Label {...props}>Label</FormField.Label>
            <FormField.Content>Input</FormField.Content>
        </FormField>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    expect(wrapper.find(FormField.Label)).toHaveLength(1);

    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.find(FormField.Label).props()[key]).toEqual(value);
    }
});

test('FormField w/ message any props', () => {
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

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    expect(wrapper.find(FormField.Message)).toHaveLength(1);

    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.find(FormField.Message).props()[key]).toEqual(value);
    }
});
