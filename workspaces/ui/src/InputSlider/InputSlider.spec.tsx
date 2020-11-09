import React from 'react';
import { Screw } from 'vienna.icons';
import { InputProps } from '..';
import { InputSlider } from './InputSlider';

const icon = <Screw />;

test('InputSlider', () => {
    const snap = snapshot.render(<InputSlider />);

    expect(snap).toMatchSnapshot();
});

test('InputSlider w/ design', () => {
    const designs: InputProps['design'][] = ['outline', 'material'];

    designs.forEach((design) => {
        const snap = snapshot.render(<InputSlider design={design} />);
        const snapPrefix = snapshot.render(<InputSlider design={design} prefix={icon} />);
        const snapPostfix = snapshot.render(<InputSlider design={design} postfix={icon} />);
        const snapPrefixPostfix = snapshot.render(<InputSlider design={design} prefix={icon} postfix={icon} />);

        expect(snap).toMatchSnapshot();
        expect(snapPrefix).toMatchSnapshot();
        expect(snapPostfix).toMatchSnapshot();
        expect(snapPrefixPostfix).toMatchSnapshot();
    });
});

test('InputSlider w/ size', () => {
    const sizes: InputProps['size'][] = ['xs', 's', 'm', 'l', 'xl'];

    sizes.forEach((size) => {
        const snap = snapshot.render(<InputSlider size={size} />);
        const snapPrefix = snapshot.render(<InputSlider size={size} prefix={icon} />);
        const snapPostfix = snapshot.render(<InputSlider size={size} postfix={icon} />);
        const snapPrefixPostfix = snapshot.render(<InputSlider size={size} prefix={icon} postfix={icon} />);

        expect(snap).toMatchSnapshot();
        expect(snapPrefix).toMatchSnapshot();
        expect(snapPostfix).toMatchSnapshot();
        expect(snapPrefixPostfix).toMatchSnapshot();
    });
});

test('InputSlider w/ disabled', () => {
    const snap = snapshot.render(<InputSlider disabled />);
    const snapPrefix = snapshot.render(<InputSlider disabled prefix={icon} />);
    const snapPostfix = snapshot.render(<InputSlider disabled postfix={icon} />);
    const snapPrefixPostfix = snapshot.render(<InputSlider disabled prefix={icon} postfix={icon} />);

    expect(snap).toMatchSnapshot();
    expect(snapPrefix).toMatchSnapshot();
    expect(snapPostfix).toMatchSnapshot();
    expect(snapPrefixPostfix).toMatchSnapshot();
});

test('InputSlider w/ invalid', () => {
    const snap = snapshot.render(<InputSlider invalid />);
    const snapPrefix = snapshot.render(<InputSlider invalid prefix={icon} />);
    const snapPostfix = snapshot.render(<InputSlider invalid postfix={icon} />);
    const snapPrefixPostfix = snapshot.render(<InputSlider invalid prefix={icon} postfix={icon} />);

    expect(snap).toMatchSnapshot();
    expect(snapPrefix).toMatchSnapshot();
    expect(snapPostfix).toMatchSnapshot();
    expect(snapPrefixPostfix).toMatchSnapshot();
});

test('InputSlider w/ any props', () => {
    const props = {
        id: 'id',
        title: 'title',
        onClick: () => 'Click',
    };

    const component = <InputSlider {...props} />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.mount(component);
    const input = wrapper.find('input');
    for (const [key, value] of Object.entries(props)) {
        expect(input.props()[key]).toEqual(value);
    }
});

test('InputSlider w/ tag', () => {
    const component = (
        <InputSlider>
            <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
        </InputSlider>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('InputSlider w/ noInput', () => {
    const component = <InputSlider noInput design='material' />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('InputSlider w/ noInput tag', () => {
    const component = (
        <InputSlider noInput design='material'>
            <InputSlider.Tag val={0}>0 $</InputSlider.Tag>
        </InputSlider>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});
