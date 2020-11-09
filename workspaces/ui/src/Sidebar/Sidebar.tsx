import React from 'react';
import { InQueue, InQueueBack } from 'vienna.icons';
import { Box, ItemWrapper, Header, Footer, Menu, Collapser } from './Sidebar.styles';
import { Item, ItemProps } from './Item';
import { Logotype } from '../Logotype';

interface Props {
    size?: 's' | 'm' | 'l';
    design?: 'light' | 'dark';
    collapsed?: boolean;
    children?: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    onCollapse?: any;
    active?: any;
    width?: string;
    ripple?: boolean;
}

interface HTMLAttributeProps {
    [key: string]: any;
    id?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
    tabIndex?: number;
}

export type SidebarProps = HTMLAttributeProps & Props;

export const Sidebar: React.FC<SidebarProps> & { Item: React.FC<ItemProps> } = (props: SidebarProps) => {
    const { design, children, footer, collapsed, onCollapse, active, size, ...attrs } = props;

    const content = React.Children.map(React.Children.toArray(children), (child: any) => {
        const isActive = active && child.props && active === child.props.id;

        return <ItemWrapper active={isActive}>{child}</ItemWrapper>;
    });

    const header = props.header !== undefined ? props.header : <Logotype design={design} collapsed={collapsed} />;

    return (
        <Box design={design} size={size} isCollapsed={collapsed} {...attrs}>
            {header && (
                <Header isCollapsed={collapsed} size={size}>
                    {header}
                </Header>
            )}

            {onCollapse && (
                <Collapser onClick={onCollapse}>
                    {collapsed && <InQueue size='l' />}
                    {!collapsed && <InQueueBack size='l' />}
                </Collapser>
            )}

            <Menu design={design}>{content}</Menu>

            {footer && <Footer>{footer}</Footer>}
        </Box>
    );
};

Sidebar.Item = Item;
Sidebar.defaultProps = {
    size: 's',
    design: 'light',
    width: '250px',
};

Sidebar.displayName = 'Sidebar';
export default Sidebar;
