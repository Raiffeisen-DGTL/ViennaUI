import styled, { css } from 'styled-components';
import { WithMarginStyled, withMargin } from '../Whitespace/utils';
import { getPresets } from '../Utils/styling';

const presets = getPresets('table', {
    base: null,
    empty: null,
    outlined: null,
});

const custom = getPresets('table.custom', {
    wrapper: null,
    tableWrapper: null,
    box: null,
    empty: null,
});

export interface PropsWrapper extends WithMarginStyled {
    $maxHeight?: string;
    $minHeight?: string;
    $outlined?: boolean;
}
export const Wrapper = styled.div<PropsWrapper>`
    display: flex;
    flex-direction: column;
    background: white;
    position: relative;
    width: 100%;

    ${({ $maxHeight }) =>
        $maxHeight &&
        css`
            max-height: ${$maxHeight};
        `}

    ${({ $minHeight }) =>
        $minHeight &&
        css`
            min-height: ${$minHeight};
        `}
        ${({ $outlined }) =>
        $outlined &&
        css`
            ${presets.outlined}
        `}

    ${withMargin('table')}

    ${custom.wrapper}
`;

export interface PropsTableWrapper {
    $isOverflow?: boolean;
}
export const TableWrapper = styled.div<PropsTableWrapper>`
    width: 100%;
    flex-grow: 1;

    ${({ $isOverflow }) =>
        $isOverflow &&
        css`
            overflow: auto;
        `}

    ${custom.tableWrapper}
`;

export const Box = styled.table`
    ${presets.base}

    border-spacing: 0;
    min-width: 100%;
    width: max-content;

    ${custom.box}
`;

export const BoxShadow = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    z-index: 3;
`;

export const Empty = styled.div`
    ${presets.empty}
    ${custom.empty}
`;
