import React from 'react';
import { Story, Meta } from 'storybook';
import { Heading, Text, H1, H2, H3, H4, H5, P, Span, TextProps } from './Typography';
import { Groups } from '../Groups';

export default {
    title: 'Development/Typography',
    component: Text,
} as Meta;

export const Overview: Story<TextProps> = (args) => {
    return (
        <Groups design='vertical'>
            <Heading>Условия обработки персональных данных</Heading>
            <Text {...args}>
                Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем
                интересе.
            </Text>
        </Groups>
    );
};
export const Headings: Story<TextProps> = () => {
    return (
        <div style={{ color: 'steelblue' }}>
            <Heading color='currentColor'>Условия обработки персональных данных</Heading>
            <H1 color='currentColor'>Условия обработки персональных данных</H1>
            <H2 color='currentColor'>Условия обработки персональных данных</H2>
            <H3 color='currentColor'>Условия обработки персональных данных</H3>
            <H4 color='currentColor'>Условия обработки персональных данных</H4>
            <H5 color='currentColor'>Условия обработки персональных данных</H5>
        </div>
    );
};
export const Paragraph: Story<TextProps> = (args) => {
    return (
        <P size='xxl' margin='xxl' {...args}>
            Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на обработку АО
            «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем интересе.
        </P>
    );
};
export const WithSpan: Story<TextProps> = (args) => {
    return (
        <div style={{ color: 'steelblue' }}>
            <Span color='currentColor' {...args}>
                Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем
                интересе.
            </Span>
        </div>
    );
};

export const Adaptive: Story<TextProps> = () => {
    return (
        <div>
            <Text size={{ min: 'm' }}>Условия обработки персональных данных</Text>
            <P margin={{ xs: 'm', s: 'l' }} size={{ m: 'xl', xs: 's' }}>
                Условия обработки персональных данных
            </P>
            <Heading margin={{ xs: 'm', s: 'l' }}>Условия обработки персональных данных</Heading>
            <H1 color='currentColor' size={{ xs: 'xs', s: 'xl' }}>
                Условия обработки персональных данных
            </H1>
        </div>
    );
};

export const PlaywrightTests: Story<TextProps> = (args) => {
    return (
        <div style={{ color: 'steelblue' }}>
            <Span color='currentColor' {...args}>
                Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем
                интересе.
            </Span>
            <Text color='moscow100' style={{ display: 'block' }}>
                Москва – столица России, политический, экономический и культурный центр. Самый населенный город России и
                Европы. Для многих россиян и иностранцев российская столица – это город больших возможностей.
            </Text>
            <P color='geneva100'>
                Женева – второй по величине и численности населения город Швейцарии, и, несомненно, самый
                космополитичный: треть его населения составляют граждане из других стран. Эта прославленная территория с
                духом собственного достоинства славится своей первозданностью, чистотой, рациональностью и
                безопасностью, и, наряду с этим, она несёт в себе любовь к приключениям и чувство стиля.
            </P>
        </div>
    );
};
