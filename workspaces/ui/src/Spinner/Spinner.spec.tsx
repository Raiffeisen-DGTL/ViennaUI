import React from 'react';
import Spinner, { SpinnerProps } from './Spinner';

test('Spinner', () => {
    const snap = snapshot.render(<Spinner />);
    expect(snap).toMatchSnapshot();
});

test('Spinner w/ size', () => {
    const sizes: SpinnerProps['size'][] = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

    sizes.forEach((size) => {
        const snap = snapshot.render(<Spinner size={size} />);
        expect(snap).toMatchSnapshot(size);
    });
});

test('Spinner w/ position', () => {
    const positions: SpinnerProps['position'][] = ['relative', 'absolute'];

    positions.forEach((position) => {
        const snap = snapshot.render(<Spinner position={position} />);
        expect(snap).toMatchSnapshot(position);
    });
});

test('Spinner w/ any props', () => {
    const props = { className: 'className', id: 'Spinner', title: 'title', onClick: () => 'Spinner' };
    const component = <Spinner {...props} />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});
