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

const Box2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        min-width: 32px;
        margin-right: 8px;
    }
`;

const Highlighter = styled.div`
    display: inline-block;
    background-color: #fee600;
`;

export const CustomItem = (props) => {
    const { value, match } = props;

    const computed = value
        .replace(/ /gi, '\u00a0')
        .split(new RegExp(`${match.replace(/ /gi, '\u00a0')}`, 'gm'))
        .reduce(
            (o, i, idx, a) =>
                idx < a.length - 1
                    ? [...o, i, <Highlighter key={idx}>{match.replace(/ /gi, '\u00a0')}</Highlighter>]
                    : [...o, i],
            []
        );

    return (
        <Box>
            <Value>{computed}</Value>
        </Box>
    );
};

export const CustomItemWithIcon = (props) => {
    return (
        <Box2>
            {props.icon}
            <Box>
                <Value>{props.value}</Value>
            </Box>
        </Box2>
    );
};

export const Warn = styled.div`
    color: black;
    background-color: #FFCCBB;
    padding: 12px 10px;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    align-items: center;

    svg:first-child{
        min-width: 32px;
        margin-right: 12px;
    }

    span{
        font-family: Inconsolata,Consolas,monospace;
        margin: 0;
        padding: 4px 5px;
        border-radius: 4px;
        white-space: nowrap;
        background-color: #FF9B78
    }
}
`;

export const Info = styled.div`
    color: black;
    background-color: #B3D4D8;
    padding: 12px 10px;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-top: 8px;

    svg:first-child{
        min-width: 32px;
        margin-right: 12px;
    }

    span{
        font-family: Inconsolata,Consolas,monospace;
        margin: 0;
        padding: 4px 5px;
        border-radius: 4px;
        white-space: nowrap;
        background-color: #45A3B2
    }
}
`;
