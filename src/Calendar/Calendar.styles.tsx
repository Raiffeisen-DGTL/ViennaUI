import styled, { css } from 'styled-components';
import { DayType } from './types';
import { getPresets } from '../Utils/styling';

const DAY_SIZE = 32;

const presets = getPresets('calendar', {
    base: null,
    dayWeek: null,
});

const day = getPresets('calendar.day', {
    base: null,
    active: null,
    today: null,
    ['not-active']: null,
    disabled: null,
    weekend: null,
    range: null,
    event: null,
    matStart: null,
    matEnd: null,
    activeDisabled: null,
});

const dayHover = getPresets('calendar.dayHover', {
    hover: null,
    active: null,
    range: null,
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

interface PropsDay {
    $type?: DayType[];
}
export const Day = styled.div<PropsDay>`
    width: ${DAY_SIZE}px;
    height: ${DAY_SIZE}px;
    position: relative;

    ${DayState} {
        // Combines types for day states
        ${({ $type }) =>
            $type &&
            css`
                ${$type.map((item) => item !== 'event' && day[item])}
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

        &:hover {
            ${({ $type }) =>
                ($type?.includes('active') &&
                    css`
                        ${dayHover.active}
                    `) ||
                ($type?.includes('range') &&
                    css`
                        ${dayHover.range}
                    `) ||
                css`
                    ${dayHover.hover}
                `}
        }
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
