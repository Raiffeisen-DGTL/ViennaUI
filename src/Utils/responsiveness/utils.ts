import { css } from 'styled-components';
import { getBreakpoints } from './Breakpoints';

export function parseMediaProp(mediaProp, propName) {
    const media = Object.assign(
        {},
        ...Object.keys(mediaProp).map((viewport) => {
            const value = mediaProp[viewport][propName];

            if (!value) {
                return undefined;
            }

            return {
                [viewport]: value,
            };
        })
    );

    return media;
}

function getBreakPoints(props) {
    const context = props.theme?.breakpoints;
    return context ?? getBreakpoints();
}

function getResponsiveConfig(props, context, propName) {
    // media config as a prop on a component overwrites everything else
    // if we got it – immediately return it
    if (typeof props[propName] === 'object') {
        return props[propName];
    }

    // then look for 'media' prop
    const mediaProp = props.$media ? parseMediaProp(props.$media, propName) : undefined;

    if (typeof mediaProp === 'object') {
        return mediaProp;
    }

    // after that look for a context
    const mediaContext = props.theme?.media?.[context]?.[propName];
    if (typeof mediaContext === 'object') {
        return mediaContext;
    }

    return {};
}

export function buildStyles(mediaConfig, breakpoints, getStyle) {
    const style = Object.assign(
        {},
        ...Object.keys(mediaConfig).map((breakpoint) => {
            const key = breakpoint === 'base' ? breakpoint : breakpoints[breakpoint];

            return {
                [key]: getStyle(mediaConfig[breakpoint]),
            };
        })
    );

    return style;
}

export function buildCSS(style) {
    const media = Object.keys(style).map((breakpoint) => {
        if (breakpoint === 'base') {
            return css`
                ${style.base}
            `;
        }

        return css`
            @media only screen and ${breakpoint} {
                ${style[breakpoint]}
            }
        `;
    });

    return media;
}

export function getStyles(props, context, propName, getStyle, defaultValue?) {
    const breakpoints = getBreakPoints(props);
    const responsiveConfig = getResponsiveConfig(props, context, propName);

    // if base is missing in the passed config, we're using either prop value or default value as base
    if (responsiveConfig.base === undefined) {
        if (props[propName] === undefined && defaultValue === undefined) {
            return undefined;
        }

        responsiveConfig.base = props[propName] ?? defaultValue;
    }

    const styles = buildStyles(responsiveConfig, breakpoints, getStyle);
    const css = buildCSS(styles);

    return css;
}
