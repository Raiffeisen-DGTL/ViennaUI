import React, { FC } from 'react';
import { ListOpen, ListClose } from 'vienna.icons';
import { Box, ItemWrapper, Header, Footer, Menu, Collapser } from './Sidebar.styles';
import { Item, ItemProps } from './Item';
import { Submenu, SubmenuProps } from './Submenu';
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

export const Sidebar: React.FC<SidebarProps> & { Item: FC<ItemProps>; Submenu: FC<SubmenuProps> } = (
    props: SidebarProps
) => {
    const { design, children, footer, collapsed, onCollapse, active, size, ...attrs } = props;

    const content = React.Children.map(React.Children.toArray(children), (child: any) => {
        const isActive = active && child.props && active === child.props.id;

        if (child.type.displayName === 'Sidebar.Submenu') {
            if (isActive) {
                return React.cloneElement(child, { active: isActive });
            }
            return child;
        }

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
                    {collapsed && <ListOpen size='l' />}
                    {!collapsed && <ListClose size='l' />}
                </Collapser>
            )}

            <Menu design={design}>{content}</Menu>

            {footer && <Footer>{footer}</Footer>}
        </Box>
    );
};

Sidebar.Item = Item;
Sidebar.Submenu = Submenu;

Sidebar.defaultProps = {
    size: 's',
    design: 'light',
    width: '250px',
};

Sidebar.displayName = 'Sidebar';
export default Sidebar;
