import React, { FC, useCallback, MouseEvent } from 'react';
import { GoLeft, GoRight } from 'vienna.icons';
import { Box, Title, Icon } from './MenuPoint.styles';

export interface MenuPointProps {
    value?: unknown;
    label: string;
    onClick?: (event: MouseEvent<HTMLDivElement>, value: unknown) => void;
    leftArrow?: boolean;
}

export const MenuPoint: FC<MenuPointProps> = ({ value, label, leftArrow = false, onClick }) => {
    const handleClick = useCallback(
        (e) => {
            if (typeof onClick === 'function') {
                onClick(e, value);
            }
        },
        [value]
    );

    return (
        <Box onClick={handleClick}>
            <Icon $leftArrow={leftArrow}>{leftArrow ? <GoLeft /> : <GoRight />}</Icon>
            <Title $leftArrow={leftArrow} size='l'>
                {label}
            </Title>
        </Box>
    );
};
