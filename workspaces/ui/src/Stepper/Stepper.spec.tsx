import React from 'react';
import Stepper, { StepperProps } from './Stepper';

test('Stepper', () => {
    const snap = snapshot.render(
        <Stepper>
            <Stepper.Step value='1'>1</Stepper.Step>
            <Stepper.Step value='2'>2</Stepper.Step>
        </Stepper>
    );

    expect(snap).toMatchSnapshot();
});

test('Stepper w/ value', () => {
    const snap = snapshot.render(
        <Stepper value='1'>
            <Stepper.Step value='1'>1</Stepper.Step>
            <Stepper.Step value='2'>2</Stepper.Step>
        </Stepper>
    );

    expect(snap).toMatchSnapshot();
});

test('Stepper w/ size', () => {
    const sizes: StepperProps['size'][] = ['s', 'l'];

    sizes.forEach((size) => {
        const snap = snapshot.render(
            <Stepper size={size}>
                <Stepper.Step value='1'>1</Stepper.Step>
                <Stepper.Step value='2'>2</Stepper.Step>
            </Stepper>
        );

        expect(snap).toMatchSnapshot(size);
    });
});

test('Stepper w/ orientation', () => {
    const orientations: StepperProps['orientation'][] = ['horizontal', 'vertical'];

    orientations.forEach((orientation) => {
        const snap = snapshot.render(
            <Stepper orientation={orientation}>
                <Stepper.Step value='1'>1</Stepper.Step>
                <Stepper.Step value='2'>2</Stepper.Step>
            </Stepper>
        );

        expect(snap).toMatchSnapshot(orientation);
    });
});

test('Stepper w/ orientation and not responsive', () => {
    const orientations: StepperProps['orientation'][] = ['horizontal', 'vertical'];

    orientations.forEach((orientation) => {
        const snap = snapshot.render(
            <Stepper orientation={orientation} responsive={false}>
                <Stepper.Step value='1'>1</Stepper.Step>
                <Stepper.Step value='2'>2</Stepper.Step>
            </Stepper>
        );

        expect(snap).toMatchSnapshot(orientation);
    });
});

test('Stepper w/ size and error', () => {
    const sizes: StepperProps['size'][] = ['s', 'l'];

    sizes.forEach((size) => {
        const snap = snapshot.render(
            <Stepper size={size} error={['2']}>
                <Stepper.Step value='1'>1</Stepper.Step>
                <Stepper.Step value='2'>2</Stepper.Step>
            </Stepper>
        );

        expect(snap).toMatchSnapshot(size);
    });
});
