import React, { ReactNode, useState, useCallback } from 'react';
import { GoRightClassic, SelectOpenClassic } from 'vienna.icons';
import { Item, ItemProps } from '../Item';
import { Menu, SubmenuTitle } from './Submenu.styles';

export interface SubmenuProps extends Omit<ItemProps, 'title'> {
    title: ReactNode;
    expanded?: boolean;
    defaultExpanded?: boolean;
}

export const Submenu = React.forwardRef<HTMLDivElement, SubmenuProps>((props, ref) => {
    const { title, children, expanded, active, onClick, defaultExpanded = false, ...attrs } = props;
    const [expandedInternal, toggleExpanded] = useState(defaultExpanded);

    const isUncontrollableMode = typeof expanded === 'undefined';
    const isExpanded = isUncontrollableMode ? expandedInternal : expanded;

    const Icon = isExpanded ? SelectOpenClassic : GoRightClassic;

    const handleClick = useCallback(
        (e) => {
            if (isUncontrollableMode) {
                toggleExpanded((prev) => !prev);
            }
            onClick?.(e);
        },
        [toggleExpanded, onClick]
    );

    return (
        <>
            <SubmenuTitle ref={ref} $active={active && !isExpanded} onClick={handleClick}>
                <Icon size='xs' />
                <Item {...(attrs as {})}>{title}</Item>
            </SubmenuTitle>
            {isExpanded && <Menu>{children}</Menu>}
        </>
    );
});

Submenu.displayName = 'Sidebar.Submenu';
