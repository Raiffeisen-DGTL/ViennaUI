import React from 'react';
import { PatternRect, Box } from './Loading.styles';

export const Loading: React.FC = () => {
    return (
        <Box xmlns='http://www.w3.org/2000/svg'>
            <defs>
                <pattern
                    id='strips'
                    x='10'
                    y='10'
                    width='80'
                    height='20'
                    patternUnits='userSpaceOnUse'
                    patternTransform='rotate(-30)'>
                    <PatternRect x='0' y='0' width='80' height='10' />
                </pattern>
            </defs>

            <rect x='0' y='0' width='100%' height='100%' fill='url(#strips)' />
        </Box>
    );
};
