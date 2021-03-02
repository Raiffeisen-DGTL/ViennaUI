import React from 'react';
import Radio, { RadioProps } from './Radio';

test('Radio', () => {
    const snap = snapshot.render(<Radio value='x' />);
    expect(snap).toMatchSnapshot();
});

test('Radio w/ label', () => {
    const snap = snapshot.render(<Radio value='x'>Label</Radio>);
    expect(snap).toMatchSnapshot();
});

test('Radio w/ name', () => {
    const snap = snapshot.render([
        <Radio key='1' name='Radio1' value='x'>
            Label
        </Radio>,
        <Radio key='2' name='Radio2' value='y'>
            Label
        </Radio>,
    ]);

    expect(snap).toMatchSnapshot();
});

test('Radio w/ checked', () => {
    const snap = snapshot.render([
        <Radio key='1' name='Radio1' value='x' checked>
            Label
        </Radio>,
        <Radio key='2' name='Radio2' value='y'>
            Label
        </Radio>,
    ]);

    expect(snap).toMatchSnapshot();
});

test('Radio w/ disabled', () => {
    const snap = snapshot.render([
        <Radio key='1' name='Radio1' value='x' disabled>
            Label
        </Radio>,
        <Radio key='2' name='Radio2' value='y'>
            Label
        </Radio>,
    ]);

    expect(snap).toMatchSnapshot();
});

test('Radio w/ invalid', () => {
    const snap = snapshot.render(
        <Radio key='1' name='Radio1' value='x' invalid>
            Label
        </Radio>
    );

    expect(snap).toMatchSnapshot();
});

test('Radio w/ checked and disabled', () => {
    const snap = snapshot.render([
        <Radio key='1' name='Radio1' value='x' checked disabled>
            Label
        </Radio>,
        <Radio key='2' name='Radio2' value='y'>
            Label
        </Radio>,
    ]);

    expect(snap).toMatchSnapshot();
});

test('Radio w/ size', () => {
    const sizes: RadioProps['size'][] = ['s', 'm', 'l'];

    sizes.forEach((size) => {
        const snap = snapshot.render(
            <Radio value='x' size={size}>
                Label
            </Radio>
        );

        expect(snap).toMatchSnapshot(size);
    });
});

test('Radio w/ any props', () => {
    const props = {
        className: 'className',
        id: 'id',
        title: 'title',
        onClick: () => 'Click',
    };

    const component = (
        <Radio {...props} name='name' value='x'>
            Label
        </Radio>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});

test('Radio w/ onBlur()', () => {
    const fn = jest.fn();
    const event = {};

    const snap = snapshot.shallow(
        <Radio name='radio' value='x' onBlur={fn}>
            Label
        </Radio>
    );

    snap.childAt(0).simulate('blur', event);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { name: 'radio', value: 'x' });
});

test('Radio w/ onFocus()', () => {
    const fn = jest.fn();
    const event = {};

    const snap = snapshot.shallow(
        <Radio name='radio' value='x' onFocus={fn}>
            Label
        </Radio>
    );

    snap.childAt(0).simulate('focus', event);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { name: 'radio', value: 'x' });
});

test('Radio w/ onChange()', () => {
    const fn = jest.fn();
    const event = { currentTarget: { checked: true } };

    const snap = snapshot.shallow(
        <Radio name='radio' value='x' onChange={fn}>
            Label
        </Radio>
    );

    snap.childAt(0).simulate('change', event);
    expect(snap).toMatchSnapshot();

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { name: 'radio', value: 'x' });
});

test('Radio w/ onChange() disabled', () => {
    const fn = jest.fn();
    const event = { currentTarget: { checked: true } };

    const snap = snapshot.shallow(
        <Radio name='radio' value='x' disabled onChange={fn}>
            Label
        </Radio>
    );

    snap.childAt(0).simulate('change', event);
    expect(fn).not.toHaveBeenCalled();
    expect(fn).not.toHaveBeenCalledWith(event, { name: 'radio', value: 'x' });
});
