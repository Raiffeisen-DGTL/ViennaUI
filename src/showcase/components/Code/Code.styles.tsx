import styled from 'styled-components';

export const Box = styled.div`
    background-color: #f8f8f8;
    font-family: Consolas, Inconsolata, monospace;
    font-size: 14px;
    line-height: 22px;
    margin: 0;
    padding: 16px;
    width: 100%;
    max-height: 320px;
    box-sizing: border-box;
    border-radius: 4px;
    white-space: pre;
    display: block;
    overflow: auto;
`;

export const Line = styled.div`
    display: block;
`;

export const Token = styled.span`
    display: inline-block;
`;
