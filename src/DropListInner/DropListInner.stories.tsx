import React from 'react';
import { Story, Meta } from 'storybook';
import { ManPerson } from 'vienna.icons';
import { DropListInner, DropListInnerProps } from './DropListInner';
import { RoundIcon } from '../RoundIcon';

export default {
    title: 'Development/DropListInner',
    component: DropListInner,
} as Meta;

export const Overview: Story<DropListInnerProps> = (args) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <RoundIcon onClick={() => setOpen(!isOpen)}>
            <ManPerson />
            {isOpen && (
                <DropListInner fixed {...args}>
                    <DropListInner.Item>Item 1</DropListInner.Item>
                    <DropListInner.Item>Very very long Item 2</DropListInner.Item>
                    <DropListInner.Item disabled>Item 3</DropListInner.Item>
                    <DropListInner.Item>Item 4</DropListInner.Item>
                    <DropListInner.Item selected>Item 5</DropListInner.Item>
                    <DropListInner.Item>Item 6</DropListInner.Item>
                    <DropListInner.Item>Item 7</DropListInner.Item>
                </DropListInner>
            )}
        </RoundIcon>
    );
};
