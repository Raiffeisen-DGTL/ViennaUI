import React, { ComponentProps, forwardRef } from 'react';
import { ExecutionProps, StyleSheetManager } from 'styled-components';
import { getNonce } from 'vienna.react-use';
import { Box, GlobalStyles } from './Body.styles';

export type BodyProps = Partial<ExecutionProps & ComponentProps<typeof Box>> & {
    localFonts?: boolean;
    isVendorPrefixesDisabled?: boolean;
    enableStyleSheetManager?: boolean;
};

const getFontsCss = () => {
    const path = 'https://cdn-rf.raiffeisen.ru/ds/fonts';
    return `
        @font-face {
            font-family: 'ALS Hauss';
            font-display: swap;
            src: url('${path}/ALS_Hauss-Regular.eot'); /* Fix IE11 */
            src: url('${path}/ALS_Hauss-Regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: 'ALS Hauss';
            font-display: swap;
            src: url('${path}/ALS_Hauss-Medium.eot'); /* Fix IE11 */
            src: url('${path}/ALS_Hauss-Medium.woff') format('woff');
            font-weight: 500;
            font-style: normal;
        }

        @font-face {
            font-family: 'ALS Hauss';
            font-display: swap;
            src: url('${path}/ALS_Hauss-Bold.eot'); /* Fix IE11 */
            src: url('${path}/ALS_Hauss-Bold.woff') format('woff');
            font-weight: bold;
            font-style: normal;
        }

        @font-face {
            font-family: 'Navigo';
            font-display: swap;
            src: url('${path}/Navigo-Regular-Web.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: 'Navigo';
            font-display: swap;
            src: url('${path}/Navigo-Bold-Web.woff') format('woff');
            font-weight: bold;
            font-style: normal;
        }
    `;
};

export const Body = forwardRef<HTMLDivElement, BodyProps>(
    ({ isVendorPrefixesDisabled, enableStyleSheetManager = false, localFonts, ...attrs }, ref) => {
        const nonce = getNonce();
        const styleAttrs = nonce ? { nonce } : {};

        if (enableStyleSheetManager) {
            return (
                <StyleSheetManager enableVendorPrefixes={!(isVendorPrefixesDisabled ?? false)}>
                    <GlobalStyles />
                    <style {...styleAttrs}>{getFontsCss()}</style>
                    <Box {...attrs} ref={ref} />
                </StyleSheetManager>
            );
        }

        return (
            <>
                <GlobalStyles />
                <style {...styleAttrs}>{getFontsCss()}</style>
                <Box {...attrs} ref={ref} />
            </>
        );
    }
);

Body.displayName = 'Body';
