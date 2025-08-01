import React from 'react';
import { render } from '@testing-library/react';
import { InputDate } from '../InputDate';

describe('InputDate Component', () => {
    it('should output the value if less than the minimum', () => {
        const value = '03.02.2025';
        const { getByRole } = render(<InputDate value={value} min={new Date('2025-03-04')} />);
        const input = getByRole('textbox');
        expect(input.value).toBe(value);
    });
});
