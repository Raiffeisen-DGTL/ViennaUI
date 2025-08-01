import React from 'react';
import { Story, Meta } from 'storybook';
import { Highlight, HighlightProps } from './Highlight';

export default {
    title: 'Development/Highlight',
    component: Highlight,
    args: {
        query: 'знач',
    },
} as Meta;

export const Overview: Story<HighlightProps> = (args) => {
    return (
        <div>
            <Highlight style='boldText' {...args}>
                <p>Значение</p>
                <p>
                    <span>Значение</span>
                </p>
            </Highlight>
            <Highlight {...args}>
                <p>Значение</p>
                <p>
                    <span>Значение</span>
                </p>
            </Highlight>
        </div>
    );
};
