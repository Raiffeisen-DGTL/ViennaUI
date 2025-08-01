import React from 'react';
import { Story, Meta } from 'storybook';
import { Steps, StepsProps } from './Steps';

export default {
    title: 'Development/Steps',
    component: Steps,
    args: {
        orientation: 'horizontal',
        size: 'm',
        enableAnimation: false,
        noDivider: false,
    },
    argTypes: {
        enableAnimation: { control: 'boolean' },
        noDivider: { control: 'boolean' },
    },
} as Meta;

export const Overview: Story<StepsProps> = (args) => {
    return (
        <Steps {...args}>
            <Steps.Step header={'Title'} text={'Subtitle'} />
            <Steps.Step header={'Title'} text={'Subtitle'} />
            <Steps.Step header={'Title'} text={'Subtitle'} />
            <Steps.Step status={'error'} header={'Title'} text={'Subtitle'} />
            <Steps.Step status={'waiting'} header={'Title'} text={'Subtitle'} />
            <Steps.Step status={'finished'} header={'Title'} text={'Subtitle'} />
        </Steps>
    );
};
export const LongSubtitle: Story<StepsProps> = (args) => {
    return (
        <Steps {...args}>
            <Steps.Step header={'Title Title Titleeeeee'} text={'Subtitle Subtitle Subtitle Subtitle Subtitle'} />
            <Steps.Step header={'Title'} text={'Subtitle'} />
            <Steps.Step header={'Title'} text={'Subtitle'} />
            <Steps.Step status={'error'} header={'Title'} text={'Subtitle'} />
            <Steps.Step status={'waiting'} header={'Title'} text={'Subtitle'} />
            <Steps.Step status={'finished'} header={'Title'} text={'Subtitle'} />
        </Steps>
    );
};
export const TruncatedHeader: Story<StepsProps> = (args) => {
    return (
        <Steps {...args}>
            <Steps.Step header={'Title'} text={'Subtitle'} />
            <Steps.Step
                truncateHeader
                header={'TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle'}
                text={'Subtitle'}
            />
            <Steps.Step header={'Title'} text={'Subtitle'} />
        </Steps>
    );
};

export const DisableHover: Story<StepsProps> = (args) => {
    return (
        <Steps {...args}>
            <Steps.Step header={'Title'} text={'Active hover'} />
            <Steps.Step header={'Title'} text={'Disable hover'} disabled />
            <Steps.Step status={'error'} header={'Title'} text={'Active hover'} />
            <Steps.Step status={'error'} header={'Title'} text={'Disable hover'} disabled />
            <Steps.Step status={'waiting'} header={'Title'} text={'Active hover'} />
            <Steps.Step status={'waiting'} header={'Title'} text={'Disable hover'} disabled />
            <Steps.Step status={'finished'} header={'Title'} text={'Active hover'} />
            <Steps.Step status={'finished'} header={'Title'} text={'Disable hover'} disabled />
        </Steps>
    );
};

export const WithTooltip: Story<StepsProps> = (args) => {
    return (
        <Steps {...args}>
            <Steps.Step status={'waiting'} header={'Title'} text={'Subtitle'} showTooltip disabled />
            <Steps.Step
                status={'waiting'}
                header={'TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle'}
                text={'Subtitle'}
                showTooltip
                disabled
            />
            <Steps.Step
                status={'waiting'}
                header={'Title'}
                text={'Subtitle'}
                tooltipText='Действие недоступно'
                showTooltip
                disabled
            />
            <Steps.Step status={'waiting'} header={'Title'} text={'Subtitle'} showTooltip disabled />
        </Steps>
    );
};

export const WithOnClick: Story<StepsProps> = (args) => {
    const handleClick = () => {
        console.log('click');
    };
    return (
        <Steps {...args}>
            <Steps.Step header={'Title'} text={'Subtitle'} onClick={handleClick} />
            <Steps.Step header={'Title'} text={'Subtitle'} />
            <Steps.Step header={'Title'} text={'Subtitle'} />
            <Steps.Step status={'error'} header={'Title'} text={'Subtitle'} />
            <Steps.Step status={'waiting'} header={'Title'} text={'Subtitle'} />
            <Steps.Step status={'finished'} header={'Title'} text={'Subtitle'} />
        </Steps>
    );
};

export const WrapSubtitle: Story<StepsProps> = (args) => {
    return (
        <Steps {...args} orientation='vertical'>
            <Steps.Step header='Title' text='Subtitle' />
            <Steps.Step
                status='waiting'
                header='Title'
                text='Subtitleloooongtextloongtextloongtextloongtextloongtextloongtextloongtextloongtextloongtextloongtextloongtextloongtextloongtextloongtextloongtextloongtextloongtextloongtextloo'
            />
        </Steps>
    );
};
