import { WithWhitespaceStyled, WithMarginStyled, WithPaddingStyled, WithWhitespace } from './types';
import { getCssRules } from '../../Utils/styling';
import { size } from './utils';
import { AnyObject } from '../../Utils';

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
export const getWhitespaceStyledProps = (props: WithWhitespace | string) => {
    const attrs: AnyObject = {};
    const propsStyled: WithMarginStyled & WithPaddingStyled = {};
    Object.entries(props).forEach(([key, value]) => {
        const styledKey = `$${key}` as keyof typeof propsStyled;
        if (whitespaceKeys.includes(styledKey)) {
            propsStyled[styledKey] = value;
        } else {
            attrs[key] = value;
        }
    });
    return { attrs, propsStyled };
};

const createWithMap =
    <Props>(map: typeof marginsMap | typeof paddingsMap) =>
    (themeValue: AnyObject, themeKey: string) =>
    (props: Props) => {
        return Object.entries(map).map(([key, cssProperty]) => {
            const cssProperties = Array.isArray(cssProperty) ? cssProperty : [cssProperty];
            const rules = cssProperties.map((cssProperty) =>
                getCssRules({
                    props,
                    themeKey,
                    getThemeValue: (propValue) => themeValue[propValue],
                    preset: [key, null],
                    getCssData: (v: string) => ({ [cssProperty]: size(v) || v }),
                })
            );
            return rules;
        });
    };

export const withMargin = createWithMap<WithMarginStyled>(marginsMap);
export const withPadding = createWithMap<WithPaddingStyled>(paddingsMap);
export const withWhitespace = createWithMap<WithWhitespaceStyled>({ ...marginsMap, ...paddingsMap });
