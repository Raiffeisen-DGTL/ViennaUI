import styled, { css } from 'styled-components';
import { alarm } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';
import { AlarmDesign } from './Alarm';

const presets = getPresets(
    alarm,
    'alarm'
)({
    design: '$design',
    size: '$size',
});

export interface PropsBox {
    $design: AlarmDesign;
    $position?: 'relative' | 'absolute';
    $top?: string;
    $bottom?: string;
    $left?: string;
    $right?: string;
    $size?: 's' | 'm';
}
export const Box = styled.div<PropsBox>`
    position: ${({ $position }) => $position};
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    ${presets.design}
    ${presets.size}

    ${({ $position, $top, $bottom, $left, $right }) =>
        $position === 'absolute' &&
        css`
            top: ${$top ?? 'auto'};
            bottom: ${$bottom ?? 'auto'};
            left: ${$left ?? 'auto'};
            right: ${$right ?? 'auto'};
        `}
`;
