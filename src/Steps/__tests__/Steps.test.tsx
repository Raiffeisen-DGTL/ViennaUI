/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Steps } from '../Steps';

describe('Steps Component', () => {
    it('renders step width header and text', () => {
        const { getByText } = render(
            <Steps>
                <Steps.Step header='Title' text='Subtitle' />
            </Steps>
        );
        expect(getByText('Title')).toBeInTheDocument();
        expect(getByText('Subtitle')).toBeInTheDocument();
    });

    it('should trigger onClick on step header', () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(
            <Steps>
                <Steps.Step onClick={handleClick} header={'Title'} text={'Subtitle'} />
            </Steps>
        );
        const stepHeader = getByTestId('step-header');
        fireEvent.click(stepHeader);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
