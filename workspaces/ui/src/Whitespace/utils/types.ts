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

export type Whitespace = Size | string;

export interface WithMargin {
    margin?: Whitespace;
    marginTop?: Whitespace;
    marginBottom?: Whitespace;
    marginLeft?: Whitespace;
    marginRight?: Whitespace;
    marginHorizontal?: Whitespace;
    marginVertical?: Whitespace;

    /* this is an alias for margin */
    m?: Whitespace;

    /* this is an alias for marginTop */
    mt?: Whitespace;

    /* this is an alias for marginBottom */
    mb?: Whitespace;

    /* this is an alias for marginLeft */
    ml?: Whitespace;

    /* this is an alias for marginRight */
    mr?: Whitespace;

    /* this is an alias for marginHorizontal */
    mx?: Whitespace;

    /* this is an alias for marginVertical */
    my?: Whitespace;
}

export interface WithPadding {
    padding?: Whitespace;
    paddingTop?: Whitespace;
    paddingBottom?: Whitespace;
    paddingLeft?: Whitespace;
    paddingRight?: Whitespace;
    paddingHorizontal?: Whitespace;
    paddingVertical?: Whitespace;

    /* this is an alias for padding */
    p?: Whitespace;

    /* this is an alias for paddingTop */
    pt?: Whitespace;

    /* this is an alias for paddingBottom */
    pb?: Whitespace;

    /* this is an alias for paddingLeft */
    pl?: Whitespace;

    /* this is an alias for paddingRight */
    pr?: Whitespace;

    /* this is an alias for paddingHorizontal */
    px?: Whitespace;

    /* this is an alias for paddingVertical */
    py?: Whitespace;
}

export type WithWhitespace = WithMargin & WithPadding;
