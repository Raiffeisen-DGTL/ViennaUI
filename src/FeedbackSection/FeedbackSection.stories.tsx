import React from 'react';
import { Story, Meta } from 'storybook';
import { FeedbackSection, FeedbackSectionProps } from './FeedbackSection';

export default {
    title: 'Development/FeedbackSection',
    component: FeedbackSection,
} as Meta;

export const Overview: Story<FeedbackSectionProps> = (args) => {
    const submitHandler: FeedbackSectionProps['onSubmit'] = async (data, res, rej) => {
        await new Promise((a) => {
            setTimeout(() => {
                a('');
            }, 2000);
        });
        res('');
    }

    return (
        <FeedbackSection onSubmit={submitHandler}/>
    );
};
