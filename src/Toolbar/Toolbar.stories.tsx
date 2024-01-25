import React from 'react';
import { Story, Meta } from 'storybook';
import { Attach } from 'vienna.icons';
import { Toolbar, ToolbarProps } from './Toolbar';

export default {
    title: 'Development/Toolbar',
    component: Toolbar,
} as Meta;

export const Overview: Story<ToolbarProps> = (args) => {
    return (
        <Toolbar moreOptionsText={'Другое'} {...args}>
            <Toolbar.Operation icon={<Attach />} label={'Action 1'} />
            <Toolbar.Operation icon={<Attach />} label={'Action 2'} />
            <Toolbar.Operation icon={<Attach />} label={'Action 3'}>
                <Toolbar.Operation label={'Option 1'} />
                <Toolbar.Operation label={'Option 2'} />
                <Toolbar.Operation label={'Option 3'} />
            </Toolbar.Operation>
            <Toolbar.Operation icon={<Attach />} label={'Action 4'} />
            <Toolbar.Operation icon={<Attach />} label={'Action 5'}>
                <Toolbar.Operation label={'Option 1'} />
                <Toolbar.Operation label={'Option 2'} />
                <Toolbar.Operation label={'Option 3'} />
                <Toolbar.Operation label={'Option 4'} />
            </Toolbar.Operation>
            <Toolbar.Operation visible={false} icon={<Attach />} label={'Action 6'} />
            <Toolbar.Operation icon={<Attach />} label={'Action 7'} />
        </Toolbar>
    );
};
