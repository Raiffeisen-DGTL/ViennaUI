import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const list = getPresets('dropList.list', {
    base: null,
    custom: null,
});

export const Box = styled.div<{
    width?: number;
    maxHeight?: any;
    fitItems?: boolean;
    scrollable?: boolean;
}>`
    opacity: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 1000;

    ${list.base};

    ${({ scrollable }) => scrollable && 'overflow: auto;'}
    ${({ fitItems }) =>
        fitItems &&
        css`
            max-width: 100%;
            min-width: 100%;
        `}
    ${({ width }) =>
        width &&
        css`
            min-width: ${width}px;
            width: ${width}px;
            max-width: ${width}px;
        `}
    ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}px`}
    ${list.custom}
`;
