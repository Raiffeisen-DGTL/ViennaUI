import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface StylesProviderProps {
    theme?;
    media?;
    breakpoints?;
    children: ReactNode;
}
export const StylesProvider: React.FC<StylesProviderProps> = ({ children, ...rest }) => {
    return <ThemeProvider theme={rest}>{children}</ThemeProvider>;
};
