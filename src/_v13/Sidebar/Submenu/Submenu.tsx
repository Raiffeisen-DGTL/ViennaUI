import React, { useEffect, useState } from 'react';
import { Item } from '../Item';
import { SubmenuContainer } from './Submenu.styles';
import { SidebarItemInnerProps } from '../Item/Item';
import { ControlsMap } from '../types';

export interface SubmenuProps<T extends string | number, U> extends SidebarItemInnerProps<T, U> {
    controlsMap?: React.MutableRefObject<ControlsMap<T>>;
}

export const Submenu = <T extends string | number, U extends string | number>(props: SubmenuProps<T, U>) => {
    const { onClick, defaultCollapsed = true, sub, testId, onCollapse, controlsMap, ...attrs } = props;

    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsCollapsed((prev) => {
            onCollapse?.(!prev);
            return !prev;
        });
        onClick?.(e);
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsCollapsed(true);
        onCollapse?.(false);
        attrs.onMouseDown?.(e);
    };

    useEffect(() => {
        controlsMap &&
            (controlsMap.current[attrs.id] = (shouldCollapse) => {
                setIsCollapsed(shouldCollapse);
            });

        return () => {
            delete controlsMap?.current[attrs.id];
        };
    }, []);

    return (
        <SubmenuContainer $collapsed={isCollapsed} data-testid={testId?.submenuContainer}>
            <Item {...attrs} onClick={handleClick} onMouseDown={handleMouseDown} isSubmenu testId={testId} />
            {!isCollapsed && (
                <div data-testid={testId?.submenuItemContainer}>
                    {sub?.map((subProps) => (
                        <Item
                            key={subProps.id}
                            {...subProps}
                            draggable={false}
                            isSubmenuItem
                            collapsed={attrs.collapsed}
                            design={attrs.design}
                            activeItemId={attrs.activeItemId}
                        />
                    ))}
                </div>
            )}
        </SubmenuContainer>
    );
};
