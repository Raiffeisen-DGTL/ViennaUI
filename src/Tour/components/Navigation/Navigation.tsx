import React from 'react';
import { StepType, TourProps } from '../Tour/types';
import { Flex, Text, Button, useLocalization } from '../../..';
import { defaultTourLocalization, TourLocalizationProps } from '../../localization';

export const defaultNavigationTestId: NavigationProps['testId'] = {
    popoverBackStepBtn: 'navigation_popover-back-step-btn', // 'tour-back-step-button'
    popoverNextStepBtn: 'navigation_popover-next-step-btn', // 'tour-next-step-button'
};

export interface NavigationProps
    extends Required<Pick<TourProps, 'onChangeIsOpen' | 'onChangeCurrentStep'>>,
        TourLocalizationProps {
    steps: StepType[];
    currentStep: number;
    isAccent?: boolean;
    testId?: {
        popoverBackStepBtn?: string;
        popoverNextStepBtn?: string;
    };
}

export const Navigation: React.FC<NavigationProps> = ({
    steps,
    currentStep,
    isAccent,
    onChangeIsOpen,
    onChangeCurrentStep,
    localization,
    testId = defaultNavigationTestId,
}) => {
    const isFirstStepAccent = steps[0]?.type === 'accent';
    const stepsLength = steps.length;
    const lastIndex = stepsLength - 1;
    const isFirst = currentStep === 0;
    const isLast = currentStep === lastIndex;
    const step = steps[currentStep];
    const l10n = useLocalization(localization, defaultTourLocalization);

    const closeAndReset = () => {
        onChangeIsOpen(false);
        onChangeCurrentStep(0);
    };

    const handleBackButtonClick = () => {
        if (isFirst) {
            closeAndReset();
        } else {
            onChangeCurrentStep(currentStep - 1);
        }
    };

    const handleNextButtonClick = () => {
        if (isLast) {
            closeAndReset();
        } else {
            onChangeCurrentStep(currentStep + 1);
        }
    };

    const backText: string = step.backButtonText || (isFirst ? l10n('ds.tour.skip') : l10n('ds.tour.back'));
    const nextText: string =
        step.nextButtonText ||
        (isLast
            ? l10n('ds.tour.end')
            : isAccent
              ? !isFirst
                  ? l10n('ds.tour.next')
                  : l10n('ds.tour.start')
              : l10n('ds.tour.next'));

    return (
        <Flex alignItems='center' marginTop='s2' justifyContent={isAccent ? 'flex-end' : 'space-between'}>
            {stepsLength > 1 && !isAccent && (
                <Text size='s' weight='medium' color='seattle100'>
                    {l10n('ds.tour.step')(
                        isFirstStepAccent ? currentStep : currentStep + 1,
                        isFirstStepAccent ? stepsLength - 1 : stepsLength
                    )}
                </Text>
            )}
            <Flex gap='s4'>
                {step.backButtonText !== null && (
                    <Button
                        design={isAccent ? 'ghost-white' : 'ghost'}
                        size='s'
                        data-testid={testId?.popoverBackStepBtn}
                        onClick={handleBackButtonClick}>
                        {backText}
                    </Button>
                )}

                {step.nextButtonText !== null && (
                    <Button
                        design='accent'
                        size='s'
                        data-testid={testId?.popoverNextStepBtn}
                        onClick={handleNextButtonClick}>
                        {nextText}
                    </Button>
                )}
            </Flex>
        </Flex>
    );
};
