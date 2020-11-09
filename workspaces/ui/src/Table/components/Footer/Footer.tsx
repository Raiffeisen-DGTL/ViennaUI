import React, { ReactNode } from 'react';
import { TableFooter } from './Footer.styles';

export interface FooterProps {
    id?: string;
    children?: ReactNode;
}

export const Footer = (props: FooterProps) => {
    const { children, ...attrs } = props;
    return <TableFooter {...attrs}>{children}</TableFooter>;
};

Footer.displayName = 'Footer';
export default Footer;
