import React, { forwardRef, ReactNode, Ref, useMemo } from 'react';
import { H5 } from '../Typography';
import { getWhitespaceStyledProps, WithMargin } from '../Whitespace/utils';
import { Box, PropsBox, Header, Actions, Footer, Content, Title, Subtitle, ContentTitle } from './Card.styles';
import { Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';

export interface CardProps<B = Breakpoints> extends BoxStyled<typeof Box, PropsBox>, WithMargin {
    /** Sizes */
    size?: PropsBox<B>['$size'];
    /* Stretch allows to expand card to 100% of parent's height */
    stretch?: PropsBox<B>['$stretch'];
    /* Card's title */
    title?: string;
    /* Header region */
    header?: ReactNode;
    /* Region to pass actions icons that will be displayed inside the header */
    actions?: ReactNode;
    /* Footer region */
    footer?: ReactNode;
}

function CardInternal<B extends void>(
    {
        children,
        title,
        header,
        actions,
        footer,
        size = 'l',
        stretch,
        ...rest
    }: CardProps<B extends void ? Breakpoints : B>,
    ref: Ref<HTMLDivElement>
) {
    const showHeader = header ?? title ?? actions;

    const cardTitle = useMemo(() => {
        if (header) {
            return header;
        }

        if (title) {
            return <H5>{title}</H5>;
        }

        return null;
    }, [header, title]);

    const { attrs, propsStyled } = getWhitespaceStyledProps(rest);

    return (
        <Box {...(attrs as {})} {...(propsStyled as {})} ref={ref} $size={size} $stretch={stretch}>
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
}

export const Card = forwardRef(CardInternal) as unknown as (<B = Breakpoints>(
    p: CardProps<B> & { ref?: Ref<HTMLDivElement> }
) => JSX.Element) & {
    displayName: string;
    Title: typeof H5;
    Subtitle: typeof Subtitle;
    ContentTitle: typeof ContentTitle;
};

Card.Title = H5;
Card.Subtitle = Subtitle;
Card.ContentTitle = ContentTitle;

Card.displayName = 'Card';
