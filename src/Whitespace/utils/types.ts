import { ResponsiveProp } from '../../Utils/responsiveness';

export type Size =
    | 's1'
    | 's2'
    | 's3'
    | 's4'
    | 's5'
    | 's6'
    | 's7'
    | 's8'
    | 's9'
    | 's10'
    | 's11'
    | 's12'
    | 's13'
    | 's14'
    | 's15'
    | 's16';

export type Whitespace = ResponsiveProp<Size | string>;

type WhitespaceObject<Keys extends string> = Partial<Record<Keys, Whitespace>>;

type TransformPropsToStyledProps<T extends WhitespaceObject<Keys>, Keys extends string> = Partial<
    Record<`$${Keys}`, T[Keys]>
>;

export type WithMargin = WhitespaceObject<
    | 'margin'
    | 'marginTop'
    | 'marginBottom'
    | 'marginLeft'
    | 'marginRight'
    | 'marginHorizontal'
    | 'marginVertical'
    | 'm' // this is an alias for margin
    | 'mt' // this is an alias for marginTop
    | 'mb' // this is an alias for marginBottom
    | 'ml' // this is an alias for marginLeft
    | 'mr' // this is an alias for marginRight
    | 'mx' // this is an alias for marginHorizontal
    | 'my' // this is an alias for marginVertical
>;

export type WithPadding = WhitespaceObject<
    | 'padding'
    | 'paddingTop'
    | 'paddingBottom'
    | 'paddingLeft'
    | 'paddingRight'
    | 'paddingHorizontal'
    | 'paddingVertical'
    | 'p' // this is an alias for padding
    | 'pt' // this is an alias for paddingTop
    | 'pb' // this is an alias for paddingBottom
    | 'pl' // this is an alias for paddingLeft
    | 'pr' // this is an alias for paddingRight
    | 'px' // this is an alias for paddingHorizontal
    | 'py' // this is an alias for paddingVertical
>;

export type WithMarginStyled = TransformPropsToStyledProps<WithMargin, keyof WithMargin>;

export type WithPaddingStyled = TransformPropsToStyledProps<WithPadding, keyof WithPadding>;

export type WithWhitespaceStyled = WithMarginStyled & WithPaddingStyled;

export type WithWhitespace = WithMargin & WithPadding;
