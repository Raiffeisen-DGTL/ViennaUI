import React, { HTMLAttributes } from 'react';
import { Box, Svg } from './Spinner.styles';

export interface SpinnerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    position?: 'relative' | 'absolute';
}

export const Spinner: React.FC<SpinnerProps> = (props): JSX.Element => {
    const { size = 'm', position = 'relative', ...attrs } = props;

    return (
        <Box {...attrs} size={size} position={position}>
            <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' size={size}>
                <g fill='none' fillRule='evenodd' strokeWidth='2'>
                    <path stroke='#2b2d33' strokeOpacity='.87' d='M3.05 12.95a7 7 0 0 1 9.9-9.9' />
                    <path stroke='#fee600' d='M3.05 12.95a7 7 0 0 0 9.9-9.9' />
                </g>
            </Svg>
        </Box>
    );
};

Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
    size: 'm',
    position: 'relative',
};

export default Spinner;
