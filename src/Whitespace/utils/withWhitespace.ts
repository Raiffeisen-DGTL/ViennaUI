import { RuleSet } from 'styled-components';
import { responsiveProp } from '../../Utils/responsiveness';
import { WithWhitespaceStyled, WithMarginStyled, WithPaddingStyled } from './types';
import { parseProperty } from './utils';

const marginsMap: Record<keyof WithMarginStyled, string | string[]> = {
    $margin: 'margin',
    $marginHorizontal: ['margin-left', 'margin-right'],
    $marginVertical: ['margin-top', 'margin-bottom'],
    $marginTop: 'margin-top',
    $marginBottom: 'margin-bottom',
    $marginLeft: 'margin-left',
    $marginRight: 'margin-right',

    // aliases
    $m: 'margin',
    $mx: ['margin-left', 'margin-right'],
    $my: ['margin-top', 'margin-bottom'],
    $mt: 'margin-top',
    $mb: 'margin-bottom',
    $ml: 'margin-left',
    $mr: 'margin-right',
};

const paddingsMap: Record<keyof WithPaddingStyled, string | string[]> = {
    $padding: 'padding',
    $paddingHorizontal: ['padding-left', 'padding-right'],
    $paddingVertical: ['padding-top', 'padding-bottom'],
    $paddingTop: 'padding-top',
    $paddingBottom: 'padding-bottom',
    $paddingLeft: 'padding-left',
    $paddingRight: 'padding-right',

    // aliases
    $p: 'padding',
    $px: ['padding-left', 'padding-right'],
    $py: ['padding-top', 'padding-bottom'],
    $pt: 'padding-top',
    $pb: 'padding-bottom',
    $pl: 'padding-left',
    $pr: 'padding-right',
};

const whitespaceKeys = [...Object.keys(marginsMap), ...Object.keys(paddingsMap)];
export const getWhitespaceStyledProps = (props: Record<string, any>) => {
    const attrs: Record<string, any> = {};
    const propsStyled: WithMarginStyled & WithPaddingStyled = {};
    Object.entries(props).forEach(([key, value]) => {
        const styledKey = `$${key}`;
        if (whitespaceKeys.includes(styledKey)) {
            propsStyled[styledKey] = value;
        } else {
            attrs[key] = value;
        }
    });
    return { attrs, propsStyled };
};

const useProps = (context, map, props) => {
    return Object.keys(map)
        .map((key) => {
            return responsiveProp(context, key, (value) => {
                return parseProperty(map[key], value);
            })(props);
        })
        .filter((v): v is RuleSet[] => Boolean(v));
};

const defaultContext = 'whitespace';

export const withMargin = (context) => (props: WithMarginStyled) => {
    return useProps(context ?? defaultContext, marginsMap, props);
};

export const withPadding = (context) => (props: WithPaddingStyled) => {
    return useProps(context ?? defaultContext, paddingsMap, props);
};

export const withWhitespace = (context) => (props: WithWhitespaceStyled) => {
    return [...withMargin(context)(props), ...withPadding(context)(props)];
};
