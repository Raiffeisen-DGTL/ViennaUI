import React from 'react';
import { Story, Meta } from 'storybook';
import { CssGrid, CssGridProps } from './CssGrid';
import { CssGridDemo } from './CssGrid.styles';

export default {
    title: 'Development/CssGrid',
    component: CssGrid,
} as Meta;

export const Overview: Story<CssGridProps> = (args) => {
    return (
        <CssGrid height='100%' templateColumns='100px auto 100px' templateRows='100px auto 50px' {...args}>
            <CssGridDemo $color='lightblue'>1</CssGridDemo>
            <CssGridDemo $color='peachpuff'>2</CssGridDemo>
            <CssGridDemo $color='orchid'>3</CssGridDemo>
            <CssGridDemo $color='darkorange'>4</CssGridDemo>
            <CssGridDemo $color='darkseagreen'>5</CssGridDemo>
            <CssGridDemo $color='gold'>6</CssGridDemo>
            <CssGridDemo $color='deepskyblue'>7</CssGridDemo>
            <CssGridDemo $color='lightgreen'>8</CssGridDemo>
            <CssGridDemo $color='lightsalmon'>9</CssGridDemo>
        </CssGrid>
    );
};
export const CssGridItem: Story<CssGridProps> = (args) => {
    return (
        <CssGrid
            height='450px'
            templateColumns='100px auto 100px'
            templateRows='50px 40% 40% 50px'
            templateAreas={[
                'header header header',
                'sidebar content toolbar',
                'sidebar content2 toolbar',
                'footer footer2 footer3',
            ]}
            {...args}>
            <CssGrid.Item area='header'>
                <CssGridDemo $color='lightblue'>header</CssGridDemo>
            </CssGrid.Item>
            <CssGrid.Item area='sidebar'>
                <CssGridDemo $color='peachpuff'>sidebar</CssGridDemo>
            </CssGrid.Item>
            <CssGrid.Item area='content'>
                <CssGridDemo $color='orchid'>content</CssGridDemo>
            </CssGrid.Item>
            <CssGrid.Item area='content2'>
                <CssGridDemo $color='darkorange'>content 2</CssGridDemo>
            </CssGrid.Item>
            <CssGrid.Item area='toolbar'>
                <CssGridDemo $color='darkseagreen'>toolbar</CssGridDemo>
            </CssGrid.Item>
            <CssGrid.Item area='footer'>
                <CssGridDemo $color='gold'>footer</CssGridDemo>
            </CssGrid.Item>
            <CssGrid.Item area='footer2'>
                <CssGridDemo $color='deepskyblue'>footer 2</CssGridDemo>
            </CssGrid.Item>
            <CssGrid.Item area='footer3'>
                <CssGridDemo $color='lightgreen'>footer 3</CssGridDemo>
            </CssGrid.Item>
        </CssGrid>
    );
};
