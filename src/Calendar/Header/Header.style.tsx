import styled from 'styled-components';
import { calendar } from 'vienna.ui-theme';
import { getPresets } from '../../Utils/styling';
import { Button as ButtonBase } from '../../Button';

const navigationIconButton = getPresets(
    calendar.navigationIconButton,
    'calendar.navigationIconButton'
)({
    base: null,
    hover: null,
});

const headerDoubleArrow = getPresets(
    calendar.headerDoubleArrow,
    'calendar.headerDoubleArrow'
)({
    base: null,
    hover: null,
    lastChild: null,
});

const header = getPresets(
    calendar.header,
    'calendar.header'
)({
    base: null,
    title: null,
});

export const Button = styled(ButtonBase)`
    // reset
    padding: 0;
    border: none;
    background: none;
    outline: none;
    //

    display: flex;
    align-items: center;
    min-width: 16px;

    ${navigationIconButton.base}

    &:hover,
    &:focus {
        ${navigationIconButton.hover}
    }
`;

export const HeaderDoubleArrow = styled(Button)`
    ${headerDoubleArrow.base}

    &:hover {
        ${headerDoubleArrow.hover}
    }
`;

export const Box = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    ${header.base}

    & > ${HeaderDoubleArrow}:last-child {
        ${headerDoubleArrow.lastChild}
    }
`;

export const HeaderTitle = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;

    ${header.title}
`;

export const BackButton = styled(Button)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;

    &:active {
        top: 50%;
    }
`;

export const MonthName = styled.div`
    margin-right: 3px;
`;
