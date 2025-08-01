import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Box, Line, Token } from './Code.styles';

export interface CodeProps extends React.PropsWithChildren {
    style?: React.CSSProperties;
    className?: string;
}

export const Code: React.FC<CodeProps> = ({ children, className: outerClassName, style: outerStyle }): JSX.Element => {
    return (
        <Highlight code={String(children).trim()} language='tsx' theme={themes.github}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Box
                    className={`${outerClassName ?? ''} ${className}`}
                    style={{ ...style, ...outerStyle, overflowX: 'auto' }}>
                    {tokens.map((line, i) => (
                        <Line key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, j) => (
                                <Token key={j} {...getTokenProps({ token, key: j })} />
                            ))}
                        </Line>
                    ))}
                </Box>
            )}
        </Highlight>
    );
};
