import React, { HTMLAttributes } from 'react';
import { Box, Svg, Circle } from './Spinner.styles';

export interface SpinnerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    position?: 'relative' | 'absolute';
    color?: 'primary' | 'accent' | 'london120' | 'white';
}

export const Spinner: React.FC<SpinnerProps> = (props): JSX.Element => {
    const { size = 'm', position = 'relative', color = 'primary', ...attrs } = props;

    return (
        <Box {...attrs} size={size} position={position}>
            <Svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' size={size}>
                <Circle color={color} />
            </Svg>
        </Box>
    );
};

Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
    size: 'm',
    position: 'relative',
    color: 'primary',
};

export default Spinner;
