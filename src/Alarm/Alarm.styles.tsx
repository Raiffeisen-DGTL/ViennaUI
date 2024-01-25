import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';
import { AlarmDesign } from './Alarm';

const { base, design } = getPresets('alarm', {
    base: null,
    design: '$design',
});

export interface PropsBox {
    $design: AlarmDesign;
    $position?: 'relative' | 'absolute';
    $top?: string;
    $bottom?: string;
    $left?: string;
    $right?: string;
}
export const Box = styled.div<PropsBox>`
    position: ${({ $position }) => $position};
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    ${base}
    ${design}

    ${({ $position, $top, $bottom, $left, $right }) =>
        $position === 'absolute' &&
        css`
            top: ${$top ?? 'auto'};
            bottom: ${$bottom ?? 'auto'};
            left: ${$left ?? 'auto'};
            right: ${$right ?? 'auto'};
        `}
`;
