import React, { FC } from 'react';
import { TableFooter } from './Footer.styles';
import { BoxStyled } from '../../../Utils/styled';

export interface FooterProps extends BoxStyled<typeof TableFooter, object> {
    id?: string;
}

export const Footer: FC<FooterProps> = (props) => {
    const { children, ...attrs } = props;
    return (
        <TableFooter data-id='table-footer' {...attrs}>
            {children}
        </TableFooter>
    );
};

Footer.displayName = 'Footer';
