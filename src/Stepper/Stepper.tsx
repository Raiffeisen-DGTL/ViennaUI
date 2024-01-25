import React, {
    useMemo,
    useCallback,
    useRef,
    useState,
    ReactNode,
    ReactElement,
    FC,
    PropsWithChildren,
    RefObject,
} from 'react';
import { useIsomorphicLayoutEffect } from '@fcc/react-use';
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
    const stepsRefs: RefObject<HTMLDivElement>[] =
        React.Children.map<RefObject<HTMLDivElement>, ReactNode>(childrenArray, useRef) ?? [];

    const currentStepIndex = useMemo(
        () => childrenArray.findIndex((item) => item && (item as ReactElement).props.value === value),
        [childrenArray, value]
    );

    const defineDesign = useCallback(
        (child: ReactElement, index: number) => {
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

        for (const [index, value] of Object.entries(stepsRefs)) {
            const ref: RefObject<HTMLDivElement> = value;

            if (!ref.current) {
                continue;
            }

            if (ref.current.scrollHeight > ref.current.clientHeight) {
                tooltips.add(index);
            }
        }

        setStepsTooltips(tooltips);
    }, []);

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

        return React.Children.map(displayedChildren, (child: ReactElement, index) => {
            const childProps: StepProps = {
                design: defineDesign(child, index),
                title: child.props.children,
                size: size ?? 's',
                orientation: orientation ?? 'horizontal',
                value: child.props.value,
                hasTooltip: stepsTooltips.has(index),
                el: stepsRefs[index],
                count,
                valign,
                inverted,
            };

            return <child.type {...childProps} />;
        });
    }, [childrenArray, stepsRefs, defineDesign, orientation, size, stepsTooltips, valign, inverted]);

    const hasIncorrectChildren = useMemo(
        () => childrenArray.some((child: any) => child && String(child.type) !== String(Step)),
        [childrenArray]
    );
    if (hasIncorrectChildren) {
        console.error('Ошибка! Допустимы только элементы Step.'); // eslint-disable-line
        return <></>;
    }

    return (
        <Box
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
