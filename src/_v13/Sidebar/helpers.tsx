/* eslint-disable no-console */
import React from 'react';
import { MailOutIcon, SettingsIcon, ChartBar1Icon, Chat2Icon, HomeIcon, DocumentIcon, CompanyIcon } from 'vienna.icons';
import { Alarm, Counter, Badge, Tooltip } from '@/atlant';
import { SidebarItem } from './types';
import styled from 'styled-components';

type Item = SidebarItem<string, number>;

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 48px;
`;

const fullItems: Item[] = [
    { id: '0', prefix: <HomeIcon />, title: 'Выписки', onClick: () => console.log('click'), href: '#' },
    {
        id: '1',
        prefix: <Chat2Icon />,
        title: 'Справки',
        postfix: <Counter design='accent'>1</Counter>,
        onClick: (e) => console.log('click', e),
        href: '#',
    },
    { id: '2', prefix: <ChartBar1Icon />, title: 'Контрагенты', onClick: () => console.log('click'), href: '#' },
    {
        id: '3',
        prefix: <MailOutIcon />,
        title: 'Письма',
        onClick: () => console.log('click'),
        href: '#',
        target: '_blank',
    },
    { id: '4', prefix: <DocumentIcon />, title: 'Документы в работе', href: '#' },
    {
        id: '5',
        title: 'Аресты и инкассо',
        postfix: (
            <Badge size='s' color='oslo100'>
                Новое
            </Badge>
        ),
        onClick: () => console.log('click'),
        render: ({ children }) => (
            <Tooltip content="Element with very long title that doesn't fit" anchor='right' design='dark'>
                {children}
            </Tooltip>
        ),
        disabled: true,
    },
    {
        id: '6',
        truncate: false,
        title: 'Рублевые платежи',
        onClick: () => console.log('click'),
        prefix: <Chat2Icon />,
        defaultCollapsed: false,
        sub: [
            { id: 0, title: 'Рублевые платежи', prefix: <CompanyIcon /> },
            { id: 1, title: 'Регулярные платежи' },
        ],
        postfix: (
            <Badge size='s' color='oslo100'>
                Новое
            </Badge>
        ),
        onCollapse: (v) => console.log(v),
    },
    { id: '7', title: 'Корпоративные карты для всех-всех-всех', truncate: false },
    { id: '8', title: 'Брокерский счет' },
    { id: '9', title: 'Валютные платежи' },
    { id: '10', title: 'Валютный контроль' },
    { id: '11', title: 'Сервисы' },
    { id: '12', title: 'Гарантии и аккредитивы' },
    { id: '13', title: 'Бухгалтерия и ЕНС' },
    { id: '14', title: 'Зарплатный проект' },
    { id: '15', title: 'Кредит для бизнеса', postfix: <Alarm design='accent' />, sub: [{ id: 0, title: 'Кредит' }] },
    {
        id: '16',
        title: 'Длинное название в несколько строк Длинное',
        truncate: false,
        postfix: <Alarm design='accent' />,
        sub: [{ id: 0, title: 'Кредит', disabled: true }],
    },
];

export const footerItems = [
    {
        id: 1,
        title: 'Мои компании',
        onClick: () => console.log('footerClick'),
        icon: <CompanyIcon />,
    },
    {
        id: 2,
        title: 'Настройки',
        icon: <SettingsIcon />,
        postfix: <Alarm design='accent' />,
    },
];

const DEFAULT_ITEM_KEYS: (keyof Item)[] = ['id', 'title'];

function getSidebarItems({ length = 5, include }: { length?: number; include?: (keyof Item)[] } | undefined = {}) {
    const keys: (keyof Item)[] = [...DEFAULT_ITEM_KEYS, ...(include ?? [])];

    return fullItems
        .slice(0, length)
        .map((item) => keys.reduce<Item>((acc, curr) => ({ ...acc, [curr]: item[curr] }), {} as Item));
}

export const mockItems = {
    basic: getSidebarItems(),
    withIcons: getSidebarItems({ include: ['prefix'] }),
    withLinks: getSidebarItems({ include: ['prefix', 'href'] }),
    submenu: getSidebarItems({ length: 7, include: ['prefix', 'sub', 'defaultCollapsed'] }),
    submenuCollapse: getSidebarItems({ length: 7, include: ['prefix', 'sub', 'defaultCollapsed'] }),
    interactive: getSidebarItems({ length: 7, include: ['prefix', 'truncate', 'sub', 'postfix'] }),
    dnd: getSidebarItems({
        length: 17,
        include: ['sub', 'truncate', 'href', 'target', 'prefix', 'postfix', 'onCollapse', 'render', 'disabled'],
    }),
};
