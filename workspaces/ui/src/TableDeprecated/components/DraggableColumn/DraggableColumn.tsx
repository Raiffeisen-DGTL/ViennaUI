import React from 'react';
import { Box, DropLeft, DropRight } from './DraggableColumn.styles';

export const DraggableColumn = () => {
    return (
        <>
            <Box data-id='dragable' />
            <DropLeft data-id='drop' />
            <DropRight data-id='drop' />
        </>
    );
};
