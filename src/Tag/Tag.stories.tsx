import React from 'react';
import { Story, Meta } from 'storybook';
import { Tag, TagProps } from './Tag';

export default {
    title: 'Development/Tag',
    component: Tag,
    args: {
        children: 'Батат',
    },
    argTypes: {
        design: {
            control: 'select',
        },
        size: {
            control: 'select',
        },
        disabled: {
            control: 'boolean',
        },
        maxWidth: {
            control: 'text',
        },
        disabledTabIndex: {
            control: 'boolean',
        },
        children: {
            control: 'text',
        },
        onClick: {
            action: 'clicked',
        },
        onDelete: {
            action: 'deleted',
        },
    },
} as Meta;

export const Overview: Story<TagProps> = (args) => {
    return (
        <>
            <Tag.Group>
                <Tag {...args} />
                <Tag {...args} />
                <Tag {...args} />
            </Tag.Group>
        </>
    );
};
