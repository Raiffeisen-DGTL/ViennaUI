import React, { ComponentProps, forwardRef } from 'react';
import { ExecutionProps } from 'styled-components';
import { Box, GlobalStyles, GlobalCustomFonts, GlobalCustomFontsLocal } from './Body.styles';

export type BodyProps = Partial<ExecutionProps & ComponentProps<typeof Box>> & { localFonts?: boolean };

export const Body = forwardRef<HTMLDivElement, BodyProps>(({ localFonts = false, ...attrs }, ref) => (
    <>
        <GlobalStyles />
        {localFonts ? <GlobalCustomFontsLocal /> : <GlobalCustomFonts />}
        <Box {...(attrs as {})} ref={ref} />
    </>
));

Body.displayName = 'Body';
