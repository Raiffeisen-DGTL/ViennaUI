import styled from 'styled-components';

export interface BoxProps {
    $width: number;
}

export const Box = styled.div<BoxProps>`
    position: relative;
    display: inline-flex;
    width: ${({ $width }) => `${$width}px`};
    max-width: calc(100% - 100px);
    flex: none;
    overflow: hidden;
    min-width: min-content;
`;

export const Input = styled.input`
    display: block;
    max-width: 100%;
    width: 100%;
    font-size: 14px;
    font-family:
        ALS Hauss,
        Helvetica,
        'Helvetica New',
        Arial,
        sans-serif;
    background: none;
    padding: 0;
    border: 0;
    outline: none;
`;

export const Helper = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    visibility: hidden;
    white-space: pre;
`;
