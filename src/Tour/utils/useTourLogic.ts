import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { StepType, TourProps } from '../components/Tour/types';

const disableScroll = () => {
    document.body.style.overflow = 'hidden';
};
const enableScroll = () => {
    document.body.style.overflow = 'unset';
};

export const useTourLogic = (props: TourProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(props.isOpen ?? false);
    const [currentStep, setCurrentStep] = useState<number>(props.currentStep ?? 0);
    const [steps, setSteps] = useState<StepType[]>(props.steps ?? []);
    const nextStep = useRef<number | null>(null);
    const step = steps[currentStep];

    const updateIsOpen = (newValue: boolean) => {
        setIsOpen(newValue);
        props.onChangeIsOpen?.(newValue);
    };

    const updateCurrentStep = (newValue: number) => {
        nextStep.current = newValue;
        setCurrentStep(newValue);
        props.onChangeCurrentStep?.(newValue);
    };

    const closeTour = () => {
        props.onClosePopover?.();
        updateIsOpen(false);
        setCurrentStep(0);
    };

    useEffect(() => {
        if (props.isOpen !== undefined) {
            setIsOpen(props.isOpen);
        }
    }, [props.isOpen]);

    useEffect(() => {
        if (props.currentStep !== undefined) {
            setCurrentStep(props.currentStep);
        }
    }, [props.currentStep]);

    useEffect(() => {
        if (props.steps !== undefined) {
            setSteps(props.steps);
        }
    }, [props.steps]);

    useLayoutEffect(() => {
        if (isOpen) {
            disableScroll();
        } else {
            enableScroll();
        }
    }, [isOpen]);

    return {
        isOpen,
        currentStep,
        steps,
        step,
        nextStep,
        updateIsOpen,
        updateCurrentStep,
        closeTour,
    };
};
