import React from 'react';
import { Story, Meta } from 'storybook';
import { TimerIconProps } from 'vienna.icons';
import { Timer } from './Timer';

export default {
    title: 'Development/Timer',
    component: Timer,
} as Meta;

export const Overview: Story<TimerIconProps> = (args) => {
    // eslint-disable-next-line no-console
    const handleChange = (tick, id) => console.log(`tick: ${tick}, timer id: ${id}`);
    return <Timer id='0' {...args} onChange={handleChange} />;
};
