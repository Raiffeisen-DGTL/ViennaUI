/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('grid.row', {
    align: 'align',
    valign: 'valign',
    custom: null,
});

interface Props {
    children: React.ReactNode;
    /** Выравнивание по горизонтали */
    align?: 'left' | 'center' | 'right' | 'around' | 'between' | 'stretch';

    /** Выравнивание по вертикали */
    valign?: 'top' | 'middle' | 'bottom';

    /** Расстояние между колонками, пожддерживается любое валидное css значение */
    columnGap?: string;

    /** Отступ между строками, пожддерживается любое валидное css значение */
    rowGap?: string;
}
interface HTMLAttributeProps {
    [key: string]: any;
    id?: string;
    title?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
    tabIndex?: number;
}

export type RowProps = HTMLAttributeProps & Props;

export const Row: React.FC<RowProps> = styled.div<RowProps>`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    box-sizing: border-box;

    ${({ columnGap }) =>
        columnGap &&
        css`
            margin-left: -${columnGap};
            width: calc(100% + ${columnGap});
            & > * {
                padding-left: ${columnGap};
            }
        `}

    ${({ rowGap }) =>
        rowGap &&
        css`
            margin-bottom: ${rowGap};
        `}

    ${presets.align}
    ${presets.valign}

    ${presets.custom}
`;

export default Row;

Row.defaultProps = {
    columnGap: '24px',
    rowGap: '0',
};
