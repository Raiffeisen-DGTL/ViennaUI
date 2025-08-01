import styled, { css } from 'styled-components';
import { calendar } from 'vienna.ui-theme';
import { DayType } from './types';
import { getPresets } from '../Utils/styling';

const DAY_SIZE = 32;

const presets = getPresets(
    calendar,
    'calendar'
)({
    base: null,
    dayWeek: null,
});

const day = getPresets(
    calendar.day,
    'calendar.day'
)({
    base: null,
    active: null,
    today: null,
    'not-active': null,
    disabled: null,
    weekend: null,
    range: null,
    event: null,
    matStart: null,
    matEnd: null,
    activeDisabled: null,
});

const dayHover = getPresets(
    calendar.dayHover,
    'calendar.dayHover'
)({
    hover: null,
    active: null,
    range: null,
    disabled: null,
});

export const Box = styled.div`
    display: inline-block;
    box-sizing: border-box;

    ${presets.base}
`;

export const DayState = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    ${day.base}
`;

export interface PropsDay {
    $type?: DayType[];
}
export const Day = styled.button<PropsDay>`
    ${calendar.base}
    width: ${DAY_SIZE}px;
    height: ${DAY_SIZE}px;
    position: relative;

    // reset
    padding: 0;
    border: none;
    background: none;
    outline: none;
    //

    &:hover,
    &:focus {
        ${({ $type }) =>
            ($type?.includes('active') &&
                css`
                    ${DayState} {
                        ${dayHover.active}
                    }
                `) ||
            ($type?.includes('range') &&
                css`
                    ${DayState} {
                        ${dayHover.range}
                    }
                `) ||
            ($type?.includes('disabled') &&
                css`
                    ${dayHover.disabled}
                `) ||
            ($type?.includes('not-active') &&
                css`
                    ${dayHover.disabled}
                `) ||
            css`
                ${DayState} {
                    ${dayHover.hover}
                }
            `}
    }

    ${DayState} {
        // Combines types for day states
        ${({ $type }) =>
            $type &&
            css`
                ${$type.map((item) => item !== 'event' && item && day[item])}
            `}

        ${({ $type }) =>
            $type?.includes('event') &&
            css`
                font-weight: bold;
                &:after {
                    content: '';
                    position: absolute;
                    ${day.event};
                }
            `}
    }
`;

export const RangeSelectionStart = styled.div`
    position: absolute;
    height: 100%;
    width: 50%;

    ${day.matStart}
`;

export const RangeSelectionEnd = styled.div`
    position: absolute;
    height: 100%;
    width: 50%;

    ${day.matEnd}
`;

export const WeekDay = styled.div`
    width: ${DAY_SIZE}px;
    height: ${DAY_SIZE}px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${presets.dayWeek}
`;

export const FirstLetterUpper = styled.div`
    font-weight: bold;

    &:first-letter {
        text-transform: uppercase;
    }
`;
