import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CssGrid, { CssGridProps } from './CssGrid';
import ComponentHelpers from '../../../techhub/apps/ComponentHelpers';

export default {
    title: 'Development/CssGrid',
    component: CssGrid,
} as Meta;

export const Overview: Story<CssGridProps> = (args) => {
    return (
        <CssGrid height='100%' templateColumns='100px auto 100px' templateRows='100px auto 50px' {...args}>
            <ComponentHelpers.CssGrid.Demo color='lightblue'>1</ComponentHelpers.CssGrid.Demo>
            <ComponentHelpers.CssGrid.Demo color='peachpuff'>2</ComponentHelpers.CssGrid.Demo>
            <ComponentHelpers.CssGrid.Demo color='orchid'>3</ComponentHelpers.CssGrid.Demo>
            <ComponentHelpers.CssGrid.Demo color='darkorange'>4</ComponentHelpers.CssGrid.Demo>
            <ComponentHelpers.CssGrid.Demo color='darkseagreen'>5</ComponentHelpers.CssGrid.Demo>
            <ComponentHelpers.CssGrid.Demo color='gold'>6</ComponentHelpers.CssGrid.Demo>
            <ComponentHelpers.CssGrid.Demo color='deepskyblue'>7</ComponentHelpers.CssGrid.Demo>
            <ComponentHelpers.CssGrid.Demo color='lightgreen'>8</ComponentHelpers.CssGrid.Demo>
            <ComponentHelpers.CssGrid.Demo color='lightsalmon'>9</ComponentHelpers.CssGrid.Demo>
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
                <ComponentHelpers.CssGrid.Demo color='lightblue'>header</ComponentHelpers.CssGrid.Demo>
            </CssGrid.Item>
            <CssGrid.Item area='sidebar'>
                <ComponentHelpers.CssGrid.Demo color='peachpuff'>sidebar</ComponentHelpers.CssGrid.Demo>
            </CssGrid.Item>
            <CssGrid.Item area='content'>
                <ComponentHelpers.CssGrid.Demo color='orchid'>content</ComponentHelpers.CssGrid.Demo>
            </CssGrid.Item>
            <CssGrid.Item area='content2'>
                <ComponentHelpers.CssGrid.Demo color='darkorange'>content 2</ComponentHelpers.CssGrid.Demo>
            </CssGrid.Item>
            <CssGrid.Item area='toolbar'>
                <ComponentHelpers.CssGrid.Demo color='darkseagreen'>toolbar</ComponentHelpers.CssGrid.Demo>
            </CssGrid.Item>
            <CssGrid.Item area='footer'>
                <ComponentHelpers.CssGrid.Demo color='gold'>footer</ComponentHelpers.CssGrid.Demo>
            </CssGrid.Item>
            <CssGrid.Item area='footer2'>
                <ComponentHelpers.CssGrid.Demo color='deepskyblue'>footer 2</ComponentHelpers.CssGrid.Demo>
            </CssGrid.Item>
            <CssGrid.Item area='footer3'>
                <ComponentHelpers.CssGrid.Demo color='lightgreen'>footer 3</ComponentHelpers.CssGrid.Demo>
            </CssGrid.Item>
        </CssGrid>
    );
};
