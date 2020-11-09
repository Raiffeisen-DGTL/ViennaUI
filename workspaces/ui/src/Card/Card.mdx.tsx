import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 2rem;

    font-size: 16px;
    height: 100%;
    box-sizing: border-box;
    background-color: #f8f8f8;
    color: #aaabad;
    height: 200px;
`;

export const Demo = (props) => <Box {...props}>Content Area</Box>;
