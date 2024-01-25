import React from 'react';
import { Attach } from 'vienna.icons';
import { Badge, BadgeProps } from './Badge';

test('Badge', () => {
    const snap = snapshot.render(<Badge>Badge text</Badge>);
    expect(snap).toMatchSnapshot();
});

test('Badge w/ color', () => {
    const colors: BadgeProps['color'][] = [
        'paris10',
        'paris30',
        'miami10',
        'miami30',
        'dubai10',
        'dubai30',
        'nice10',
        'nice30',
        'seattle05',
        'seattle10',
    ];

    colors.forEach((color) => {
        const snap = snapshot.render(<Badge color={color}>Badge text</Badge>);
        expect(snap).toMatchSnapshot(color);
    });
});

test('Badge w/ color and icon', () => {
    const colors: BadgeProps['color'][] = [
        'paris10',
        'paris30',
        'miami10',
        'miami30',
        'dubai10',
        'dubai30',
        'nice10',
        'nice30',
        'seattle05',
        'seattle10',
    ];

    colors.forEach((color) => {
        const snap = snapshot.render(
            <Badge color={color}>
                <Attach size='s' /> Badge text
            </Badge>
        );

        expect(snap).toMatchSnapshot(color);
    });
});

test('Badge w/ size', () => {
    const sizes: BadgeProps['size'][] = ['s', 'm', 'l'];

    sizes.forEach((size: any) => {
        const snap = snapshot.render(<Badge size={size}>Badge text</Badge>);
        expect(snap).toMatchSnapshot(size);
    });
});

test('Badge w/ grid', () => {
    const grides: BadgeProps['grid'][] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    grides.forEach((grid) => {
        const snap = snapshot.render(<Badge grid={grid}>Badge text</Badge>);
        expect(snap).toMatchSnapshot(`g${grid}`);
    });
});

test('Badge as link', () => {
    const component = (
        <Badge href='https://raif.ru' target='_blank' rel='noopener'>
            Badge text
        </Badge>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.mount(component);
    expect(wrapper.find('a')).toHaveLength(1);
});

test('Badge w/ any props', () => {
    const props = { className: 'className', id: 'id', title: 'title', onClick: () => 'Badge' };
    const component = <Badge {...props}>Badge text</Badge>;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});

test('Badge w/ reponsiveness', () => {
    const responsiveSize = snapshot.render(<Badge size={{ base: 'm', xs: 's', l: 'l' }}>Badge text</Badge>);
    expect(responsiveSize).toMatchSnapshot();

    const noBase = snapshot.render(<Badge size={{ xs: 's', l: 'l' }}>Badge text</Badge>);
    expect(noBase).toMatchSnapshot();
});
