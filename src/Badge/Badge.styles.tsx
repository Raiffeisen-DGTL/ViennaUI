import styled, { css } from 'styled-components';
import { badge } from 'vienna.ui-theme';
import { getPresets, getPresetsCustom } from '../Utils/styling';
import { Breakpoints, ResponsiveProp } from '../Utils/responsiveness';
import { BadgeColor } from './Badge';

const presets = getPresets(
    badge,
    'badge'
)({
    base: null,
    color: '$color',
    size: ['$size', 'm'],
    gap: ['$size', 'm'],
});

const custom = getPresetsCustom('badge.custom')({
    box: null,
    item: null,
});

export interface PropsBox<B = Breakpoints> {
    $color?: BadgeColor;
    $size?: ResponsiveProp<'xs' | 's' | 'm' | 'l' | 'xl', B>;
    $grid?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
export const Box = styled.span<PropsBox>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    white-space: nowrap;
    appearance: none;
    outline: 0;
    position: relative;

    ${presets.base}
    ${presets.size}
    ${presets.color}

    ${({ $grid }) =>
        $grid &&
        css`
            width: ${$grid ? `${(100 / 12) * $grid}%` : 'auto'};
        `}

    ${custom.box}
`;

export const Item = styled.span`
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:not(:last-child) {
        ${presets.gap}
    }

    & > svg {
        display: block;
    }

    ${custom.item}
`;
