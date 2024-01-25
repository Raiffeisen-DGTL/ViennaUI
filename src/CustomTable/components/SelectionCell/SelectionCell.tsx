import React, { ComponentProps } from 'react';
import { Checkbox } from '../../../Checkbox';
import { Td } from '../TableBody';
import { Box } from './SelectionCell.styles';

export const SelectionCell: React.FC<ComponentProps<typeof Checkbox>> = (props) => {
    return (
        <Td>
            <Box>
                <Checkbox {...props} />
            </Box>
        </Td>
    );
};
