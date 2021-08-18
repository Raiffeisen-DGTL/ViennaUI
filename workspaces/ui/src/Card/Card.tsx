import React, { useMemo } from 'react';
import { H5 } from '../Typography';
import { WithMargin } from '../Whitespace/utils';
import { Box, Header, Actions, Footer, Content, Title, Subtitle, ContentTitle } from './Card.styles';

interface Props {
    /* Card's content */
    children?: React.ReactNode;

    /* Card's title */
    title?: string;

    /* Header region */
    header?: React.ReactNode;

    /* Region to pass actions icons that will be displayed inside the header */
    actions?: React.ReactNode;

    /* Footer region */
    footer?: React.ReactNode;

    /* Stretch allows to expand card to 100% of parent's height */
    stretch?: boolean;
}

interface HTMLAttributeProps {
    [key: string]: any;
    id?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
    tabIndex?: number;
}

export type CardProps = HTMLAttributeProps & Props & WithMargin;

export const Card: React.FC<CardProps> & { Title: any; Subtitle: any; ContentTitle: any } = (props: CardProps) => {
    const { children, title, header, actions, footer, ...attrs } = props;

    const showHeader = header || title || actions;

    const cardTitle = useMemo(() => {
        if (header) {
            return header;
        }

        if (title) {
            return <Card.Title>{title}</Card.Title>;
        }

        return null;
    }, [header, title]);

    return (
        <Box {...attrs}>
            {showHeader && (
                <Header>
                    {<Title>{cardTitle}</Title>}
                    {actions && <Actions>{actions}</Actions>}
                </Header>
            )}
            <Content>{children}</Content>
            {footer && <Footer>{footer}</Footer>}
        </Box>
    );
};

Card.Title = H5;
Card.Subtitle = Subtitle;
Card.ContentTitle = ContentTitle;

Card.displayName = 'Card';
export default Card;
