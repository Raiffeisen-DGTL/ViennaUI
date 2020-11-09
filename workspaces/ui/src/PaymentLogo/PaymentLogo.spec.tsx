import React from 'react';
import PaymentLogo, { PaymentLogoProps } from './PaymentLogo';

test('PaymentLogo', () => {
    const snap = snapshot.render(<PaymentLogo />);
    expect(snap).toMatchSnapshot();
});

test('PaymentLogo w/ children', () => {
    const snap = snapshot.render(<PaymentLogo>Logo</PaymentLogo>);
    expect(snap).toMatchSnapshot();
});

test('PaymentLogo w/ logo', () => {
    const logos: PaymentLogoProps['logo'][] = ['mastercard', 'mir', 'visa'];

    logos.forEach((logo) => {
        const snap = snapshot.render(<PaymentLogo logo={logo} />);
        expect(snap).toMatchSnapshot(logo);
    });
});

test('PaymentLogo w/ design', () => {
    const designs: PaymentLogoProps['design'][] = ['wildsand', 'whitebox', 'ghost'];

    designs.forEach((design) => {
        const snap = snapshot.render(<PaymentLogo design={design} />);
        expect(snap).toMatchSnapshot(design);
    });
});

test('PaymentLogo w/ size', () => {
    const sizes: PaymentLogoProps['size'][] = ['xs', 's', 'm', 'l', 'xl'];

    sizes.forEach((size) => {
        const snap = snapshot.render(<PaymentLogo size={size} />);
        expect(snap).toMatchSnapshot(size);
    });
});

test('PaymentLogo w/ clickable', () => {
    const snap = snapshot.render(<PaymentLogo clickable />);
    expect(snap).toMatchSnapshot();
});

test('PaymentLogo w/ any props', () => {
    const props = { className: 'className', id: 'alarm', title: 'title', onClick: () => 'PaymentLogo' };
    const component = <PaymentLogo {...props} />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});
