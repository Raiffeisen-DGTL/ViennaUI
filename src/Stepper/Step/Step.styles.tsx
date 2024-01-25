import styled, { css } from 'styled-components';
import { getPresets } from '../../Utils/styling';
import { Design, Orientation, Size, Valign } from './Step';

const pointer = getPresets('stepper.pointer', {
    base: null,
    size: '$size',
    design: '$design',
    customCurrent: null,
    orientation: '$orientation',
    customDesign: '$design',
});

const title = getPresets('stepper.title', {
    base: null,
    design: '$design',
    orientation: '$orientation',
    titleValignTop: null,
});

const step = getPresets('stepper.step', {
    base: null,
});

interface PropsTitle {
    $design?: Design;
    $orientation?: Orientation;
    $valign?: Valign;
}
export const Title = styled.div<PropsTitle>`
    /* hack for truncating multiline text */
    display: -webkit-box;

    ${title.base}
    ${title.design}
    ${title.orientation}

    ${({ $orientation, $valign }) =>
        $orientation === 'vertical' &&
        $valign === 'top' &&
        css`
            ${title.titleValignTop}
        `}
`;

interface PropsBox {
    $orientation?: Orientation;
    $count?: number;
    $inverted?: boolean;
}
export const Box = styled.div<PropsBox>`
    display: flex;
    align-items: center;
    flex-direction: column;

    ${step.base}

    ${({ $inverted }) => ($inverted ? 'padding-right: 0px;' : null)};

    ${({ $count, $orientation }) =>
        $count &&
        $orientation === 'horizontal' &&
        css`
            width: calc(100% / ${$count});
        `}

    & > ${Title} {
        text-align: center;
    }

    &:nth-child(3) {
        ${({ $count, $orientation }) =>
            $count &&
            $orientation === 'horizontal' &&
            css`
                width: calc(100% / 2 / ${$count});
            `}

        ${({ $orientation }) =>
            $orientation === 'horizontal'
                ? css`
                      align-items: flex-start;
                      padding-left: 0;

                      & > ${Title} {
                          text-align: left;
                          display: flex;
                          justify-content: flex-start;
                          overflow: visible;
                      }
                  `
                : css`
                      transform: translateY(-50%);
                  `}
    }

    &:last-child {
        ${({ $count, $orientation }) =>
            $count &&
            $orientation === 'horizontal' &&
            css`
                width: calc(100% / 2 / ${$count});
            `}
        ${({ $orientation }) =>
            $orientation === 'horizontal'
                ? css`
                      align-items: flex-end;
                      padding-right: 0;

                      & > ${Title} {
                          text-align: right;
                          display: flex;
                          justify-content: flex-end;
                          overflow: visible;
                      }
                  `
                : css`
                      transform: translateY(50%);
                  `}
    }

    ${({ $orientation }) =>
        $orientation === 'vertical' &&
        css`
            align-items: center;
            padding-left: 0;
            flex-direction: row;

            & > ${Title} {
                text-align: left;
            }
        `}
`;

interface PropsTitle {
    $design?: Design;
    $size?: Size;
    $orientation?: Orientation;
}
export const Point = styled.div<PropsTitle>`
    position: relative;

    ${pointer.base}
    ${pointer.size}
    ${pointer.design}

    ${({ $size }) =>
        $size === 'l' &&
        css`
            ${pointer.orientation}

            &:after {
                content: '';
                position: absolute;
                display: block;

                ${pointer.customDesign};
            }
        `}
`;
