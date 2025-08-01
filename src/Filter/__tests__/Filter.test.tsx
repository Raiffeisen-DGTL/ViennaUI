import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Filter } from '../Filter';

describe('Filter', () => {
    it('should call onDelete', async () => {
        const fn = jest.fn();

        const Wrapper = () => {
            return (
                <Filter>
                    <Filter.Item testId={{ cross: 'Item.Close' }} onDelete={fn}>
                        Пол
                    </Filter.Item>

                    <Filter.Item>Рост</Filter.Item>

                    <Filter.Item>Вес</Filter.Item>
                </Filter>
            );
        };
        const { getByTestId } = render(<Wrapper />);
        const closeIcon = getByTestId('Item.Close');
        await userEvent.click(closeIcon);
        expect(fn).toHaveBeenCalled();
    });
});
