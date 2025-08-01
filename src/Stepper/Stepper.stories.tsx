import React, { useMemo } from 'react';
import { Story, Meta } from 'storybook';
import { Stepper, StepperProps } from './Stepper';

export default {
    title: 'Development/Stepper',
    component: Stepper,
} as Meta;

export const Overview: Story<StepperProps> = (args) => {
    return (
        <Stepper {...args}>
            <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
            <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
            <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
            <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
        </Stepper>
    );
};

export const ActiveStep: Story<StepperProps> = (args) => {
    return (
        <Stepper value='3' {...args}>
            <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
            <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
            <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
            <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
        </Stepper>
    );
};

export const StepperWithError: Story<StepperProps> = (args) => {
    return (
        <Stepper value='2' error={['2']} {...args}>
            <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
            <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
            <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
            <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
        </Stepper>
    );
};

export const VerticalStepper: Story<StepperProps> = (args) => {
    return (
        <div style={{ height: '400px' }}>
            <Stepper value='2' orientation='vertical' {...args}>
                <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
                <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
                <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
                <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
            </Stepper>
        </div>
    );
};

export const EmptyInvertedStepper: Story<StepperProps> = (args) => {
    return (
        <Stepper inverted {...args}>
            <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
            <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
            <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
            <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
        </Stepper>
    );
};

export const InvertedStepper: Story<StepperProps> = (args) => {
    return (
        <Stepper value='2' inverted {...args}>
            <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
            <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
            <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
            <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
        </Stepper>
    );
};

export const SizedInvertedStepper: Story<StepperProps> = (args) => {
    return (
        <Stepper value='3' inverted size='l' {...args}>
            <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
            <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
            <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
            <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
        </Stepper>
    );
};

export const VerticalInvertedStepper: Story<StepperProps> = (args) => {
    return (
        <div style={{ height: '400px' }}>
            <Stepper value='2' orientation='vertical' inverted {...args}>
                <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
                <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
                <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
                <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
            </Stepper>
        </div>
    );
};

export const SizedVerticalInvertedStepper: Story<StepperProps> = (args) => {
    return (
        <div style={{ height: '400px' }}>
            <Stepper value='4' orientation='vertical' size='l' inverted {...args}>
                <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
                <Stepper.Step value='2'>Заголовок шага №2</Stepper.Step>
                <Stepper.Step value='3'>Заголовок шага №3</Stepper.Step>
                <Stepper.Step value='4'>Заголовок шага №4</Stepper.Step>
                <Stepper.Step value='5'>Заголовок шага №5</Stepper.Step>
            </Stepper>
        </div>
    );
};

export const TooltipOnStepper: Story<StepperProps> = (args) => {
    return (
        <div style={{ height: '400px' }}>
            <Stepper value='3' {...args}>
                <Stepper.Step value='1'>Заголовок шага №1</Stepper.Step>
                <Stepper.Step value='2'>
                    Заголовок шага №2, который не вмещается в данное поле менее чем в три строки будет отображаться
                    неполностью. Для его полного отображения есть тултип.
                </Stepper.Step>
                <Stepper.Step value='3' hasTooltip tooltipText='May 2024'>
                    Заголовок шага №3
                </Stepper.Step>
                <Stepper.Step value='4' hasTooltip tooltipText='Мой текст в тултипе'>
                    Заголовок шага №4
                </Stepper.Step>
            </Stepper>
        </div>
    );
};

export const DynamicSteps: Story<StepperProps> = (args) => {
    const [stepsCount, setStepsCount] = React.useState(4);
    const steps = [
        { value: '1', label: 'Заголовок шага №1', tooltip: 'Tooltip text 1' },
        {
            value: '2',
            label: 'Заголовок шага №2 Заголовок шага №2 Заголовок шага №2 Заголовок шага №2 Заголовок шага №2 Заголовок шага №2 Заголовок шага №2 Заголовок шага №2 Заголовок шага №2 Заголовок шага №2 Заголовок шага №2 Заголовок шага №2 Заголовок шага №2 Заголовок шага №2 Заголовок шага №2 Заголовок шага №2 Заголовок шага №2 Заголовок шага №2 Заголовок шага №2 Заголовок шага №2',
            tooltip: 'Tooltip text 2',
        },
        { value: '3', label: 'Заголовок шага №3', tooltip: 'Tooltip text 3' },
        { value: '4', label: 'Заголовок шага №4', tooltip: 'Tooltip text 4' },
    ];
    const visibleSteps = useMemo(
        () => (stepsCount === 3 ? steps.filter((st) => st.value !== '2') : steps),
        [stepsCount]
    );
    const handleChangeSteps = () => setStepsCount(3);
    return (
        <div>
            <button onClick={handleChangeSteps} style={{ marginBottom: '100px' }}>
                ChangeSteps
            </button>
            <Stepper>
                {visibleSteps.map((step) => (
                    <Stepper.Step key={step.value} value={step.value}>
                        {step.label}
                    </Stepper.Step>
                ))}
            </Stepper>
        </div>
    );
};

export const StepsWithoutTooltip: Story<StepperProps> = (args) => {
    const STATUS_DESCRIPTION = 'Обрабатываем заявку';

    return (
        <div style={{ width: '500px', paddingTop: '50px' }}>
            <Stepper value='2' orientation='vertical' {...args}>
                <Stepper.Step value='1'>
                    {STATUS_DESCRIPTION}
                    Заголовок шага №1, который не вмещается в данное поле менее чем в три строки будет отображаться
                    неполностью. Для его полного отображения есть тултип.
                </Stepper.Step>
                <Stepper.Step value='2'>Выпускаем карту</Stepper.Step>
                <Stepper.Step value='3'>Доставляем</Stepper.Step>
                <Stepper.Step value='4'>Уже у вас</Stepper.Step>
            </Stepper>
        </div>
    );
};
