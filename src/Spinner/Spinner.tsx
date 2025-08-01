import React, { useMemo } from 'react';
import { Box, Svg, Circle, CircleProps, PropsBox } from './Spinner.styles';
import { Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';

export const defaultSpinnerTestId: SpinnerProps['testId'] = {
    container: 'spinner_container',
};

export interface SpinnerProps<B = Breakpoints> extends BoxStyled<typeof Box, PropsBox> {
    size?: PropsBox<B>['$size'];
    position?: PropsBox<B>['$position'];
    color?: CircleProps['$color'];
    testId?: {
        container?: string;
    };
}

export function Spinner<B = void>(props: SpinnerProps<B extends void ? Breakpoints : B>) {
    const { size = 'm', position = 'relative', color = 'primary', testId = defaultSpinnerTestId, ...attrs } = props;

    const isIE = useMemo(() => {
        const isBrowser = typeof window !== 'undefined';
        if (isBrowser) {
            const ua = window.navigator.userAgent;
            return ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0;
        }

        return false;
    }, []);

    return (
        <Box data-testid={testId?.container} {...attrs} $size={size} $position={position}>
            <Svg $isIE={isIE} viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' $size={size}>
                <Circle $isIE={isIE} r='44' cx='50' cy='50' $color={color} />
            </Svg>
        </Box>
    );
}

Spinner.displayName = 'Spinner';
