import React, { ReactNode, FC, useState, useCallback } from 'react';
import { RightSmall, DownSmall } from 'vienna.icons';
import { Item, ItemProps } from '../Item';
import { Menu, SubmenuTitle } from './Submenu.styles';

export interface SubmenuProps extends ItemProps {
    title: ReactNode;
    expanded?: boolean;
    children?: ReactNode;
}

export const Submenu: FC<SubmenuProps> = (props) => {
    const { title, children, expanded, active, onClick, ...attrs } = props;
    const [expandedInternal, toggleExpanded] = useState(false);

    const isUncontrollableMode = typeof expanded === 'undefined';
    const isExpanded = isUncontrollableMode ? expandedInternal : expanded;

    const Icon = isExpanded ? DownSmall : RightSmall;

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
            <SubmenuTitle active={active && !isExpanded} onClick={handleClick}>
                <Icon size='xs' />
                <Item {...attrs}>{title}</Item>
            </SubmenuTitle>
            {isExpanded && <Menu>{children}</Menu>}
        </>
    );
};

Submenu.displayName = 'Sidebar.Submenu';
export default Submenu;
