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
    };

    return <FeedbackSection onSubmit={submitHandler} />;
};

export const WithProps: Story<FeedbackSectionProps> = (args) => {
    const submitHandler: FeedbackSectionProps['onSubmit'] = async (data, res, rej) => {
        await new Promise((a) => {
            setTimeout(() => {
                a('');
            }, 2000);
        });
        res('');
    };

    return (
        <FeedbackSection
            textAreaProps={{ maxRows: 2, maxCounter: 30, showCounter: true, invalid: true, placeholder: 'hehe' }}
            onNoClick={() => {
                console.log('no clicked');
            }}
            onYesClick={() => {
                console.log('yes clicked');
            }}
            onSubmit={submitHandler}
        />
    );
};
