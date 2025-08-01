import styled, { css } from 'styled-components';
import { roundIcon } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';
import { Breakpoints, ResponsiveProp } from '../Utils/responsiveness';

const presets = getPresets(
    roundIcon,
    'roundIcon'
)({
    base: null,
    color: '$color',
    size: ['$size', 'm'],
    custom: null,
});

export interface PropsBox<B = Breakpoints> {
    $size?: ResponsiveProp<'xs' | 's' | 'm' | 'l' | 'xl', B>;
    $clickable?: boolean;
    $color?:
        | 'seattle10'
        | 'seattle30'
        | 'seattle60'
        | 'oslo10'
        | 'oslo60'
        | 'miami10'
        | 'miami100'
        | 'nice10'
        | 'nice100'
        | 'dubai10'
        | 'dubai100'
        | 'paris10'
        | 'paris100'
        | 'sochi10'
        | 'sochi100'
        | 'tokyo10'
        | 'tokyo100'
        | 'dublin10'
        | 'dublin100'
        | 'bern10'
        | 'bern100'
        | 'manila10'
        | 'manila100'
        | 'tallin10'
        | 'tallin100'
        | 'seoul10'
        | 'seoul100'
        | 'havana10'
        | 'havana100'
        | 'madrid10'
        | 'madrid100'
        | 'porto10'
        | 'porto100';
}
export const Box = styled.div<PropsBox>`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    ${presets.base}
    ${presets.size}
    ${presets.color}
    ${presets.custom}

    ${({ $clickable }) =>
        $clickable &&
        css`
            cursor: pointer;
        `}
`;
