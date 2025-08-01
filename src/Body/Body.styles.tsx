import styled, { createGlobalStyle } from 'styled-components';
import { body } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';

const presets = getPresets(
    body,
    'body'
)({
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
