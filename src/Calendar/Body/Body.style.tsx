import styled, { css } from 'styled-components';
import { getPresets } from '../../Utils/styling';

const DAY_SIZE = 32;
const CELL_WIDTH = 74;
const CELL_HEIGHT = 56;

const presets = getPresets('calendar', {
    body: null,
    footer: null,
});

const cell = getPresets('calendar.cell', {
    base: null,
    hover: null,
    active: null,
});

export const Box = styled.div`
    box-sizing: border-box;
    width: ${DAY_SIZE * 7 + 16 * 2}px;
    display: flex;
    flex-wrap: wrap;
    ${presets.body}
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${presets.footer}
`;

interface PropsCalendarCell {
    $isActive?: boolean;
}
export const CalendarCell = styled.div<PropsCalendarCell>`
    width: ${CELL_WIDTH}px;
    height: ${CELL_HEIGHT}px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${cell.base}

    &:hover {
        ${cell.hover}
    }

    ${({ $isActive }) =>
        $isActive &&
        css`
            ${cell.active}
        `}
`;
