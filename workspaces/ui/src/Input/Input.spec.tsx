/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { Screw } from 'vienna.icons';
import { Input, NativeInput, InputProps } from './Input';

const prefix = <Screw />;
const postfix = <Screw />;

test('Input', () => {
    const snap = snapshot.render(<Input />);

    expect(snap).toMatchSnapshot();
});

test('Input w/ design', async () => {
    const designs: InputProps['design'][] = ['outline', 'material'];

    designs.forEach((design) => {
        const snap = snapshot.render(<Input design={design} />);
        const snapPrefix = snapshot.render(<Input design={design} prefix={prefix} />);
        const snapPostfix = snapshot.render(<Input design={design} postfix={postfix} />);
        const snapPrefixPostfix = snapshot.render(<Input design={design} prefix={prefix} postfix={postfix} />);

        expect(snap).toMatchSnapshot();
        expect(snapPrefix).toMatchSnapshot();
        expect(snapPostfix).toMatchSnapshot();
        expect(snapPrefixPostfix).toMatchSnapshot();
    });
});

test('Input w/ size', async () => {
    const sizes: InputProps['size'][] = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

    sizes.forEach((size) => {
        const snap = snapshot.render(<Input size={size} />);
        const snapPrefix = snapshot.render(<Input size={size} prefix={prefix} />);
        const snapPostfix = snapshot.render(<Input size={size} postfix={postfix} />);
        const snapPrefixPostfix = snapshot.render(<Input size={size} prefix={prefix} postfix={postfix} />);

        expect(snap).toMatchSnapshot();
        expect(snapPrefix).toMatchSnapshot();
        expect(snapPostfix).toMatchSnapshot();
        expect(snapPrefixPostfix).toMatchSnapshot();
    });
});

test('Input w/ disabled', async () => {
    const snap = snapshot.render(<Input disabled />);
    const snapPrefix = snapshot.render(<Input disabled prefix={prefix} />);
    const snapPostfix = snapshot.render(<Input disabled postfix={postfix} />);
    const snapPrefixPostfix = snapshot.render(<Input disabled prefix={prefix} postfix={postfix} />);

    expect(snap).toMatchSnapshot();
    expect(snapPrefix).toMatchSnapshot();
    expect(snapPostfix).toMatchSnapshot();
    expect(snapPrefixPostfix).toMatchSnapshot();
});

test('Input w/ invalid', async () => {
    const snap = snapshot.render(<Input invalid />);
    const snapPrefix = snapshot.render(<Input invalid prefix={prefix} />);
    const snapPostfix = snapshot.render(<Input invalid postfix={postfix} />);
    const snapPrefixPostfix = snapshot.render(<Input invalid prefix={prefix} postfix={postfix} />);

    expect(snap).toMatchSnapshot();
    expect(snapPrefix).toMatchSnapshot();
    expect(snapPostfix).toMatchSnapshot();
    expect(snapPrefixPostfix).toMatchSnapshot();
});

test('Input w/ placeholder', () => {
    const snap = snapshot.mount(<Input smartPlaceholder='test' />);

    expect(snap.find(NativeInput).childAt(0).text()).toEqual('test');
});

test('Input w/ any props', () => {
    const props = {
        id: 'id',
        title: 'title',
        onClick: () => 'Click',
    };

    const component = <Input {...props} name='input' />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.mount(component);
    const input = wrapper.find('input');
    for (const [key, value] of Object.entries(props)) {
        expect(input.props()[key]).toEqual(value);
    }
});

test('Input w/ onBlur()', () => {
    const fn = jest.fn();
    const event = { currentTarget: { value: 'test' } };

    const snap = snapshot.shallow(<Input onBlur={fn} />);

    const input = snap.childAt(0);
    input.props().onBlur(event);

    expect(snap).toMatchSnapshot();
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { value: 'test', name: undefined });
});

test('Input w/ onFocus()', () => {
    const fn = jest.fn();
    const event = { currentTarget: { value: 'test' } };

    const snap = snapshot.shallow(<Input onFocus={fn} />);

    const input = snap.childAt(0);
    input.props().onFocus(event);

    expect(snap).toMatchSnapshot();
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { value: 'test', name: undefined });
});

test('Input w/ onChange()', () => {
    const fn = jest.fn();

    const event = { currentTarget: { value: 'test' } };

    const snap = snapshot.shallow(<Input onChange={fn} />);

    const input = snap.childAt(0);
    input.props().onChange(event);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { value: 'test', name: undefined });
});

test('Input w/ onChange() disabled', () => {
    const fn = jest.fn();

    const snap = snapshot.shallow(<Input disabled onChange={fn} />);

    const input = snap.childAt(0);
    input.props().onChange({}, {});
    expect(fn).not.toHaveBeenCalled();
});

test('Input w/ onDespose()', async () => {
    const fn = jest.fn();

    const snap = snapshot.mount(<Input name='input' onDespose={fn} />);

    snap.unmount();

    expect(fn).toBeCalledTimes(1);
});
