import styled from 'styled-components';
import React, { ComponentProps } from 'react';
import { WithWhitespace, WithWhitespaceStyled, getWhitespaceStyledProps, withWhitespace } from '../Whitespace/utils';
import { ResponsiveProp, WithMedia, WithMediaStyled } from '../Utils/responsiveness';
import { getPresetsCustom } from '../Utils/styling';

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

const flex = getPresetsCustom('flex')({
    order: ['$order'],
    grow: ['$grow'],
    shrink: ['$shrink'],
    basis: ['$basis'],
    flex: ['$flex'],
    alignSelf: ['$alignSelf'],
});

const Box = styled.div<PropsBox>`
    ${flex.order.responsive('order')};
    ${flex.grow.responsive('flex-grow')};
    ${flex.shrink.responsive('flex-shrink')};
    ${flex.basis.responsive('flex-basis')};
    ${flex.flex.responsive('flex')};
    ${flex.alignSelf.responsive('align-self')};

    ${withWhitespace({}, 'flexItem')}
`;

interface PropsItemBase {
    order?: PropsBox['$order'];
    grow?: PropsBox['$grow'];
    shrink?: PropsBox['$shrink'];
    basis?: PropsBox['$basis'];
    flex?: PropsBox['$flex'];
    alignSelf?: PropsBox['$alignSelf'];
}

export interface PropsItem
    extends PropsItemBase,
        Omit<ComponentProps<typeof Box>, keyof PropsBox>,
        WithWhitespace,
        WithMedia<PropsItemBase & WithWhitespace> {}

export const Item: React.FC<PropsItem> = ({ children, order, grow, shrink, basis, flex, alignSelf, ...rest }) => {
    const { attrs, propsStyled } = getWhitespaceStyledProps(rest);

    return (
        <Box
            {...attrs}
            {...propsStyled}
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
