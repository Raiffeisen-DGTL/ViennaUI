import React, { MouseEvent, RefAttributes, useCallback, useState } from 'react';
import { GoRightIcon } from 'vienna.icons';
import { Item, ItemProps } from '../Item';
import { ItemContent, PopoverContent } from './MenuItem.styles';
import { SelectValueType } from '@/Utils';
import { Popover } from '@/Popover';

type MenuItemProps<Value = SelectValueType> = Omit<ItemProps<Value>, 'icon' | 'selected'> & {
    text?: string;
    action?: 'hover' | 'click';
    scrollable?: boolean;
};

const MenuItemInternal = <Value,>(props: MenuItemProps<Value>, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { children, size = 'm', disabled, text, action = 'hover', scrollable, ref: propRef, ...attrs } = props;

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const showMenu = () => {
        setIsOpenMenu(true);
    };

    const hideMenu = () => {
        setIsOpenMenu(false);
    };

    const onMouseOver = useCallback(() => {
        if (action === 'hover' && !disabled) {
            showMenu();
        }
    }, [action, disabled]);

    const onMouseLeave = useCallback(() => {
        if (action === 'hover' && !disabled) {
            hideMenu();
        }
    }, [action, disabled]);

    const clickHandler = useCallback(
        (event: MouseEvent) => {
            event.stopPropagation();

            if (action === 'click' && !disabled) {
                if (isOpenMenu) {
                    hideMenu();
                } else {
                    showMenu();
                }
            }
        },
        [action, disabled, isOpenMenu]
    );

    const iconSize = size === 's' ? 's' : 'm';

    return scrollable ? (
        <Popover
            action={action}
            popupStyle={{ visibility: 'hidden' }}
            placement='right-start'
            noClose
            content={<PopoverContent>{children}</PopoverContent>}>
            <Item
                ref={ref}
                disabled={disabled}
                size={size}
                hover={isOpenMenu}
                onClick={clickHandler}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
                {...attrs}>
                <ItemContent gap='s2' justifyContent='space-between'>
                    {text}
                    <GoRightIcon size={iconSize} />
                </ItemContent>
            </Item>
        </Popover>
    ) : (
        <Item
            ref={ref}
            disabled={disabled}
            size={size}
            hover={isOpenMenu}
            onClick={clickHandler}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            {...attrs}>
            <ItemContent gap='s2' justifyContent='space-between'>
                {text}
                <GoRightIcon size={iconSize} />
            </ItemContent>
            {isOpenMenu && children}
        </Item>
    );
};

export const MenuItem = React.forwardRef(MenuItemInternal) as (<Value>(
    props: ItemProps<Value> & RefAttributes<HTMLDivElement>
) => ReturnType<typeof MenuItemInternal>) & {
    displayName?: string;
};

MenuItem.displayName = 'MenuItem';
