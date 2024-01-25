import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';
import { CounterDesign } from './Counter';

const presets = getPresets('counter', {
    base: null,
    design: '$design',
});

export interface PropsBox {
    $design?: CounterDesign;
    $position?: 'relative' | 'absolute';
    $top?: string;
    $bottom?: string;
    $left?: string;
    $right?: string;
}
export const Box = styled.span<PropsBox>`
    position: ${({ $position }) => $position};
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    ${presets.base}
    ${presets.design}

    ${({ $position, $top, $bottom, $left, $right }) =>
        $position === 'absolute' &&
        css`
            top: ${$top ?? 'auto'};
            bottom: ${$bottom ?? 'auto'};
            left: ${$left ?? 'auto'};
            right: ${$right ?? 'auto'};
        `}
`;
