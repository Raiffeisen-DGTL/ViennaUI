import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { ThemeProvider } from 'vienna.ui-primitives';
import { ForwardArrowRightIcon, BackIcon, ScrewIcon, LogoIcon } from 'vienna.icons';
import { Button } from './Button';
import { Groups } from '../Groups';
import { ScopedStory } from '../Utils';
import ButtonDocs from './Button.mdx';

type Story = StoryObj<typeof Button> & ScopedStory;

const defaultScope = {
    Button,
    Groups,
};

export default {
    title: 'Компоненты/Button',
    component: Button,
    argTypes: {
        size: {
            control: 'radio',
            options: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
        },
        loading: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        square: {
            control: 'boolean',
        },
    },
    parameters: {
        controls: {
            include: ['design', 'size', 'grid', 'loading', 'disabled', 'square'],
        },
        docs: {
            page: ButtonDocs,
        },
    },
} as Meta;

export const Overview: Story = {
    args: {
        design: 'accent',
        children: 'Click me',
    },
    render: (args) => {
        return <Button {...args} />;
    },
};
Overview.scope = defaultScope;

export const WithTheme: Story = {
    tags: ['hidden'],
    render: () => {
        const theme = {
            button: {},
        };

        return (
            <ThemeProvider theme={theme}>
                <Button design='accent'>Click me</Button>
            </ThemeProvider>
        );
    },
};
WithTheme.scope = { ...defaultScope, ThemeProvider };

export const Main: Story = {
    render: () => (
        <Groups>
            <Button design='accent'>Accent</Button>
            <Button design='primary'>Primary</Button>
            <Button design='outline'>Outline</Button>
            <Button design='critical'>Critical</Button>
            <Button design='outline-critical'>Outline critical</Button>
            <Button design='ghost'>Ghost</Button>
            <Button design='ghost-accent'>Ghost accent</Button>
            <Button design='white'>White</Button>
            <Button design='ghost-white'>Ghost-White</Button>
            <Button design='neutral'>Neutral</Button>
        </Groups>
    ),
};
Main.scope = defaultScope;

export const Accent: Story = {
    render: () => (
        <Groups>
            <Button size='xs' design='accent'>
                Default
            </Button>
            <Button size='s' design='accent'>
                Default
            </Button>
            <Button size='m' design='accent'>
                Default
            </Button>
            <Button size='l' design='accent'>
                Default
            </Button>
            <Button size='xl' design='accent'>
                Default
            </Button>
            <Button size='xxl' design='accent'>
                Default
            </Button>
            <Button design='accent' loading>
                Loading
            </Button>
            <Button design='accent' disabled>
                Disabled
            </Button>
        </Groups>
    ),
};
Accent.scope = defaultScope;

export const Primary: Story = {
    render: () => (
        <Groups>
            <Button size='xs' design='primary'>
                Default
            </Button>
            <Button size='s' design='primary'>
                Default
            </Button>
            <Button size='m' design='primary'>
                Default
            </Button>
            <Button size='l' design='primary'>
                Default
            </Button>
            <Button size='xl' design='primary'>
                Default
            </Button>
            <Button size='xxl' design='primary'>
                Default
            </Button>
            <Button design='primary' loading>
                Loading
            </Button>
            <Button design='primary' disabled>
                Disabled
            </Button>
        </Groups>
    ),
};
Primary.scope = defaultScope;

export const Outline: Story = {
    render: () => (
        <Groups>
            <Button size='xs' design='outline'>
                Default
            </Button>
            <Button size='s' design='outline'>
                Default
            </Button>
            <Button size='m' design='outline'>
                Default
            </Button>
            <Button size='l' design='outline'>
                Default
            </Button>
            <Button size='xl' design='outline'>
                Default
            </Button>
            <Button size='xxl' design='outline'>
                Default
            </Button>
            <Button design='outline' loading>
                Loading
            </Button>
            <Button design='outline' disabled>
                Disabled
            </Button>
        </Groups>
    ),
};
Outline.scope = defaultScope;

export const Critical: Story = {
    render: () => (
        <Groups>
            <Button size='xs' design='critical'>
                Default
            </Button>
            <Button size='s' design='critical'>
                Default
            </Button>
            <Button size='m' design='critical'>
                Default
            </Button>
            <Button size='l' design='critical'>
                Default
            </Button>
            <Button size='xl' design='critical'>
                Default
            </Button>
            <Button size='xxl' design='critical'>
                Default
            </Button>
            <Button design='critical' loading>
                Loading
            </Button>
            <Button design='critical' disabled>
                Disabled
            </Button>
        </Groups>
    ),
};
Critical.scope = defaultScope;

export const OutlineCritical: Story = {
    render: () => (
        <Groups>
            <Button size='xs' design='outline-critical'>
                Default
            </Button>
            <Button size='s' design='outline-critical'>
                Default
            </Button>
            <Button size='m' design='outline-critical'>
                Default
            </Button>
            <Button size='l' design='outline-critical'>
                Default
            </Button>
            <Button size='xl' design='outline-critical'>
                Default
            </Button>
            <Button size='xxl' design='outline-critical'>
                Default
            </Button>
            <Button design='outline-critical' loading>
                Loading
            </Button>
            <Button design='outline-critical' disabled>
                Disabled
            </Button>
        </Groups>
    ),
};
OutlineCritical.scope = defaultScope;

export const Ghost: Story = {
    render: () => (
        <Groups>
            <Button size='xs' design='ghost'>
                Default
            </Button>
            <Button size='s' design='ghost'>
                Default
            </Button>
            <Button size='m' design='ghost'>
                Default
            </Button>
            <Button size='l' design='ghost'>
                Default
            </Button>
            <Button size='xl' design='ghost'>
                Default
            </Button>
            <Button size='xxl' design='ghost'>
                Default
            </Button>
            <Button design='ghost' loading>
                Loading
            </Button>
            <Button design='ghost' disabled>
                Disabled
            </Button>
        </Groups>
    ),
};
Ghost.scope = defaultScope;

export const GhostAccent: Story = {
    render: () => (
        <Groups>
            <Button size='xs' design='ghost-accent'>
                Default
            </Button>
            <Button size='s' design='ghost-accent'>
                Default
            </Button>
            <Button size='m' design='ghost-accent'>
                Default
            </Button>
            <Button size='l' design='ghost-accent'>
                Default
            </Button>
            <Button size='xl' design='ghost-accent'>
                Default
            </Button>
            <Button size='xxl' design='ghost-accent'>
                Default
            </Button>
            <Button design='ghost-accent' loading>
                Loading
            </Button>
            <Button design='ghost-accent' disabled>
                Disabled
            </Button>
        </Groups>
    ),
};
GhostAccent.scope = defaultScope;

export const White: Story = {
    render: () => (
        <Groups>
            <Button size='xs' design='white'>
                Default
            </Button>
            <Button size='s' design='white'>
                Default
            </Button>
            <Button size='m' design='white'>
                Default
            </Button>
            <Button size='l' design='white'>
                Default
            </Button>
            <Button size='xl' design='white'>
                Default
            </Button>
            <Button size='xxl' design='white'>
                Default
            </Button>
            <Button design='white' loading>
                Loading
            </Button>
            <Button design='white' disabled>
                Disabled
            </Button>
        </Groups>
    ),
};
White.scope = defaultScope;

export const GhostWhite: Story = {
    render: () => (
        <Groups style={{ background: '#2B2D33' }}>
            <Button size='xs' design='ghost-white'>
                Default
            </Button>
            <Button size='s' design='ghost-white'>
                Default
            </Button>
            <Button size='m' design='ghost-white'>
                Default
            </Button>
            <Button size='l' design='ghost-white'>
                Default
            </Button>
            <Button size='xl' design='ghost-white'>
                Default
            </Button>
            <Button size='xxl' design='ghost-white'>
                Default
            </Button>
            <Button design='ghost-white' loading>
                Loading
            </Button>
            <Button design='ghost-white' disabled>
                Disabled
            </Button>
        </Groups>
    ),
};
GhostWhite.scope = defaultScope;

export const Pressed: Story = {
    render: () => (
        <Groups>
            <Button design='accent' pressed>
                Accent
            </Button>
            <Button design='primary' pressed>
                Primary
            </Button>
            <Button design='outline' pressed>
                Outline
            </Button>
            <Button design='critical' pressed>
                Critical
            </Button>
            <Button design='outline-critical' pressed>
                Outline critical
            </Button>
            <Button design='ghost' pressed>
                Ghost
            </Button>
            <Button design='ghost-accent' pressed>
                Ghost accent
            </Button>
            <Button design='white' pressed>
                White
            </Button>
            <Button design='ghost-white' pressed>
                Ghost-White
            </Button>
            <Button design='neutral' pressed>
                Neutral
            </Button>
        </Groups>
    ),
};
Pressed.scope = defaultScope;

export const AsAnchor: Story = {
    render: () => (
        <Groups>
            <Button href='/' design='accent'>
                Home
            </Button>
            <Button design='primary' href='http://google.com' target='_blank'>
                Google
            </Button>
        </Groups>
    ),
};
AsAnchor.scope = defaultScope;
AsAnchor.storyName = 'Ссылка как кнопка';

export const WithIcons: Story = {
    render: () => {
        return (
            <Groups>
                <Button>
                    <BackIcon /> Назад
                </Button>
                <Button>
                    Вперед <ForwardArrowRightIcon />
                </Button>
                <Button>
                    <ScrewIcon /> Вперед <ForwardArrowRightIcon />
                </Button>
            </Groups>
        );
    },
};
WithIcons.storyName = 'Кнопки с иконками';
WithIcons.scope = {
    ...defaultScope,
    BackIcon,
    ScrewIcon,
    ForwardArrowRightIcon,
};

export const WithOptionalIcons: Story = {
    render: () => {
        let showIcon = true;

        return (
            <Button grid={2}>
                {showIcon ? <BackIcon /> : null}
                Назад
            </Button>
        );
    },
};
WithOptionalIcons.storyName = 'Опциональные иконки';
WithOptionalIcons.scope = {
    ...defaultScope,
    BackIcon,
};

export const Guidelines: Story = {
    render: () => (
        <Groups>
            <Button size='xs'>
                <LogoIcon size='s' /> XS
            </Button>
            <Button size='s'>
                <LogoIcon /> S
            </Button>
            <Button size='m'>
                <LogoIcon /> M
            </Button>
            <Button size='l'>
                <LogoIcon /> L
            </Button>
            <Button size='xl'>
                <LogoIcon /> XL
            </Button>
            <Button size='xxl'>
                <LogoIcon /> XXL
            </Button>
        </Groups>
    ),
};
Guidelines.storyName = 'Гайдлайны';
Guidelines.scope = {
    ...defaultScope,
    LogoIcon,
};

export const SquareButtons: Story = {
    render: () => (
        <Groups>
            <Button size='xs' square>
                <LogoIcon size='s' />
            </Button>
            <Button size='s' square>
                <LogoIcon />
            </Button>
            <Button size='m' square>
                <LogoIcon />
            </Button>
            <Button size='l' square>
                <LogoIcon />
            </Button>
            <Button size='xl' square>
                <LogoIcon />
            </Button>
            <Button size='xxl' square>
                <LogoIcon />
            </Button>
        </Groups>
    ),
};
SquareButtons.storyName = 'Квадратные кнопки';
SquareButtons.scope = {
    ...defaultScope,
    LogoIcon,
};

export const Grid: Story = {
    render: () => (
        <Groups design='vertical'>
            <Button design='primary' grid={0}>
                auto
            </Button>
            <Button design='primary' grid={1}>
                1
            </Button>
            <Button design='primary' grid={2}>
                2
            </Button>
            <Button design='primary' grid={3}>
                3
            </Button>
            <Button design='primary' grid={4}>
                4
            </Button>
            <Button design='primary' grid={5}>
                5
            </Button>
            <Button design='primary' grid={6}>
                6
            </Button>
            <Button design='primary' grid={7}>
                7
            </Button>
            <Button design='primary' grid={8}>
                8
            </Button>
            <Button design='primary' grid={9}>
                9
            </Button>
            <Button design='primary' grid={10}>
                10
            </Button>
            <Button design='primary' grid={11}>
                11
            </Button>
            <Button design='primary' grid={12}>
                12
            </Button>
        </Groups>
    ),
};
Grid.storyName = 'Ограничение по сетке';
Grid.scope = defaultScope;

export const Vertical: Story = {
    render: () => (
        <Groups design='vertical'>
            <Button size='s' grid={1}>
                Button Text
            </Button>
            <Button size='m' grid={2}>
                Super Button Text
            </Button>
            <Button size='l' grid={3}>
                Super Button Text Awesome Amazing
            </Button>
        </Groups>
    ),
};
Vertical.storyName = 'Ограничение по длине';
Vertical.scope = defaultScope;

export const Neutral: Story = {
    render: () => (
        <Groups>
            <Button design='neutral'>Neutral</Button>
            <Button design='neutral' pressed>
                Neutral pressed
            </Button>
            <Button design='neutral' disabled>
                Neutral
            </Button>
            <Button design='neutral' loading>
                Loading
            </Button>
            <Button design='neutral' square>
                <LogoIcon size='s' />
            </Button>
            <Button design='neutral'>
                <BackIcon /> Назад
            </Button>
        </Groups>
    ),
};
Neutral.scope = defaultScope;
