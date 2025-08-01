import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { ThemeProvider } from 'vienna.ui-primitives';
import { Button } from '../Button';
import { Groups } from '../Groups';
import { ScopedStory } from '../Utils';
import ResultDocs from './Result.mdx';
import { Result } from './Result';

type Story = StoryObj<typeof Result> & ScopedStory;

const defaultScope = {
    Result,
    Groups,
    Button,
};

export default {
    title: 'Компоненты/Result',
    component: Result,
    argTypes: {
        errorText: {
            control: 'text',
        },
        title: {
            control: 'text',
            table: {
                disable: true, // Скрываем заголовок из вкладки свойств
            },
        },
        description: {
            control: 'text',
        },
        imageSrc: {
            control: 'file',
        },
        actions: {
            control: false, // Управление кнопками через код
        },
    },
    parameters: {
        docs: {
            page: ResultDocs,
            controls: { include: ['errorText', 'title', 'description', 'imageSrc', 'actions'] },
        },
    },
} as Meta;

export const Overview: Story = {
    render: () => (
        <Result
            imageSrc='https://cdn-rf.raiffeisen.ru/ds/img/result/error_500.png'
            actions={[
                <Button key='1' design='accent' size='xl'>
                    Сменить компанию
                </Button>,
                <Button key='2' design='ghost' size='xl'>
                    Оставить заявку
                </Button>,
            ]}
            title='У компании не подключено торговое финансирование'
        />
    ),
};
Overview.scope = defaultScope;

export const WithTheme: Story = {
    tags: ['hidden'],
    render: () => {
        const theme = {
            result: {},
        };

        return (
            <ThemeProvider theme={theme}>
                <Result
                    imageSrc='https://cdn-rf.raiffeisen.ru/ds/img/result/error_500.png'
                    actions={[
                        <Button key='1' design='accent' size='xl'>
                            Первая кнопка
                        </Button>,
                        <Button key='2' design='ghost' size='xl'>
                            Вторая кнопка
                        </Button>,
                        <Button key='3' design='ghost' size='xl'>
                            Третья кнопка
                        </Button>,
                    ]}
                    errorText='Код ошибки'
                    title='Заголовок в две строки максимум, иначе вы нарушаете правила'
                    description='Подзаголовок максимум в три строки, подзаголовок максимум в три строки, подзаголовок максимум в три строки, подзаголовок максимум в три строки'
                />
            </ThemeProvider>
        );
    },
};
WithTheme.scope = { ...defaultScope, ThemeProvider };

export const Main: Story = {
    render: () => (
        <Groups>
            <Result
                imageSrc='https://cdn-rf.raiffeisen.ru/ds/img/result/error_500.png'
                actions={[
                    <Button key='1' design='accent' size='xl'>
                        Первая кнопка
                    </Button>,
                    <Button key='2' design='ghost' size='xl'>
                        Вторая кнопка
                    </Button>,
                ]}
                errorText='Код ошибки'
                title='Заголовок в две строки максимум, иначе вы нарушаете правила'
                description='Подзаголовок максимум в три строки, подзаголовок максимум в три строки, подзаголовок максимум в три строки, подзаголовок максимум в три строки'
            />
            <Result
                imageSrc='https://cdn-rf.raiffeisen.ru/ds/img/result/error_404.png'
                actions={[
                    <Button key='1' design='accent' size='xl'>
                        Вернуться назад
                    </Button>,
                    <Button key='2' design='ghost' size='xl'>
                        На главную
                    </Button>,
                ]}
                errorText='Ошибка 404'
                title='Страницы по этой ссылке нет'
                description='Возможно, ее не существует или в адресе есть ошибка'
            />
            <Result
                imageSrc='https://cdn-rf.raiffeisen.ru/ds/img/result/error_500.png'
                actions={[
                    <Button key='1' design='accent' size='xl'>
                        Сменить компанию
                    </Button>,
                    <Button key='2' design='ghost' size='xl'>
                        Оставить заявку
                    </Button>,
                ]}
                title='У компании не подключено торговое финансирование'
            />
        </Groups>
    ),
};
Main.scope = defaultScope;

export const Error500: Story = {
    render: () => (
        <Result
            imageSrc='https://cdn-rf.raiffeisen.ru/ds/img/result/error_500.png'
            actions={[
                <Button key='1' design='accent' size='xl'>
                    Первая кнопка
                </Button>,
                <Button key='2' design='ghost' size='xl'>
                    Вторая кнопка
                </Button>,
                <Button key='3' design='ghost' size='xl'>
                    Третья кнопка
                </Button>,
            ]}
            errorText='Код ошибки'
            title='Заголовок в две строки максимум, иначе вы нарушаете правила'
            description='Подзаголовок максимум в три строки, подзаголовок максимум в три строки, подзаголовок максимум в три строки, подзаголовок максимум в три строки'
        />
    ),
};
Error500.scope = defaultScope;

export const Error404: Story = {
    render: () => (
        <Result
            imageSrc='https://cdn-rf.raiffeisen.ru/ds/img/result/error_404.png'
            actions={[
                <Button key='1' design='accent' size='xl'>
                    Вернуться назад
                </Button>,
                <Button key='2' design='ghost' size='xl'>
                    На главную
                </Button>,
            ]}
            errorText='Ошибка 404'
            title='Страницы по этой ссылке нет'
            description='Возможно, ее не существует или в адресе есть ошибка'
        />
    ),
};
Error404.scope = defaultScope;
