import React from 'react';
import { Logotype, LogotypeProps } from './Logotype';

test('Logotype', () => {
    const snap = snapshot.render(<Logotype />);
    expect(snap).toMatchSnapshot();
});

test('Logotype w/ design', () => {
    const designs: LogotypeProps['design'][] = ['light', 'dark', 'monochrome', 'monochrome-dark'];

    designs.forEach((design) => {
        const snap = snapshot.render(<Logotype design={design} />);
        expect(snap).toMatchSnapshot();
    });
});

test('Logotype w/ locale', () => {
    const locales: LogotypeProps['locale'][] = ['ru', 'en'];

    locales.forEach((locale) => {
        const snap = snapshot.render(<Logotype locale={locale} />);
        expect(snap).toMatchSnapshot();
    });
});

test('Logotype w/ size', () => {
    const sizes: LogotypeProps['size'][] = ['xs', 's', 'm', 'l', 'xl'];

    // collapsed
    sizes.forEach((size) => {
        const snap = snapshot.render(<Logotype size={size} collapsed />);
        expect(snap).toMatchSnapshot();
    });

    // ru
    sizes.forEach((size) => {
        const snap = snapshot.render(<Logotype size={size} />);
        expect(snap).toMatchSnapshot();
    });

    // en
    sizes.forEach((size) => {
        const snap = snapshot.render(<Logotype size={size} locale='en' />);
        expect(snap).toMatchSnapshot();
    });
});

test('Logotype w/ collapsed', () => {
    const designs: LogotypeProps['design'][] = ['light', 'dark', 'monochrome'];

    designs.forEach((design) => {
        const snap = snapshot.render(<Logotype design={design} collapsed />);
        expect(snap).toMatchSnapshot();
    });
});

test('Logotype w/ any props', () => {
    const props = { className: 'className', id: 'id', onClick: () => 'Logotype' };
    const component = <Logotype {...props} />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});
