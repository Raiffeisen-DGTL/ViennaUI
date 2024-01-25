import React from 'react';
import { Story, Meta } from 'storybook';
import { Stepper, StepperProps } from './Stepper';

export default {
    title: 'Development/Stepper',
    component: Stepper,
} as Meta;

export const Overview: Story<StepperProps> = (args) => {
    return (
        <Stepper {...args}>
            <Stepper.Step value="1">Заголовок шага №1</Stepper.Step>
            <Stepper.Step value="2">Заголовок шага №2</Stepper.Step>
            <Stepper.Step value="3">Заголовок шага №3</Stepper.Step>
            <Stepper.Step value="4">Заголовок шага №4</Stepper.Step>
        </Stepper>
    );
};

export const ActiveStep: Story<StepperProps> = (args) => {
    return (
        <Stepper value="3" {...args}>
            <Stepper.Step value="1">Заголовок шага №1</Stepper.Step>
            <Stepper.Step value="2">Заголовок шага №2</Stepper.Step>
            <Stepper.Step value="3">Заголовок шага №3</Stepper.Step>
            <Stepper.Step value="4">Заголовок шага №4</Stepper.Step>
       </Stepper>
    );
};

export const StepperWithError: Story<StepperProps> = (args) => {
    return (
        <Stepper value="2" error={['2']} {...args}>
            <Stepper.Step value="1">Заголовок шага №1</Stepper.Step>
            <Stepper.Step value="2">Заголовок шага №2</Stepper.Step>
            <Stepper.Step value="3">Заголовок шага №3</Stepper.Step>
            <Stepper.Step value="4">Заголовок шага №4</Stepper.Step>
        </Stepper>
    );
};

export const VerticalStepper: Story<StepperProps> = (args) => {
    return (
        <div style={{ height: '400px' }}>
            <Stepper value="2" orientation="vertical" {...args}>
                <Stepper.Step value="1">Заголовок шага №1</Stepper.Step>
                <Stepper.Step value="2">Заголовок шага №2</Stepper.Step>
                <Stepper.Step value="3">Заголовок шага №3</Stepper.Step>
                <Stepper.Step value="4">Заголовок шага №4</Stepper.Step>
            </Stepper>
        </div>
    );
};

export const EmptyInvertedStepper: Story<StepperProps> = (args) => {
    return (
        <Stepper inverted {...args}>
            <Stepper.Step value="1">Заголовок шага №1</Stepper.Step>
            <Stepper.Step value="2">Заголовок шага №2</Stepper.Step>
            <Stepper.Step value="3">Заголовок шага №3</Stepper.Step>
            <Stepper.Step value="4">Заголовок шага №4</Stepper.Step>
        </Stepper>
    );
};

export const InvertedStepper: Story<StepperProps> = (args) => {
    return (
        <Stepper value="2" inverted {...args}>
            <Stepper.Step value="1">Заголовок шага №1</Stepper.Step>
            <Stepper.Step value="2">Заголовок шага №2</Stepper.Step>
            <Stepper.Step value="3">Заголовок шага №3</Stepper.Step>
            <Stepper.Step value="4">Заголовок шага №4</Stepper.Step>
        </Stepper>
    );
};

export const SizedInvertedStepper: Story<StepperProps> = (args) => {
    return (
        <Stepper value="3" inverted size="l" {...args}>
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
            <Stepper value="2" orientation="vertical" inverted {...args}>
                <Stepper.Step value="1">Заголовок шага №1</Stepper.Step>
                <Stepper.Step value="2">Заголовок шага №2</Stepper.Step>
                <Stepper.Step value="3">Заголовок шага №3</Stepper.Step>
                <Stepper.Step value="4">Заголовок шага №4</Stepper.Step>
            </Stepper>
        </div>
    );
};

export const SizedVerticalInvertedStepper: Story<StepperProps> = (args) => {
    return (
        <div style={{ height: '400px' }}>
            <Stepper value="4" orientation="vertical" size="l" inverted {...args}>
                <Stepper.Step value="1">Заголовок шага №1</Stepper.Step>
                <Stepper.Step value="2">Заголовок шага №2</Stepper.Step>
                <Stepper.Step value="3">Заголовок шага №3</Stepper.Step>
                <Stepper.Step value="4">Заголовок шага №4</Stepper.Step>
                <Stepper.Step value="5">Заголовок шага №5</Stepper.Step>
            </Stepper>
        </div>
    );
};
