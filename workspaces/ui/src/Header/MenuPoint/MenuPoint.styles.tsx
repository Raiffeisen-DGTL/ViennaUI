import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { Span } from '../../Typography';

const menuPointPresets = getPresets('header.menuPoint', {
    base: null,
    hover: null,
    active: null,
    outline: null,
    span: null,
    hoverColor: null,
});

const menuPointTitle = getPresets('header.menuPoint.title', {
    base: null,
    hover: null,
});

const menuPointIcon = getPresets('header.menuPoint.icon', {
    base: null,
    hover: null,
});

export const Title = styled(Span)<{ leftArrow: boolean }>`
    float: left;
    ${({ leftArrow }) => (leftArrow ? 'padding-left: 32px' : 'padding-right: 24px')};

    ${menuPointTitle.base}
`;

export const Icon = styled.div<{ leftArrow: boolean }>`
    position: absolute;
    top: 16px;
    ${({ leftArrow }) => (leftArrow ? 'left: 22px' : 'right: 22px')};

    ${menuPointIcon.base}
`;

export const Box = styled.button`
    position: relative;

    ${menuPointPresets.base};

    &:hover {
        ${menuPointPresets.hover};
    }

    &:active {
        ${menuPointPresets.active};
    }

    &:focus {
        ${menuPointPresets.focus};
    }

    &:hover,
    &:focus {
        > ${Title} {
            ${menuPointTitle.hover}
        }

        > ${Icon} {
            ${menuPointIcon.hover}
        }
    }
`;
