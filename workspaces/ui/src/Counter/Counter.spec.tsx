import React from 'react';
import Counter, { CounterProps } from './Counter';

test('Counter', () => {
    const snap = snapshot.render(<Counter>18</Counter>);
    expect(snap).toMatchSnapshot();
});

test('Counter w/ design', () => {
    const designs: CounterProps['design'][] = ['critical', 'warning', 'success', 'accent', 'neutral', 'disabled'];

    designs.forEach((design) => {
        const snap = snapshot.render(<Counter design={design}>18</Counter>);
        expect(snap).toMatchSnapshot(design);
    });
});

test('Counter w/ position', () => {
    const positions: CounterProps['position'][] = ['relative', 'absolute'];

    positions.forEach((position) => {
        const snap = snapshot.render(
            <Counter position={position} top='10px' bottom='10px' left='10px' right='10px'>
                18
            </Counter>
        );

        expect(snap).toMatchSnapshot(position);
    });
});

test('Counter w/ any props', () => {
    const props = { className: 'className', id: 'Counter', title: 'title', onClick: () => 'Counter' };
    const component = <Counter {...props}>18</Counter>;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});
