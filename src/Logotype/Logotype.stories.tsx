import React from 'react';
import { Story, Meta } from 'storybook';
import { Logotype, LogotypeProps } from './Logotype';

export default {
    title: 'Development/Logotype',
    component: Logotype,
} as Meta;

export const Overview: Story<LogotypeProps> = (args) => {
    return (
        <div>
            <Logotype size='xxl' design='dark' collapsed {...args} />
        </div>
    );
};

export const SizesRu: Story<LogotypeProps> = (args) => {
    return (
        <>
            <div style={{ background: 'white' }}>
                <Logotype size='xxl' design='light' type='default' />
                <Logotype size='xl' design='light' type='default' />
                <Logotype size='l' design='light' type='default' />
                <Logotype size='m' design='light' type='default' />
                <Logotype size='s' design='light' type='default' />
                <Logotype size='xs' design='light' type='default' />
            </div>
            <div style={{ background: 'white' }}>
                <Logotype size='xxl' design='monochrome' type='default' />
                <Logotype size='xl' design='monochrome' type='default' />
                <Logotype size='l' design='monochrome' type='default' />
                <Logotype size='m' design='monochrome' type='default' />
                <Logotype size='s' design='monochrome' type='default' />
                <Logotype size='xs' design='monochrome' type='default' />
            </div>
            <div style={{ background: '#2B2D33' }}>
                <Logotype size='xxl' design='dark' type='default' />
                <Logotype size='xl' design='dark' type='default' />
                <Logotype size='l' design='dark' type='default' />
                <Logotype size='m' design='dark' type='default' />
                <Logotype size='s' design='dark' type='default' />
                <Logotype size='xs' design='dark' type='default' />
            </div>
            <div style={{ background: '#2B2D33' }}>
                <Logotype size='xxl' design='monochrome-dark' type='default' />
                <Logotype size='xl' design='monochrome-dark' type='default' />
                <Logotype size='l' design='monochrome-dark' type='default' />
                <Logotype size='m' design='monochrome-dark' type='default' />
                <Logotype size='s' design='monochrome-dark' type='default' />
                <Logotype size='xs' design='monochrome-dark' type='default' />
            </div>

            <div style={{ background: 'white' }}>
                <Logotype size='xxl' design='light' type='one-line' />
                <Logotype size='xl' design='light' type='one-line' />
                <Logotype size='l' design='light' type='one-line' />
                <Logotype size='m' design='light' type='one-line' />
                <Logotype size='s' design='light' type='one-line' />
                <Logotype size='xs' design='light' type='one-line' />
            </div>
            <div style={{ background: 'white' }}>
                <Logotype size='xxl' design='monochrome' type='one-line' />
                <Logotype size='xl' design='monochrome' type='one-line' />
                <Logotype size='l' design='monochrome' type='one-line' />
                <Logotype size='m' design='monochrome' type='one-line' />
                <Logotype size='s' design='monochrome' type='one-line' />
                <Logotype size='xs' design='monochrome' type='one-line' />
            </div>
            <div style={{ background: '#2B2D33' }}>
                <Logotype size='xxl' design='dark' orientation='horizontal' type='one-line' />
                <Logotype size='xl' design='dark' type='one-line' />
                <Logotype size='l' design='dark' type='one-line' />
                <Logotype size='m' design='dark' type='one-line' />
                <Logotype size='s' design='dark' type='one-line' />
                <Logotype size='xs' design='dark' type='one-line' />
            </div>
            <div style={{ background: '#2B2D33' }}>
                <Logotype size='xxl' design='monochrome-dark' type='one-line' />
                <Logotype size='xl' design='monochrome-dark' type='one-line' />
                <Logotype size='l' design='monochrome-dark' type='one-line' />
                <Logotype size='m' design='monochrome-dark' type='one-line' />
                <Logotype size='s' design='monochrome-dark' type='one-line' />
                <Logotype size='xs' design='monochrome-dark' type='one-line' />
            </div>
        </>
    );
};
export const SizesEn: Story<LogotypeProps> = (args) => {
    return (
        <>
            <div style={{ background: 'white' }}>
                <Logotype size='xxl' design='light' type='default' locale='en' />
                <Logotype size='xl' design='light' type='default' locale='en' />
                <Logotype size='l' design='light' type='default' locale='en' />
                <Logotype size='m' design='light' type='default' locale='en' />
                <Logotype size='s' design='light' type='default' locale='en' />
                <Logotype size='xs' design='light' type='default' locale='en' />
            </div>
            <div style={{ background: 'white' }}>
                <Logotype size='xxl' design='monochrome' type='default' locale='en' />
                <Logotype size='xl' design='monochrome' type='default' locale='en' />
                <Logotype size='l' design='monochrome' type='default' locale='en' />
                <Logotype size='m' design='monochrome' type='default' locale='en' />
                <Logotype size='s' design='monochrome' type='default' locale='en' />
                <Logotype size='xs' design='monochrome' type='default' locale='en' />
            </div>
            <div style={{ background: '#2B2D33' }}>
                <Logotype size='xxl' design='dark' type='default' locale='en' />
                <Logotype size='xl' design='dark' type='default' locale='en' />
                <Logotype size='l' design='dark' type='default' locale='en' />
                <Logotype size='m' design='dark' type='default' locale='en' />
                <Logotype size='s' design='dark' type='default' locale='en' />
                <Logotype size='xs' design='dark' type='default' locale='en' />
            </div>
            <div style={{ background: '#2B2D33' }}>
                <Logotype size='xxl' design='monochrome-dark' type='default' locale='en' />
                <Logotype size='xl' design='monochrome-dark' type='default' locale='en' />
                <Logotype size='l' design='monochrome-dark' type='default' locale='en' />
                <Logotype size='m' design='monochrome-dark' type='default' locale='en' />
                <Logotype size='s' design='monochrome-dark' type='default' locale='en' />
                <Logotype size='xs' design='monochrome-dark' type='default' locale='en' />
            </div>

            <div style={{ background: 'white' }}>
                <Logotype size='xxl' design='light' type='one-line' locale='en' />
                <Logotype size='xl' design='light' type='one-line' locale='en' />
                <Logotype size='l' design='light' type='one-line' locale='en' />
                <Logotype size='m' design='light' type='one-line' locale='en' />
                <Logotype size='s' design='light' type='one-line' locale='en' />
                <Logotype size='xs' design='light' type='one-line' locale='en' />
            </div>
            <div style={{ background: 'white' }}>
                <Logotype size='xxl' design='monochrome' type='one-line' locale='en' />
                <Logotype size='xl' design='monochrome' type='one-line' locale='en' />
                <Logotype size='l' design='monochrome' type='one-line' locale='en' />
                <Logotype size='m' design='monochrome' type='one-line' locale='en' />
                <Logotype size='s' design='monochrome' type='one-line' locale='en' />
                <Logotype size='xs' design='monochrome' type='one-line' locale='en' />
            </div>
            <div style={{ background: '#2B2D33' }}>
                <Logotype size='xxl' design='dark' type='one-line' locale='en' />
                <Logotype size='xl' design='dark' type='one-line' locale='en' />
                <Logotype size='l' design='dark' type='one-line' locale='en' />
                <Logotype size='m' design='dark' type='one-line' locale='en' />
                <Logotype size='s' design='dark' type='one-line' locale='en' />
                <Logotype size='xs' design='dark' type='one-line' locale='en' />
            </div>
            <div style={{ background: '#2B2D33' }}>
                <Logotype size='xxl' design='monochrome-dark' type='one-line' locale='en' />
                <Logotype size='xl' design='monochrome-dark' type='one-line' locale='en' />
                <Logotype size='l' design='monochrome-dark' type='one-line' locale='en' />
                <Logotype size='m' design='monochrome-dark' type='one-line' locale='en' />
                <Logotype size='s' design='monochrome-dark' type='one-line' locale='en' />
                <Logotype size='xs' design='monochrome-dark' type='one-line' locale='en' />
            </div>
        </>
    );
};
export const DesignsHorizontal: Story<LogotypeProps> = (args) => {
    return (
        <>
            <div>
                <Logotype size='xl' design='light' />
            </div>
            <div>
                <Logotype size='xl' design='monochrome' />
            </div>
            <div style={{ background: '#2B2D33' }}>
                <div>
                    <Logotype size='xl' design='dark' />
                </div>
                <div>
                    <Logotype size='xl' design='monochrome-dark' />
                </div>
            </div>
        </>
    );
};
export const DesignsVertical: Story<LogotypeProps> = (args) => {
    return (
        <>
            <div>
                <Logotype size='xxl' orientation='vertical' design='light' type='one-line' />
            </div>
            <div>
                <Logotype size='xxl' orientation='vertical' design='monochrome' type='one-line' />
            </div>
            <div style={{ background: '#2B2D33' }}>
                <div>
                    <Logotype size='xxl' orientation='vertical' design='dark' type='one-line' />
                </div>
                <div>
                    <Logotype size='xxl' orientation='vertical' design='monochrome-dark' type='one-line' />
                </div>
            </div>
        </>
    );
};
