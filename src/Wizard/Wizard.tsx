import React, { useCallback, useState, useRef, useMemo, ReactNode, useEffect, FC } from 'react';
import { useWindowResize } from 'vienna.react-use';
import {
    Box,
    Header,
    Body,
    Footer,
    Step,
    Title,
    StepsCount,
    StepPoint,
    StepPoints,
    Form,
    StepTitle,
    Size,
} from './Wizard.styles';
import { useLocalization } from '../Localization';
import {
    WizardLocalizationMap,
    WizardLocalizationContext,
    defaultWizardLocalization,
    WizardLocalizationProps,
} from './localization';
import { getPresets } from '../Utils/styling';
import { BoxStyled } from '../Utils/styled';

export interface WizardProps extends Omit<BoxStyled<typeof Box, {}>, 'onChange'>, WizardLocalizationProps {
    /** Размеры */
    size?: Size;

    /** Индекс активного шага */
    value: number;

    /** Обработчик клика по шагу */
    onChange?: (value: number, data: { isActive: boolean }) => void;
}

const stepPoints = getPresets('wizard.stepPoints', {
    horizontalRight: '$size',
});

export const Wizard: FC<WizardProps> & {
    Step: typeof Step;
    Body: typeof Body;
    Footer: typeof Footer;
} = (props) => {
    const { children, size = 'm', value = 0, onChange, localization, ...attrs } = props;
    const childrenArray: Exclude<ReactNode, boolean | null | undefined>[] = React.Children.toArray(children);
    const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
    const [headerPadding, setHeaderPadding] = useState<number>(0);
    const stepPointsRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    const l10n = useLocalization<WizardLocalizationMap, WizardLocalizationContext>(
        localization,
        defaultWizardLocalization
    );

    const handleResize = () => {
        const headerClientRect = headerRef.current && headerRef.current.getBoundingClientRect();
        const stepPointsClientRect = stepPointsRef.current && stepPointsRef.current.getBoundingClientRect();
        const right = parseInt(stepPoints.horizontalRight({ $size: size }), 10);

        // max step points width compare to 20% (includes left padding) of header width
        if (
            stepPointsClientRect &&
            headerClientRect &&
            stepPointsClientRect.width + right >= 0.2 * headerClientRect.width
        ) {
            setOrientation('vertical');
            setHeaderPadding(right);
        } else {
            stepPointsClientRect && setHeaderPadding(right + stepPointsClientRect.width);
            setOrientation('horizontal');
        }
    };

    useEffect(() => {
        handleResize();
    }, []);

    useWindowResize(handleResize);

    const footer = useMemo(() => {
        const footerBox: any = childrenArray.find((child: any) => child && String(child.type) === String(Footer));
        return React.cloneElement(footerBox, { $size: size });
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
                    $canClickStep={typeof onChange === 'function'}
                    $type={index === value ? 'active' : index < value ? 'elapsed' : 'empty'}
                    key={index}
                    onClick={handleClick(index)}
                />
            );
        }

        return (
            <Header ref={headerRef} $size={size} $orientation={orientation} $padding={headerPadding}>
                <Title>
                    <StepTitle>{title}</StepTitle>
                    <StepsCount>{l10n('ds.wizard.steps', { count: stepsCount, value: value + 1 })}</StepsCount>
                </Title>
                <StepPoints ref={stepPointsRef} $orientation={orientation} $size={size}>
                    {stepPoints}
                </StepPoints>
            </Header>
        );
    }, [activeStep, size, orientation, onChange, value, headerPadding]);

    return (
        <Box {...attrs}>
            {header}
            <Form>
                {React.cloneElement(body, {
                    $size: size,
                    children: React.cloneElement(activeStep, { ...activeStep.props, title: undefined }),
                })}
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
