import React from 'react';
import { Box, PropsBox } from './Label.styles';
import { BoxStyled } from '../../Utils/styled';

export interface LabelProps extends BoxStyled<typeof Box, PropsBox> {
    required?: PropsBox['$required'];
    size?: PropsBox['$size'];
}

export const Label: React.FC<LabelProps> = (props) => {
    const { children, required, size, ...attrs } = props;
    return (
        <Box {...(attrs as {})} $required={required} $size={size}>
            {children}
        </Box>
    );
};

Label.displayName = 'Label';
