import React from 'react';
import { Button, ButtonProps } from '../Button';
import { ComboButton } from './ComboButton';

const options = [
    <ComboButton.Option key={1}>Option 1</ComboButton.Option>,
    <ComboButton.Option key={2}>Option 2</ComboButton.Option>,
    <ComboButton.Option key={3}>Option 3</ComboButton.Option>,
    <ComboButton.Option key={4}>Option 4</ComboButton.Option>,
    <ComboButton.Option key={5}>Option 5</ComboButton.Option>,
];

test('ComboButton', () => {
    const snapOneButton = snapshot.render(
        <ComboButton options={options}>
            <Button>Click Me</Button>
        </ComboButton>
    );

    const snapTwoButton = snapshot.render(
        <ComboButton options={options}>
            <Button>Click Me</Button>
            <Button />
        </ComboButton>
    );

    expect(snapOneButton).toMatchSnapshot();
    expect(snapTwoButton).toMatchSnapshot();
});

test('ComboButton w/ design', () => {
    const designs: ButtonProps['design'][] = ['primary', 'accent', 'critical', 'outline', 'outline-critical', 'ghost'];

    designs.forEach((design) => {
        const snapOneButton = snapshot.render(
            <ComboButton design={design} options={options}>
                <Button>Click Me</Button>
            </ComboButton>
        );

        const snapTwoButton = snapshot.render(
            <ComboButton design={design} options={options}>
                <Button>Click Me</Button>
                <Button />
            </ComboButton>
        );

        expect(snapOneButton).toMatchSnapshot();
        expect(snapTwoButton).toMatchSnapshot();
    });
});

test('ComboButton w/ size', () => {
    const sizes: ButtonProps['size'][] = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

    sizes.forEach((size) => {
        const snapOneButton = snapshot.render(
            <ComboButton size={size} options={options}>
                <Button>Click Me</Button>
            </ComboButton>
        );

        const snapTwoButton = snapshot.render(
            <ComboButton size={size} options={options}>
                <Button>Click Me</Button>
                <Button />
            </ComboButton>
        );

        expect(snapOneButton).toMatchSnapshot();
        expect(snapTwoButton).toMatchSnapshot();
    });
});

test('ComboButton w/ clicks', () => {
    const fn = jest.fn();

    const options = [
        <ComboButton.Option key={1} onClick={fn}>
            Option 1
        </ComboButton.Option>,
    ];

    const fn1 = jest.fn();
    const fn2 = jest.fn();

    const snap = snapshot.shallow(
        <ComboButton options={options}>
            <Button onClick={fn1}>Click Me</Button>
            <Button onClick={fn2} />
        </ComboButton>
    );

    snap.childAt(0).simulate('click', {});
    snap.childAt(1).simulate('click', {});

    expect(fn1).toHaveBeenCalled();
    expect(fn2).toHaveBeenCalled();

    expect(snap.childAt(2).childAt(0).text()).toEqual('Option 1');

    snap.childAt(2).childAt(0).simulate('click', {});
    expect(fn).toHaveBeenCalled();
});

test('ComboButton w/ hide list when blur', () => {
    const options = [<ComboButton.Option key={1}>Option 1</ComboButton.Option>];

    const snap = snapshot.shallow(
        <ComboButton options={options}>
            <Button>Click Me</Button>
            <Button />
        </ComboButton>
    );

    expect(snap.childAt(2).exists()).toEqual(false);

    snap.childAt(1).simulate('click', {});

    expect(snap.childAt(2).exists()).toEqual(true);

    snap.childAt(1).simulate('blur', {});

    expect(snap.childAt(2).exists()).toEqual(false);
});

test('ComboButton w/ hide list when click on item', () => {
    const options = [<ComboButton.Option key={1}>Option 1</ComboButton.Option>];

    const snap = snapshot.shallow(
        <ComboButton options={options}>
            <Button>Click Me</Button>
            <Button />
        </ComboButton>
    );

    snap.childAt(1).simulate('click', {});

    expect(snap.childAt(2).exists()).toEqual(true);

    snap.childAt(2).childAt(0).simulate('click', {});

    expect(snap.childAt(2).exists()).toEqual(false);
});
