import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input, NativeInput } from '../Input';

describe.skip('Input', () => {
    test('w/ typing', () => {
        render(<Input />);
        const input = screen.getByRole('textbox');
        userEvent.type(input, 'Text');
        expect(input).toHaveValue('Text');
    });

    test('w/ tab', () => {
        render(<Input />);
        const input = screen.getByRole('textbox');
        userEvent.tab();
        userEvent.keyboard('Text');
        expect(input).toHaveValue('Text');
    });

    test('w/ tab w/ two inputs', () => {
        render(<Input />);
        render(<Input />);
        const [input] = screen.getAllByRole('textbox');
        userEvent.tab();
        userEvent.tab();
        userEvent.keyboard('Text');
        expect(input).toHaveValue('');
    });

    test('w/ inverse tab w/ two inputs', () => {
        render(<Input tabIndex={2} />);
        render(<Input tabIndex={1} />);
        const [input] = screen.getAllByRole('textbox');
        userEvent.tab();
        userEvent.tab();
        userEvent.keyboard('Text');
        expect(input).toHaveValue('Text');
    });

    test('w/ placeholder', () => {
        const snap = snapshot.mount(<Input smartPlaceholder='test' />);
        expect(snap.find(NativeInput).childAt(0).text()).toEqual('test');
    });

    test('w/ any props', () => {
        const props = {
            id: 'id',
            title: 'title',
            onClick: () => 'Click',
        };

        const component = <Input {...props} name='input' />;
        const wrapper = snapshot.mount(component);
        const input = wrapper.find('input');

        for (const [key, value] of Object.entries(props)) {
            expect(input.props()[key]).toEqual(value);
        }
    });

    test('w/ onFocus()', () => {
        const fn = jest.fn();
        render(<Input onFocus={fn} value='test' />);
        userEvent.tab();

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { value: 'test' });
    });

    test('w/ onBlur()', () => {
        const fn = jest.fn();
        render(<Input onBlur={fn} value='test' />);
        userEvent.tab();
        userEvent.tab();

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { value: 'test', name: undefined });
    });

    test('w/ onChange()', () => {
        const fn = jest.fn();
        render(<Input onChange={fn} />);
        const input = screen.getByRole('textbox');
        userEvent.type(input, 'Text');

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { value: 'Text', name: undefined });
    });

    test('w/ onChange() disabled', () => {
        const fn = jest.fn();

        const snap = snapshot.shallow(<Input disabled onChange={fn} />);

        const input = snap.childAt(0);
        input.props().onChange({}, {});

        expect(fn).not.toHaveBeenCalled();
    });

    test('w/ onDespose()', async () => {
        const fn = jest.fn();

        const snap = snapshot.mount(<Input name='input' onDespose={fn} />);

        snap.unmount();

        expect(fn).toBeCalledTimes(1);
    });
});
