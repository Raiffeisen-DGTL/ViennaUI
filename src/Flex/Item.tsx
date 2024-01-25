import styled from 'styled-components';
import React, { ComponentProps } from 'react';
import { WithWhitespace, WithWhitespaceStyled, getWhitespaceStyledProps, withWhitespace } from '../Whitespace/utils';
import { ResponsiveProp, WithMedia, WithMediaStyled, responsiveProp } from '../Utils/responsiveness';

interface PropsBox extends WithWhitespaceStyled, WithMediaStyled {
    $order?: ResponsiveProp<string>;
    $grow?: ResponsiveProp<string>;
    $shrink?: ResponsiveProp<string>;
    $basis?: ResponsiveProp<string>;
    $flex?: ResponsiveProp<string>;
    $alignSelf?: ResponsiveProp<
        | 'auto'
        | 'start'
        | 'flex-start'
        | 'end'
        | 'flex-end'
        | 'center'
        | 'baseline'
        | 'first baseline'
        | 'last baseline'
        | 'stretch'
    >;
}

const Box = styled.div<PropsBox>`
    ${responsiveProp('flex', '$order', 'order')};
    ${responsiveProp('flex', '$grow', 'flex-grow')};
    ${responsiveProp('flex', '$shrink', 'flex-shrink')};
    ${responsiveProp('flex', '$basis', 'flex-basis')};
    ${responsiveProp('flex', '$flex', 'flex')};
    ${responsiveProp('flex', '$alignSelf', 'align-self')};

    ${withWhitespace('flexItem')}
`;

interface PropsItemBase {
    order?: PropsBox['$order'];
    grow?: PropsBox['$grow'];
    shrink?: PropsBox['$shrink'];
    basis?: PropsBox['$basis'];
    flex?: PropsBox['$flex'];
    alignSelf?: PropsBox['$alignSelf'];
}

interface PropsItem
    extends PropsItemBase,
        Omit<ComponentProps<typeof Box>, keyof PropsBox>,
        WithWhitespace,
        WithMedia<PropsItemBase & WithWhitespace> {}

export const Item: React.FC<PropsItem> = ({ children, order, grow, shrink, basis, flex, alignSelf, ...rest }) => {
    const { attrs, propsStyled } = getWhitespaceStyledProps(rest);

    return (
        <Box
            {...(attrs as {})}
            {...(propsStyled as {})}
            $order={order}
            $grow={grow}
            $shrink={shrink}
            $basis={basis}
            $flex={flex}
            $alignSelf={alignSelf}>
            {children}
        </Box>
    );
};
