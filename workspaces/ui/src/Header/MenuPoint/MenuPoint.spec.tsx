import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MenuPoint from './MenuPoint';

describe('MenuPoint', () => {
    it('should be correct markup', async () => {
        const handleClick = jest.fn();
        const menuPoint = <MenuPoint value='score' label='Счета' onClick={handleClick} />;
        const { container } = render(menuPoint);

        const icon = container.querySelector('svg');
        const span = container.querySelector('span');
        screen.getByRole('button');
        expect(icon).toBeInTheDocument();
        expect(span).toBeInTheDocument();
        expect(span).toHaveTextContent(/Счета/i);
    });

    it('should handle click', async () => {
        const handleClick = jest.fn();
        const menuPoint = <MenuPoint value='score' label='Счета' onClick={handleClick} />;
        render(menuPoint);

        userEvent.click(screen.getByText(/Счета/i));
        expect(handleClick).toBeCalledTimes(1);
    });
});
