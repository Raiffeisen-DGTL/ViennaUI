import React from 'react';
import { Story, Meta } from 'storybook';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

export default {
    title: 'Development/Breadcrumbs',
    component: Breadcrumbs,
} as Meta;

export const Overview: Story<BreadcrumbsProps> = (args) => {
    return (
        <Breadcrumbs {...args}>
            <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
            <Breadcrumbs.Option altText='Page 2'>Long Name Page 2</Breadcrumbs.Option>
            <Breadcrumbs.Option altText='Page 3'>Long Name Page 3</Breadcrumbs.Option>
        </Breadcrumbs>
    );
};

export const OptionSizes: Story<BreadcrumbsProps> = (args) => {
    return (
        <>
            <Breadcrumbs size='s'>
                <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
                <Breadcrumbs.Option size='m' altText='Page 2'>
                    Long Name Page 2
                </Breadcrumbs.Option>
                <Breadcrumbs.Option size='l' altText='Page 3'>
                    Long Name Page 3
                </Breadcrumbs.Option>
            </Breadcrumbs>
            <Breadcrumbs>
                <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
                <Breadcrumbs.Option size='m' altText='Page 2'>
                    Long Name Page 2
                </Breadcrumbs.Option>
                <Breadcrumbs.Option size='l' altText='Page 3'>
                    Long Name Page 3
                </Breadcrumbs.Option>
            </Breadcrumbs>
            <Breadcrumbs size='l'>
                <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
                <Breadcrumbs.Option size='m' altText='Page 2'>
                    Long Name Page 2
                </Breadcrumbs.Option>
                <Breadcrumbs.Option size='l' altText='Page 3'>
                    Long Name Page 3
                </Breadcrumbs.Option>
            </Breadcrumbs>
        </>
    );
};

export const HomeButtonsAndSizes: Story<BreadcrumbsProps> = (args) => {
    return (
        <>
            <Breadcrumbs size='l' noHomeButton>
                <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
                <Breadcrumbs.Option altText='Page 2'>Long Name Page 2</Breadcrumbs.Option>
                <Breadcrumbs.Option altText='Page 3'>Long Name Page 3</Breadcrumbs.Option>
            </Breadcrumbs>
            <Breadcrumbs size='m'>
                <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
            </Breadcrumbs>
            <Breadcrumbs size='m' noBackButton>
                <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
            </Breadcrumbs>
        </>
    );
};

export const WithHomeButton: Story<BreadcrumbsProps> = (args) => {
    return (
        <Breadcrumbs {...args} noBackButton>
            <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
        </Breadcrumbs>
    );
};

export const CheckTooltip: Story<BreadcrumbsProps> = (args) => {
    return (
        <>
            <Breadcrumbs noHomeButton>
                <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
                <Breadcrumbs.Option altText='Page 2'>Long Name Page 2</Breadcrumbs.Option>
                <Breadcrumbs.Option altText='Page 3'>Long Name Page 3</Breadcrumbs.Option>
            </Breadcrumbs>
            <Breadcrumbs noBackButton>
                <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
                <Breadcrumbs.Option altText='Page 2'>Long Name Page 2</Breadcrumbs.Option>
                <Breadcrumbs.Option altText='Page 3'>Long Name Page 3</Breadcrumbs.Option>
            </Breadcrumbs>
        </>
    );
};
