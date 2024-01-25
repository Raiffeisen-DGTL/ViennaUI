import React from 'react';
import { Story, Meta } from 'storybook';
import { Flex, FlexProps } from './Flex';
import { FlexDemo } from './Flex.styles';

export default {
    title: 'Development/Flex',
    component: Flex,
} as Meta;

export const Overview: Story<FlexProps> = (args) => {
    return (
        <Flex justifyContent='stretch' {...args}>
            <FlexDemo>1</FlexDemo>
            <FlexDemo>2</FlexDemo>
            <FlexDemo>3</FlexDemo>
            <FlexDemo>4</FlexDemo>
        </Flex>
    );
};
export const FlexItem: Story<FlexProps> = (args) => {
    return (
        <Flex {...args}>
            <Flex.Item grow='2'>
                <FlexDemo>1</FlexDemo>
            </Flex.Item>
            <Flex.Item grow='1'>
                <FlexDemo>2</FlexDemo>
            </Flex.Item>
            <Flex.Item basis='100px'>
                <FlexDemo>3</FlexDemo>
            </Flex.Item>
            <Flex.Item basis='200px'>
                <FlexDemo>4</FlexDemo>
            </Flex.Item>
        </Flex>
    );
};
