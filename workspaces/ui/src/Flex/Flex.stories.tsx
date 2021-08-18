import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Flex, { FlexProps } from './Flex';
import ComponentHelpers from '../../../techhub/apps/ComponentHelpers';

export default {
    title: 'Development/Flex',
    component: Flex,
} as Meta;

export const Overview: Story<FlexProps> = (args) => {
    return (
        <Flex justifyContent='stretch' {...args}>
            <ComponentHelpers.Flex.Demo>1</ComponentHelpers.Flex.Demo>
            <ComponentHelpers.Flex.Demo>2</ComponentHelpers.Flex.Demo>
            <ComponentHelpers.Flex.Demo>3</ComponentHelpers.Flex.Demo>
            <ComponentHelpers.Flex.Demo>4</ComponentHelpers.Flex.Demo>
        </Flex>
    );
};
export const FlexItem: Story<FlexProps> = (args) => {
    return (
        <Flex {...args}>
            <Flex.Item grow='2'>
                <ComponentHelpers.Flex.Demo>1</ComponentHelpers.Flex.Demo>
            </Flex.Item>
            <Flex.Item grow='1'>
                <ComponentHelpers.Flex.Demo>2</ComponentHelpers.Flex.Demo>
            </Flex.Item>
            <Flex.Item basis='100px'>
                <ComponentHelpers.Flex.Demo>3</ComponentHelpers.Flex.Demo>
            </Flex.Item>
            <Flex.Item basis='200px'>
                <ComponentHelpers.Flex.Demo>4</ComponentHelpers.Flex.Demo>
            </Flex.Item>
        </Flex>
    );
};
