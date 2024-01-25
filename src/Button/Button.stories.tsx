import React, { useState } from 'react';
import { Story, Meta } from 'storybook';
import { ForwardArrowRight, Violin } from 'vienna.icons';
import { Button, ButtonProps } from './Button';

export default {
    title: 'Development/Button',
    component: Button,
} as Meta;

export const Overview: Story<ButtonProps> = (args) => {
    const [loading, setLoading] = useState(false);
    const handleClick = () => setLoading((p) => !p);
    const ref = React.useRef(null);
    return (
        <Button forwardedRef={ref} design='accent' loading={loading} onClick={handleClick} {...args}>
            Click me
        </Button>
    );
};

export const WithIcons: Story<ButtonProps> = (args) => {
    return (
        <Button grid={1} {...args}>
            <Violin />
            Click me
            <ForwardArrowRight />
        </Button>
    );
};
WithIcons.storyName = 'С иконками';
export const Adaptive: Story<ButtonProps> = (args) => {
    return (
        <Button grid={2} size={{ s: 's', m: 'xl' }} {...args}>
            Click me
        </Button>
    );
};

export const PlaywrightStates: Story<ButtonProps> = (args) => {
    const handleClick = () => {};
    const ref = React.useRef(null);
    return (
        <>
            <Button forwardedRef={ref} design='accent' onClick={handleClick} {...args}>
                Click me
            </Button>
            <Button loading design='accent' onClick={handleClick} {...args}>
                Click me
            </Button>
            <Button loading disabled design='accent' onClick={handleClick} {...args}>
                Click me
            </Button>
            <Button disabled design='accent' onClick={handleClick} {...args}>
                Click me
            </Button>
        </>
    );
};

export const PlaywrightDesigns: Story<ButtonProps> = (args) => {
    const handleClick = () => {};
    return (
        <>
            <Button design='accent' {...args}>
                Click me
            </Button>
            <Button design='primary' {...args}>
                Click me
            </Button>
            <Button design='critical' {...args}>
                Click me
            </Button>
            <Button design='outline-critical' {...args}>
                Click me
            </Button>
            <Button design='outline' {...args}>
                Click me
            </Button>
            <Button design='white' {...args}>
                Click me
            </Button>
            <Button design='ghost' {...args}>
                Click me
            </Button>
            <Button design='ghost-accent' {...args}>
                Click me
            </Button>
        </>
    );
};
