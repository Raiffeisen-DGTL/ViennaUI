import React from 'react';
import { Story, Meta } from 'storybook';
import * as Icons from 'vienna.icons';
import { Groups } from "../Groups";

export default {
    title: 'Development/Icons',
    component: Icons,
} as Meta;

export const PlaywrightTest: Story = () => {
    const iconNames = Object.keys(Icons).sort();

    return (
        <Groups id='icons' design="vertical">
            {iconNames.map(iconName => {
                const Current = Icons[iconName];

                return (
                    <Groups id={iconName} key={iconName} design="horizontal">
                        <Current size='xs' />
                        <Current size='s' />
                        <Current size='m' />
                        <Current size='l' />
                        <Current size='xl' />
                        <Current color='red' size='xs' />
                        <Current color='red' size='s' />
                        <Current color='red' size='m' />
                        <Current color='red' size='l' />
                        <Current color='red' size='xl' />
                    </Groups>
                )
            })}
        </Groups>
    );
};

// It needs for React.StrictMode.
PlaywrightTest.parameters = {
    docs: {
        source: {
            code: "Disabled for this story, see https://github.com/storybookjs/storybook/issues/11554"
        }
    },
    centered: true,
    fullscreen: true
}

PlaywrightTest.storyName = 'Для тестирования'
