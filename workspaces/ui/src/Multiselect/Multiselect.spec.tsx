import React from 'react';
import { Multiselect, MultiselectProps } from './Multiselect';

test('Multiselect /w design', async () => {
    const designs: MultiselectProps['design'][] = ['outline', 'material'];

    designs.forEach((design) => {
        const snap = snapshot.render(<Multiselect design={design} />);
        expect(snap).toMatchSnapshot();
    });
});

test('Multiselect /w size', async () => {
    const sizes: MultiselectProps['size'][] = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

    sizes.forEach((size) => {
        const snap = snapshot.render(<Multiselect size={size} />);
        expect(snap).toMatchSnapshot();
    });
});

test('Multiselect /w invalid', () => {
    const snap = snapshot.mount(<Multiselect invalid />);

    expect(snap).toMatchSnapshot();
});

test('Multiselect /w disabled', () => {
    const snap = snapshot.mount(<Multiselect disabled />);

    expect(snap).toMatchSnapshot();
});

test('Multiselect /w onFocus()', () => {
    const fn = jest.fn();
    const snap = snapshot.mount(<Multiselect onFocus={fn} />);

    snap.simulate('focus');
    expect(fn).toBeCalled();
});

test('Multiselect /w onBlur()', () => {
    const fn = jest.fn();
    const snap = snapshot.mount(<Multiselect onBlur={fn} />);

    snap.simulate('blur');
    expect(fn).toBeCalled();
});

test('Multiselect w/ any props', () => {
    const props = {
        className: 'className',
        id: 'id',
        title: 'title',
    };

    const component = <Multiselect {...props} />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});
