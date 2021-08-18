import React from 'react';
import Alarm, { AlarmProps } from './Alarm';

test('Alarm', async () => {
    const snap = snapshot.render(<Alarm />);
    expect(snap).toMatchSnapshot();
});

test('Alarm w/ design', async () => {
    const components: JSX.Element[] = [];

    const designs: AlarmProps['design'][] = ['critical', 'warning', 'success', 'accent', 'neutral', 'disabled'];
    designs.forEach((design) => components.push(<Alarm design={design} />));

    const snap = snapshot.render(components);
    expect(snap).toMatchSnapshot();
});

test('Alarm w/ position', () => {
    const positions: AlarmProps['position'][] = ['relative', 'absolute'];

    positions.forEach((position) => {
        const snap = snapshot.render(<Alarm position={position} top='10px' bottom='10px' left='10px' right='10px' />);
        expect(snap).toMatchSnapshot(position);
    });
});

test('Alarm w/ any props', () => {
    const props = { className: 'className', id: 'alarm', title: 'title', onClick: () => 'Alarm' };
    const component = <Alarm {...props} />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});
