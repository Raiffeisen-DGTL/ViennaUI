import React, { ComponentProps } from 'react';
import { Checkbox } from '../../../Checkbox';
import { Header } from '../TableHeader';
import { Box } from './SelectionCell.styles';

export const SelectionHeader: React.FC<ComponentProps<typeof Checkbox>> = (props) => {
    return (
        <Header>
            <Box>
                <Checkbox {...props} />
            </Box>
        </Header>
    );
};
