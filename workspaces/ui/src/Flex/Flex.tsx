import React, { FC } from 'react';
import { Size, WithWhitespace } from '../Whitespace/utils';
import { Item, ItemProps } from './Item';
import { Box } from './Flex.styles';

interface Props {
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';

    /** This sets display to inline-flex */
    inline?: boolean;

    /** This sets justify-content and align-items to 'center' */
    center?: boolean;

    /** `space-evenly` are not supported by IE/ Edge */
    justifyContent?:
        | 'normal'
        | 'inherit'
        | 'initial'
        | 'unset'
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | 'stretch';

    /** `space-evenly`, `baseline` and `stretch` are not supported by IE/Edge */
    alignItems?:
        | 'normal'
        | 'inherit'
        | 'initial'
        | 'unset'
        | 'stretch'
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'self-start'
        | 'self-end'
        | 'baseline';

    alignContent?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | 'baseline'
        | 'stretch';

    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';

    /** This is a shorthand for <‘flex-direction’> || <‘flex-wrap’> */
    flow?: string;

    /** This sets spacing between the items inside the container */
    gap?: Size;
}

interface HTMLAttributeProps {
    [key: string]: any;
    id?: string;
    title?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
    tabIndex?: number;
}

export type FlexProps = HTMLAttributeProps & Props & WithWhitespace;

export const Flex: FC<FlexProps> & { Item: FC<ItemProps> } = (props) => {
    return <Box {...props} />;
};

Flex.Item = Item;

Flex.defaultProps = {
    direction: 'row',
};

export default Flex;
