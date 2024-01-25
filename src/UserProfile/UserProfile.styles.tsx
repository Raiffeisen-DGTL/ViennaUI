import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';
import { responsivePreset, ResponsiveProp, Breakpoints } from '../Utils/responsiveness';

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
    size: responsivePreset('$size', 'm'),
});

const description = getPresets('userprofile.description', {
    base: null,
});

export interface PropsBox {
    $position: 'left' | 'right';
}
export const Box = styled.span<PropsBox>`
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

    ${({ $position }) =>
        $position === 'right' &&
        css`
            flex-direction: row-reverse;
        `}
`;

interface PropsProfile {
    $position: 'left' | 'right';
}
export const Profile = styled.span<PropsProfile>`
    width: fit-content;

    ${({ $position }) => {
        switch ($position) {
            case 'left':
                return css`
                    ${profile.left}
                `;
            case 'right':
                return css`
                    ${profile.right}
                `;
            default:
                return null;
        }
    }}
`;

export interface Size<B = Breakpoints> {
    $size: ResponsiveProp<'xs' | 's' | 'm', B>;
}

export const Name = styled.span<Size>`
    ${name.size}
`;

export const Description = styled.span<Size>`
    display: block;
    ${description.base}

    ${({ $size }) =>
        $size !== 'm' &&
        css`
            display: none;
        `}
`;
