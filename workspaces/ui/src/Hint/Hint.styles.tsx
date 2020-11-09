import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const definition = getPresets('hint.definition', {
    base: null,
    custom: null,
});

const wrapper = getPresets('hint.wrapper', {
    base: null,
    custom: null,
});

const icon = getPresets('hint.icon', {
    base: null,
    hover: null,
    custom: null,
    size: 'size',
});

export const Definition = styled.span`
    ${definition.base}
    ${definition.custom}
`;

export const Wrapper = styled.span`
    ${wrapper.base}
    ${wrapper.custom}
`;

export const Icon = styled.svg<{ size?: 's' | 'm' | 'l' }>`
    ${icon.base}
    ${icon.size}
    &:hover {
        ${icon.hover}
    }
    &:focus {
        ${icon.hover}
    }
    ${icon.custom}
`;
