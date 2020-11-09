import React from 'react';
import { Chips, ChipsProps } from './Chips';

const designs: ChipsProps['design'][] = ['accent', 'primary', 'ghost'];

test('Chips', () => {
    const snap = snapshot.render(
        <Chips>
            <Chips.Item id='1' active>
                Chip
            </Chips.Item>
            <Chips.Item id='2'>Chip</Chips.Item>
            <Chips.Item id='3'>Chip</Chips.Item>
        </Chips>
    );
    expect(snap).toMatchSnapshot();
});

test('Chips w/ design', () => {
    designs.forEach((design) => {
        const snap = snapshot.render(
            <Chips design={design}>
                <Chips.Item id='1' active>
                    Chip
                </Chips.Item>
                <Chips.Item id='2'>Chip</Chips.Item>
                <Chips.Item id='3'>Chip</Chips.Item>
            </Chips>
        );
        expect(snap).toMatchSnapshot();
    });
});

test('Chips w/ align', () => {
    const snap = snapshot.render(
        <Chips align='right'>
            <Chips.Item id='1' active>
                Chip
            </Chips.Item>
            <Chips.Item id='2'>Chip</Chips.Item>
            <Chips.Item id='3'>Chip</Chips.Item>
        </Chips>
    );
    expect(snap).toMatchSnapshot();
});

test('Chips w/ active', () => {
    const snap = snapshot.render(
        <Chips active='1'>
            <Chips.Item id='1'>Chip</Chips.Item>
            <Chips.Item id='2'>Chip</Chips.Item>
            <Chips.Item id='3'>Chip</Chips.Item>
        </Chips>
    );
    expect(snap).toMatchSnapshot();
});

test('Chips w/ multiple active', () => {
    const snap = snapshot.render(
        <Chips active={['2', '3']}>
            <Chips.Item id='1'>Chip</Chips.Item>
            <Chips.Item id='2'>Chip</Chips.Item>
            <Chips.Item id='3'>Chip</Chips.Item>
        </Chips>
    );
    expect(snap).toMatchSnapshot();
});

test('Chips w/ disabled', () => {
    designs.forEach((design) => {
        const snap = snapshot.render(
            <Chips design={design}>
                <Chips.Item id='1' active disabled>
                    Chip
                </Chips.Item>
                <Chips.Item id='2' disabled>
                    Chip
                </Chips.Item>
                <Chips.Item id='3' disabled>
                    Chip
                </Chips.Item>
            </Chips>
        );
        expect(snap).toMatchSnapshot();
    });
});

test('Chips w/ any props', () => {
    const props = { className: 'className', id: 'id' };
    const component = (
        <Chips {...props}>
            <Chips.Item id='1'>Chip</Chips.Item>
            <Chips.Item id='2'>Chip</Chips.Item>
            <Chips.Item id='3'>Chip</Chips.Item>
        </Chips>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});

test('Chips w/ onClick', () => {
    const fn = jest.fn();

    const component = (
        <Chips onClick={fn}>
            <Chips.Item id='1'>Chip</Chips.Item>
            <Chips.Item id='2'>Chip</Chips.Item>
            <Chips.Item id='3'>Chip</Chips.Item>
        </Chips>
    );

    const wrapper = snapshot.shallow(component);
    const chip = wrapper.childAt(0);

    chip.simulate('click');
    chip.simulate('keydown', { key: 'Enter', preventDefault: () => null });
    chip.simulate('keydown', { key: ' ', preventDefault: () => null });

    expect(fn).toHaveBeenCalledTimes(3);
});
