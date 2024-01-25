import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { InputPassword } from '../InputPassword';

describe('InputPassword', () => {
    it('should toggle onclick', () => {
        const component = <InputPassword />;
        render(component);
        // const eyeCloseIcon = screen.getByTestId('EyeClosed.path');

        // // expect(eyeCloseIcon).toBeInTheDocument();
        // userEvent.click(eyeCloseIcon);
        //
        // const eyeOpenIcon = screen.getByTestId('EyeOpened.path');
        //
        // expect(eyeOpenIcon).toBeInTheDocument();
    });

    xit('w/ onChange', () => {
        const component = <InputPassword />;
        render(component);

        const input = screen.getByTestId('InputPassword_0');

        userEvent.type(input, 'Text');

        expect(input).toHaveValue('Text');
    });

    it('should pass props', () => {
        const props = {
            id: 'id',
            title: 'title',
            onClick: () => 'Click',
        };

        const component = <InputPassword {...props} />;

        const wrapper = snapshot.mount(component);
        const input = wrapper.find('input');
        for (const [key, value] of Object.entries(props)) {
            expect(input.props()[key]).toEqual(value);
        }
    });
});
