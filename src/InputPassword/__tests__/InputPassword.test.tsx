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
});
