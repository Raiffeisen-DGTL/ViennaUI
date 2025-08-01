import React from 'react';
import { Story, Meta } from 'storybook';
import { Tabs, TabProps } from './Tabs';
import { Link } from '@/Link';

export default {
    title: 'Development/Tabs',
    component: Tabs,
    argTypes: {
        value: {
            control: false,
        },
    },
} as Meta;

export const Overview: Story<TabProps> = (args) => {
    const [state, setState] = React.useState({ value: 'Операции' });
    const handleChange = React.useCallback(({ value }) => setState({ value }), [setState]);
    return (
        <Tabs {...args} value={state.value} onChange={handleChange}>
            <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
            <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
            <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
            <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
            <Tabs.Tab value='Аресты' disabled>
                Аресты
            </Tabs.Tab>
        </Tabs>
    );
};

export const StretchInHeight: Story<TabProps> = (args) => {
    const [state, setState] = React.useState({ value: 'Операции' });
    const handleChange = React.useCallback(({ value }) => setState({ value }), [setState]);

    return (
        <div style={{ height: '150px' }}>
            <Tabs {...args} value={state.value} onChange={handleChange} alignMiddle>
                <Tabs.Tab value='Счета'>Счета</Tabs.Tab>
                <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
                <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
                <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
                <Tabs.Tab value='Аресты' disabled>
                    Аресты
                </Tabs.Tab>
            </Tabs>
        </div>
    );
};
StretchInHeight.storyName = 'Растяжение по высоте';
StretchInHeight.parameters = {
    docs: {
        source: {
            type: 'code',
        },
    },
};

export const Uncontrolled: Story<TabProps> = (args) => {
    return (
        <Tabs {...args}>
            <Tabs.Tab active value='Счета'>
                Счета
            </Tabs.Tab>
            <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
            <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
            <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
            <Tabs.Tab value='Аресты' disabled>
                Аресты
            </Tabs.Tab>
        </Tabs>
    );
};
Uncontrolled.parameters = {
    docs: {
        source: {
            type: 'code',
        },
    },
};

export const ObjectValue: Story<TabProps> = (args) => {
    const [state, setState] = React.useState({ url: '/operations' });
    const handleChange = React.useCallback(({ value }) => setState(value), [setState]);
    const comparator = React.useCallback((value, tabValue) => value.url === tabValue.url, []);
    return (
        <Tabs {...args} value={state} comparator={comparator} onChange={handleChange}>
            <Tabs.Tab value={{ url: 'asdasd' }}>Счета</Tabs.Tab>
            <Tabs.Tab value={{ url: '/operations' }}>Операции</Tabs.Tab>
            <Tabs.Tab value={{ url: '/requisites' }}>Реквизиты</Tabs.Tab>
            <Tabs.Tab value={{ url: '/overdraft' }}>Овердрафт</Tabs.Tab>
        </Tabs>
    );
};
ObjectValue.storyName = 'Value как объект';
ObjectValue.parameters = {
    docs: {
        source: {
            type: 'code',
        },
    },
};

export const TabsMore: Story<TabProps> = (args) => {
    const [state, setState] = React.useState({ value: 'Item 1' });
    const handleChange = React.useCallback(({ value }) => setState({ value }), [setState]);
    const comparator = React.useCallback((value, tabValue) => value === tabValue, []);
    return (
        <Tabs {...args} value={state.value} comparator={comparator} onChange={handleChange} resizable>
            <Tabs.Tab value='Item 1'>Item 1</Tabs.Tab>
            <Tabs.Tab value='Item 2'>Item 2</Tabs.Tab>
            <Tabs.Tab value='Item 3'>Item 3</Tabs.Tab>
            <Tabs.Tab value='Item 4'>Item 4</Tabs.Tab>
            <Tabs.Tab value='Item 5'>Item 5</Tabs.Tab>
            <Tabs.Tab value='Item 6'>Item 6</Tabs.Tab>
            <Tabs.Tab value='Item 7'>Item 7</Tabs.Tab>
            <Tabs.Tab value='Item 8'>Item 8</Tabs.Tab>
            <Tabs.Tab value='Item 9'>Item 9</Tabs.Tab>
            <Tabs.Tab value='Item 10'>Item 10</Tabs.Tab>
            <Tabs.Tab value='Item 11'>Item 11</Tabs.Tab>
            <Tabs.Tab value='Item 12'>Item 12</Tabs.Tab>
            <Tabs.Tab value='Item 13'>Item 13</Tabs.Tab>
            <Tabs.Tab value='Item 14'>Item 14</Tabs.Tab>
            <Tabs.Tab value='Item 15'>Item 15</Tabs.Tab>
            <Tabs.Tab value='Item 16'>Item 16</Tabs.Tab>
            <Tabs.Tab value='Item 17'>Item 17</Tabs.Tab>
            <Tabs.Tab value='Item 18'>Item 18</Tabs.Tab>
            <Tabs.Tab value='Item 19'>Item 19</Tabs.Tab>
            <Tabs.Tab value='Item 20'>Item 20</Tabs.Tab>
        </Tabs>
    );
};

export const TabAsLink: Story<TabProps> = (args) => {
    const [state, setState] = React.useState({ value: 'Счета' });
    const handleChange = React.useCallback(
        ({ value }) => {
            console.log('onchange!');
            setState({ value });
        },
        [setState]
    );
    return (
        <Tabs {...args} value={state.value} onChange={handleChange}>
            <Tabs.Tab as={Link} to='/users?filter=active' value='Счета'>
                Счета
            </Tabs.Tab>
            <Tabs.Tab value='Операции'>Операции</Tabs.Tab>
            <Tabs.Tab value='Реквизиты'>Реквизиты</Tabs.Tab>
            <Tabs.Tab value='Овердрафт'>Овердрафт</Tabs.Tab>
            <Tabs.Tab value='Аресты' disabled>
                Аресты
            </Tabs.Tab>
        </Tabs>
    );
};
