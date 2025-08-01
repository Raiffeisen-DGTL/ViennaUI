import React from 'react';
import { Story, Meta } from 'storybook';
import { AttachIcon as Attach } from 'vienna.icons';
import { Badge, BadgeProps } from './Badge';
import { Groups } from '@/Groups';

export default {
    title: 'Development/Badge',
    component: Badge,
} as Meta;

export const Overview: Story<BadgeProps> = (args) => {
    return (
        <Badge color='sochi30' grid={2} {...args}>
            Some text
        </Badge>
    );
};

export const WithIcon: Story<BadgeProps> = (args) => {
    return (
        <Badge grid={2} {...args}>
            <Attach size='s' />
            Some text
        </Badge>
    );
};
WithIcon.storyName = 'С иконкой';

export const WithAdaptive: Story<BadgeProps> = (args) => {
    return (
        <Badge grid={2} size={{ belowS: 's', s: 'm', m: 'l' }}>
            <Attach size='s' />
            Some text
        </Badge>
    );
};
WithIcon.storyName = 'С адаптивом';

export const SizeXlAndOsloColor: Story<BadgeProps> = (args) => {
    return (
        <Groups design='vertical'>
            <Badge color='oslo10' size='xl' grid={2} {...args}>
                Some text
            </Badge>
            <Badge color='oslo30' size='xl' grid={2} {...args}>
                Some text
            </Badge>
            <Badge color='oslo100' size='xl' grid={2} {...args}>
                Some text
            </Badge>
        </Groups>
    );
};

export const OsakaColor: Story<BadgeProps> = (args) => {
    return (
        <Groups design='vertical'>
            <Badge color='osaka10' size='l' grid={2} {...args}>
                Some text
            </Badge>
            <Badge color='osaka30' size='l' grid={2} {...args}>
                Some text
            </Badge>
            <Badge color='osaka100' size='l' grid={2} {...args}>
                Some text
            </Badge>
        </Groups>
    );
};

export const Seattle30Color: Story<BadgeProps> = (args) => {
    const sizes = ['xs', 's', 'm', 'l', 'xl'];
    return (
        <Groups design='vertical'>
            {sizes.map((size: string) => (
                <Badge color='seattle30' size={size} grid={2} {...args}>
                    Some text
                </Badge>
            ))}
        </Groups>
    );
};
