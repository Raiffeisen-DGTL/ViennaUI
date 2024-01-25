import React from 'react';
import { Story, Meta } from 'storybook';
import { Tabs, TabProps } from './Tabs';

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
    const handleChange = React.useCallback((e, value) => setState({ value }), [setState]);
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
    const handleChange = React.useCallback((e, value) => setState({ value }), [setState]);

    return (
        <div style={{ height: '150px' }}>
            <Tabs {...args} value={state.value} onChange={handleChange}>
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
    const handleChange = React.useCallback((e, value) => setState(value), [setState]);
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

export const DisableResizing: Story<TabProps> = (args) => {
    const [state, setState] = React.useState({ value: 'Операции' });
    const handleChange = React.useCallback((e, value) => setState({ value }), [setState]);
    return (
        <div style={{ height: '150px' }}>
            <Tabs {...args} design='primary' size='s' value={state.value} resizable={false} onChange={handleChange}>
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
DisableResizing.storyName = 'Отключить подстройку под размер';
DisableResizing.parameters = {
    docs: {
        source: {
            type: 'code',
        },
    },
};
