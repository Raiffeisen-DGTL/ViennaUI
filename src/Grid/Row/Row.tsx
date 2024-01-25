import React from 'react';
import styled, { css } from 'styled-components';
import { getPresets } from '../../Utils/styling';
import { BoxStyled } from '../../Utils/styled';

const presets = getPresets('grid.row', {
    align: '$align',
    valign: '$valign',
    custom: null,
});

export interface PropsRowStyled {
    /** Выравнивание по горизонтали */
    $align?: 'left' | 'center' | 'right' | 'around' | 'between' | 'stretch';
    /** Выравнивание по вертикали */
    $valign?: 'top' | 'middle' | 'bottom';
    /** Расстояние между колонками, пожддерживается любое валидное css значение */
    $columnGap?: string;
    /** Отступ между строками, пожддерживается любое валидное css значение */
    $rowGap?: string;
}

const RowStyled = styled.div<PropsRowStyled>`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    box-sizing: border-box;

    ${({ $columnGap }) =>
        $columnGap &&
        css`
            margin-left: -${$columnGap};
            width: calc(100% + ${$columnGap});
            & > * {
                padding-left: ${$columnGap};
            }
        `}

    ${({ $rowGap }) =>
        $rowGap &&
        css`
            margin-bottom: ${$rowGap};
        `}

    ${presets.align}
    ${presets.valign}

    ${presets.custom}
`;

export interface RowProps extends BoxStyled<typeof RowStyled, PropsRowStyled> {
    align?: PropsRowStyled['$align'];
    valign?: PropsRowStyled['$valign'];
    columnGap?: PropsRowStyled['$columnGap'];
    rowGap?: PropsRowStyled['$rowGap'];
}
export const Row: React.FC<RowProps> = ({ children, align, valign, columnGap = '24px', rowGap = '0', ...attrs }) => {
    return (
        <RowStyled {...(attrs as {})} $align={align} $valign={valign} $columnGap={columnGap} $rowGap={rowGap}>
            {children}
        </RowStyled>
    );
};
