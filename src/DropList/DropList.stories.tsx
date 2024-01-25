import React from 'react';
import { Story, Meta } from 'storybook';
import { ManPerson } from 'vienna.icons';
import { DropList, DropListProps } from './DropList';
import { RoundIcon } from '../RoundIcon';

export default {
    title: 'Development/DropList',
    component: DropList,
} as Meta;

export const Overview: Story<DropListProps> = (args) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <RoundIcon onClick={() => setOpen(!isOpen)}>
            <ManPerson />
            {isOpen && (
                <DropList fixed {...args}>
                    <DropList.Item>Item 1</DropList.Item>
                    <DropList.Item>Very very long Item 2</DropList.Item>
                    <DropList.Item disabled>Item 3</DropList.Item>
                    <DropList.Item>Item 4</DropList.Item>
                    <DropList.Item selected>Item 5</DropList.Item>
                    <DropList.Item>Item 6</DropList.Item>
                    <DropList.Item>Item 7</DropList.Item>
                </DropList>
            )}
        </RoundIcon>
    );
};
