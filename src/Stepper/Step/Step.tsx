import React, { FC, MutableRefObject, PropsWithChildren } from 'react';
import { Box, Title, Point } from './Step.styles';
import { Tooltip } from '../../Tooltip';

export type Design = 'empty' | 'filled' | 'current' | 'error';
export type Orientation = 'horizontal' | 'vertical';
export type Valign = 'center' | 'top';
export type Size = 's' | 'l';

export interface StepProps {
    design?: Design;
    orientation?: Orientation;
    title?: string;
    size?: Size;
    value: string;
    el?: MutableRefObject<HTMLDivElement>;
    hasTooltip?: boolean;
    tooltipText?: string;
    valign?: Valign;
    count?: number;
    inverted?: boolean;
}

export const Step: FC<PropsWithChildren<StepProps>> = (props) => {
    const { title, design, size, orientation, el, hasTooltip, tooltipText, valign, count, inverted } = props;
    const titleContainer = (
        <Title ref={el} $design={design} $orientation={orientation} $valign={valign} $size={size}>
            {title}
        </Title>
    );

    return (
        <Box $orientation={orientation} $count={count} $inverted={inverted}>
            <Point $design={design} $size={size} $orientation={orientation} $valign={valign} />

            {hasTooltip ? (
                <Tooltip
                    design='dark'
                    placement={orientation === 'vertical' ? 'right' : 'bottom'}
                    content={tooltipText ?? title}
                    width={160}
                    action='hover'>
                    <div> {titleContainer}</div>
                </Tooltip>
            ) : (
                titleContainer
            )}
        </Box>
    );
};

Step.displayName = 'Step';
