import React, {
    useCallback,
    useState,
    useRef,
    useMemo,
    ReactNode,
    useEffect,
    FC,
    isValidElement,
    ReactElement,
} from 'react';
import { useWindowResize } from 'vienna.react-use';
import { wizard } from 'vienna.ui-theme';
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
import { reactNodeIsComponent } from '../Utils';

export interface WizardProps extends Omit<BoxStyled<typeof Box, object>, 'onChange'>, WizardLocalizationProps {
    /** Размеры */
    size?: Size;

    /** Индекс активного шага */
    value: number;

    /** Обработчик клика по шагу */
    onChange?: (value: number, data: { isActive: boolean }) => void;
}

const stepPoints = getPresets(
    wizard.stepPoints,
    'wizard.stepPoints'
)({
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
        const footerBox = childrenArray.find((child) => isValidElement(child) && reactNodeIsComponent(child, Footer));
        return footerBox ? React.cloneElement(footerBox, { size }) : '';
    }, [childrenArray, size]);

    const body = useMemo(() => {
        return childrenArray.find((child) => isValidElement(child) && reactNodeIsComponent(child, Body));
    }, [childrenArray]);

    const steps = useMemo(() => {
        const steps = (body?.props?.children as ReactNode[])?.filter(
            (child) => isValidElement(child) && reactNodeIsComponent(child, Step)
        );
        return Array.isArray(steps) ? steps : [];
    }, [childrenArray]);

    const activeStep = useMemo(() => {
        return (Array.isArray(steps) && steps[value]) as ReactElement<{ title?: string }> | undefined;
    }, [steps, value]);

    const handleClick = useCallback(
        (index: number) => () => {
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
            const { children, ...rest } = steps[index].props;
            stepPoints.push(
                <StepPoint
                    $canClickStep={typeof onChange === 'function'}
                    $type={index === value ? 'active' : index < value ? 'elapsed' : 'empty'}
                    key={index}
                    onClick={handleClick(index)}
                    {...rest}
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
                {body &&
                    React.cloneElement(body, {
                        size,
                        children:
                            activeStep && React.cloneElement(activeStep, { ...activeStep.props, title: undefined }),
                    })}
                {footer}
            </Form>
        </Box>
    );
};

Wizard.displayName = 'Wizard';
Wizard.Step = Step;
Wizard.Body = Body;
Wizard.Footer = Footer;
