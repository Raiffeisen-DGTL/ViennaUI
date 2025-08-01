import React, { useRef, useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Cross16Icon, MoonIcon } from 'vienna.icons';

import { Sidebar } from './Sidebar';
import { footerItems, mockItems, SidebarWrapper } from './helpers';
import { Button } from '@/Button';
import { Radio } from '@/Radio';
import { useDeferredLoading } from '@/Utils';
import { SidebarDesign } from './types';

type Story = StoryObj<typeof Sidebar<string, number>>;

export default {
    title: 'Development/v13/Sidebar',
    component: Sidebar,
    parameters: { docs: { source: { type: 'code' } } },
} as Meta;

export const Overview: Story = {
    render: (args) => (
        <SidebarWrapper>
            <Sidebar {...args} items={mockItems.basic} />
            <Sidebar {...args} collapsed items={mockItems.basic} />
        </SidebarWrapper>
    ),
};

export const WithIcons: Story = {
    render: (args) => (
        <SidebarWrapper>
            <Sidebar {...args} items={mockItems.withIcons} />
            <Sidebar {...args} collapsed items={mockItems.withIcons} />
        </SidebarWrapper>
    ),
};
WithIcons.storyName = 'С иконками';

export const WithFooter: Story = {
    render: (args) => (
        <SidebarWrapper>
            <Sidebar {...args} items={mockItems.basic} footerItems={footerItems} />
            <Sidebar {...args} collapsed items={mockItems.basic} footerItems={footerItems} />
        </SidebarWrapper>
    ),
};
WithFooter.storyName = 'С footer';

export const WithLinks: Story = {
    render: (args) => (
        <SidebarWrapper>
            <Sidebar {...args} items={mockItems.withLinks} />
            <Sidebar {...args} collapsed items={mockItems.basic} />
        </SidebarWrapper>
    ),
};
WithLinks.storyName = 'С ссылками';

export const SubMenu: Story = {
    render: (args) => (
        <SidebarWrapper>
            <Sidebar {...args} items={mockItems.submenu} />
            <Sidebar {...args} collapsed items={mockItems.submenu} />
        </SidebarWrapper>
    ),
};
SubMenu.storyName = 'Подменю';

export const SubMenuCollapse: Story = {
    render: (args) => {
        const controlsRef1 = useRef<Sidebar.Controls<string> | null>(null);
        const controlsRef2 = useRef<Sidebar.Controls<string> | null>(null);

        return (
            <SidebarWrapper>
                <Sidebar
                    {...args}
                    controlsRef={controlsRef1}
                    items={mockItems.submenuCollapse}
                    footerItems={[
                        ...footerItems,
                        {
                            id: 12,
                            title: 'Закрыть "Рублевые платежи"',
                            icon: <Cross16Icon />,
                            onClick: () => {
                                controlsRef1.current?.collapseSubmenu('6', true);
                            },
                        },
                    ]}
                />
                <Sidebar
                    {...args}
                    controlsRef={controlsRef2}
                    collapsed
                    items={mockItems.submenuCollapse}
                    footerItems={[
                        ...footerItems,
                        {
                            id: 12,
                            title: 'Закрыть "Рублевые платежи"',
                            icon: <Cross16Icon />,
                            onClick: () => {
                                controlsRef2.current?.collapseSubmenu('6', true);
                            },
                        },
                    ]}
                />
            </SidebarWrapper>
        );
    },
};
SubMenuCollapse.storyName = 'Подменю (программный коллапс';

export const Interactive: Story = {
    render: (args) => {
        const [activeItemId, setActiveItemId] = useState<string | number>();
        const [collapsed, setCollapsed] = useState(false);
        const [design, setDesign] = useState<SidebarDesign>('light');

        const items = mockItems.interactive.map((item) => {
            if (item.sub)
                return { ...item, sub: item.sub.map((s) => ({ ...s, onClick: () => setActiveItemId(s.id) })) };

            return { ...item, onClick: () => setActiveItemId(item.id) };
        });

        const footer = [
            ...footerItems,
            {
                id: 12,
                title: 'Темная тема',
                icon: <MoonIcon />,
                onClick: () => setDesign((prev) => (prev === 'light' ? 'dark' : 'light')),
            },
        ];

        return (
            <SidebarWrapper style={{ height: '650px' }}>
                <Sidebar
                    {...args}
                    design={design}
                    activeItemId={activeItemId}
                    items={items}
                    collapsed={collapsed}
                    onCollapse={() => setCollapsed((prev) => !prev)}
                    onLogoClick={() => {}}
                    footerItems={footer}
                />
                <Sidebar
                    {...args}
                    design={design}
                    activeItemId={activeItemId}
                    items={items}
                    collapsed={true}
                    onCollapse={() => {}}
                    onLogoClick={() => {}}
                    footerItems={footer}
                />
            </SidebarWrapper>
        );
    },
};
Interactive.storyName = 'Интерактив';

export const DND: Story = {
    render: (args) => {
        const [collapsed, setCollapsed] = useState(false);

        return (
            <SidebarWrapper>
                <Sidebar
                    {...args}
                    draggable
                    activeItemId='2'
                    items={mockItems.dnd}
                    collapsed={collapsed}
                    onCollapse={() => setCollapsed((prev) => !prev)}
                    onLogoClick={() => {}}
                    footerItems={footerItems}
                />
                <Sidebar
                    {...args}
                    draggable
                    activeItemId='2'
                    items={mockItems.dnd}
                    collapsed={true}
                    onCollapse={() => {}}
                    onLogoClick={() => {}}
                    footerItems={footerItems}
                />
            </SidebarWrapper>
        );
    },
};
DND.storyName = 'Drag and Drop';

export const SkeletonLoading: Story = {
    render: (args) => {
        return (
            <>
                <SidebarWrapper style={{ marginBottom: '20px' }}>
                    <Sidebar {...args} loading loadingConfig={{ collapseIcon: true, footer: true }} collapsed={false} />
                    <Sidebar {...args} loading loadingConfig={{ collapseIcon: true, footer: true }} collapsed={true} />
                    <Sidebar
                        {...args}
                        loading
                        loadingConfig={{ collapseIcon: true, itemIcon: true, footer: true }}
                        collapsed={false}
                    />
                    <Sidebar
                        {...args}
                        loading
                        loadingConfig={{ collapseIcon: true, itemIcon: true, footer: true }}
                        collapsed={true}
                    />
                </SidebarWrapper>
                <SidebarWrapper>
                    <Sidebar
                        {...args}
                        design='dark'
                        loading
                        loadingConfig={{ collapseIcon: true, footer: true }}
                        collapsed={false}
                    />
                    <Sidebar
                        {...args}
                        design='dark'
                        loading
                        loadingConfig={{ collapseIcon: true, footer: true }}
                        collapsed={true}
                    />
                    <Sidebar
                        {...args}
                        design='dark'
                        loading
                        loadingConfig={{ collapseIcon: true, itemIcon: true, footer: true }}
                        items={mockItems.dnd}
                        collapsed={false}
                    />
                    <Sidebar
                        {...args}
                        design='dark'
                        loading
                        loadingConfig={{ collapseIcon: true, itemIcon: true, footer: true }}
                        items={mockItems.dnd}
                        collapsed={true}
                    />
                </SidebarWrapper>
            </>
        );
    },
};
SkeletonLoading.storyName = 'Скелетная загрузка';

export const SkeletonLoadingInteractive: Story = {
    render: (args) => {
        const [isLoading, setLoading] = useState(true);
        const [delay, setDelay] = useState(500);

        const deferredLoading = useDeferredLoading({ isLoading, timeout: delay });

        return (
            <>
                <div style={{ width: '200px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Button design={isLoading ? 'primary' : 'accent'} onClick={() => setLoading(true)}>
                        Start loading
                    </Button>
                    <Button design={isLoading ? 'accent' : 'primary'} onClick={() => setLoading(false)}>
                        Stop loading
                    </Button>

                    {[500, 1800, 6000].map((timeout) => (
                        <Radio
                            key={timeout}
                            value={timeout.toString()}
                            checked={delay === timeout}
                            onChange={({ value }) => setDelay(+value)}>
                            {timeout}
                        </Radio>
                    ))}
                </div>

                <SidebarWrapper>
                    <Sidebar
                        {...args}
                        loading={deferredLoading}
                        loadingConfig={{ itemIcon: true, itemCount: 5 }}
                        items={mockItems.withIcons}
                        collapsed={false}
                    />
                    <Sidebar
                        {...args}
                        loading={deferredLoading}
                        loadingConfig={{ itemIcon: true, itemCount: 5 }}
                        items={mockItems.withIcons}
                        collapsed={true}
                    />
                </SidebarWrapper>
            </>
        );
    },
};
SkeletonLoadingInteractive.storyName = 'Скелетная загрузка (интерактив)';
