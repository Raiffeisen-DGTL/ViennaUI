import React from 'react';
import { Story, Meta } from 'storybook';
import { MailOut, Settings, Lamp, ChartBar1, Chat2, Home, Document } from '@fcc/icons';
import { Sidebar, SidebarProps } from './Sidebar';
import { Alarm } from '../Alarm';
import { Link } from '../Link';
import { Counter } from '../Counter';
import { Tooltip } from '../Tooltip';

export default {
    title: 'Development/Sidebar',
    component: Sidebar,
} as Meta;

export const Overview: Story<SidebarProps> = (args) => {
    return (
        <Sidebar {...args}>
            <Sidebar.Item>Home</Sidebar.Item>
            <Sidebar.Item>Mail</Sidebar.Item>
            <Sidebar.Item>Documents</Sidebar.Item>
        </Sidebar>
    );
};
export const WithIcons: Story<SidebarProps> = (args) => {
    return (
        <Sidebar {...args}>
            <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
            <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
            <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
        </Sidebar>
    );
};
WithIcons.storyName = 'С иконками';
export const WithFooter: Story<SidebarProps> = (args) => {
    return (
        <Sidebar
            footer={
                <React.Fragment>
                    <Sidebar.Item icon={<Chat2 />}>Chat</Sidebar.Item>
                    <Sidebar.Item icon={<Chat2 />}>Help</Sidebar.Item>
                    <Sidebar.Item icon={<Settings />}>Settings</Sidebar.Item>
                </React.Fragment>
            }
            {...args}>
            <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
        </Sidebar>
    );
};
WithFooter.storyName = 'С footer';
export const WithNotification: Story<SidebarProps> = (args) => {
    return (
        <Sidebar {...args}>
            <Sidebar.Item icon={<Home />} notification={<Alarm design='accent' />}>
                Home
            </Sidebar.Item>
            <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
            <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
        </Sidebar>
    );
};
WithNotification.storyName = 'С уведомлением';
export const WithLinks: Story<SidebarProps> = (args) => {
    const [collapsed, collapse] = React.useState(false);
    return (
        <Sidebar
            active='home'
            footer={
                <React.Fragment>
                    <Sidebar.Item icon={<Chat2 />}>Chat</Sidebar.Item>
                    <Sidebar.Item icon={<Chat2 />}>Help</Sidebar.Item>
                    <Sidebar.Item icon={<Settings />}>Settings</Sidebar.Item>
                </React.Fragment>
            }
            collapsed={collapsed}
            onCollapse={() => collapse(!collapsed)}
            {...args}>
            <Link href='#' id='home'>
                <Sidebar.Item notification={<Alarm design='accent' />}>Home</Sidebar.Item>
            </Link>
            <Link href='#'>
                <Sidebar.Item>Mail</Sidebar.Item>
            </Link>
            <Link href='#'>
                <Sidebar.Item>Documents</Sidebar.Item>
            </Link>
        </Sidebar>
    );
};
WithLinks.storyName = 'С ссылками';
export const SubMenu: Story<SidebarProps> = (args) => {
    return (
        <Sidebar active='submenu' {...args}>
            <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
            <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
            <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
            <Sidebar.Submenu id='submenu' title='Submenu' icon={<ChartBar1 />}>
                <Sidebar.Item icon={<Home />} active>
                    Home
                </Sidebar.Item>
                <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
                <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
            </Sidebar.Submenu>
        </Sidebar>
    );
};
SubMenu.storyName = 'Подменю';

export const SubMenuWithDefault: Story<SidebarProps> = (args) => {
    return (
        <Sidebar active='submenu' {...args}>
            <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
            <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
            <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
            <Sidebar.Submenu id='submenu' title='Submenu' icon={<ChartBar1 />} defaultExpanded>
                <Sidebar.Item icon={<Home />} active>
                    Home
                </Sidebar.Item>
                <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
                <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
            </Sidebar.Submenu>
        </Sidebar>
    );
};
SubMenuWithDefault.storyName = 'Подменю с дефолтным значением';

export const Interactive: Story<SidebarProps> = (args) => {
    const [collapsed, collapse] = React.useState(false);
    const [active, setActive] = React.useState(null);
    const [design, setDesign] = React.useState<'light' | 'dark' | undefined>('light');
    const onClick = (e) => setActive(e.currentTarget.id);
    const toggleDesign = () => setDesign(design === 'light' ? 'dark' : 'light');
    return (
        <Sidebar
            footer={
                <React.Fragment>
                    <Sidebar.Item icon={<Lamp />} onClick={toggleDesign}>
                        Design
                    </Sidebar.Item>
                    <Sidebar.Item icon={<Chat2 />}>Chat</Sidebar.Item>
                    <Sidebar.Item icon={<Chat2 />}>Help</Sidebar.Item>
                    <Sidebar.Item icon={<Settings />}>Settings</Sidebar.Item>
                </React.Fragment>
            }
            design={design}
            collapsed={collapsed}
            active={active}
            onCollapse={() => collapse(!collapsed)}
            {...args}>
            <Sidebar.Item id='home' notification={<Alarm design='accent' />} onClick={onClick}>
                Home
            </Sidebar.Item>
            <Sidebar.Item id='MailOut' notification={<Counter design='accent'>2</Counter>} onClick={onClick}>
                Mail
            </Sidebar.Item>
            <Sidebar.Item id='docs' onClick={onClick}>
                <Tooltip content="Element with very long title that doesn't fit" anchor='right' design='dark' truncate>
                    Element with very long title that doesn't fit
                </Tooltip>
            </Sidebar.Item>
            <Sidebar.Item id='analytics' onClick={onClick}>
                Analytics
            </Sidebar.Item>
            <Sidebar.Item id='curr-ex' onClick={onClick}>
                Currency exchange
            </Sidebar.Item>
        </Sidebar>
    );
};

export const Controllable: Story<SidebarProps> = () => {
    const [expanded, toggleExpanded] = React.useState(true);
    const onClick = React.useCallback(() => {
        toggleExpanded((prev) => !prev);
    }, [toggleExpanded]);
    return (
        <Sidebar>
            <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
            <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
            <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
            <Sidebar.Submenu
                title='Submenu'
                icon={<ChartBar1 />}
                expanded={expanded}
                active={expanded}
                onClick={onClick}>
                <Sidebar.Item icon={<Home />}>Home</Sidebar.Item>
                <Sidebar.Item icon={<MailOut />}>Mail</Sidebar.Item>
                <Sidebar.Item icon={<Document />}>Documents</Sidebar.Item>
            </Sidebar.Submenu>
        </Sidebar>
    );
};
Controllable.storyName = 'Controllable';
