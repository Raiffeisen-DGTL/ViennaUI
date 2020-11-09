import React from 'react';
import Switcher, { SwitcherProps } from './Switcher';

test('Switcher', () => {
    const snap = snapshot.render(<Switcher />);
    expect(snap).toMatchSnapshot();
});

test('Switcher w/ label', () => {
    const snap = snapshot.render(<Switcher>Label</Switcher>);
    expect(snap).toMatchSnapshot();
});

test('Switcher w/ name', () => {
    const snap = snapshot.render([
        <Switcher key='1' name='switcher1' />,
        <Switcher key='2' name='switcher2'>
            Label
        </Switcher>,
    ]);

    expect(snap).toMatchSnapshot();
});

test('Switcher w/ checked', () => {
    const snap = snapshot.render([
        <Switcher key='1' checked />,
        <Switcher key='2' checked>
            Label
        </Switcher>,
    ]);

    expect(snap).toMatchSnapshot();
});

test('Switcher w/ disabled', () => {
    const snap = snapshot.render([
        <Switcher key='1' disabled />,
        <Switcher key='2' disabled>
            Label
        </Switcher>,
    ]);

    expect(snap).toMatchSnapshot();
});

test('Switcher w/ checked and disabled', () => {
    const snap = snapshot.render([
        <Switcher key='1' checked disabled />,
        <Switcher key='2' checked disabled>
            Label
        </Switcher>,
    ]);

    expect(snap).toMatchSnapshot();
});

test('Switcher w/ size', () => {
    const sizes: SwitcherProps['size'][] = ['m', 'l'];

    sizes.forEach((size) => {
        const snap = snapshot.render(<Switcher size={size}>Label</Switcher>);
        expect(snap).toMatchSnapshot(size);
    });
});

test('Switcher w/ any props', () => {
    const props = {
        className: 'className',
        id: 'id',
        title: 'title',
        onClick: () => 'Click',
    };

    const component = (
        <Switcher {...props} name='name'>
            Label
        </Switcher>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});

test('Switcher w/ onBlur()', () => {
    const fn = jest.fn();
    const event = { currentTarget: { checked: true } };

    const snap = snapshot.shallow(
        <Switcher name='switcher' checked onBlur={fn}>
            Label
        </Switcher>
    );

    snap.childAt(1).simulate('blur', event);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { name: 'switcher', value: true });
});

test('Switcher w/ onFocus()', () => {
    const fn = jest.fn();
    const event = { currentTarget: { checked: false } };

    const snap = snapshot.shallow(
        <Switcher name='switcher' onFocus={fn}>
            Label
        </Switcher>
    );

    snap.childAt(1).simulate('focus', event);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { name: 'switcher', value: false });
});

test('Switcher w/ onChange()', () => {
    const fn = jest.fn();
    const event = { currentTarget: { checked: true } };

    const snap = snapshot.shallow(
        <Switcher name='switcher' onChange={fn}>
            Label
        </Switcher>
    );

    snap.childAt(1).simulate('change', event);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { name: 'switcher', value: true });
});

test('Switcher w/ onChange() disabled', () => {
    const fn = jest.fn();
    const event = { currentTarget: { checked: true } };

    const snap = snapshot.shallow(
        <Switcher name='switcher' disabled onChange={fn}>
            Label
        </Switcher>
    );

    snap.childAt(1).simulate('change', event);
    expect(fn).not.toHaveBeenCalled();
    expect(fn).not.toHaveBeenCalledWith(event, { name: 'switcher', value: true });
});
