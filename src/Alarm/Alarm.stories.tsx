import React from 'react';
import { Story, Meta } from 'storybook';
import { Alarm, AlarmProps } from './Alarm';

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
