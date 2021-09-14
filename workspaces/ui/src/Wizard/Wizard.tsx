import React, { useCallback, useState, useRef, HTMLAttributes, useMemo, ReactNode, useEffect } from 'react';
import { useWindowResize } from 'vienna.react-use';
import { getPresets } from 'vienna.ui-primitives';
import { Box, Header, Body, Footer, Step, Title, StepsCount, StepPoint, StepPoints, Form } from './Wizard.styles';
import { useLocalization } from '../Localization';
import {
    WizardLocalizationMap,
    WizardLocalizationContext,
    defaultWizardLocalization,
    WizardLocalizationProps,
} from './localization';

export interface WizardProps extends Omit<HTMLAttributes<HTMLDivElement> & WizardLocalizationProps, 'onChange'> {
    /** Размеры */
    size?: 'l' | 'm' | 's';

    /** Индекс активного шага */
    value: number;

    /** Обработчик клика по шагу */
    onChange?: (value: number, { isActive: boolean }) => void;
}

export interface WizardStepProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
}

const stepPoints = getPresets('wizard.stepPoints', {
    horizontalRight: 'size',
});

export const Wizard: React.FC<WizardProps> & { Step: React.FC<WizardStepProps> } & { Body: React.FC } & {
    Footer: React.FC;
} = (props: React.PropsWithChildren<WizardProps>) => {
    const { children, size = 'm', value, onChange, ...attrs } = props;
    const childrenArray: Exclude<ReactNode, boolean | null | undefined>[] = React.Children.toArray(children);
    const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
    const stepPointsRef = useRef<any>(null);
    const headerRef = useRef<any>(null);

    const localize = useLocalization<WizardLocalizationMap, WizardLocalizationContext>(
        props,
        defaultWizardLocalization
    );

    const handleResize = () => {
        const headerClientRect = headerRef.current && headerRef.current.getBoundingClientRect();
        const stepPointsClientRect = stepPointsRef.current && stepPointsRef.current.getBoundingClientRect();
        const right = parseInt(stepPoints.horizontalRight({ size }), 10);

        // max step points width compare to 20% (includes left padding) of header width
        if (stepPointsClientRect.width + right >= 0.2 * headerClientRect.width) {
            setOrientation('vertical');
        } else {
            setOrientation('horizontal');
        }
    };

    useEffect(() => {
        handleResize();
    }, []);

    useWindowResize(handleResize);

    const footer = useMemo(() => {
        const footerBox: any = childrenArray.find((child: any) => child && String(child.type) === String(Footer));
        return React.cloneElement(footerBox, { size });
    }, [childrenArray, size]);

    const body = useMemo((): any => {
        return childrenArray.find((child: any) => child && String(child.type) === String(Body));
    }, [childrenArray]);

    const steps = useMemo(() => {
        const steps = body?.props?.children.filter((child: any) => child && String(child.type) === String(Step));
        return Array.isArray(steps) ? steps : [];
    }, [childrenArray]);

    const activeStep = useMemo(() => {
        return Array.isArray(steps) && steps[value];
    }, [steps, value]);

    const handleClick = useCallback(
        (index) => () => {
            if (typeof onChange === 'function') {
                onChange(index, { isActive: index <= value });
            }
        },
        [value, onChange]
    );

    const header = useMemo(() => {
        if (!activeStep) {
            return null;
        }

        const title = activeStep.props.title;
        const stepsCount = steps.length;
        const stepPoints: ReactNode[] = [];

        for (let index = 0; index < stepsCount; index++) {
            stepPoints.push(
                <StepPoint
                    canClickStep={typeof onChange === 'function'}
                    type={index === value ? 'active' : index < value ? 'elapsed' : 'empty'}
                    key={index}
                    onClick={handleClick(index)}
                />
            );
        }

        return (
            <Header ref={headerRef} size={size} orientation={orientation}>
                <Title>
                    {title}{' '}
                    <StepsCount>{localize('ds.wizard.steps', { count: stepsCount, value: value + 1 })}</StepsCount>
                </Title>
                <StepPoints ref={stepPointsRef} orientation={orientation} size={size}>
                    {stepPoints}
                </StepPoints>
            </Header>
        );
    }, [activeStep, size, orientation, onChange, value]);

    return (
        <Box {...attrs}>
            {header}
            <Form>
                {React.cloneElement(body, { size, children: activeStep })}
                {footer}
            </Form>
        </Box>
    );
};

Wizard.displayName = 'Wizard';
Wizard.defaultProps = {
    size: 'm',
    value: 0,
};
Wizard.Step = Step;
Wizard.Body = Body;
Wizard.Footer = Footer;

export default Wizard;
