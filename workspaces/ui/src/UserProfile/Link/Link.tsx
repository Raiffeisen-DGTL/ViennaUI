import React from 'react';
import { Box } from './Link.styles';

interface Props {
    children?: React.ReactNode;
    href?: string;
    rel?: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
}

export const Link: React.FC<Props> = (props: Props): JSX.Element => {
    const { children, href, ...attrs } = props;

    return (
        <Box href={href} {...attrs}>
            {children}
        </Box>
    );
};

Link.displayName = 'Link';
export default Link;
