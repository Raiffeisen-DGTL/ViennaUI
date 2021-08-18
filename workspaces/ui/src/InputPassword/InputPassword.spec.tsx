import React from 'react';
import { Screw, EyeOpened, EyeClosed } from 'vienna.icons';
import { InputProps } from '..';
import { InputPassword } from './InputPassword';

const prefix = <Screw />;

test('InputPassword', () => {
    const snap = snapshot.render(<InputPassword />);

    expect(snap).toMatchSnapshot();
});

test('InputPassword /w toggle', () => {
    const snap = snapshot.mount(<InputPassword />);

    let icon = snap.find(EyeClosed);
    expect(icon.exists()).toEqual(true);
    expect(snap.find(EyeOpened).exists()).toEqual(false);

    icon.simulate('click');

    icon = snap.find(EyeOpened);
    expect(icon.exists()).toEqual(true);
    expect(snap.find(EyeClosed).exists()).toEqual(false);

    icon.simulate('click');

    expect(snap.find(EyeClosed).exists()).toEqual(true);
    expect(snap.find(EyeOpened).exists()).toEqual(false);
});

test('InputPassword w/ design', () => {
    const designs: InputProps['design'][] = ['outline', 'material'];

    designs.forEach((design) => {
        const snap = snapshot.render(<InputPassword design={design} />);
        const snapPrefix = snapshot.render(<InputPassword design={design} prefix={prefix} />);

        expect(snap).toMatchSnapshot();
        expect(snapPrefix).toMatchSnapshot();
    });
});

test('InputPassword w/ size', () => {
    const sizes: InputProps['size'][] = ['xs', 's', 'm', 'l', 'xl'];

    sizes.forEach((size) => {
        const snap = snapshot.render(<InputPassword size={size} />);
        const snapPrefix = snapshot.render(<InputPassword size={size} prefix={prefix} />);

        expect(snap).toMatchSnapshot();
        expect(snapPrefix).toMatchSnapshot();
    });
});

test('InputPassword w/ disabled', () => {
    const snap = snapshot.render(<InputPassword disabled />);
    const snapPrefix = snapshot.render(<InputPassword disabled prefix={prefix} />);

    expect(snap).toMatchSnapshot();
    expect(snapPrefix).toMatchSnapshot();
});

test('InputPassword w/ invalid', () => {
    const snap = snapshot.render(<InputPassword invalid />);
    const snapPrefix = snapshot.render(<InputPassword invalid prefix={prefix} />);

    expect(snap).toMatchSnapshot();
    expect(snapPrefix).toMatchSnapshot();
});

test('InputPassword w/ any props', () => {
    const props = {
        id: 'id',
        title: 'title',
        onClick: () => 'Click',
    };

    const component = <InputPassword {...props} />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.mount(component);
    const input = wrapper.find('input');
    for (const [key, value] of Object.entries(props)) {
        expect(input.props()[key]).toEqual(value);
    }
});
