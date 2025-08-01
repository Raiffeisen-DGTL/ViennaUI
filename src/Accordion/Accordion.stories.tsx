import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { ScopedStory } from '../Utils';
import { ThemeProvider } from 'vienna.ui-primitives';
import { Button } from '../Button';
import { Groups } from '../Groups';
import { ViolinIcon } from 'vienna.icons';
import AccordionDocs from './Accordion.mdx';

type Story = StoryObj<typeof Accordion> & ScopedStory;

const defaultScope = {
    Accordion,
    AccordionItem: Accordion.Item,
    Button,
    Groups,
    ViolinIcon,
    ThemeProvider,
};

const meta: Meta<typeof Accordion> = {
    title: 'Компоненты/Accordion',
    component: Accordion,
    parameters: {
        docs: {
            page: AccordionDocs,
            controls: { include: ['iconPosition', 'size', 'hideByStyle'] },
        },
    },

    argTypes: {
        iconPosition: {
            control: 'radio',
            options: ['left', 'right', 'none'],
            description: 'Позиция иконки',
        },
        children: {
            control: { type: 'text' },
            description: 'Дочерние элементы компонента',
        },
        size: {
            control: 'radio',
            options: ['s', 'm', 'l'],
            description: 'Размер аккордеона',
        },
    },
};

export default meta;

export const Overview: Story = {
    render: () => (
        <Accordion iconPosition='left'>
            <Accordion.Item header='Accordion header'>Example</Accordion.Item>
            <Accordion.Item header='Accordion header'>Example</Accordion.Item>
            <Accordion.Item header='Accordion header'>Example</Accordion.Item>
        </Accordion>
    ),
};

Overview.scope = defaultScope;

export const WithTheme: Story = {
    tags: ['hidden'],
    render: () => {
        const theme = {
            accordion: {},
        };

        return (
            <ThemeProvider theme={theme}>
                <Accordion iconPosition='left'>
                    <Accordion.Item header='Accordion header'>Example</Accordion.Item>
                    <Accordion.Item header='Accordion header'>Example</Accordion.Item>
                    <Accordion.Item header='Accordion header'>Example</Accordion.Item>
                </Accordion>
            </ThemeProvider>
        );
    },
};

WithTheme.scope = defaultScope;

export const DifferentHeaders: Story = {
    render: () => (
        <Accordion>
            <Accordion.Item
                header={
                    <>
                        <ViolinIcon />
                        Accordion header
                    </>
                }>
                Put your content here
            </Accordion.Item>
        </Accordion>
    ),
};

DifferentHeaders.scope = defaultScope;

export const DifferentContent: Story = {
    render: () => (
        <Accordion>
            <Accordion.Item header={'Accordion header'}>
                <ViolinIcon />
                Put your content here
                <Button>Click</Button>
            </Accordion.Item>
        </Accordion>
    ),
};

DifferentContent.scope = defaultScope;

export const SizeL: Story = {
    render: () => (
        <Accordion size={'l'} iconPosition='left'>
            <Accordion.Item header='Accordion header'>Example </Accordion.Item>
        </Accordion>
    ),
};

SizeL.scope = defaultScope;

export const SizeM: Story = {
    render: () => (
        <Accordion size={'m'} iconPosition='left'>
            <Accordion.Item header='Accordion header'>Example </Accordion.Item>
        </Accordion>
    ),
};

SizeM.scope = defaultScope;

export const SizeS: Story = {
    render: () => (
        <Accordion size={'s'} iconPosition='left'>
            <Accordion.Item header='Accordion header'>Example </Accordion.Item>
        </Accordion>
    ),
};

SizeS.scope = defaultScope;

export const IconPositionLeft: Story = {
    render: () => (
        <Accordion iconPosition='left'>
            <Accordion.Item header='Accordion header'>Example </Accordion.Item>
        </Accordion>
    ),
};

IconPositionLeft.scope = defaultScope;

export const IconPositionRight: Story = {
    render: () => (
        <Accordion iconPosition='right'>
            <Accordion.Item header='Accordion header'>Example </Accordion.Item>
        </Accordion>
    ),
};

IconPositionRight.scope = defaultScope;

export const IconPositionNone: Story = {
    render: () => (
        <Accordion iconPosition='none'>
            <Accordion.Item header='Accordion header'>Example </Accordion.Item>
        </Accordion>
    ),
};

IconPositionNone.scope = defaultScope;

export const InitiallyOpen: Story = {
    render: () => {
        const [isOpen, setIsOpen] = React.useState(false);
        return (
            <Groups design='vertical'>
                <Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open'}</Button>
                <Accordion iconPosition='left' style={{ width: '100%' }}>
                    <Accordion.Item initiallyOpen header='Accordion header'>
                        Example{' '}
                    </Accordion.Item>
                    <Accordion.Item open={isOpen} header='Accordion header'>
                        Example{' '}
                    </Accordion.Item>
                </Accordion>
            </Groups>
        );
    },
};

InitiallyOpen.scope = defaultScope;

export const DisabledState: Story = {
    render: () => (
        <Accordion>
            <Accordion.Item disabled header='Accordion header'>
                Example{' '}
            </Accordion.Item>
        </Accordion>
    ),
};

DisabledState.scope = defaultScope;

export const WidthAccordionItem: Story = {
    render: () => (
        <Accordion>
            <Accordion.Item width={200} header='Accordion header'>
                Example{' '}
            </Accordion.Item>
        </Accordion>
    ),
};

WidthAccordionItem.scope = defaultScope;

export const FlexDirectionColumn: Story = {
    render: () => (
        <Accordion>
            <Accordion.Item header={'the header'} flexDirection='column'>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>forth</div>
                <div>fifth</div>
                <div>sixth</div>
            </Accordion.Item>
            <Accordion.Item header={'the header'}>lalala</Accordion.Item>
            <Accordion.Item header={'the header'}>lalala</Accordion.Item>
        </Accordion>
    ),
};

FlexDirectionColumn.scope = defaultScope;
