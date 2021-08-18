import React, { HTMLAttributes, useMemo } from 'react';
import { Box, Svg, Circle } from './Spinner.styles';

export interface SpinnerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'size'> {
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    position?: 'relative' | 'absolute';
    color?: 'primary' | 'accent' | 'london120' | 'white';
}

export const Spinner: React.FC<SpinnerProps> = (props): JSX.Element => {
    const { size = 'm', position = 'relative', color = 'primary', ...attrs } = props;

    const isIE = useMemo(() => {
        const isBrowser = typeof window !== 'undefined';
        if (isBrowser) {
            const ua = window.navigator.userAgent;
            return ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0;
        }

        return false;
    }, []);

    return (
        <Box {...attrs} size={size} position={position}>
            <Svg isIE={isIE} viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' size={size}>
                <Circle isIE={isIE} r='44' cx='50' cy='50' color={color} />
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
