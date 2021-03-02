import React, {
    useMemo,
    useCallback,
    useRef,
    useState,
    useLayoutEffect,
    MutableRefObject,
    ReactNode,
    ReactElement,
} from 'react';
import { StepProps, Step } from './Step';
import { Line, Progress, Box } from './Stepper.styles';

interface Props {
    size?: 's' | 'l';
    /** Horizontal or vertical location */
    orientation?: 'horizontal' | 'vertical';
    /** Responsive or not */
    responsive?: boolean;
    /** Active step */
    value?: string;
    /** Steps with errors */
    error?: string[];
    /** Steps align */
    valign?: 'center' | 'top';
}

interface HTMLAttributeProps {
    id?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
    tabIndex?: number;
}

export type StepperProps = Props & HTMLAttributeProps;

export const Stepper: React.FC<StepperProps> & { Step: React.FC<StepProps> } = (
    props: React.PropsWithChildren<StepperProps>
): JSX.Element => {
    const { children, value, error, size, responsive, orientation, valign } = props;
    const childrenArray: ReactNode[] = React.Children.toArray(children);
    const childrenSize = childrenArray.length;
    const [stepsTooltips, setStepsTooltips] = useState(new Set());

    const stepperRef = useRef<HTMLDivElement>(null);
    const stepsRefs: any = React.Children.map<MutableRefObject<any>, ReactNode>(children, useRef);

    const currentStepIndex = useMemo(
        () => childrenArray.findIndex((item) => item && (item as ReactElement).props.value === value),
        [children, value]
    );

    const defineDesign = useCallback(
        (child: any, index: number) => {
            if (error && error.find((item) => item === child.props.value)) {
                return 'error';
            }

            if (value === child.props.value) {
                return 'current';
            }

            if (index > currentStepIndex) {
                return 'empty';
            }

            return 'filled';
        },
        [children]
    );

    useLayoutEffect(() => {
        const tooltips = new Set();

        for (const [index, value] of Object.entries(stepsRefs)) {
            const ref: any = value;

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
        return (currentStepIndex * 100) / (childrenSize - 1);
    }, [children, value]);

    const steps = useMemo(() => {
        const displayedChildren = React.Children.toArray(children)?.filter(Boolean);
        const count = React.Children.count(displayedChildren);

        return React.Children.map(displayedChildren, (child: any, index) => {
            const childProps: StepProps = {
                design: defineDesign(child, index),
                title: child.props.children,
                size: size || 's',
                orientation: orientation || 'horizontal',
                value: child.props.value,
                hasTooltip: stepsTooltips.has(index),
                el: stepsRefs[index],
                count,
                valign,
            };

            return <child.type {...childProps} />;
        });
    }, [children, stepsRefs, stepperRef]);

    const hasIncorrectChildren = childrenArray.some((child: any) => child && String(child.type) !== String(Step));
    if (hasIncorrectChildren) {
        console.error('Ошибка! Допустимы только элементы Step.'); // eslint-disable-line
        return <></>;
    }

    return (
        <Box orientation={orientation} childrenCount={childrenArray && childrenArray.length} responsive={responsive}>
            <Line ref={stepperRef} orientation={orientation} />
            <Progress width={progressWidth} orientation={orientation} />
            {steps}
        </Box>
    );
};

Stepper.displayName = 'Stepper';
Stepper.defaultProps = {
    size: 's',
    orientation: 'horizontal',
    responsive: true,
    valign: 'center',
};
Stepper.Step = Step;

export default Stepper;
