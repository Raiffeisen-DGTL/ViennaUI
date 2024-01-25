import React from 'react';
import { Story, Meta } from 'storybook';
import { Search } from './Search';
import { Groups } from '../Groups';
import { TaskDone, TheaterOut, Violin } from '@fcc/icons';
import { Spinner } from '../Spinner';

export default {
    title: 'Development/Search',
    component: Search,
    argTypes: {
        value: {
            control: false,
        },
    },
} as Meta;

export const Overview: Story = () => {
    const [state, setValue] = React.useState<any>({ value: '', suggests: [] });
    const handleSelect = (e, data) => setValue({ ...state, value: data.value });
    const handleChange = (e, data) => {
        const mock = [
            'Райффайзен банк 1',
            'Райффайзен банк 2',
            'Райффайзен банк 3',
            'Райффайзен банк 4',
            'Райффайзен банк 5',
            'Райффайзен банк 6',
            'Райффайзен банк 7',
            'Райффайзен банк 8',
            'Райффайзен банк 9',
            'Райффайзен банк 10',
            'Райффайзен банк 11',
            'Райффайзен банк 12',
            'Райффайзен банк 13',
            'Райффайзен банк 14',
            'Райффайзен банк 15',
            'Райффайзен банк 16',
            'Райффайзен банк 17',
            'Райффайзен банк 18',
        ];
        const regexp = new RegExp(`^${escape(data.value.toUpperCase())}`);
        const temp = (data.value && mock.filter((m) => regexp.test(escape(m.toUpperCase())))) || [];
        setValue({ value: data.value, suggests: temp });
    };
    return (
        <Groups design='vertical'>
            <Search
                suggests={state.suggests}
                value={state.value}
                fixed
                placeholder='Начните ввод'
                onChange={handleChange}
                onSelect={handleSelect}
            />
        </Groups>
    );
};

export const PrefixIcon: Story = () => {
    const [value, setValue] = React.useState();
    const [suggests, setSuggests] = React.useState();
    const handleChange = React.useCallback((e, data) => {
        const mock = [
            'Райффайзен банк',
            'Райффайзен IT',
            'Иванов Иван Иванович',
            'Иванов Иван Петрович',
            'Ивановская область',
            'Рамблер',
        ];
        const regexp = new RegExp(`^${data.value.toUpperCase()}`);
        const temp = (data.value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
        setSuggests(temp);
        setValue(data.value);
    }, []);
    const handleSelect = React.useCallback((e, data) => {
        setValue(data.value);
    }, []);
    return (
        <Groups design='vertical'>
            <Search
                prefix={<Violin />}
                suggests={suggests}
                value={value}
                placeholder={'Начните ввод'}
                onChange={handleChange}
                onSelect={handleSelect}
            />
        </Groups>
    );
};
export const PostfixIcon: Story = () => {
    const [value, setValue] = React.useState();
    const [suggests, setSuggests] = React.useState();
    const handleChange = React.useCallback((e, data) => {
        const mock = [
            'Райффайзен банк',
            'Райффайзен IT',
            'Иванов Иван Иванович',
            'Иванов Иван Петрович',
            'Ивановская область',
            'Рамблер',
        ];
        const regexp = new RegExp(`^${data.value.toUpperCase()}`);
        const temp = (data.value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
        setSuggests(temp);
        setValue(data.value);
    }, []);
    const handleSelect = React.useCallback((e, data) => {
        setValue(data.value);
    }, []);
    return (
        <Groups design='vertical'>
            <Search
                postfix={<TheaterOut />}
                suggests={suggests}
                value={value}
                placeholder={'Начните ввод'}
                onChange={handleChange}
                onSelect={handleSelect}
            />
        </Groups>
    );
};

export const AllIcons: Story = () => {
    const [value, setValue] = React.useState();
    const [suggests, setSuggests] = React.useState();
    const handleChange = React.useCallback((e, data) => {
        const mock = [
            'Райффайзен банк',
            'Райффайзен IT',
            'Иванов Иван Иванович',
            'Иванов Иван Петрович',
            'Ивановская область',
            'Рамблер',
        ];
        const regexp = new RegExp(`^${data.value.toUpperCase()}`);
        const temp = (data.value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
        setSuggests(temp);
        setValue(data.value);
    }, []);
    const handleSelect = React.useCallback((e, data) => {
        setValue(data.value);
    }, []);
    return (
        <Groups design='vertical'>
            <Search
                prefix={<TaskDone />}
                postfix={<Spinner />}
                suggests={suggests}
                value={value}
                placeholder={'Начните ввод'}
                onChange={handleChange}
                onSelect={handleSelect}
            />
        </Groups>
    );
};
