// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { readObjectByPath } from 'vienna.utils';
import { RuleSet, css } from 'styled-components';
import { systemBreakpoints } from '../responsiveness';

export const getCssRules = ({
    preset,
    props,
    themeKey,
    getThemeValue,
    key,
    getCssData,
}: {
    preset: [string, any];
    props: any;
    themeKey: string;
    getThemeValue: (propValue: string) => any;
    key?: string;
    getCssData?: (v: any) => RuleSet | Record<string, string>;
}) => {
    const [prop, defaultPropValue] = preset;
    const propValue = props[prop] || defaultPropValue;

    if (!propValue) {
        return getCssData ? getCssData(propValue) || {} : {};
    }

    const breakpoints = props.theme?.breakpoints || systemBreakpoints;
    const responsiveConfig =
        typeof propValue === 'object'
            ? { ...propValue }
            : (props.$media &&
                  Object.fromEntries(
                      Object.entries<any>(props.$media)
                          .map(([viewport, mediaPropValue]) => [viewport, mediaPropValue?.[prop]])
                          .filter(([, value]) => value)
                  )) ||
              (key && props.theme?.media?.[themeKey]?.[key]) ||
              {};

    responsiveConfig.base = responsiveConfig.base || propValue;

    const res = Object.entries<string>(responsiveConfig)
        .map(([breakpoint, value]) => {
            const data = getCssData ? getCssData(value) : getThemeValue(value);

            if (!data) {
                return null;
            }

            if (breakpoint === 'base') {
                return css`
                    ${data}
                `;
            }

            return css`
                @media only screen and ${breakpoints[breakpoint]} {
                    ${data}
                }
            `;
        })
        .filter(Boolean);

    return res;
};

export const getPresets = <K extends string>(defaultTheme: Record<K, any>, themeKey: string) => {
    type PropValue = string | boolean | null;
    type PresetValue = [string, PropValue] | string | null;
    type GetStyles = (props: AnyObject) => any;
    type GetStylesResponsive = GetStyles & {
        responsive: (getRules: ((value: PropValue) => any) | string) => any;
    };

    return <P extends Partial<Record<K, PresetValue>>>(presets: P) => {
        type Presets = { [T in keyof P]: P[T] extends PresetValue ? GetStyles : GetStylesResponsive };

        return Object.fromEntries(
            Object.entries<PresetValue>(presets as any).map(([key, preset]) => {
                const createGetStyles = (getCssData?: (v: any) => RuleSet | Record<string, string>) => (props) => {
                    const getThemeValue = (propValue: string) =>
                        readObjectByPath(props.theme, themeKey)?.[key]?.[propValue] || defaultTheme?.[key]?.[propValue];

                    // responsive
                    if (Array.isArray(preset)) {
                        return getCssRules({
                            preset,
                            props,
                            themeKey,
                            getThemeValue,
                            key,
                            getCssData,
                        });
                    }

                    // value from theme
                    if (preset === null) {
                        return readObjectByPath(props.theme, themeKey)?.[key] || defaultTheme?.[key];
                    }

                    // value from theme by props
                    return getThemeValue(props[preset]);
                };

                const getStyles = createGetStyles() as GetStylesResponsive;

                getStyles.responsive = (getRules) => {
                    const getCssData = typeof getRules === 'string' ? (v) => (v ? { [getRules]: v } : {}) : getRules;
                    return (props) => {
                        const styles = createGetStyles(getCssData)(props);
                        return styles;
                    };
                };

                return [key, getStyles];
            })
        ) as Presets;
    };
};

export const getPresetsCustom = (themeKey: string) => getPresets({}, themeKey);
