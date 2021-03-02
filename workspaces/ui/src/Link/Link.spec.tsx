import React from 'react';
import { Back, Forward, Screw, Logo } from 'vienna.icons';
import { Link, LinkProps } from './Link';

test('Link', () => {
    const snap = snapshot.render(<Link>Test link</Link>);
    expect(snap).toMatchSnapshot();
});

test('Link w/ design', () => {
    const designs: LinkProps['design'][] = ['accent', 'accent-underline', 'primary', 'secondary'];

    designs.forEach((design) => {
        const snap = snapshot.render(<Link design={design}>Test link</Link>);
        expect(snap).toMatchSnapshot();
    });
});

test('Link w/ size', () => {
    const sizes: LinkProps['size'][] = ['s', 'm', 'l'];

    sizes.forEach((size) => {
        const snap = snapshot.render(<Link size={size}>Test link</Link>);
        expect(snap).toMatchSnapshot();
    });
});

test('Link w/ icon', () => {
    const snap = snapshot.render(
        <>
            <Link design='accent'>
                <Back /> Назад
            </Link>
            <Link design='primary'>
                Вперед <Forward />
            </Link>
            <Link design='secondary'>
                <Screw />
                <span>Вперед</span>
                <Forward />
            </Link>
        </>
    );
    expect(snap).toMatchSnapshot();
});

test('Link w/ only icon', () => {
    const snap = snapshot.render(
        <>
            <Link design='accent'>
                <Back />
            </Link>
            <Link design='primary'>
                <Logo />
            </Link>
            <Link design='secondary'>
                <Screw />
            </Link>
            <Link design='accent'>
                <Forward />
            </Link>
        </>
    );
    expect(snap).toMatchSnapshot();
});

test('Disabled links', () => {
    const snap = snapshot.render(
        <>
            <Link design='accent' href='#' disabled>
                Accent link
            </Link>
            <Link design='accent-underline' href='#' disabled>
                Accent underline link
            </Link>
            <Link design='primary' href='#' disabled>
                Primary link
            </Link>
            <Link design='secondary' href='#' disabled>
                Secondary link
            </Link>
            <Link design='secondary' href='#' disabled>
                <Screw />
                Screw
            </Link>
            <Link design='primary' href='#' disabled>
                <Forward />
            </Link>
        </>
    );
    expect(snap).toMatchSnapshot();
});

test('Links w/ loading', () => {
    const snap = snapshot.render(
        <>
            <Link design='accent' href='#' size='s' loading>
                Accent link
            </Link>
            <Link design='accent-underline' href='#' size='s' loading>
                Accent underline link
            </Link>
            <Link design='primary' href='#' size='m' loading>
                Primary link
            </Link>
            <Link design='secondary' href='#' size='l' loading>
                Secondary link
            </Link>
            <Link design='secondary' loading>
                <Screw />
                Screw
            </Link>
            <Link design='primary' href='#' loading>
                <Forward />
            </Link>
        </>
    );
    expect(snap).toMatchSnapshot();
});

test('Link w/ any props', () => {
    const props = { className: 'className', id: 'id', onClick: () => 'Alert', href: 'test.html', download: 'test.jpg' };
    const component = <Link {...props}>Test link</Link>;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});
