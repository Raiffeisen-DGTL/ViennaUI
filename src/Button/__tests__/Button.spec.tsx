import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../Button';

describe.skip('Button', () => {
    it('should has link', () => {
        const component = (
            <>
                <Button href='/' design='accent'>
                    Home
                </Button>
                <Button design='primary' href='http://google.com' target='_blank'>
                    Google
                </Button>
            </>
        );

        const wrapper = snapshot.mount(component);
        expect(wrapper.find('a')).toHaveLength(2);
    });

    it('should pass any props', () => {
        const props = { className: 'className', id: 'id', onClick: () => 'Button' };
        const component = <Button {...props}>Test</Button>;

        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();

        const wrapper = snapshot.shallow(component);
        for (const [key, value] of Object.entries(props)) {
            expect(wrapper.props()[key]).toEqual(value);
        }
    });

    it('should call onFocus when focus', () => {
        const fn = jest.fn();
        render(<Button onFocus={fn}>Test button</Button>);
        userEvent.tab();

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onBlur when blur', () => {
        const fn = jest.fn();
        render(<Button onBlur={fn}>Test button</Button>);
        userEvent.tab();
        userEvent.tab();

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onClick when click', () => {
        const fn = jest.fn();
        render(<Button onClick={fn}>Test button</Button>);
        const button = screen.getByRole('button');
        userEvent.click(button);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onMouseDown when mouse down', () => {
        const fn = jest.fn();
        render(<Button onMouseDown={fn}>Test button</Button>);
        const button = screen.getByRole('button');
        userEvent.click(button);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onMouseUp when mouse up', () => {
        const fn = jest.fn();
        render(<Button onMouseUp={fn}>Test button</Button>);
        const button = screen.getByRole('button');
        userEvent.click(button);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });
});
