import React, { useEffect, useLayoutEffect, useRef } from 'react';
import ReactFocusLock, { FreeFocusInside } from 'react-focus-lock';
import ReactDOM from 'react-dom';
import { usePortal } from 'vienna.react-use';
import { Mask } from '../Mask';
import { Popover, PopoverContent } from '../Popover';
import { Observables, useTourLogic } from '../../utils';
import { useKeyboard, useSizes } from './hooks';
import { ClickPropsEnter, ClickPropsLeave, TourProps } from './types';
import { omit } from '../../../Utils/omit';

const initialState = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
};

const maskPadding = 8;
const wrapperPadding = 0;

export const defaultTourTestId: TourProps['testId'] = {
    overlay: 'tour_overlay',
    closeIcon: 'tour-popover_close-icon',
    popoverBackStepBtn: 'tour_back-step-button',
    popoverNextStepBtn: 'tour_next-step-button',
};

export const Tour: React.FC<TourProps> = (props) => {
    const {
        afterOpen,
        beforeClose,
        position,
        clipId,
        maskId,
        closeByFade,
        width,
        localization,
        onTransition = () => {
            return 'center';
        },
        padding: popoverPadding = 6,
        testId = defaultTourTestId,
        onClosePopover,
        ...omitProps
    } = props;
    const { isOpen, currentStep, steps, step, nextStep, updateIsOpen, updateCurrentStep, closeTour } =
        useTourLogic(props);
    const isAccent = steps.length === 1 || step?.type === 'accent';
    const stepRef = useRef(step?.selector);
    const onLeaveRef = useRef(step?.onLeave);

    const { sizes, transition, observableRefresher, isHighlightingObserved, target } = useSizes(
        step,
        {
            block: 'center',
            behavior: 'smooth',
        },
        isOpen
    );
    useKeyboard({
        currentStep,
        stepsLength: steps.length,
        isOpen,
        onChangeIsOpen: updateIsOpen,
        onChangeCurrentStep: updateCurrentStep,
    });

    const containerPortal = usePortal('tour');
    const popoverPosition = transition ? onTransition : step?.position ? step?.position : position;

    const handleMaskClick = () => {
        if (closeByFade) {
            closeTour();
        }
    };

    useLayoutEffect(() => {
        const clickPropsEnter: ClickPropsEnter = { isOpen, currentStep, steps };
        step?.onEnter?.(clickPropsEnter, target);

        if (stepRef.current === step?.selector) return;
        const clickPropsLeave: ClickPropsLeave = { isOpen, currentStep, steps, nextStep: nextStep.current };
        if (onLeaveRef.current) {
            onLeaveRef.current(clickPropsLeave, target);
            stepRef.current = step?.selector;
        }
        onLeaveRef.current = step?.onLeave;
    }, [step]);

    useEffect(() => {
        if (isOpen) {
            afterOpen?.(target);
        }
    }, [isOpen]);

    useLayoutEffect(() => {
        return () => {
            if (!isOpen || !step || !document) {
                beforeClose?.(target);
            }
        };
    }, [isOpen, step]);

    if (!isOpen || !step || !document) {
        return null;
    }

    return ReactDOM.createPortal(
        <ReactFocusLock returnFocus>
            <FreeFocusInside>
                <Observables
                    mutationObservables={step?.mutationObservables}
                    resizeObservables={step?.resizeObservables}
                    refresh={observableRefresher}
                />
                {target && (
                    <Mask
                        sizes={transition ? initialState : sizes}
                        padding={transition ? 0 : maskPadding}
                        wrapperPadding={wrapperPadding}
                        isOverlayHidden={isAccent}
                        clipId={clipId}
                        maskId={maskId}
                        radius={step.maskRadius}
                        testId={testId}
                        onClick={handleMaskClick}
                    />
                )}
                {target && (
                    <Popover
                        header={step.content.title}
                        sizes={sizes}
                        position={popoverPosition}
                        padding={popoverPadding}
                        refresher={currentStep}
                        isAccent={isAccent}
                        width={step.width || width}
                        hideCross={step.hideCross}
                        onClose={closeTour}
                        testId={testId}>
                        <PopoverContent
                            currentStep={currentStep}
                            steps={steps}
                            transition={transition}
                            isHighlightingObserved={isHighlightingObserved}
                            isAccent={isAccent}
                            localization={localization}
                            testId={testId}
                            onChangeIsOpen={updateIsOpen}
                            onChangeCurrentStep={updateCurrentStep}
                            {...omit(
                                omitProps,
                                'currentStep',
                                'steps',
                                'isOpen',
                                'onChangeIsOpen',
                                'onChangeCurrentStep'
                            )}
                        />
                    </Popover>
                )}
            </FreeFocusInside>
        </ReactFocusLock>,
        containerPortal ?? document.body
    );
};

Tour.displayName = 'Tour';
