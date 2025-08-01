import React, { Fragment, useEffect, useMemo, useRef } from 'react';
import { ListOpenIcon, ListCloseIcon } from 'vienna.icons';

import { Item } from './Item';
import { Submenu } from './Submenu';
import { FooterItem } from './FooterItem';
import { SkeletonLoading } from './SkeletonLoading';
import { useSidebarDnD } from './useSidebarDnD';
import { Pretty } from '@/Utils';
import { Box, Header, Footer, Menu, Collapser, Logo, MenuCollapsed } from './Sidebar.styles';
import {
    ControlsMap,
    ItemMap,
    SidebarControls,
    SidebarItemTestId,
    SidebarProps,
    SidebarTestId,
    OnDragSort as TOnDragSort,
} from './types';

export const defaultSidebarTestId: SidebarTestId = {
    container: 'sidebar_container',
    header: 'sidebar_header',
    logo: 'sidebar_logo',
    collapser: 'sidebar_collapser',
    itemContainer: 'sidebar_item-container',
    footer: 'sidebar_footer',
};

export namespace Sidebar {
    export type OnDragSort<T extends string | number> = Pretty.Func<TOnDragSort<T>>;
    export type Controls<T extends string | number> = Pretty.fy<SidebarControls<T>>;
    export type TestId = Pretty.fy<SidebarTestId>;
    export type ItemTestId = Pretty.fy<SidebarItemTestId>;
}

/**
 * Обновленный Sidebar.
 * Экспортируется из `vienna.ui/v13`
 */
export function Sidebar<T extends string | number, U extends string | number>(props: SidebarProps<T, U>) {
    const {
        items,
        header: customHeader,
        footer: customFooter,
        design = 'light',
        footerItems,
        activeItemId,
        collapsed,
        onCollapse,
        width = '250px',
        draggable = false,
        loading,
        loadingConfig,
        itemOrder,
        onLogoClick,
        onDragSort,
        controlsRef,
        testId = defaultSidebarTestId,
        ...attrs
    } = props;

    const controlsMap = useRef<ControlsMap<T>>({} as ControlsMap<T>);

    const { containerRef, dragSortOrder, onMouseDown, getDragPlaceholder } = useSidebarDnD<T, U>({
        items,
        draggable,
        itemOrder,
        onDragSort,
    });

    const itemMap = useMemo(
        () => items?.reduce<ItemMap<T, U>>((acc, curr) => ({ ...acc, [curr.id]: curr }), {} as ItemMap<T, U>) ?? null,
        [items]
    );

    const renderedItems = dragSortOrder.map((id) => {
        if (!itemMap || !itemMap[id]) return null;

        const rawProps = itemMap[id];

        const props = {
            activeItemId,
            draggable,
            collapsed,
            onMouseDown,
            'data-dragid': rawProps.id,
            design,
            ...rawProps,
        };

        const dragPlaceholder = getDragPlaceholder(props.id);

        const ConcreteItem = rawProps.sub ? Submenu : Item;

        return (
            <Fragment key={props.id}>
                {dragPlaceholder}
                <ConcreteItem {...props} {...(rawProps.sub ? { controlsMap } : {})}></ConcreteItem>
            </Fragment>
        );
    });

    const header = customHeader ?? (
        <Header data-testid={testId?.header}>
            <Logo
                src='https://cdn-rf.raiffeisen.ru/ds/icons/SidebarLogo/SidebarLogo.svg'
                onClick={onLogoClick}
                $shouldApplyHover={!!onLogoClick}
                data-testid={testId?.logo}
            />
        </Header>
    );

    const footer = (() => {
        if (customFooter) return customFooter;
        if (!footerItems) return null;

        return (
            <Footer $design={design} data-testid={testId?.footer}>
                {footerItems.map((props) => (
                    <FooterItem key={props.id} design={design} collapsed={collapsed} {...props} />
                ))}
            </Footer>
        );
    })();

    useEffect(() => {
        if (!controlsRef) return;

        controlsRef.current = {
            collapseSubmenu: (id, shouldCollapse) => {
                controlsMap.current[id]?.(shouldCollapse);
            },
        };
    }, [controlsRef]);

    const content = (() => {
        if (loading) return <SkeletonLoading {...loadingConfig} design={design} collapsed={collapsed} />;

        const ItemWrapper = collapsed ? MenuCollapsed : Menu;

        return (
            <>
                {onCollapse && (
                    <Collapser
                        onClick={onCollapse}
                        data-testid={testId?.collapser}
                        $design={design}
                        $collapsed={collapsed}>
                        {collapsed ? <ListOpenIcon size='l' /> : <ListCloseIcon size='l' />}
                    </Collapser>
                )}

                <ItemWrapper
                    ref={containerRef}
                    $design={design}
                    $hasFooter={!!footer}
                    $collapsed={collapsed}
                    data-testid={testId?.itemContainer}>
                    {renderedItems}
                </ItemWrapper>

                {footer}
            </>
        );
    })();

    return (
        <Box data-testid={testId?.container} {...attrs} $design={design} $collapsed={collapsed} $width={width}>
            {header}

            {content}
        </Box>
    );
}

Sidebar.displayName = 'Sidebar';
