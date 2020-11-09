import React from 'react';
import { LeftArrow, ArrowRight, Logo } from 'vienna.icons';
import { Button, ButtonProps } from './Button';

test('Button', () => {
    const snap = snapshot.render(
        <>
            <Button design='accent'>Accent</Button>
            <Button design='primary'>Primary</Button>
            <Button design='outline'>Outline</Button>
            <Button design='critical'>Critical</Button>
            <Button design='outline-critical'>Outline critical</Button>
            <Button design='ghost'>Ghost</Button>
        </>
    );
    expect(snap).toMatchSnapshot();
});

test('Button w/ size', () => {
    const designs: ButtonProps['design'][] = ['accent', 'critical', 'ghost', 'outline', 'outline-critical', 'primary'];
    const sizes: ButtonProps['size'][] = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

    designs.forEach((design) => {
        sizes.forEach((size) => {
            const snap = snapshot.render(
                <Button size={size} design={design}>
                    Default
                </Button>
            );
            expect(snap).toMatchSnapshot();
        });
    });
});

test('Button w/ loading', () => {
    const designs: ButtonProps['design'][] = ['accent', 'critical', 'ghost', 'outline', 'outline-critical', 'primary'];

    designs.forEach((design) => {
        const snap = snapshot.render(
            <>
                <Button design={design} loading>
                    Default
                </Button>
            </>
        );
        expect(snap).toMatchSnapshot();
    });
});

test('Button w/ disabled', () => {
    const designs: ButtonProps['design'][] = ['accent', 'critical', 'ghost', 'outline', 'outline-critical', 'primary'];

    designs.forEach((design) => {
        const snap = snapshot.render(
            <>
                <Button design={design} disabled>
                    Default
                </Button>
            </>
        );
        expect(snap).toMatchSnapshot();
    });
});

test('Button w/ href', () => {
    const component = (
        <>
            <Button href='/' design='accent'>
                Home
            </Button>
            <Button design='primary' href='http://google.com' target='_blank'>
                Google
            </Button>
        </>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.mount(component);
    expect(wrapper.find('a')).toHaveLength(2);
});

test('Button w/ icons', () => {
    const snap = snapshot.render(
        <>
            <Button>
                <LeftArrow /> Назад
            </Button>
            <Button>
                Вперед <ArrowRight />
            </Button>
            <Button>
                <LeftArrow /> Вперед <ArrowRight />
            </Button>
        </>
    );
    expect(snap).toMatchSnapshot();
});

test('Button w/ square', () => {
    const snap = snapshot.render(
        <>
            <Button size='xs' square>
                <Logo size='s' />
            </Button>
            <Button size='s' square>
                <Logo />
            </Button>
            <Button size='m' square>
                <Logo />
            </Button>
            <Button size='l' square>
                <Logo />
            </Button>
            <Button size='xl' square>
                <Logo />
            </Button>
            <Button size='xxl' square>
                <Logo />
            </Button>
        </>
    );
    expect(snap).toMatchSnapshot();
});

test('Button w/ grid', () => {
    const snap = snapshot.render(
        <>
            <Button design='primary' grid={0}>
                auto
            </Button>
            <Button design='primary' grid={1}>
                1
            </Button>
            <Button design='primary' grid={2}>
                2
            </Button>
            <Button design='primary' grid={3}>
                3
            </Button>
            <Button design='primary' grid={4}>
                4
            </Button>
            <Button design='primary' grid={5}>
                5
            </Button>
            <Button design='primary' grid={6}>
                6
            </Button>
            <Button design='primary' grid={7}>
                7
            </Button>
            <Button design='primary' grid={8}>
                8
            </Button>
            <Button design='primary' grid={9}>
                9
            </Button>
            <Button design='primary' grid={10}>
                10
            </Button>
            <Button design='primary' grid={11}>
                11
            </Button>
            <Button design='primary' grid={12}>
                12
            </Button>
        </>
    );
    expect(snap).toMatchSnapshot();
});

test('Button w/ truncate', () => {
    const snap = snapshot.render(
        <>
            <Button size='s' grid={1}>
                Button Text
            </Button>
            <Button size='m' grid={2}>
                Super Button Text
            </Button>
            <Button size='l' grid={3}>
                Super Button Text Awesome Amazing
            </Button>
        </>
    );
    expect(snap).toMatchSnapshot();
});

test('Button w/ any props', () => {
    const props = { className: 'className', id: 'id', onClick: () => 'Button' };
    const component = <Button {...props}>Test</Button>;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});

test('Button w/ onFocus', () => {
    const fn = jest.fn();
    const event = {};

    const snap = snapshot.shallow(<Button onFocus={fn}>Test button</Button>);

    snap.simulate('focus', event);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event);
});

test('Button w/ onBlur', () => {
    const fn = jest.fn();
    const event = {};

    const snap = snapshot.shallow(<Button onBlur={fn}>Test button</Button>);

    snap.simulate('blur', event);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event);
});

test('Button w/ onClick', () => {
    const fn = jest.fn();
    const event = {};

    const snap = snapshot.shallow(<Button onClick={fn}>Test button</Button>);

    snap.simulate('click', event);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event);
});

test('Button w/ onMouseDown', () => {
    const fn = jest.fn();
    const event = {};

    const snap = snapshot.shallow(<Button onMouseDown={fn}>Test button</Button>);

    snap.simulate('mousedown', event);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event);
});

test('Button w/ onMouseUp', () => {
    const fn = jest.fn();
    const event = {};

    const snap = snapshot.shallow(<Button onMouseUp={fn}>Test button</Button>);

    snap.simulate('mouseup', event);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event);
});
