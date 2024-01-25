import styled, { css } from 'styled-components';
import { Span } from '../../Typography';
import { getPresets } from '../../Utils/styling';

const menuPointPresets = getPresets('header.menuPoint', {
    base: null,
    hover: null,
    active: null,
    focus: null,
});

const menuPointTitle = getPresets('header.menuPoint.title', {
    base: null,
    hover: null,
});

const menuPointIcon = getPresets('header.menuPoint.icon', {
    base: null,
    hover: null,
});

interface PropsTitle {
    $leftArrow: boolean;
}
export const Title = styled(Span)<PropsTitle>`
    float: left;
    ${({ $leftArrow }) =>
        $leftArrow
            ? css`
                  padding-left: 32px;
              `
            : css`
                  padding-right: 24px;
              `};

    ${menuPointTitle.base}
`;

export const Icon = styled.div<PropsTitle>`
    position: absolute;
    top: 16px;
    ${({ $leftArrow }) =>
        $leftArrow
            ? css`
                  left: 22px;
              `
            : css`
                  right: 22px;
              `};

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
