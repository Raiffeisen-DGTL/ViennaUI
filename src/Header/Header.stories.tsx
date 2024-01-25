import React, { useState } from 'react';
import { Story, Meta } from 'storybook';
import { Header, HeaderProps } from './Header';
import { Button } from '../Button';

export default {
    title: 'Development/Header',
    component: Header,
} as Meta;

export const Overview: Story<HeaderProps> = () => {
    const items = [
        { value: 'score', label: 'Счета' },
        { value: 'operations', label: 'Операции' },
        { value: 'requisites', label: 'Реквизиты' },
    ];
    const [state, setState] = useState({ value: 'score' });
    const handleChange = (e, value) => setState({ value });
    return (
        <Header
            size='m'
            items={
                <Header.Items onChange={handleChange} value={state.value}>
                    {items.map(({ value, label }) => (
                        <Header.Item key={value} value={value} label={label} />
                    ))}
                </Header.Items>
            }
            action={
                <Button size='s' design='accent'>
                    Открыть
                </Button>
            }
        />
    );
};
