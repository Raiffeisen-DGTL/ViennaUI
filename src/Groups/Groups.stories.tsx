import React from 'react';
import { Story, Meta } from 'storybook';
import { TrashDelete } from '@fcc/icons';
import { Groups, GroupsProps } from './Groups';
import { Button } from '../Button';

export default {
    title: 'Development/Groups',
    component: Groups,
} as Meta;

export const Overview: Story<GroupsProps> = (args) => {
    return (
        <Groups {...args}>
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <Button design='ghost'>
                <TrashDelete /> Delete statement
            </Button>
        </Groups>
    );
};
export const WithVerticalDesign: Story<GroupsProps> = (args) => {
    return (
        <Groups design='vertical' {...args}>
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <Button design='ghost'>
                <TrashDelete /> Delete statement
            </Button>
        </Groups>
    );
};
export const WithSizes: Story<GroupsProps> = (args) => {
    return (
        <Groups design='vertical'>
            <Groups size='xs'>
                <Button design='accent'>Make payment</Button>
                <Button design='outline'>Download statement</Button>
                <Button design='outline'>
                    <TrashDelete /> Delete statement
                </Button>
            </Groups>
            <Groups size='s'>
                <Button design='accent'>Make payment</Button>
                <Button design='outline'>Download statement</Button>
                <Button design='outline'>
                    <TrashDelete /> Delete statement
                </Button>
            </Groups>
            <Groups size='m'>
                <Button design='accent'>Make payment</Button>
                <Button design='outline'>Download statement</Button>
                <Button design='outline'>
                    <TrashDelete /> Delete statement
                </Button>
            </Groups>
            <Groups size='l'>
                <Button design='accent'>Make payment</Button>
                <Button design='outline'>Download statement</Button>
                <Button design='outline'>
                    <TrashDelete /> Delete statement
                </Button>
            </Groups>
            <Groups size='xl'>
                <Button design='accent'>Make payment</Button>
                <Button design='outline'>Download statement</Button>
                <Button design='outline'>
                    <TrashDelete /> Delete statement
                </Button>
            </Groups>
        </Groups>
    );
};
export const WithReactFragment: Story<GroupsProps> = (args) => {
    return (
        <Groups clean={true}>
            <Button design='accent'>Make payment</Button>
            <Button design='outline'>Download statement</Button>
            <React.Fragment>
                <Button design='outline'>
                    <TrashDelete /> Delete statement
                </Button>
                <Button design='outline'>
                    <TrashDelete /> Delete statement
                </Button>
            </React.Fragment>
        </Groups>
    );
};
