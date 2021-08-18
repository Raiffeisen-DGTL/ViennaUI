import styled, { css } from 'styled-components';
import { getPresets } from '../ThemeProvider';

export interface LyaoutProps {
    align?: 'flex-start ' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export interface BodyProps extends LyaoutProps {
    scroll?: boolean;
    maxHeight?: number;
}

const head = getPresets('screen.head', {
    base: null,
});

const title = getPresets('screen.title', {
    base: null,
});

const subtitle = getPresets('screen.subtitle', {
    base: null,
});

const body = getPresets('screen.body', {
    base: null,
});

const footer = getPresets('screen.footer', {
    base: null,
    shift: null,
});

const custom = getPresets('screen.custom', {
    main: null,
    head: null,
    title: null,
    subtitle: null,
    footer: null,
    gradientTop: null,
    gradientBottom: null,
});

const gradientTop = getPresets('screen.gradientTop', {
    base: null,
});

const gradientBottom = getPresets('screen.gradientBottom', {
    base: null,
});

export const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    ${custom.main}
`;

export const Head = styled.div`
    ${head.base}
    width: 100%;
    ${custom.head}
`;

export const HeadContent = styled.div<LyaoutProps>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${({ align }) => align ?? 'flex-start'};
    ${custom.headContent}
`;

export const Title = styled.div<LyaoutProps>`
    ${title.base}
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${({ align }) => align ?? 'flex-start'};

    ${custom.title}
`;

export const SubTitle = styled.div<LyaoutProps>`
    ${subtitle.base}
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${({ align }) => align ?? 'flex-start'};
    ${custom.subtitle}
`;
export const Body = styled.div<BodyProps>`
    ${body.base}
    justify-content: ${({ align }) => align ?? 'flex-start'};
    flex-grow: 1;
    max-width: 100%;
    ${({ scroll, maxHeight }) =>
        scroll &&
        css`
            overflow-y: auto;
            max-height: ${maxHeight}px;
        `};
    ${custom.body}
`;

export const Footer = styled.div<LyaoutProps>`
    ${footer.base}
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${({ align }) => align ?? 'flex-end'};
    ${custom.footer}
    ${custom.footer}
`;

export const GradientTop = styled.div`
    position: sticky;
    left: 0;
    top: 0;
    width: 100%;
    ${gradientTop.base}
    ${custom.gradientTop}
`;

export const GradientBottom = styled.div`
    position: sticky;
    left: 0;
    bottom: 0;
    width: 100%;
    ${gradientBottom.base}
    ${custom.gradientBottom}
`;
