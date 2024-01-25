import React from 'react';
import { Story, Meta } from 'storybook';
import { ManPerson } from 'vienna.icons';
import { Accordion, AccordionProps } from './Accordion';
import { Button } from '../Button';
import { RoundIcon } from '../RoundIcon';

export default {
    title: 'Development/Accordion',
    component: Accordion,
} as Meta;

export const Overview: Story<AccordionProps> = (args) => {
    return (
        <Accordion {...args}>
            <Accordion.Item iconSize={'l'} header={'the header'}>
                lalala
            </Accordion.Item>
            <Accordion.Item header={'the header'}>lalala</Accordion.Item>
            <Accordion.Item header={'the header'}>lalala</Accordion.Item>
        </Accordion>
    );
};

export const WithHeader: Story<AccordionProps> = (args) => {
    return (
        <Accordion {...args}>
            <Accordion.Item
                header={
                    <>
                        <RoundIcon size={'s'}>
                            {' '}
                            <ManPerson />
                        </RoundIcon>
                        the header
                    </>
                }>
                lalala
            </Accordion.Item>
        </Accordion>
    );
};

WithHeader.storyName = 'Любой объект в заголовке';

export const WithContent: Story<AccordionProps> = (args) => {
    return (
        <Accordion {...args}>
            <Accordion.Item
                header={
                    'lalalallalallalalallalallalalallalallalalallalallalalallalallalalallalallalalallalallalalalallalallalalallalallalalallalallalallalal'
                }>
                <RoundIcon size={'s'}>
                    {' '}
                    <ManPerson />
                </RoundIcon>
                the title
                <Button>Click</Button>
            </Accordion.Item>
        </Accordion>
    );
};
WithContent.storyName = 'Любой объект в контенте ';

export const WithHeaderAndContent: Story<AccordionProps> = (args) => {
    return (
        <Accordion {...args}>
            <Accordion.Item header={'lalalallalal'}>
                <RoundIcon size={'s'}>
                    {' '}
                    <ManPerson />
                </RoundIcon>
                the title
                <Button>Click</Button>
            </Accordion.Item>
        </Accordion>
    );
};
WithHeaderAndContent.storyName = 'Любые объекты в заголовке и контенте';

export const PlaywrightTest: Story<AccordionProps> = (args) => {
    return (
        <React.StrictMode>
            <Accordion {...args}>
                <Accordion.Item initiallyOpen iconSize={'l'} header={'the header'}>
                    lalala
                </Accordion.Item>
                <Accordion.Item header={'the header'}>lalala</Accordion.Item>
                <Accordion.Item header={'the header'}>lalala</Accordion.Item>
            </Accordion>
        </React.StrictMode>
    );
};

// It needs for React.StrictMode.
PlaywrightTest.parameters = {
    docs: {
        source: {
            code: 'Disabled for this story, see https://github.com/storybookjs/storybook/issues/11554',
        },
    },
};

PlaywrightTest.storyName = 'Для тестирования';
