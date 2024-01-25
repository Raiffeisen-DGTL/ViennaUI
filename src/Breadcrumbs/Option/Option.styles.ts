import styled, { css } from 'styled-components';
import { getPresets } from '../../Utils/styling';

const option = getPresets('breadcrumbs.option', {
    base: null,
    hover: null,
    size: '$size',
    custom: null,
});

const icon = getPresets('breadcrumbs.icon', {
    size: '$size',
    custom: null,
});

export interface PropsBox {
    $size?: 's' | 'm' | 'l';
    $active?: boolean;
    $first?: boolean;
    $preLast?: boolean;
    $minWidth?: number;
}
export const Box = styled.div<PropsBox>`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    ${option.base}

    ${({ $first }) =>
        !$first &&
        css`
            min-width: 0;
        `}
    ${({ $preLast, $minWidth }) =>
        $preLast &&
        css`
            min-width: ${$minWidth ?? 0}px;
        `}

    &:hover {
        ${option.hover}
    }

    ${({ $active }) =>
        $active &&
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

type PropsText = Pick<PropsBox, '$first'>;
export const Text = styled.div<PropsText>`
    display: inline;
    ${({ $first }) =>
        $first &&
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

type PropsIcon = Pick<PropsBox, '$size'>;
export const Icon = styled.div<PropsIcon>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${icon.size}
    ${icon.custom}
`;
