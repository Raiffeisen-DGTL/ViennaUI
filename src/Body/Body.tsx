import React, { ComponentProps, forwardRef } from 'react';
import { ExecutionProps } from 'styled-components';
import { Box, GlobalStyles, GlobalCustomFonts } from './Body.styles';

export type BodyProps = Partial<ExecutionProps & ComponentProps<typeof Box>>;

export const Body = forwardRef<HTMLDivElement, BodyProps>(({ ...attrs }, ref) => (
    <>
        <GlobalStyles />
        <GlobalCustomFonts />
        <Box {...(attrs as {})} ref={ref} />
    </>
));

Body.displayName = 'Body';
