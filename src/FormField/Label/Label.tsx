import React from 'react';
import { Box, PropsBox } from './Label.styles';
import { BoxStyled } from '../../Utils/styled';

export const defaultFormFieldLabelTestId: LabelProps['testId'] = {
    container: 'form-field_label_container',
};

export interface LabelProps extends BoxStyled<typeof Box, PropsBox> {
    required?: PropsBox['$required'];
    size?: PropsBox['$size'];
    testId?: {
        container?: string;
    };
}

export const Label: React.FC<LabelProps> = (props) => {
    const { children, required, size, testId = defaultFormFieldLabelTestId, ...attrs } = props;
    return (
        <Box data-testid={testId?.container} {...attrs} $required={required} $size={size}>
            {children}
        </Box>
    );
};

Label.displayName = 'Label';
