import React from 'react';
import { Story, Meta } from 'storybook';
import { Pagination, PaginationProps } from './Pagination';

export default {
    title: 'Development/Pagination',
    component: Pagination,
} as Meta;

export const Overview: Story<PaginationProps> = (args) => {
    return <Pagination pageSize={25} totalItemsCount={500} onChange={() => ''} {...args} />;
};
