import React, { ComponentProps, forwardRef, ForwardRefExoticComponent } from 'react';
import { getWhitespaceStyledProps, WithWhitespace } from '../Whitespace/utils';
import { Item } from './Item';
import { Box, PropsBox } from './Flex.styles';
import { WithMedia } from '../Utils/responsiveness';

interface FlexBaseProps {
    direction?: PropsBox['$direction'];
    /** This sets display to inline-flex */
    inline?: PropsBox['$inline'];
    /** This sets justify-content and align-items to 'center' */
    center?: PropsBox['$center'];
    /** `space-evenly` are not supported by IE/ Edge */
    justifyContent?: PropsBox['$justifyContent'];
    /** `space-evenly`, `baseline` and `stretch` are not supported by IE/Edge */
    alignItems?: PropsBox['$alignItems'];
    alignContent?: PropsBox['$alignContent'];
    wrap?: PropsBox['$wrap'];
    /** This is a shorthand for <‘flex-direction’> || <‘flex-wrap’> */
    flow?: PropsBox['$flow'];
    /** This sets spacing between the items inside the container */
    gap?: PropsBox['$gap'];
}

export interface FlexProps
    extends FlexBaseProps,
        Omit<ComponentProps<typeof Box>, keyof PropsBox>,
        WithWhitespace,
        WithMedia<FlexBaseProps & WithWhitespace> {}

export const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
    const {
        children,
        inline = false,
        direction = 'row',
        center,
        justifyContent,
        alignItems,
        alignContent,
        wrap,
        flow,
        gap,
        ...rest
    } = props;

    const { attrs, propsStyled } = getWhitespaceStyledProps(rest);

    return (
        <Box
            {...(attrs as {})}
            {...(propsStyled as {})}
            ref={ref}
            $inline={inline}
            $direction={direction}
            $center={center}
            $justifyContent={justifyContent}
            $alignItems={alignItems}
            $alignContent={alignContent}
            $wrap={wrap}
            $flow={flow}
            $gap={gap}>
            {children}
        </Box>
    );
}) as ForwardRefExoticComponent<FlexProps> & { Item: typeof Item };

Flex.Item = Item;
Flex.displayName = 'Flex';
