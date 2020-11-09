import React, { HTMLAttributes } from 'react';
import { Box } from './RoundIcon.styles';

export interface RoundIconProps extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
    children?: React.ReactNode;
    /** Доступные размеры */
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    /** Цвет фона */
    color?:
        | 'seattle10'
        | 'seattle60'
        | 'oslo10'
        | 'oslo60'
        | 'miami10'
        | 'miami100'
        | 'nice10'
        | 'nice100'
        | 'dubai10'
        | 'dubai100'
        | 'paris10'
        | 'paris100'
        | 'sochi10'
        | 'sochi100'
        | 'tokyo10'
        | 'tokyo100'
        | 'dublin10'
        | 'dublin100'
        | 'bern10'
        | 'bern100'
        | 'manila10'
        | 'manila100'
        | 'tallin10'
        | 'tallin100'
        | 'seoul10'
        | 'seoul100'
        | 'havana10'
        | 'havana100'
        | 'madrid10'
        | 'madrid100'
        | 'porto10'
        | 'porto100';
    clickable?: boolean;
}

export const RoundIcon: React.FC<RoundIconProps> = (props): JSX.Element => {
    const { children, size = 'm', ...attrs } = props;
    const clickable = props.onClick ?? props.clickable;

    return (
        <Box {...attrs} size={size} clickable={clickable}>
            {children}
        </Box>
    );
};

RoundIcon.defaultProps = {
    size: 'm',
    color: 'seattle10',
};

RoundIcon.displayName = 'RoundIcon';
export default RoundIcon;
