import React from 'react';
import { Story, Meta } from 'storybook';
import { Alarm, AlarmProps } from './Alarm';
import { Groups } from '../Groups';

export default {
    title: 'Development/Alarm',
    component: Alarm,
} as Meta;

export const Overview: Story<AlarmProps> = (args) => {
    return <Alarm design='neutral' {...args} />;
};

export const Designs: Story<AlarmProps> = (args) => {
    return (
        <>
            <Alarm design='critical' />
            <Alarm design='warning' />
            <Alarm design='success' />
            <Alarm design='accent' />
            <Alarm design='neutral' />
            <Alarm design='disabled' />
        </>
    );
};

Designs.storyName = 'Дизайн';

export const Sizes: Story<AlarmProps> = (args) => {
    return (
        <Groups>
            <Groups design='vertical'>
                <Alarm size='s' design='critical' />
                <Alarm size='s' design='warning' />
                <Alarm size='s' design='success' />
                <Alarm size='s' design='accent' />
                <Alarm size='s' design='neutral' />
                <Alarm size='s' design='disabled' />
            </Groups>
            <Groups design='vertical'>
                <Alarm size='m' design='critical' />
                <Alarm size='m' design='warning' />
                <Alarm size='m' design='success' />
                <Alarm size='m' design='accent' />
                <Alarm size='m' design='neutral' />
                <Alarm size='m' design='disabled' />
            </Groups>
        </Groups>
    );
};

Sizes.storyName = 'Размеры';
