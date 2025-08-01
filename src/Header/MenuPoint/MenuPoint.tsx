import React, { useCallback, MouseEvent, ReactNode } from 'react';
import { GoLeftIcon, GoRightIcon } from 'vienna.icons';
import { Box, Title, Icon } from './MenuPoint.styles';
import { TabsValueType } from '../../Tabs/Tabs';

export interface MenuPointProps<T = TabsValueType> {
    value?: T;
    label: ReactNode;
    onClick?: (value: T, event: MouseEvent) => void;
    leftArrow?: boolean;
}

export const MenuPoint = <T,>({ value, label, leftArrow = false, onClick }: MenuPointProps<T>) => {
    const handleClick = useCallback(
        (e: MouseEvent) => {
            if (typeof onClick === 'function') {
                onClick(value as T, e);
            }
        },
        [value]
    );

    return (
        <Box onClick={handleClick}>
            <Icon $leftArrow={leftArrow}>{leftArrow ? <GoLeftIcon /> : <GoRightIcon />}</Icon>
            <Title $leftArrow={leftArrow} size='l'>
                {label}
            </Title>
        </Box>
    );
};

MenuPoint.displayName = 'MenuPoint';
