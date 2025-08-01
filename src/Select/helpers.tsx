import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    flex-direction: column;
`;

const Value = styled.div`
    display: flex;
    color: black;
`;

const Sub = styled.div`
    display: flex;
    color: gray;
`;

interface CustomItemProps {
    value: string;
    sub: string;
    icon?: React.ReactNode;
}

export const CustomItem: React.FC<CustomItemProps> = (props) => {
    return (
        <Box>
            <Value>{props.value}</Value>
            <Sub>{props.sub}</Sub>
        </Box>
    );
};

const Box2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        min-width: 32px;
        margin-right: 8px;
    }
`;

export const CustomItemWithIcon: React.FC<CustomItemProps> = (props) => {
    if (!props) return null;
    return (
        <Box2>
            {props.icon}
            <Box>
                <Value>{props.value}</Value>
                <Sub>{props.sub}</Sub>
            </Box>
        </Box2>
    );
};

export const Template = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
