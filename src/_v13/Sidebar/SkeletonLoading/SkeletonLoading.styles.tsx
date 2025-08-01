import { getPresets, getPresetsCustom } from '@/Utils/styling';
import { v13sidebar } from 'vienna.ui-theme';
import styled, { css } from 'styled-components';

const presets = getPresets(
    v13sidebar.skeleton,
    'sidebar.skeleton'
)({
    base: null,
    collapse: null,
    item: null,
    footer: null,
    placeholder: null,
});

const presetsCustom = getPresetsCustom('v13sidebar.skeleton')({
    base: null,
    collapse: null,
    item: null,
    footer: null,
    placeholder: null,
});

export const Container = styled.div`
    ${presets.base}
    ${presetsCustom.base}
`;

export const CollapseContainer = styled.div<{ $collapsed?: boolean }>`
    ${presets.collapse}
    ${presetsCustom.collapse}

    ${({ $collapsed }) =>
        $collapsed &&
        css`
            padding: 4px 0 4px 0px;
            justify-content: center;
        `}
`;

export const ItemContainer = styled.div<{ $collapsed?: boolean }>`
    ${presets.item}
    ${presetsCustom.item}

    ${({ $collapsed }) =>
        $collapsed &&
        css`
            justify-content: center;
        `}
`;

export const FooterContainer = styled.div<{ $collapsed?: boolean }>`
    ${presets.footer}
    ${presetsCustom.footer}

    ${({ $collapsed }) =>
        $collapsed &&
        css`
            padding: 10px 0 0;
            align-items: center;
        `}
`;

export const SkeletonPlaceholder = styled.div`
    ${presets.placeholder}
    ${presetsCustom.placeholder}
`;
