import styled, { css } from 'styled-components';
import { table } from 'vienna.ui-theme';
import { WithMarginStyled, withMargin } from '../Whitespace/utils';
import { getPresets, getPresetsCustom } from '../Utils/styling';

const presets = getPresets(
    table,
    'table'
)({
    base: null,
    empty: null,
    outlined: null,
});

const custom = getPresetsCustom('table.custom')({
    wrapper: null,
    tableWrapper: null,
    box: null,
    empty: null,
});

export interface PropsWrapper extends WithMarginStyled {
    $maxHeight?: string;
    $minHeight?: string;
    $outlined?: boolean;
    $maxContent?: boolean;
}
export const Wrapper = styled.div<PropsWrapper>`
    display: flex;
    flex-direction: column;
    background: white;
    position: relative;
    width: ${({ $maxContent }) => ($maxContent ? 'max-content' : '100%')};

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

    ${withMargin(table, 'table')}

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
    width: 100%;
    ${custom.box}
`;

export const Empty = styled.div`
    ${presets.empty}
    ${custom.empty}
`;
