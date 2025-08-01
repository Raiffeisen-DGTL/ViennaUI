import React, { MouseEvent, ReactNode, useRef } from 'react';
import { color } from 'vienna.tokens';
import { Box, Prefix, Title, Postfix, DragIcon, Chevron, CollapsedPlaceholder } from './Item.styles';
import { SidebarDesign, SidebarItem, SidebarItemTestId } from '../types';

export const defaultSidebarItemTestId: SidebarItemTestId = {
    container: 'sidebar-item_container',
    chevron: 'sidebar-item_chevron',
    prefix: 'sidebar-item_prefix',
    title: 'sidebar-item_title',
    postfix: 'sidebar-item_postfix',
    dragIcon: 'sidebar-item_drag-icon',
    collapsedPlaceholder: 'sidebar-item_collapsed-placeholder',
    submenuContainer: 'sidebar-item_submenu-container',
    submenuItemContainer: 'sidebar-item_submenu-item-container',
    footerIcon: 'sidebar-item_footer-icon',
};

export interface SidebarItemInnerProps<T, U> extends SidebarItem<T, U> {
    activeItemId?: T | U;
    design?: SidebarDesign;
    collapsed?: boolean;
    draggable: boolean;
    isSubmenu?: boolean;
    isSubmenuItem?: boolean;
    isFooterItem?: boolean;
}

export const Item = <T, U>({
    title,
    prefix,
    draggable,
    postfix,
    render,
    active,
    activeItemId,
    disabled = false,
    collapsed,
    design,
    onClick,
    onMouseDown,
    isSubmenu,
    isSubmenuItem,
    isFooterItem,
    truncate = true,
    testId = defaultSidebarItemTestId,
    ...attrs
}: SidebarItemInnerProps<T, U>) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const isActualClick = useRef(false);

    const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
        if (!isActualClick.current) {
            e.preventDefault();
            return;
        }

        if (!disabled) onClick?.(e);

        isActualClick.current = false;
    };

    const handleIconClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        isActualClick.current = true;
    };

    const handleIconMouseDown = (e: React.MouseEvent) => {
        if (!ref.current) return;

        e.stopPropagation();
        e.preventDefault();

        onMouseDown?.({ ...e, currentTarget: ref.current });
    };

    const Wrapper = render ?? React.Fragment;

    if (collapsed && !prefix) {
        return isSubmenuItem ? <></> : <CollapsedPlaceholder data-testid={testId?.collapsedPlaceholder} />;
    }

    const parseTitleText = (text: string): ReactNode => {
        const lines = text.split('\n');
        return lines.map((line, index) => (
            <React.Fragment key={index}>
                {line}
                {index < lines.length - 1 && <br />}
            </React.Fragment>
        ));
    };

    return (
        <Wrapper>
            <Box
                data-testid={testId?.container}
                {...attrs}
                ref={ref}
                $design={design}
                $draggable={draggable}
                $active={active ?? activeItemId === attrs.id}
                $disabled={disabled}
                $isSubmenuItem={isSubmenuItem}
                $isSubmenu={isSubmenu}
                $isFooterItem={isFooterItem}
                $hasPrefix={!!prefix}
                $truncate={truncate}
                onMouseDown={handleMouseDown}
                onClick={handleClick}
                as={attrs.href ? 'a' : ''}>
                {(prefix || isSubmenu) && (
                    <Prefix data-testid={testId?.prefix} $collapsed={collapsed}>
                        {isSubmenu && <Chevron size='s' data-testid={testId?.chevron} />}
                        {prefix}
                    </Prefix>
                )}
                {title && <Title data-testid={testId?.title}>{parseTitleText(title)}</Title>}
                {postfix && <Postfix data-testid={testId?.postfix}>{postfix}</Postfix>}
                {draggable && !collapsed && (
                    <DragIcon
                        id='drag-icon'
                        size='l'
                        color={color.primary.seattle.c60}
                        onClick={handleIconClick}
                        onMouseDown={handleIconMouseDown}
                        data-testid={testId?.dragIcon}
                    />
                )}
            </Box>
        </Wrapper>
    );
};
