import React, { ComponentProps } from 'react';
import { ExecutionProps } from 'styled-components';
import { Box } from './Link.styles';

export const Link: React.FC<ExecutionProps & ComponentProps<typeof Box>> = ({ children, ...attrs }) => {
    return <Box {...(attrs as {})}>{children}</Box>;
};

Link.displayName = 'Link';
