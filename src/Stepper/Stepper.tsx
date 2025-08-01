import React, {
    useMemo,
    useCallback,
    useRef,
    useState,
    ReactNode,
    ReactElement,
    FC,
    PropsWithChildren,
    isValidElement,
} from 'react';
import { useIsomorphicLayoutEffect } from 'vienna.react-use';
import { StepProps, Step } from './Step';
import { Line, Progress, Box } from './Stepper.styles';

export type Orientation = 'horizontal' | 'vertical';

export interface StepperProps {
    size?: 's' | 'l';
    /** Horizontal or vertical location */
    orientation?: Orientation;
    /** Responsive or not */
    responsive?: boolean;
    /** Active step */
    value?: string;
    /** Steps with errors */
    error?: string[];
    /** Steps align */
    valign?: 'center' | 'top';
    /** Steps order inversion */
    inverted?: boolean;
}

export const Stepper: FC<PropsWithChildren<StepperProps>> & { Step: typeof Step } = (props) => {
    const {
        children,
        value,
        error,
        size = 's',
        responsive = true,
        orientation = 'horizontal',
        valign = 'center',
        inverted = false,
    } = props;

    const childrenArray: ReactNode[] = inverted
        ? React.Children.toArray(children).reverse()
        : React.Children.toArray(children);
    const childrenSize = childrenArray.length;
    const [stepsTooltips, setStepsTooltips] = useState(new Set());
    const stepperRef = useRef<HTMLDivElement>(null);
    const stepperContainerRef = useRef<HTMLDivElement>(null);
    const currentStepIndex = useMemo(
        () => childrenArray.findIndex((item) => item && (item as ReactElement<StepProps>).props.value === value),
        [childrenArray, value]
    );

    const defineDesign = useCallback(
        (child: ReactElement<StepProps>, index: number) => {
            if (error?.find((item) => item === child.props.value)) {
                return 'error';
            }

            if (value === child.props.value) {
                return 'current';
            }

            if (
                (inverted && index < currentStepIndex) ||
                (!inverted && index > currentStepIndex) ||
                currentStepIndex === -1
            ) {
                return 'empty';
            }

            return 'filled';
        },
        [currentStepIndex, error, value, inverted]
    );

    useIsomorphicLayoutEffect(() => {
        const tooltips = new Set();

        stepperContainerRef.current?.querySelectorAll(':scope > * > *:nth-child(2)').forEach(($box, index) => {
            if ($box && $box.clientHeight < $box.scrollHeight) {
                tooltips.add(Number(index));
            }
        });

        setStepsTooltips(tooltips);
    }, [children]);

    const progressWidth = useMemo(() => {
        if (currentStepIndex === -1) {
            return 0;
        }

        return inverted
            ? ((childrenSize - currentStepIndex - 1) * 100) / (childrenSize - 1)
            : (currentStepIndex * 100) / (childrenSize - 1);
    }, [currentStepIndex, childrenSize, inverted]);

    const steps = useMemo(() => {
        const displayedChildren = childrenArray.filter(Boolean) as ReactElement[];
        const count = React.Children.count(displayedChildren);
        return React.Children.map(displayedChildren, (child: ReactElement<StepProps & { children: string }>, index) => {
            const childProps: StepProps = {
                design: defineDesign(child, index),
                title: child.props.children,
                size: size ?? 's',
                orientation: orientation ?? 'horizontal',
                value: child.props.value,
                hasTooltip: (stepsTooltips.has(index) && orientation !== 'vertical') || child.props.hasTooltip,
                tooltipText: child.props.tooltipText,
                count,
                valign,
                inverted,
            };

            return <child.type {...childProps} />;
        });
    }, [childrenArray, defineDesign, orientation, size, stepsTooltips, valign, inverted]);

    const hasIncorrectChildren = useMemo(
        () => childrenArray.some((child) => isValidElement(child) && String(child.type) !== String(Step)),
        [childrenArray]
    );
    if (hasIncorrectChildren) {
        console.error('Ошибка! Допустимы только элементы Step.'); // eslint-disable-line
        return <></>;
    }

    return (
        <Box
            ref={stepperContainerRef}
            $orientation={orientation}
            $childrenCount={childrenArray?.length}
            $responsive={responsive}
            $inverted={inverted}>
            <Line ref={stepperRef} $orientation={orientation} />
            <Progress $width={progressWidth} $orientation={orientation} $inverted={inverted} />
            {steps}
        </Box>
    );
};

Stepper.displayName = 'Stepper';

Stepper.Step = Step;
