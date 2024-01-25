import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Filter } from '../Filter';

describe('Filter', () => {
    xit('should call onDelete', async () => {
        const fn = jest.fn();

        const Wrapper = () => {
            return (
                <Filter>
                    <Filter.Item onDelete={fn}>Пол</Filter.Item>

                    <Filter.Item>Рост</Filter.Item>

                    <Filter.Item>Вес</Filter.Item>
                </Filter>
            );
        };
        render(<Wrapper />);
        const closeIcon = screen.getAllByTestId('Item.Close');
        userEvent.click(closeIcon[0]);
        expect(fn).toHaveBeenCalled();
    });
});
