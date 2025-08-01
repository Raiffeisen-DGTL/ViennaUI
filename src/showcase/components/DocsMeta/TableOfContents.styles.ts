import styled from 'styled-components';

export const Title = styled.h2`
    margin: 32px 0px 16px;
    font-size: 30px;
`;

export const TOCContainer = styled.ul`
    font-size: 16px;
    line-height: 26px;
    color: rgb(170, 171, 173);
    margin: 16px 0px 38px 2px;
    padding: 0px;
    list-style: none;
`;

export const ListItem = styled.li<{ $indent?: boolean }>`
    position: relative;
    margin-left: ${({ $indent }) => ($indent ? '32px' : '0')};
    padding-left: 16px;

    &::before {
        position: absolute;
        left: 0px;
        top: 0px;
        content: '•';
    }
`;

export const Link = styled.a`
    position: relative;
    cursor: pointer;
    outline: 0px;
    text-decoration: none;
    margin: 0px;
    font-size: 16px;
    line-height: 26px;
    text-underline-offset: 7px;
    color: rgb(70, 105, 200);
`;

export const ItemText = styled.span`
    display: inline-block;
    text-decoration: underline 1px solid transparent;
    vertical-align: baseline;

    &:focus,
    &:hover {
        color: rgb(45, 70, 145);
        text-decoration: underline 1px solid rgb(45, 70, 145);
    }
`;
