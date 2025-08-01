import styled, { css } from 'styled-components';
import { color } from 'vienna.tokens';
import React from 'react';

export interface PropsBox {
    $width?: number;
    $disabled?: boolean;
    $icon?: React.ReactElement;
}
export const Card = styled.div<PropsBox>`
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
    &:before {
        background-color: #fff;
        opacity: 1;
        position: absolute;
        top: 0;
        left: 0;
    }
    &:focus {
        border-radius: 14px;
        box-shadow: 0 0 0 2px ${color.primary.oslo.c120};
    }
    ${({ $width }) =>
        $width &&
        css`
            width: ${$width}px;
            height: ${$width * 0.624}px;
        `}
    ${({ $icon }) =>
        $icon &&
        css`
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url(https://cdn-rf.raiffeisen.ru/ds/img/bankcard/bg.svg);
            border-radius: unset;
        `}
    ${({ $disabled }) =>
        $disabled &&
        css`
            opacity: 0.5;
            cursor: default;
            pointer-events: auto;
            filter: grayscale(1.12) contrast(0.7);
        `}

    ${({ $disabled }) =>
        !$disabled &&
        css`
            &:hover {
                opacity: 0.8;
                filter: brightness(1.05);
                cursor: pointer;
            }
        `}
    ${({ $disabled, $icon }) =>
        !$disabled &&
        $icon &&
        css`
            &:hover {
                opacity: 0.7;
                filter: brightness(1.05);
            }
        `}
`;

export const StyledImage = styled.img`
    max-height: inherit;
    max-width: inherit;
    object-fit: cover;
    height: inherit;
    width: inherit;
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
