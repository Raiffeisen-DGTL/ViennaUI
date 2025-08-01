import React, { Children, FC, ReactElement, isValidElement, ReactNode } from 'react';
import { ListOpenIcon, ListCloseIcon } from 'vienna.icons';
import { Box, PropsBox, ItemWrapper, Header, Footer, Menu, Collapser } from './Sidebar.styles';
import { Item, ItemProps } from './Item';
import { Submenu } from './Submenu';
import { Logotype } from '../Logotype';
import { BoxStyled } from '../Utils/styled';
import { reactNodeIsComponent } from '../Utils';

export const deprecated_defaultSidebarTestId: SidebarProps['testId'] = {
    menu: 'sidebar_menu',
};

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
    testId?: {
        menu?: string;
    };
}

/**
 * @deprecated
 * Используйте Sidebar из `vienna.ui/v13`
 */
export const Sidebar: FC<SidebarProps> & { Item: typeof Item; Submenu: typeof Submenu } = (props) => {
    const {
        design = 'light',
        children,
        footer,
        active,
        collapsed,
        onCollapse,
        size = 's',
        width = '252px',
        header: customHeader,
        testId = deprecated_defaultSidebarTestId,
        ...attrs
    } = props;

    const content = Children.map(Children.toArray(children), (child) => {
        if (!child) {
            return null;
        }

        let isActive = false;
        let disabled = false;

        if (isValidElement(child)) {
            const childProps = (child as ReactElement<ItemProps>).props;
            isActive = !!active && active === childProps.id;
            disabled =
                isValidElement(childProps?.children) &&
                !!(childProps.children as ReactElement<ItemProps>)?.props.disabled;
        }

        if (reactNodeIsComponent(child, Sidebar.Item)) {
            return React.cloneElement(child, { design });
        }

        if ((child as ReactElement & { type: { displayName: string } }).type.displayName === 'Sidebar.Submenu') {
            if (isActive) {
                return React.cloneElement(child as ReactElement, { active: isActive });
            }

            return child;
        }

        return (
            <ItemWrapper $design={design} $active={isActive} $disabled={disabled}>
                {child}
            </ItemWrapper>
        );
    });

    const header =
        customHeader !== undefined ? (
            customHeader
        ) : (
            <Logotype size={collapsed ? 'm' : 'l'} design={design} collapsed={collapsed} />
        );

    return (
        <Box {...attrs} $design={design} $size={size} $collapsed={collapsed} $width={width}>
            {header && (
                <Header $size={size} $isCollapsed={collapsed}>
                    {header}
                </Header>
            )}

            {onCollapse && (
                <Collapser onClick={onCollapse}>
                    {collapsed && <ListOpenIcon size='l' />}
                    {!collapsed && <ListCloseIcon size='l' />}
                </Collapser>
            )}

            <Menu data-testid={testId?.menu} $design={design}>
                {content}
            </Menu>

            {footer && <Footer>{footer}</Footer>}
        </Box>
    );
};

Sidebar.Item = Item;
Sidebar.Submenu = Submenu;

Sidebar.displayName = 'Sidebar';
