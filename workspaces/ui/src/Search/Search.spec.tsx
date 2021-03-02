import React from 'react';
import { Search, SearchProps } from './Search';

test('Search /w design', () => {
    const designs: SearchProps['design'][] = ['outline', 'material'];

    designs.forEach((design) => {
        const snap = snapshot.render(<Search design={design} />);
        expect(snap).toMatchSnapshot();
    });
});

test('Search /w size', () => {
    const sizes: SearchProps['size'][] = ['xs', 's', 'l', 'xl'];

    sizes.forEach((size) => {
        const snap = snapshot.render(<Search size={size} />);
        expect(snap).toMatchSnapshot();
    });
});

test('Search /w invalid', () => {
    const snap = snapshot.render(<Search invalid />);
    expect(snap).toMatchSnapshot();
});

test('Search /w onFocus()', () => {
    const fn = jest.fn();
    const snap = snapshot.mount(<Search onFocus={fn} />);

    snap.find('input').simulate('focus');
    expect(fn).toBeCalled();
});

test('Search /w onBlur()', () => {
    const fn = jest.fn();
    const snap = snapshot.mount(<Search onBlur={fn} />);

    snap.find('input').simulate('blur');
    expect(fn).toBeCalled();
});

test('Search w/ any props', () => {
    const props = {
        title: 'title',
    };

    const component = <Search {...props} />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.mount(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.find('input').props()[key]).toEqual(value);
    }
});
