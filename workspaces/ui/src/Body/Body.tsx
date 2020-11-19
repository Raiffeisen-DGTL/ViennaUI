import React, { HTMLAttributes } from 'react';
import { Box, GlobalStyles, GlobalCustomFonts } from './Body.styles';

export interface BodyProps extends HTMLAttributes<HTMLDivElement> {
    [key: string]: any;
    children: React.ReactNode;
}

export const Body: React.FC<BodyProps> = (props): JSX.Element => {
    const { children, ...attrs } = props;

    return (
        <>
            <GlobalStyles />
            <GlobalCustomFonts />
            <Box {...attrs}>{children}</Box>
        </>
    );
};

Body.displayName = 'Body';
export default Body;
