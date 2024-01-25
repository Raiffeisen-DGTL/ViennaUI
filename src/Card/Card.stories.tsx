import React from 'react';
import { Story, Meta } from 'storybook';
import { CloseCancelX, Settings } from '@fcc/icons';
import { Card, CardProps } from './Card';
import { Groups } from '../Groups';
import { Button } from '../Button';
import { Tabs } from '../Tabs';
import { ComponentHelperCard } from './Card.styles';

export default {
    title: 'Development/Card',
    component: Card,
} as Meta;

export const Overview: Story<CardProps> = (args) => {
    return <Card title='Simple card' {...args} />;
};

export const WithActions: Story<CardProps> = (args) => {
    return (
        <Card
            {...args}
            title='Card with actions'
            actions={
                <Groups size='xs'>
                    <Settings />
                    <CloseCancelX />
                </Groups>
            }>
            <ComponentHelperCard />
        </Card>
    );
};
WithActions.storyName = 'С действиями';
export const WithHeader: Story<CardProps> = (args) => {
    return (
        <Card
            {...args}
            header={
                <Groups alignItems='baseline'>
                    <Card.Title>Card title</Card.Title>
                    <Card.Subtitle>Card subtitle</Card.Subtitle>
                </Groups>
            }>
            <ComponentHelperCard />
        </Card>
    );
};
WithHeader.storyName = 'С заголовком';
export const WithFooter: Story<CardProps> = (args) => {
    return (
        <Card
            {...args}
            title='Card with footer'
            actions={<Settings />}
            footer={
                <Groups justifyContent='flex-end'>
                    <Button design='outline'>Button example</Button>
                    <Button design='accent'>Button example</Button>
                </Groups>
            }>
            <ComponentHelperCard />
        </Card>
    );
};
WithFooter.storyName = 'С footer';
export const WithTabs: Story<CardProps> = (args) => {
    return (
        <Card
            {...args}
            header={
                <Groups design='vertical'>
                    <Card.Title>Card with tabs</Card.Title>
                    <Tabs size='m' value='active'>
                        <Tabs.Tab value='active'>Active</Tabs.Tab>
                        <Tabs.Tab value='inactive'>Inactive</Tabs.Tab>
                        <Tabs.Tab value='inactive'>Inactive</Tabs.Tab>
                    </Tabs>
                </Groups>
            }
            actions={<Settings />}>
            <ComponentHelperCard />
        </Card>
    );
};
WithTabs.storyName = 'Со вкладками';
