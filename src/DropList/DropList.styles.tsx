import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';

const list = getPresets('dropList.list', {
    base: null,
    custom: null,
});

export interface PropsBox {
    $width?: number;
    $maxHeight?: number;
    $fitItems?: boolean;
    $scrollable?: boolean;
}
export const Box = styled.div<PropsBox>`
    opacity: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 1000;

    ${list.base}

    ${({ $scrollable }) =>
        $scrollable &&
        css`
            overflow: auto;
        `}
    ${({ $fitItems }) =>
        $fitItems &&
        css`
            max-width: 100%;
            min-width: 100%;
        `}
    ${({ $width }) =>
        $width &&
        css`
            min-width: ${$width}px;
            width: ${$width}px;
            max-width: ${$width}px;
        `}
    ${({ $maxHeight }) =>
        $maxHeight &&
        css`
            max-height: ${$maxHeight}px;
        `};
    ${list.custom}
`;
