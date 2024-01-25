import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { InputSlider } from '../InputSlider';

describe.skip('InputSlider', () => {
    it('should pass any props', () => {
        const props = {
            id: 'id',
            title: 'title',
            onClick: () => 'Click',
        };

        const component = <InputSlider {...props} />;
        const wrapper = snapshot.mount(component);
        const input = wrapper.find('input');
        for (const [key, value] of Object.entries(props)) {
            expect(input.props()[key]).toEqual(value);
        }
    });

    it('should change', () => {
        const Wrapper = () => {
            const [value, setValue] = React.useState(800);

            return <InputSlider value={value} onChange={(e, d) => setValue(Number(d.value))} />;
        };
        render(<Wrapper />);
        const input = screen.getByTestId('Wrapper.InputSlider');
        fireEvent.mouseDown(input, { target: { value: 901 } });
        expect(input).toHaveValue(String(901));
    });
});
