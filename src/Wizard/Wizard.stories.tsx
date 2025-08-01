import React, { useState } from 'react';
import { Story, Meta } from 'storybook';
import { GoRightIcon, GoLeftIcon } from 'vienna.icons';
import { Wizard, WizardProps } from './Wizard';
import { Button, Flex, Whitespace } from '../index';

export default {
    title: 'Development/Wizard',
    component: Wizard,
} as Meta;

export const Overview: Story<WizardProps> = (args) => {
    const [step, setStep] = useState(0);

    const handleChange = (value) => {
        setStep(value);
    };

    const handleClickButton = (spin: 'next' | 'prev') => () => {
        setStep(spin === 'prev' ? step - 1 : step + 1);
    };

    return (
        <Wizard value={step} onChange={handleChange} {...args}>
            <Wizard.Body>
                <Wizard.Step title='Шаг 1 Шаг 1 Шаг 1'>1</Wizard.Step>
                <Wizard.Step title='Шаг 2'>2</Wizard.Step>
                <Wizard.Step title='Шаг 3'>3</Wizard.Step>
            </Wizard.Body>
            <Wizard.Footer>
                <Flex gap='s2'>
                    {step !== 0 && (
                        <Button design='ghost' onClick={handleClickButton('prev')}>
                            <GoLeftIcon /> Назад
                        </Button>
                    )}
                    {step !== 2 && (
                        <Whitespace ml='auto'>
                            <Button design='accent' onClick={handleClickButton('next')}>
                                Далее <GoRightIcon />
                            </Button>
                        </Whitespace>
                    )}
                </Flex>
            </Wizard.Footer>
        </Wizard>
    );
};

export const HeaderWithSteps: Story<WizardProps> = (args) => {
    return (
        <Wizard value={5} {...args}>
            <Wizard.Body>
                <Wizard.Step title='Шаг 1'>1</Wizard.Step>
                <Wizard.Step title='Шаг 2'>2</Wizard.Step>
                <Wizard.Step title='Шаг 3'>3</Wizard.Step>
                <Wizard.Step title='Шаг 4'>4</Wizard.Step>
                <Wizard.Step title='Шаг 5'>5</Wizard.Step>
                <Wizard.Step title='Шаг 6'>6</Wizard.Step>
                <Wizard.Step title='Шаг 7'>7</Wizard.Step>
                <Wizard.Step title='Шаг 8'>8</Wizard.Step>
                <Wizard.Step title='Шаг 9'>9</Wizard.Step>
                <Wizard.Step title='Шаг 1'>1</Wizard.Step>
                <Wizard.Step title='Шаг 2'>2</Wizard.Step>
                <Wizard.Step title='Шаг 3'>3</Wizard.Step>
                <Wizard.Step title='Шаг 4'>4</Wizard.Step>
                <Wizard.Step title='Шаг 5'>5</Wizard.Step>
                <Wizard.Step title='Шаг 6'>6</Wizard.Step>
                <Wizard.Step title='Шаг 7'>7</Wizard.Step>
                <Wizard.Step title='Шаг 8'>8</Wizard.Step>
                <Wizard.Step title='Шаг 9'>9</Wizard.Step>
            </Wizard.Body>
            <Wizard.Footer>Footer</Wizard.Footer>
        </Wizard>
    );
};
HeaderWithSteps.storyName = 'Шапка с болишим количеством шагов';

export const HeaderWithLocalization: Story<WizardProps> = (args) => {
    const customLocalization = (key, context) => {
        if (key === 'ds.wizard.steps') {
            return `step ${context?.value} of ${context?.count}`;
        }

        return '';
    };

    return (
        <Wizard value={5} localization={customLocalization} {...args}>
            <Wizard.Body>
                <Wizard.Step title='Шаг 1'>1</Wizard.Step>
                <Wizard.Step title='Шаг 2'>2</Wizard.Step>
                <Wizard.Step title='Шаг 3'>3</Wizard.Step>
                <Wizard.Step title='Шаг 4'>4</Wizard.Step>
                <Wizard.Step title='Шаг 5'>5</Wizard.Step>
                <Wizard.Step title='Шаг 6'>6</Wizard.Step>
            </Wizard.Body>
            <Wizard.Footer>Footer</Wizard.Footer>
        </Wizard>
    );
};
HeaderWithLocalization.storyName = 'Локализация';
