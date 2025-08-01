import React from 'react';
import type { BaseComponentProps, StepType } from '../Tour/types';
import { Content } from '../Content';
import { Navigation, NavigationProps } from '../Navigation';
import { TourLocalizationProps } from '../../localization';

export interface PopoverContentProps extends BaseComponentProps, TourLocalizationProps {
    steps: StepType[];
    isAccent?: boolean;
    testId?: NavigationProps['testId'];
}

export const PopoverContent: React.FC<PopoverContentProps> = ({
    steps,
    currentStep,
    transition,
    isHighlightingObserved,
    isAccent = false,
    localization,
    testId,
    onChangeIsOpen,
    onChangeCurrentStep,
}) => {
    const step = steps[currentStep];

    return (
        <React.Fragment>
            <Content
                content={step?.content}
                currentStep={currentStep}
                transition={transition}
                isHighlightingObserved={isHighlightingObserved}
                isAccent={isAccent}
                onChangeIsOpen={onChangeIsOpen}
                onChangeCurrentStep={onChangeCurrentStep}
            />

            <Navigation
                currentStep={currentStep}
                steps={steps}
                isAccent={isAccent}
                localization={localization}
                testId={testId}
                onChangeIsOpen={onChangeIsOpen}
                onChangeCurrentStep={onChangeCurrentStep}
            />
        </React.Fragment>
    );
};
