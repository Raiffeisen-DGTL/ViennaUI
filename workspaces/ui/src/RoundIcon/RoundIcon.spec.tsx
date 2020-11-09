import React from 'react';
import { Man2 } from 'vienna.icons';
import RoundIcon, { RoundIconProps } from './RoundIcon';

const coloring: RoundIconProps['color'][] = [
    'seattle10',
    'seattle60',
    'oslo10',
    'oslo60',
    'miami10',
    'miami100',
    'nice10',
    'nice100',
    'dubai10',
    'dubai100',
    'paris10',
    'paris100',
    'sochi10',
    'sochi100',
    'tokyo10',
    'tokyo100',
    'dublin10',
    'dublin100',
    'bern10',
    'bern100',
    'manila10',
    'manila100',
    'tallin10',
    'tallin100',
    'seoul10',
    'seoul100',
    'havana10',
    'havana100',
    'madrid10',
    'madrid100',
    'porto10',
    'porto100',
];

test('RoundIcon', async () => {
    const component = <RoundIcon>M</RoundIcon>;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('RoundIcon w/ icon', async () => {
    const component = (
        <RoundIcon>
            <Man2 />
        </RoundIcon>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('RoundIcon w/ color', async () => {
    const components: JSX.Element[] = [];

    const colors: RoundIconProps['color'][] = coloring;
    colors.forEach((color) => components.push(<RoundIcon color={color}>M</RoundIcon>));

    const snap = snapshot.render(components);
    expect(snap).toMatchSnapshot();
});

test('RoundIcon w/ color and icon', async () => {
    const components: JSX.Element[] = [];

    const colors: RoundIconProps['color'][] = coloring;
    colors.forEach((color) =>
        components.push(
            <RoundIcon color={color}>
                <Man2 />
            </RoundIcon>
        )
    );

    const snap = snapshot.render(components);
    expect(snap).toMatchSnapshot();
});

test('RoundIcon w/ size', async () => {
    const components: JSX.Element[] = [];

    const sizes: RoundIconProps['size'][] = ['xs', 's', 'm', 'l', 'xl'];
    sizes.forEach((size) => components.push(<RoundIcon size={size}>M</RoundIcon>));

    const snap = snapshot.render(components);
    expect(snap).toMatchSnapshot();
});

test('RoundIcon w/ clickable', () => {
    const snap = snapshot.render(<RoundIcon clickable>M</RoundIcon>);
    expect(snap).toMatchSnapshot();
});

test('RoundIcon w/ any props', () => {
    const props = { className: 'className', id: 'id', title: 'title', onClick: () => 'onClick' };
    const component = <RoundIcon {...props}>M</RoundIcon>;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});
