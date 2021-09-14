import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wizard from './Wizard';

describe('Wizard', () => {
    it.skip('should call onChange when click on step', () => {
        const fn = jest.fn();
        render(
            <Wizard value={1} onChange={fn}>
                <Wizard.Body>
                    <Wizard.Step title='Шаг 1'>1</Wizard.Step>
                    <Wizard.Step title='Шаг 2'>2</Wizard.Step>
                    <Wizard.Step title='Шаг 3'>3</Wizard.Step>
                </Wizard.Body>
                <Wizard.Footer>Footer</Wizard.Footer>
            </Wizard>
        );
        const [, step1, step2] = screen.getAllByTestId('Wizard.header.StepPoint');
        userEvent.click(step1);
        expect(fn).toHaveBeenCalledWith(1, { isActive: true });

        userEvent.click(step2);
        expect(fn).toHaveBeenCalledWith(2, { isActive: false });
    });
});
