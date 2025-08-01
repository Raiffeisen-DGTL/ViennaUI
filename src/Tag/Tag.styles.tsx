import styled, { css } from 'styled-components';
import { tag } from 'vienna.ui-theme';
import { color } from 'vienna.tokens';
import { getPresets } from '../Utils/styling';
import { Breakpoints, ResponsiveProp } from '../Utils/responsiveness';
import { SizeType } from '../Utils';

const presets = getPresets(
    tag.tag,
    'tag.tag'
)({
    base: null,
    design: '$design',
    hover: '$design',
    focus: '$design',
    disabled: null,
    size: ['$size', 'l'],
    padding: ['$size', 'l'],
    custom: null,
});

const text = getPresets(
    tag.text,
    'tag.text'
)({
    base: null,
    custom: null,
});

const cross = getPresets(
    tag.cross,
    'tag.cross'
)({
    base: null,
    hover: '$design',
    disabled: null,
    focus: null,
    custom: null,
});

export interface BoxStyledProps<B = Breakpoints> {
    $design?: 'gray' | 'primary' | 'ghost';
    $size?: ResponsiveProp<SizeType<'xs' | 's' | 'm' | 'l'>, B>;
    $disabled?: boolean;
    $maxWidth?: string;
}

export const Box = styled.span<BoxStyledProps>`
    ${presets.base}
    ${presets.size}

    ${({ $design, $disabled }) =>
        $disabled
            ? css`
                  ${presets.disabled}
                  ${presets.padding}
              `
            : css`
                  ${presets.design}
                  ${$design !== 'ghost' && presets.padding}
                  cursor: pointer;

                  &:hover {
                      ${presets.hover}
                  }

                  &:focus-visible {
                      ${presets.focus}
                  }
              `}

    ${({ $maxWidth }) =>
        $maxWidth &&
        css`
            max-width: ${$maxWidth};
        `}

${presets.custom}
`;

export const Text = styled.span`
    ${text.base}
    ${text.custom}
`;

export interface CrossStyledProps {
    $design: BoxStyledProps['$design'];
    $disabled?: boolean;
}

export const Cross = styled.span<CrossStyledProps>`
    ${cross.base}

    ${({ $disabled }) =>
        !$disabled &&
        css`
            cursor: pointer;
        `}

    &:hover {
        ${({ $disabled }) => !$disabled && cross.hover}
    }

    &:focus-visible {
        ${cross.focus}
    }

    > svg {
        display: block;
    }

    ${cross.custom}

    ${({ $disabled }) =>
        $disabled &&
        css`
            > svg {
                color: ${color.primary.seattle.c30};
                -webkit-text-fill-color: ${color.primary.seattle.c30};
            }
        `}

    ${({ $disabled }) => $disabled && cross.disabled}
`;

export interface GroupStyledProps {
    $offset: number;
    $nowrap?: boolean;
    $fitContent?: boolean;
}

export const Group = styled.div<GroupStyledProps>`
    display: flex;
    max-width: 100%;
    flex-wrap: ${({ $nowrap }) => ($nowrap ? 'nowrap' : 'wrap')};
    margin-top: ${({ $offset }) => `-${$offset}px`};

    column-gap: ${({ $offset }) => `${$offset}px`};

    > *:first-child {
        border-radius: 4px;
    }

    > * {
        margin-top: ${({ $offset }) => `${$offset}px`};

        ${({ $fitContent }) =>
            $fitContent &&
            css`
                min-width: fit-content;
            `};
    }
`;
