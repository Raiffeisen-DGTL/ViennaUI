import React from 'react';
import { Story, Meta } from 'storybook';
import { Attach } from '@fcc/icons';
import { Badge, BadgeProps } from './Badge';

export default {
    title: 'Development/Badge',
    component: Badge,
} as Meta;

export const Overview: Story<BadgeProps> = (args) => {
    return (
        <Badge grid={1} {...args}>
            Some text
        </Badge>
    );
};

export const WithIcon: Story<BadgeProps> = (args) => {
    return (
        <Badge grid={1} {...args}>
            <Attach size='s' />
            Some text
        </Badge>
    );
};
WithIcon.storyName = 'С иконкой';

export const WithAdaptive: Story<BadgeProps> = (args) => {
    return (
        <Badge grid={1} size={{ belowS: 's', s: 'm', m: 'l' }}>
            <Attach size='s' />
            Some text
        </Badge>
    );
};
WithIcon.storyName = 'С адаптивом';
