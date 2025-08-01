import React from 'react';
import { Meta } from '@storybook/react';

import { Contribute as ContributePage } from './Contribute';

export default {
    title: 'Контрибьюторы',
    component: ContributePage,
    tags: ['no-test', '!autodocs'],
} as Meta;

export const Contribute = {
    render: () => <ContributePage />,
};
