import styled from 'styled-components';
import { search } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';

const presets = getPresets(
    search,
    'search'
)({
    base: null,
    custom: null,
});

const icon = getPresets(
    search.icon,
    'search.icon'
)({
    base: null,
    hover: null,
    custom: null,
});

export const Box = styled.div`
    position: relative;
    ${presets.base}
    ${presets.custom}
`;

export const ClearIconWrapper = styled.div`
    ${icon.base}
    &:hover {
        ${icon.hover}
    }
    ${icon.custom}
`;
