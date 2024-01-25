import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from '../Textarea';

describe.skip('Textarea', () => {
    it('should test the typing', () => {
        render(<Textarea />);
        const input = screen.getByRole('textbox');

        userEvent.type(input, 'Text');
        expect(input).toHaveValue('Text');
    });

    it('should test the counter', () => {
        render(<Textarea showCounter />);
        const input = screen.getByRole('textbox');
        userEvent.type(input, 'Text');
        const span = screen.getByTestId('Textarea.Span');

        expect(input).toHaveValue('Text');
        expect(span).toHaveTextContent('4');
    });

    it('should test the focus by tab', () => {
        render(<Textarea />);
        const input = screen.getByRole('textbox');
        userEvent.tab();
        userEvent.keyboard('Text');
        expect(input).toHaveValue('Text');
    });

    it('should test the focus by tab for two inputs', () => {
        render(<Textarea />);
        render(<Textarea />);
        const [input] = screen.getAllByRole('textbox');
        userEvent.tab();
        userEvent.tab();
        userEvent.keyboard('Text');
        expect(input).toHaveValue('');
    });

    it('should test the inverse tab for two inputs', () => {
        render(<Textarea tabIndex={2} />);
        render(<Textarea tabIndex={1} />);
        const [input] = screen.getAllByRole('textbox');
        userEvent.tab();
        userEvent.tab();
        userEvent.keyboard('Text');
        expect(input).toHaveValue('Text');
    });

    it('should call onFocus when focus', () => {
        const fn = jest.fn();
        render(<Textarea value='test' onFocus={fn} />);
        userEvent.tab();

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { value: 'test' });
    });

    it('should call onBlur when blur', () => {
        const fn = jest.fn();
        render(<Textarea value='test' onBlur={fn} />);
        userEvent.tab();
        userEvent.tab();

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { value: 'test', name: undefined });
    });

    it('should call onChange when type', () => {
        const fn = jest.fn();
        render(<Textarea onChange={fn} />);
        const input = screen.getByRole('textbox');
        userEvent.type(input, 'Text');

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { value: 'Text', name: undefined });
    });

    xit('should not call onChange when disabled', () => {
        const fn = jest.fn();

        render(<Textarea disabled onChange={fn} />);
        const input = screen.getByRole('textbox');
        userEvent.type(input, 'Text');
        expect(fn).not.toHaveBeenCalled();
    });

    xit('should call onKeyDown when type', () => {
        const fn = jest.fn();
        render(<Textarea onKeyDown={fn} />);
        const input = screen.getByRole('textbox');
        userEvent.type(input, 'Text');
        expect(input).toHaveValue('Text');
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledTimes(4);
    });
    xit('should call onKeyUp when type', () => {
        const fn = jest.fn();
        render(<Textarea onKeyUp={fn} />);
        const input = screen.getByRole('textbox');
        userEvent.type(input, 'Text');
        expect(input).toHaveValue('Text');
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledTimes(4);
    });

    it('should call onKeyPress when keypress', () => {
        const fn = jest.fn();
        const event = { key: 'a' };

        const snap = snapshot.shallow(<Textarea name='textarea' onKeyPress={fn} />);

        const textarea = snap.find('[name="textarea"]');
        expect(snap).toMatchSnapshot();

        textarea.simulate('keypress', event);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(event);
    });

    it('should pass some props', () => {
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

        const properties = wrapper.props().children[0].props;
        for (const [key, value] of Object.entries(props)) {
            expect(properties[key]).toEqual(value);
        }
    });
});
