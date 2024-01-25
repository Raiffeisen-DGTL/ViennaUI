import React from 'react';
import { Card } from '../Card';

describe('Card', () => {
    it('should pass any props', () => {
        const props = { className: 'className', id: 'id', onClick: () => 'Card' };
        const component = <Card {...props}>Card content</Card>;

        const wrapper = snapshot.shallow(component);
        for (const [key, value] of Object.entries(props)) {
            expect(wrapper.props()[key]).toEqual(value);
        }
    });
});
