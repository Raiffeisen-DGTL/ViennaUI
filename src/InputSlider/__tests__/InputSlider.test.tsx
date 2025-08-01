import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { InputSlider } from '../InputSlider';

describe('InputSlider', () => {
    it('should change', () => {
        const Wrapper = () => {
            const [value, setValue] = React.useState(800);

            return (
                <InputSlider
                    value={value}
                    data-testid={'Wrapper.InputSlider'}
                    onChange={(d: number | null) => setValue(Number(d))}
                />
            );
        };
        render(<Wrapper />);
        const input = screen.getByTestId('Wrapper.InputSlider');
        fireEvent.mouseDown(input, { target: { value: 901 } });
        expect(input).toHaveValue(String(901));
    });
});
