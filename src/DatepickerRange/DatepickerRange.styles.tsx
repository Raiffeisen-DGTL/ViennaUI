import styled, { css } from 'styled-components';
import { datepickerrange } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';

const presets = getPresets(
    datepickerrange,
    'datepickerrange'
)({
    calendar: null,
});

export const Box = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const InputBox = styled.div`
    position: relative;
`;

interface CalendarBoxProps {
    $hidden: boolean;
}
export const CalendarBox = styled.div<CalendarBoxProps>`
    ${presets.calendar};
    ${({ $hidden }) =>
        $hidden &&
        css`
            display: none;
        `};
`;
