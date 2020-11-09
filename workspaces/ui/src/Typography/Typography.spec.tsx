import React from 'react';
import { Heading, HeadingProps, Text, TextProps, H1, H2, H3, H4, H5, H6, P, Span } from './Typography';

test('Heading', () => {
    const component = (
        <>
            <Heading>Условия обработки персональных данных</Heading>
            <H1>Условия обработки персональных данных</H1>
            <H2>Условия обработки персональных данных</H2>
            <H3>Условия обработки персональных данных</H3>
            <H4>Условия обработки персональных данных</H4>
            <H5>Условия обработки персональных данных</H5>
            <H6>Условия обработки персональных данных</H6>
        </>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.mount(component);
    expect(wrapper.find('h1')).toHaveLength(2);
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper.find('h4')).toHaveLength(1);
    expect(wrapper.find('h5')).toHaveLength(1);
    expect(wrapper.find('h6')).toHaveLength(1);
});

test('Heading w/ type', () => {
    const types: HeadingProps['type'][] = ['h6', 'h5', 'h4', 'h3', 'h2', 'h1'];

    types.forEach((type) => {
        const component = <Heading type={type}>Условия обработки персональных данных</Heading>;

        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot(type);

        const wrapper = snapshot.mount(component);
        expect(wrapper.find(type)).toHaveLength(1);
    });
});

test('Heading w/ size', () => {
    const sizes: HeadingProps['size'][] = ['xs', 's', 'm', 'l', 'xl'];

    sizes.forEach((size) => {
        const snap = snapshot.render(
            <>
                <Heading size={size}>Условия обработки персональных данных</Heading>
                <H1 size={size}>Условия обработки персональных данных</H1>
                <H2 size={size}>Условия обработки персональных данных</H2>
                <H3 size={size}>Условия обработки персональных данных</H3>
                <H4 size={size}>Условия обработки персональных данных</H4>
                <H5 size={size}>Условия обработки персональных данных</H5>
                <H6 size={size}>Условия обработки персональных данных</H6>
            </>
        );

        expect(snap).toMatchSnapshot(size);
    });
});

test('Heading w/ color', () => {
    const colors: HeadingProps['color'][] = [
        'brand-accent',
        'brand-white',
        'brand-primary',
        'geneva100',
        'moscow100',
        'osaka100',
        'seattle01',
        'seattle05',
        'seattle10',
        'seattle30',
        'seattle60',
        'seattle100',
        'seattle120',
        'seattle140',
        'currentColor',
    ];

    colors.forEach((color) => {
        const snap = snapshot.render(
            <>
                <Heading color={color}>Условия обработки персональных данных</Heading>
                <H1 color={color}>Условия обработки персональных данных</H1>
                <H2 color={color}>Условия обработки персональных данных</H2>
                <H3 color={color}>Условия обработки персональных данных</H3>
                <H4 color={color}>Условия обработки персональных данных</H4>
                <H5 color={color}>Условия обработки персональных данных</H5>
                <H6 color={color}>Условия обработки персональных данных</H6>
            </>
        );

        expect(snap).toMatchSnapshot(color);
    });
});

test('Heading w/ margin', () => {
    const margins: HeadingProps['margin'][] = ['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];

    margins.forEach((margin) => {
        const snap = snapshot.render(
            <>
                <Heading margin={margin}>Условия обработки персональных данных</Heading>
                <H1 margin={margin}>Условия обработки персональных данных</H1>
                <H2 margin={margin}>Условия обработки персональных данных</H2>
                <H3 margin={margin}>Условия обработки персональных данных</H3>
                <H4 margin={margin}>Условия обработки персональных данных</H4>
                <H5 margin={margin}>Условия обработки персональных данных</H5>
                <H6 margin={margin}>Условия обработки персональных данных</H6>
            </>
        );

        expect(snap).toMatchSnapshot(margin);
    });
});

test('Heading w/ uppercase', () => {
    const component = (
        <>
            <Heading uppercase>Условия обработки персональных данных</Heading>
            <H1 uppercase>Условия обработки персональных данных</H1>
            <H2 uppercase>Условия обработки персональных данных</H2>
            <H3 uppercase>Условия обработки персональных данных</H3>
            <H4 uppercase>Условия обработки персональных данных</H4>
            <H5 uppercase>Условия обработки персональных данных</H5>
            <H6 uppercase>Условия обработки персональных данных</H6>
        </>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('Heading w/ any props', () => {
    [H1, H2, H3, H4, H5].forEach((Component) => {
        const props = { className: 'className', id: 'id', title: 'title', onClick: () => 'Typography' };
        const component = <Component {...props}>Условия обработки персональных данных</Component>;

        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();

        const wrapper = snapshot.shallow(component);
        for (const [key, value] of Object.entries(props)) {
            expect(wrapper.props()[key]).toEqual(value);
        }
    });
});

test('Text', () => {
    const component = (
        <>
            <Text>
                Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем
                интересе.
            </Text>
            <P>
                Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем
                интересе.
            </P>
            <Span>
                Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем
                интересе.
            </Span>
        </>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.mount(component);
    expect(wrapper.find('span')).toHaveLength(2);
    expect(wrapper.find('p')).toHaveLength(1);
});

test('Text w/ type', () => {
    const types: TextProps['type'][] = ['span', 'a', 'abbr', 'p'];

    types.forEach((type) => {
        const component = (
            <Text type={type}>
                Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем
                интересе.
            </Text>
        );

        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot(`type${type}`);

        const wrapper = snapshot.mount(component);
        expect(wrapper.find(type)).toHaveLength(1);
    });
});

test('Text w/ size', () => {
    const sizes: TextProps['size'][] = ['s', 'm', 'l', 'xl', 'xxl'];

    sizes.forEach((size) => {
        const snap = snapshot.render(
            <>
                <Text size={size}>
                    Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                    обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и
                    своем интересе.
                </Text>
                <P size={size}>
                    Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                    обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и
                    своем интересе.
                </P>
                <Span size={size}>
                    Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                    обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и
                    своем интересе.
                </Span>
            </>
        );

        expect(snap).toMatchSnapshot(size);
    });
});

test('Text w/ color', () => {
    const colors: TextProps['color'][] = [
        'brand-accent',
        'brand-white',
        'brand-primary',
        'geneva100',
        'moscow100',
        'osaka100',
        'seattle01',
        'seattle05',
        'seattle10',
        'seattle30',
        'seattle60',
        'seattle100',
        'seattle120',
        'seattle140',
        'currentColor',
    ];

    colors.forEach((color) => {
        const snap = snapshot.render(
            <>
                <Text color={color}>
                    Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                    обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и
                    своем интересе.
                </Text>
                <P color={color}>
                    Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                    обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и
                    своем интересе.
                </P>
                <Span color={color}>
                    Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                    обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и
                    своем интересе.
                </Span>
            </>
        );

        expect(snap).toMatchSnapshot(color);
    });
});

test('Text w/ weight', () => {
    const weights: TextProps['weight'][] = [
        'thin',
        'extra-light',
        'light',
        'normal',
        'medium',
        'semi-bold',
        'bold',
        'extra-bold',
        'black',
    ];

    weights.forEach((weight) => {
        const snap = snapshot.render(
            <>
                <Text weight={weight}>
                    Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                    обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и
                    своем интересе.
                </Text>
                <P weight={weight}>
                    Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                    обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и
                    своем интересе.
                </P>
                <Span weight={weight}>
                    Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                    обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и
                    своем интересе.
                </Span>
            </>
        );

        expect(snap).toMatchSnapshot(weight);
    });
});

test('Text w/ margin', () => {
    const margins: TextProps['margin'][] = ['none', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];

    margins.forEach((margin) => {
        const snap = snapshot.render(
            <>
                <Text margin={margin}>
                    Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                    обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и
                    своем интересе.
                </Text>
                <P margin={margin}>
                    Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                    обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и
                    своем интересе.
                </P>
                <Span margin={margin}>
                    Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                    обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и
                    своем интересе.
                </Span>
            </>
        );

        expect(snap).toMatchSnapshot(margin);
    });
});

test('Text w/ uppercase', () => {
    const component = (
        <>
            <Text uppercase>
                Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем
                интересе.
            </Text>
            <P uppercase>
                Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем
                интересе.
            </P>
            <Span uppercase>
                Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем
                интересе.
            </Span>
        </>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('Text w/ any props', () => {
    [Text, P, Span].forEach((Component) => {
        const props = { className: 'className', id: 'id', title: 'title', onClick: () => 'Typography' };
        const component = (
            <Component {...props}>
                Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем
                интересе.
            </Component>
        );

        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();

        const wrapper = snapshot.shallow(component);
        for (const [key, value] of Object.entries(props)) {
            expect(wrapper.props()[key]).toEqual(value);
        }
    });
});
