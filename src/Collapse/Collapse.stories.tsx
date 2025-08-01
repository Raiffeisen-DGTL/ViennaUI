import React from 'react';
import { Story, Meta } from 'storybook';
import { Collapse, CollapseProps } from './Collapse';

export default {
    title: 'Development/Collapse',
    component: Collapse,
} as Meta;

export const Overview: Story<CollapseProps> = () => {
    return (
        <Collapse header={'The header'} size={'s'} hideByStyles={true}>
            test
        </Collapse>
    );
};
