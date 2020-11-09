import React from 'react';
import Textarea, { TextareaProps } from './Textarea';

test('Textarea', async () => {
    const component = <Textarea />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('Textarea w/ size', async () => {
    const sizes: TextareaProps['size'][] = ['xs', 's', 'm', 'l', 'xl'];
    const components: JSX.Element[] = [];

    sizes.forEach((size) => components.push(<Textarea key={size} size={size} />));

    const snap = snapshot.render(components);
    expect(snap).toMatchSnapshot();
});

test('Textarea w/ design', async () => {
    const designs: TextareaProps['design'][] = ['outline', 'material'];
    const components: JSX.Element[] = [];

    designs.forEach((design) => components.push(<Textarea key={design} design={design} />));

    const snap = snapshot.render(components);
    expect(snap).toMatchSnapshot();
});

test('Textarea w/ value', async () => {
    const component = <Textarea value='some value' />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('Textarea w/ disabled', async () => {
    const designs: TextareaProps['design'][] = ['outline', 'material'];
    const components: JSX.Element[] = [];

    designs.forEach((design) => components.push(<Textarea key={design} design={design} disabled />));

    const snap = snapshot.render(components);
    expect(snap).toMatchSnapshot();
});

test('Textarea w/ invalid', async () => {
    const designs: TextareaProps['design'][] = ['outline', 'material'];
    const components: JSX.Element[] = [];

    designs.forEach((design) => components.push(<Textarea key={design} design={design} invalid />));

    const snap = snapshot.render(components);
    expect(snap).toMatchSnapshot();
});

test('Textarea w/ onChange()', () => {
    const fn = jest.fn();
    const event = { currentTarget: { value: 'value' } };

    const snap = snapshot.shallow(<Textarea name='textarea' onChange={fn} />);

    snap.simulate('change', event);
    expect(snap).toMatchSnapshot();

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { name: 'textarea', value: 'value' });
});

test('Textarea w/ onChange() w/ disabled', () => {
    const fn = jest.fn();
    const event = { currentTarget: { value: 'value' } };

    const snap = snapshot.shallow(<Textarea disabled name='textarea' onChange={fn} />);

    snap.simulate('change', event);
    expect(snap).toMatchSnapshot();

    expect(fn).toHaveBeenCalledTimes(0);
});

test('Textarea w/ onFocus()', () => {
    const fn = jest.fn();
    const event = { currentTarget: { value: 'value' } };

    const snap = snapshot.shallow(<Textarea name='textarea' onFocus={fn} />);

    snap.simulate('focus', event);
    expect(snap).toMatchSnapshot();

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { name: 'textarea', value: 'value' });
});

test('Textarea w/ onBlur()', () => {
    const fn = jest.fn();
    const event = { currentTarget: { value: 'value' } };

    const snap = snapshot.shallow(<Textarea name='textarea' onBlur={fn} />);

    snap.simulate('blur', event);
    expect(snap).toMatchSnapshot();

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { name: 'textarea', value: 'value' });
});

test('Textarea w/ onKeyDown()', () => {
    const fn = jest.fn();
    const event = { key: 'a' };

    const snap = snapshot.shallow(<Textarea name='textarea' onKeyDown={fn} />);

    snap.simulate('keydown', event);
    expect(snap).toMatchSnapshot();

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event);
});

test('Textarea w/ onKeyPress()', () => {
    const fn = jest.fn();
    const event = { key: 'a' };

    const snap = snapshot.shallow(<Textarea name='textarea' onKeyPress={fn} />);

    snap.simulate('keypress', event);
    expect(snap).toMatchSnapshot();

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event);
});

test('Textarea w/ onKeyUp()', () => {
    const fn = jest.fn();
    const event = { key: 'a' };

    const snap = snapshot.shallow(<Textarea name='textarea' onKeyUp={fn} />);

    snap.simulate('keyup', event);
    expect(snap).toMatchSnapshot();

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event);
});

test('Textarea w/ some props', () => {
    const props = {
        className: 'className',
        id: 'id',
        title: 'title',
        onClick: () => 'Click',
    };

    const component = <Textarea {...props} name='textarea' />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});
