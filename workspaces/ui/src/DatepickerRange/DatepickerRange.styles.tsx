import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('datepickerrange', {
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

export const CalendarBox = styled.div`
    position: absolute;
    opacity: 0;
    overflow: hidden;
    ${presets.calendar};
`;
