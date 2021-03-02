import React from 'react';
import Checkbox, { CheckboxProps } from './Checkbox';

test('Checkbox', () => {
    const snap = snapshot.render([<Checkbox key='1' />, <Checkbox key='2' checked />]);
    expect(snap).toMatchSnapshot();
});

test('Checkbox w/ label', () => {
    const snap = snapshot.render([
        <Checkbox key='1'>Label</Checkbox>,
        <Checkbox key='2' checked>
            Label
        </Checkbox>,
    ]);

    expect(snap).toMatchSnapshot();
});

test('Checkbox w/ name', () => {
    const snap = snapshot.render([
        <Checkbox key='1' name='Checkbox1' />,
        <Checkbox key='2' name='Checkbox2' checked>
            Label
        </Checkbox>,
    ]);

    expect(snap).toMatchSnapshot();
});

test('Checkbox w/ disabled', () => {
    const snap = snapshot.render([
        <Checkbox key='1' name='Checkbox1' disabled />,
        <Checkbox key='2' name='Checkbox2' disabled>
            Label
        </Checkbox>,
    ]);

    expect(snap).toMatchSnapshot();
});

test('Checkbox w/ checked and disabled', () => {
    const snap = snapshot.render([
        <Checkbox key='1' name='Checkbox1' disabled checked />,
        <Checkbox key='2' name='Checkbox2' disabled checked>
            Label
        </Checkbox>,
    ]);

    expect(snap).toMatchSnapshot();
});

test('Checkbox w/ invalid', () => {
    const snap = snapshot.render([
        <Checkbox key='1' name='Checkbox1' invalid />,
        <Checkbox key='2' name='Checkbox2' invalid>
            Label
        </Checkbox>,
    ]);

    expect(snap).toMatchSnapshot();
});

test('Checkbox w/ size', () => {
    const sizes: CheckboxProps['size'][] = ['s', 'm', 'l'];

    sizes.forEach((size) => {
        const snap = snapshot.render(<Checkbox size={size}>Label</Checkbox>);
        expect(snap).toMatchSnapshot(size);
    });
});

test('Checkbox w/ any props', () => {
    const props = {
        className: 'className',
        id: 'id',
        title: 'title',
        onClick: () => 'Click',
    };

    const component = (
        <Checkbox {...props} name='name'>
            Label
        </Checkbox>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});

test('Checkbox w/ onBlur()', () => {
    const fn = jest.fn();
    const event = { currentTarget: { checked: false } };

    const snap = snapshot.shallow(
        <Checkbox name='checkbox' onBlur={fn}>
            Label
        </Checkbox>
    );

    snap.childAt(0).childAt(0).simulate('blur', event);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { name: 'checkbox', value: false });
});

test('Checkbox w/ onFocus()', () => {
    const fn = jest.fn();
    const event = { currentTarget: { checked: false } };

    const snap = snapshot.shallow(
        <Checkbox name='checkbox' onFocus={fn}>
            Label
        </Checkbox>
    );

    snap.childAt(0).childAt(0).simulate('focus', event);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { name: 'checkbox', value: false });
});

test('Checkbox w/ onChange()', () => {
    const fn = jest.fn();
    const event = { currentTarget: { checked: true } };

    const snap = snapshot.shallow(
        <Checkbox name='checkbox' onChange={fn}>
            Label
        </Checkbox>
    );

    snap.childAt(0).childAt(0).simulate('change', event);
    expect(snap).toMatchSnapshot();

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { name: 'checkbox', value: true });
});

test('Checkbox w/ onChange() disabled', () => {
    const fn = jest.fn();
    const event = { currentTarget: { checked: true } };

    const snap = snapshot.shallow(
        <Checkbox name='checkbox' disabled onChange={fn}>
            Label
        </Checkbox>
    );

    snap.childAt(0).childAt(0).simulate('change', event);
    expect(fn).not.toHaveBeenCalled();
    expect(fn).not.toHaveBeenCalledWith(event, { name: 'checkbox', value: true });
});
