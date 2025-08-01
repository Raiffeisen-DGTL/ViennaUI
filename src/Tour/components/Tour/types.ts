import { ReactNode } from 'react';
import { PopoverProps, Position, PositionProps } from '../Popover';
import { RectResult } from '../../utils';
import { TourLocalizationProps } from '../../localization';
import { MaskProps } from '../Mask';
import { NavigationProps } from '../Navigation';

interface SharedProps {
    steps: StepType[];
    width?: string;
    position?: Position;
    maskId?: string;
    clipId?: string;
    afterOpen?: (target: Element | null) => void;
    beforeClose?: (target: Element | null) => void;
    closeByFade?: boolean;
}

export interface ClickPropsEnter {
    isOpen: boolean;
    currentStep: number;
    steps: StepType[];
}

export interface ClickPropsLeave extends ClickPropsEnter {
    nextStep: number | null;
}

export interface TourTestId
    extends NonNullable<MaskProps['testId']>,
        NonNullable<PopoverProps['testId']>,
        NonNullable<NavigationProps['testId']> {}

export type TourProps = SharedProps &
    TourLocalizationProps & {
        isOpen?: boolean;
        currentStep?: number;
        steps?: StepType[];
        onChangeIsOpen?: (value: boolean) => void;
        onChangeCurrentStep?: (value: number) => void;
        onTransition?: (
            positionsProps: PositionProps,
            prev: RectResult
        ) => 'top' | 'right' | 'bottom' | 'left' | 'center' | [number, number];
        padding?: NonNullable<PopoverProps['padding']>;
        testId?: TourTestId;
        onClosePopover?: () => void;
    };

export interface BaseComponentProps extends Required<Pick<TourProps, 'onChangeIsOpen' | 'onChangeCurrentStep'>> {
    currentStep: number;
    transition?: boolean;
    isHighlightingObserved?: boolean;
}

export interface StepTypeContent {
    title?: ReactNode;
    description?: ReactNode;
    image?: string;
}

export type TourType = 'primary' | 'accent';

export interface StepType {
    selector: string | Element;
    content: StepTypeContent;
    type?: TourType;
    position?: Position;
    width?: string;
    highlightedSelectors?: string[];
    mutationObservables?: string[];
    resizeObservables?: string[];
    onEnter?: (clickProps: ClickPropsEnter, elem: Element | null) => void;
    onLeave?: (clickProps: ClickPropsLeave, elem: Element | null) => void;
    nextButtonText?: string | null;
    backButtonText?: string | null;
    hideCross?: NonNullable<PopoverProps['hideCross']>;
    maskRadius?: NonNullable<MaskProps['radius']>;
}

export type { Position };
