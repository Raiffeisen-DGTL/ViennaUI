import React from 'react';
import { Story, Meta } from 'storybook';
import { Body, BodyProps } from './Body';
import { Heading } from '../Typography/Heading/Heading';
import { H1, H2, H3, H4, H5, P } from '../Typography';

export default {
    title: 'Development/Body',
    component: Body,
} as Meta;

export const Overview: Story<BodyProps> = (args) => {
    return <Body {...args}>This is content</Body>;
};
export const WithTypography: Story<BodyProps> = (args) => {
    return (
        <Body {...args}>
            <Heading color='currentColor'>Условия обработки персональных данных</Heading>
            <H1 color='currentColor'>Условия обработки персональных данных</H1>
            <H2 color='currentColor'>Условия обработки персональных данных</H2>
            <H3 color='currentColor'>Условия обработки персональных данных</H3>
            <H4 color='currentColor'>Условия обработки персональных данных</H4>
            <H5 color='currentColor'>Условия обработки персональных данных</H5>
            <P size='xxl' margin='xxl'>
                Клиент, сведения о котором содержатся в представленных в Банк документах, дает свое согласие на
                обработку АО «Райффайзенбанк» и подтверждает, что, давая такое согласие, действует своей волей и своем
                интересе.
            </P>
        </Body>
    );
};
WithTypography.storyName = 'С Typography';
