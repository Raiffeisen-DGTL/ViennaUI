import styled, { css } from 'styled-components';
import { userprofile } from 'vienna.ui-theme';
import { color } from 'vienna.tokens';
import { getPresets } from '../Utils/styling';
import { ResponsiveProp, Breakpoints } from '../Utils/responsiveness';

const presets = getPresets(
    userprofile,
    'userprofile'
)({
    base: null,
    baseHover: null,
    profile: null,
});

const profile = getPresets(
    userprofile.profile,
    'userprofile.profile'
)({
    left: null,
    right: null,
});

const name = getPresets(
    userprofile.name,
    'userprofile.name'
)({
    size: ['$size', 'm'],
});

const description = getPresets(
    userprofile.description,
    'userprofile.description'
)({
    base: null,
});

export interface PropsBox {
    $position: 'left' | 'right';
    $noHover?: boolean;
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
    ${presets.base}

    &:hover {
        ${presets.baseHover}
    }

    &:focus {
        ${presets.baseHover}
    }

    ${({ $noHover }) =>
        $noHover &&
        css`
            pointer-events: none;
            cursor: auto;
            &:hover {
                color: ${color.primary.brand.primary};
            }
            &:focus {
                color: ${color.primary.brand.primary};
            }
        `}
    ${({ $position }) =>
        $position === 'right' &&
        css`
            flex-direction: row-reverse;
        `}
`;

export interface PropsProfile {
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
