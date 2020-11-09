import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const box = getPresets('userprofile', {
    base: null,
    baseHover: null,
    profile: null,
});

const profile = getPresets('userprofile.profile', {
    left: null,
    right: null,
});

const name = getPresets('userprofile.name', {
    size: 'size',
});

const description = getPresets('userprofile.description', {
    base: null,
});

export const Box = styled.span<{ position: 'left' | 'right' }>`
    position: relative;
    width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
    outline: none;
    ${box.base}

    &:hover {
        ${box.baseHover}
    }

    &:focus {
        ${box.baseHover}
    }

    ${(props) =>
        props.position === 'right' &&
        css`
            flex-direction: row-reverse;
        `}
`;

export const Profile = styled.span<{ position: 'left' | 'right' }>`
    width: fit-content;

    ${(props) =>
        props.position === 'left' &&
        css`
            ${profile.left}
        `}

    ${(props) =>
        props.position === 'right' &&
        css`
            ${profile.right}
        `}
`;

export const Name = styled.span<{ size: 'xs' | 's' | 'm' }>`
    ${name.size}
`;

export const Description = styled.span<{ size: 'xs' | 's' | 'm' }>`
    display: block;
    ${description.base}

    ${(props) =>
        props.size !== 'm' &&
        css`
            display: none;
        `}
`;
