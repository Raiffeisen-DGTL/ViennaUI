import React from 'react';
import { Story, Meta } from 'storybook';
import { Search } from './Search';
import { Groups } from '../Groups';
import { TaskDoneIcon as TaskDone, TaskDoneIcon, TheaterOutIcon as TheaterOut, ViolinIcon as Violin } from 'vienna.icons';
import { Spinner } from '../Spinner';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { P } from '@/Typography';

export default {
    title: 'Development/Search',
    component: Search,
    argTypes: {
        design: {
            control: 'select',
        },
        size: {
            control: 'select',
        },
        allowClear: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        value: {
            control: false,
        },
    },
} as Meta;

export const Overview: Story = () => {
    const [state, setValue] = React.useState<any>({ value: '', suggests: [] });
    const handleSelect = ({ value }) => setValue({ ...state, value });
    const handleChange = ({ value }) => {
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
        const regexp = new RegExp(`^${escape(value.toUpperCase())}`);
        const temp = (value && mock.filter((m) => regexp.test(escape(m.toUpperCase())))) || [];
        setValue({ value, suggests: temp });
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
    const handleChange = React.useCallback(({ value }) => {
        const mock = [
            'Райффайзен банк',
            'Райффайзен IT',
            'Иванов Иван Иванович',
            'Иванов Иван Петрович',
            'Ивановская область',
            'Рамблер',
        ];
        const regexp = new RegExp(`^${value.toUpperCase()}`);
        const temp = (value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
        setSuggests(temp);
        setValue(value);
    }, []);
    const handleSelect = React.useCallback(({ value }) => {
        setValue(value);
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
    const handleChange = React.useCallback(({ value }) => {
        const mock = [
            'Райффайзен банк',
            'Райффайзен IT',
            'Иванов Иван Иванович',
            'Иванов Иван Петрович',
            'Ивановская область',
            'Рамблер',
        ];
        const regexp = new RegExp(`^${value.toUpperCase()}`);
        const temp = (value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
        setSuggests(temp);
        setValue(value);
    }, []);
    const handleSelect = React.useCallback(({ value }) => {
        setValue(value);
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
    const handleChange = React.useCallback(({ value }) => {
        const mock = [
            'Райффайзен банк',
            'Райффайзен IT',
            'Иванов Иван Иванович',
            'Иванов Иван Петрович',
            'Ивановская область',
            'Рамблер',
        ];
        const regexp = new RegExp(`^${value.toUpperCase()}`);
        const temp = (value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
        setSuggests(temp);
        setValue(value);
    }, []);
    const handleSelect = React.useCallback(({ value }) => {
        setValue(value);
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

export const InnerSearch: Story = () => {
    const [state, setValue] = React.useState<{ value: string; suggests: string[] }>({
        value: '',
        suggests: [
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
        ],
    });
    const handleSelect = ({ value }) => setValue({ ...state, value });
    const handleChange = ({ value }) => setValue((prev) => ({ ...prev, value }));

    return (
        <Groups design='vertical'>
            <Search
                suggests={state.suggests}
                value={state.value}
                enableInnerSearch
                fixed
                placeholder='Начните ввод'
                onChange={handleChange}
                onSelect={handleSelect}
            />
        </Groups>
    );
};

export const withClearIcon: Story = () => {
    const [value, setValue] = React.useState('');
    const [suggests, setSuggests] = React.useState();
    const handleChange = React.useCallback(({ value }) => {
        const mock = [
            'Райффайзен банк',
            'Райффайзен IT',
            'Иванов Иван Иванович',
            'Иванов Иван Петрович',
            'Ивановская область',
            'Рамблер',
        ];
        const regexp = new RegExp(`^${value.toUpperCase()}`);
        const temp = (value && mock.filter((m) => regexp.test(m.toUpperCase()))) || [];
        setSuggests(temp);
        setValue(value);
    }, []);
    const handleSelect = React.useCallback(({ value }) => {
        setValue(value);
    }, []);
    return (
        <Groups design='vertical'>
            <Search
                suggests={suggests}
                value={value}
                placeholder={'Начните ввод'}
                allowClear
                onChange={handleChange}
                onSelect={handleSelect}
            />
            <Button onClick={() => setValue('')}>Сlear</Button>
        </Groups>
    );
};

withClearIcon.args = {
    allowClear: true,
};

export const AlignSuggests: Story = () => {
    const [state, setValue] = React.useState<any>({ value: '', suggests: [] });
    const handleSelect = ({ value }) => setValue({ ...state, value });
    const handleChange = ({ value }) => {
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
        const regexp = new RegExp(`^${escape(value.toUpperCase())}`);
        const temp = (value && mock.filter((m) => regexp.test(escape(m.toUpperCase())))) || [];
        setValue({ value, suggests: temp });
    };

    return (
        <Search
            autoFocus
            showInlineSuggest={false}
            fitOptions={false}
            value={state.value}
            placeholder='Поиск'
            onChange={handleChange}
            onSelect={handleSelect}
            suggests={state.suggests}
            align={'end'}>
            {({ suggest }) => (
                <Flex data-cy='option' gap='s2'>
                    {suggest}
                </Flex>
            )}
        </Search>
    );
};

export const ViewOnly: Story = () => {
    return (
        <Groups design='vertical'>
            <Search viewOnly suggests={[]} value={'Какой-то текст'} fixed placeholder='Начните ввод' />
        </Groups>
    );
};
export const WithHintsAndInitialSuggest: Story = () => {
    const [value, setValue] = React.useState();
    const [suggests, setSuggests] = React.useState([
        {
            family: 'Иванов',
            name: 'Иван',
            middle: 'Иванович',
            city: 'Омск',
            occupation: 'программист',
        },
        {
            family: 'Иванов',
            name: 'Иван',
            middle: 'Петрович',
            city: 'Москва',
            occupation: 'программист',
        },
        {
            family: 'Иванов',
            name: 'Константин',
            middle: 'Петрович',
            city: 'Нью-Йорк',
            occupation: 'аналитик',
        },
        {
            family: 'Иванов',
            name: 'Константин',
            middle: 'Петрович',
            city: 'Нью-Йорк',
            occupation: 'менеджер',
        },
    ]);
    const valueToString = React.useCallback((val) => {
        if (val) {
            if (typeof val === 'string') {
                return val;
            }
            return `${val.family} ${val.name} ${val.middle}`;
        }
        return '';
    }, []);
    const handleChange = React.useCallback((data) => {
        const mock = [
            {
                family: 'Иванов',
                name: 'Иван',
                middle: 'Иванович',
                city: 'Омск',
                occupation: 'программист',
            },
            {
                family: 'Иванов',
                name: 'Иван',
                middle: 'Петрович',
                city: 'Москва',
                occupation: 'программист',
            },
            {
                family: 'Иванов',
                name: 'Константин',
                middle: 'Петрович',
                city: 'Нью-Йорк',
                occupation: 'аналитик',
            },
            {
                family: 'Иванов',
                name: 'Константин',
                middle: 'Петрович',
                city: 'Нью-Йорк',
                occupation: 'менеджер',
            },
        ];
        const regexp = new RegExp(`^${escape(data.value.toUpperCase())}`);
        const temp = (data.value && mock.filter((m) => regexp.test(escape(valueToString(m).toUpperCase())))) || [];
        setSuggests(temp);
        setValue(data.value);
    }, []);
    const handleSelect = React.useCallback((data) => {
        setValue(data.value);
    }, []);
    return (
        <Groups design='vertical'>
            <Search
                prefix={<TaskDoneIcon />}
                postfix={<Spinner />}
                showInlineSuggest={false}
                suggests={suggests}
                value={value}
                placeholder={'Начните ввод'}
                valueToString={valueToString}
                onChange={handleChange}
                onSelect={handleSelect}>
                {(data) => (
                    <Flex direction='column'>
                        <P>{`${data.suggest['family']} ${data.suggest['name']} ${data.suggest['middle']}`}</P>
                        <P color='seattle100'>Город: {data.suggest['city']}</P>
                        <P color='seattle100'>Профессия: {data.suggest['occupation']}</P>
                    </Flex>
                )}
            </Search>
        </Groups>
    );
};

export const WithCloseOnOutsideClick: Story = () => {
    const [state, setValue] = React.useState<{ value: string; suggests: string[] }>({
        value: '',
        suggests: [
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
        ],
    });
    const handleSelect = ({ value }) => setValue((prev) => ({ ...prev, value }));
    const handleChange = ({ value }) => setValue((prev) => ({ ...prev, value }));

    return (
        <Groups design='vertical'>
            <Search
                suggests={state.suggests}
                value={state.value}
                closeAfterSelection={false}
                placeholder='Начните ввод'
                onChange={handleChange}
                onSelect={handleSelect}
            />
        </Groups>
    );
};

export const WithMaskProp: Story = () => {
    const [state, setValue] = React.useState<{ value: string; suggests: string[] }>({
        value: '',
        suggests: [
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
        ],
    });
    const handleSelect = ({ value }) => setValue((prev) => ({ ...prev, value }));
    const handleChange = ({ value }) => setValue((prev) => ({ ...prev, value }));

    return (
        <Groups design='vertical'>
            <Search
                suggests={state.suggests}
                value={state.value}
                closeAfterSelection={false}
                placeholder='Начните ввод'
                onChange={handleChange}
                onSelect={handleSelect}
                mask={Number}
            />
        </Groups>
    );
};

export const WithMaskOptionsProp: Story = () => {
    const [state, setValue] = React.useState<{ value: string; suggests: string[] }>({
        value: '',
        suggests: [
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
        ],
    });
    const handleSelect = ({ value }) => setValue((prev) => ({ ...prev, value }));
    const handleChange = ({ value }) => setValue((prev) => ({ ...prev, value }));

    return (
        <Groups design='vertical'>
            <Search
                suggests={state.suggests}
                value={state.value}
                closeAfterSelection={false}
                placeholder='Начните ввод'
                onChange={handleChange}
                onSelect={handleSelect}
                maskOptions={{ mask: Number }}
            />
        </Groups>
    );
};
