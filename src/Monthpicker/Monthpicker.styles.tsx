import styled from 'styled-components';
import { datepicker } from 'vienna.ui-theme';
import { StyledInput, Wrapper } from '@/Input/Input.styles';
import { getPresets } from '../Utils/styling';

const presets = getPresets(
    datepicker,
    'datepicker'
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

    & ${StyledInput} {
        caret-color: transparent;
        cursor: pointer;
    }
    & ${Wrapper} {
        cursor: pointer;
    }
`;

export const CalendarBox = styled.div`
    ${presets.calendar};
`;
