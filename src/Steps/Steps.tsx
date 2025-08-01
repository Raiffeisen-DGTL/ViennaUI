import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { StepsBox } from './Steps.styles';
import { Step, StepProps } from './Step';
import { BoxStyled } from '../Utils/styled';

export interface StepsProps extends BoxStyled<typeof StepsBox, StepProps> {
    size?: 's' | 'm';
    orientation?: StepProps['orientation'];
    noDivider?: boolean;
    enableAnimation?: boolean;
    mode?: 'blue' | 'black';
}

export const Steps = (props: PropsWithChildren<StepsProps>) => {
    const {
        size = 'm',
        orientation = 'horizontal',
        noDivider,
        enableAnimation,
        mode = 'blue',
        children,
        ...attrs
    } = props;

    const childrenArray: ReactNode[] = React.Children.toArray(children);
    const displayedChildren = childrenArray.filter(Boolean) as ReactElement[];
    const steps = React.Children.map(displayedChildren, (child: ReactElement<StepProps>, index) => {
        const childProps: StepProps = {
            index: index + 1,
            isLast: index + 1 === displayedChildren?.length,
            size,
            noDivider,
            orientation,
            enableAnimation,
            mode,
            ...child.props,
        };
        return <child.type {...childProps} />;
    });

    return (
        <StepsBox data-testid='steps' {...attrs} $orientation={orientation}>
            {steps}
        </StepsBox>
    );
};

Steps.Step = Step;
Steps.displayName = 'Steps';
