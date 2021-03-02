import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const option = getPresets('breadcrumbs.option', {
    base: null,
    hover: null,
    size: 'size',
    custom: null,
});

const icon = getPresets('breadcrumbs.icon', {
    size: 'size',
    custom: null,
});

export const Box = styled.div<{
    size?: 's' | 'm' | 'l';
    active?: boolean;
    first?: boolean;
    preLast?: boolean;
    minWidth?: number;
}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    ${option.base}

    ${({ first }) => !first && `min-width: 0;`}
    ${({ preLast, minWidth }) => preLast && `min-width: ${minWidth ?? 0}px;`}

    &:hover {
        ${option.hover}
    }

    ${({ active }) =>
        active &&
        css`
            ${option.hover}
        `}

    ${option.size}
    ${option.custom}
`;

export const Link = styled.a`
    position: relative;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: inherit;
    &:hover {
        color: inherit;
    }
`;

export const Text = styled.div<{ first?: boolean }>`
    display: inline;
    ${({ first }) =>
        first &&
        css`
            display: flex;
            flex-direction: row;
            align-items: center;
        `}
`;

export const HiddenText = styled.div`
    position: absolute;
    z-index: -1;
    visibility: hidden;
`;

export const Icon = styled.div<{ size?: 's' | 'm' | 'l' }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${icon.size}
    ${icon.custom}
`;
