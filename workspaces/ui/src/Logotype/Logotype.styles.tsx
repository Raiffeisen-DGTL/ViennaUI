import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('logotype', {
    design: 'design',
    width: 'size',
    height: 'size',
});

const title = getPresets('logotype.title', {
    design: 'design',
    titleWidth: ({ locale, size }) => `logotype.title.width.${locale}.${size}`,
    gap: () => 'logotype.title.gap',
});

const custom = getPresets('logotype.custom', {
    root: null,
    logo: null,
    title: null,
});

export const Box = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    ${presets.height}

    ${custom.root}
`;

export const Logotype = styled.svg<any>`
    ${presets.design}
    ${presets.width}
    ${presets.height}

    ${custom.logo}
`;

export const Title = styled.svg<any>`
    ${presets.height}
    ${title.design}
    ${title.titleWidth}
    ${title.gap}

    ${custom.title}
`;
