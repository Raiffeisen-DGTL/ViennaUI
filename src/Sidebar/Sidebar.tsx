import React, { Children, FC, ReactNode } from 'react';
import { ListOpen, ListClose } from 'vienna.icons';
import { Box, PropsBox, ItemWrapper, Header, Footer, Menu, Collapser } from './Sidebar.styles';
import { Item } from './Item';
import { Submenu } from './Submenu';
import { Logotype } from '../Logotype';
import { BoxStyled } from '../Utils/styled';

export type Design = 'light' | 'dark';
export type Size = 's' | 'm' | 'l';

export interface SidebarProps extends BoxStyled<typeof Box, PropsBox> {
    size?: Size;
    design?: Design;
    collapsed?: boolean;
    header?: ReactNode;
    footer?: ReactNode;
    onCollapse?: () => void;
    active?: string;
    width?: string;
}

export const Sidebar: FC<SidebarProps> & { Item: typeof Item; Submenu: typeof Submenu } = (props) => {
    const {
        design = 'light',
        children,
        footer,
        collapsed,
        onCollapse,
        active,
        size = 's',
        width = '250px',
        ...attrs
    } = props;

    const content = Children.map(Children.toArray(children), (child: any) => {
        if (!child) {
            return null;
        }
        const isActive = active && child.props && active === child.props.id;

        if (child.type.displayName === 'Sidebar.Submenu') {
            if (isActive) {
                return React.cloneElement(child, { active: isActive });
            }

            return child;
        }

        return (
            <ItemWrapper $design={design} $active={isActive}>
                {child}
            </ItemWrapper>
        );
    });

    const header = props.header !== undefined ? props.header : <Logotype design={design} collapsed={collapsed} />;

    return (
        <Box {...(attrs as {})} $design={design} $size={size} $collapsed={collapsed} $width={width}>
            {header && (
                <Header $size={size} $isCollapsed={collapsed}>
                    {header}
                </Header>
            )}

            {onCollapse && (
                <Collapser onClick={onCollapse}>
                    {collapsed && <ListOpen size='l' />}
                    {!collapsed && <ListClose size='l' />}
                </Collapser>
            )}

            <Menu $design={design}>{content}</Menu>

            {footer && <Footer>{footer}</Footer>}
        </Box>
    );
};

Sidebar.Item = Item;
Sidebar.Submenu = Submenu;

Sidebar.displayName = 'Sidebar';
