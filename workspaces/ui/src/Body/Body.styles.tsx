import styled, { createGlobalStyle } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('body', {
    base: null,
});

export const Box = styled.div`
    ${presets.base}
    font-feature-settings: normal;
    -webkit-font-smoothing: antialiased;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;
    }

    a {
        background-color: transparent;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    template {
        display: none;
    }

    [hidden] {
        display: none;
    }
`;

export const GlobalCustomFonts = createGlobalStyle`
    @font-face {
        font-family: 'ALS Hauss';
        font-display: swap;
        src: url('https://www.raiffeisen.ru/common/new/images/fonts/ALS_Hauss-Regular.eot'); /* Fix IE11 */
        src: url('https://www.raiffeisen.ru/common/new/images/fonts/ALS_Hauss-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'ALS Hauss';
        font-display: swap;
        src: url('https://www.raiffeisen.ru/common/new/images/fonts/ALS_Hauss-Medium.eot'); /* Fix IE11 */
        src: url('https://www.raiffeisen.ru/common/new/images/fonts/ALS_Hauss-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'ALS Hauss';
        font-display: swap;
        src: url('https://www.raiffeisen.ru/common/new/images/fonts/ALS_Hauss-Bold.eot'); /* Fix IE11 */
        src: url('https://www.raiffeisen.ru/common/new/images/fonts/ALS_Hauss-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Navigo';
        font-display: swap;
        src: url('https://www.raiffeisen.ru/common/new/images/fonts/Navigo-Bold-Web.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;
