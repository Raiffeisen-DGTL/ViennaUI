import styled from 'styled-components';
import { getPresets } from '../Utils/styling';

const presets = getPresets('datepicker', {
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
    ${presets.calendar};
`;
