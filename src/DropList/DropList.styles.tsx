import styled, { css } from 'styled-components';
import { dropList } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';
import { ReactRefType } from '../Utils';

const list = getPresets(
    dropList.list,
    'dropList.list'
)({
    base: null,
    custom: null,
});

export interface PropsBox {
    ref?: ReactRefType<HTMLDivElement>;
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
