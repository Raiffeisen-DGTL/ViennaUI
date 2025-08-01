import styled, { css } from 'styled-components';
import { shadow, border, color } from 'vienna.tokens';
import { Box, BoxProps } from '../CardVersatile.styles';

export interface GroupBoxProps {
    $design?: BoxProps['$design'];
}

export const GroupBox = styled.div<GroupBoxProps>`
    width: 100%;
    border-radius: ${border.radius.l}px;
    overflow: hidden;

    ${({ $design }) =>
        $design === 'shadow' &&
        css`
            box-shadow: ${shadow.basic.l};
            & > ${Box} {
                box-shadow: none;
                border-radius: 0;
                border: 0;
                border-bottom: ${border.width.s}px solid ${color.primary.seattle.c05};
            }
            & > ${Box}:last-child {
                border-bottom: 0;
            }
        `}
    ${({ $design }) =>
        $design === 'gray' &&
        css`
            & > ${Box} {
                border-radius: 0;
                border: 0;
                border-bottom: ${border.width.s}px solid ${color.primary.seattle.c30};
            }
            & > ${Box}:last-child {
                border-bottom: 0;
            }
        `}

    ${({ $design }) =>
        $design === 'stroke' &&
        css`
            & > ${Box} {
                border-radius: 0;
                border-bottom: 0;
            }
            & > ${Box}:first-child {
                border-top-left-radius: ${border.radius.l}px;
                border-top-right-radius: ${border.radius.l}px;
            }
            & > ${Box}:last-child {
                border-bottom-left-radius: ${border.radius.l}px;
                border-bottom-right-radius: ${border.radius.l}px;
                border-bottom: ${border.width.s}px solid ${color.primary.seattle.c30};
            }
        `}

    ${({ $design }) =>
        $design === 'white' &&
        css`
            & > ${Box} {
                border-radius: 0;
                border: 0;
                border-bottom: ${border.width.s}px solid ${color.primary.seattle.c10};
            }
            & > ${Box}:last-child {
                border-bottom: 0;
            }
        `}

    & > ${Box}:first-child {
        &::before {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }
    }
    & > ${Box}:last-child {
        &::before {
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
        }
    }
    & > ${Box}:not(:first-child):not(:last-child) {
        &::before {
            border-radius: 0px;
        }
    }
`;
