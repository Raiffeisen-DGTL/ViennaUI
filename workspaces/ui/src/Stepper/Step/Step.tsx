import React, { MutableRefObject } from 'react';
import { Box, Title, Point } from './Step.styles';
import { Tooltip } from '../../Tooltip';

export interface StepProps {
    design?: 'empty' | 'filled' | 'current' | 'error';
    title?: string;
    size?: 's' | 'l';
    value: string;
    orientation?: 'horizontal' | 'vertical';
    el?: MutableRefObject<any>;
    hasTooltip?: boolean;
    valign?: 'center' | 'top';
}

export const Step: React.FC<StepProps> = (props: StepProps) => {
    const { title, design, size, orientation, el, hasTooltip, valign } = props;
    const titleContainer = (
        <Title design={design} orientation={orientation} ref={el} valign={valign}>
            {title}
        </Title>
    );

    return (
        <Box orientation={orientation} valign={valign}>
            <Point design={design} size={size} orientation={orientation} />

            {hasTooltip ? (
                <Tooltip anchor='bottom' design='dark' content={title as any} width={160}>
                    {titleContainer}
                </Tooltip>
            ) : (
                titleContainer
            )}
        </Box>
    );
};

export default Step;
