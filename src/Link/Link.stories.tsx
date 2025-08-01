import React from 'react';
import { Story, Meta } from 'storybook';
import { ForwardArrowRightIcon, LogoIcon, ScrewIcon } from 'vienna.icons';
import { Link, LinkProps } from './Link';

export default {
    title: 'Development/Link',
    component: Link,
} as Meta;

export const Overview: Story<LinkProps> = (args) => {
    return <Link {...args}>I'm a link</Link>;
};

export const WithIcon: Story<LinkProps> = (args) => {
    return (
        <Link {...args}>
            Вперед <ForwardArrowRightIcon />
        </Link>
    );
};
WithIcon.storyName = 'С иконкой';

export const Guideline: Story<LinkProps> = (args) => {
    return (
        <Link {...args}>
            <LogoIcon size='s' />
            I'm a link
        </Link>
    );
};
Guideline.storyName = 'Гайдлайн ';

export const IconLink: Story<LinkProps> = (args) => {
    return (
        <Link {...args}>
            <ScrewIcon />
        </Link>
    );
};
IconLink.storyName = 'Ссылки из иконки';

export const WithAdaptive: Story<LinkProps> = (args) => {
    return (
        <>
            <Link {...args} size={{ s: 's', m: 'l' }}>
                Link
            </Link>
            <Link {...args} loading size={{ s: 's', m: 'l' }}>
                Link
            </Link>
        </>
    );
};
WithAdaptive.storyName = 'Ссылки из иконки';
