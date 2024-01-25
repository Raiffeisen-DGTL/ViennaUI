import styled from 'styled-components';
import { getPresets } from '../../Utils/styling';

const navigationIconButton = getPresets('calendar.navigationIconButton', {
    base: null,
    hover: null,
});

const headerDoubleArrow = getPresets('calendar.headerDoubleArrow', {
    base: null,
    hover: null,
    lastChild: null,
});

const header = getPresets('calendar.header', {
    base: null,
    title: null,
});

export const HeaderDoubleArrow = styled.div`
    display: flex;
    align-items: flex-end;

    ${headerDoubleArrow.base}
    ${navigationIconButton.base}

    &:hover {
        ${headerDoubleArrow.hover}
        ${navigationIconButton.hover}
    }
`;

export const NavigationButton = styled.div`
    display: flex;

    ${navigationIconButton.base}

    &:hover {
        ${navigationIconButton.hover}
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

export const BackButton = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    ${navigationIconButton.base}

    &:hover {
        ${navigationIconButton.hover}
    }
`;

export const MonthName = styled.div`
    margin-right: 3px;
`;
