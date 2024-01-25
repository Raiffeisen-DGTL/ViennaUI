import React from 'react';
import { Story, Meta } from 'storybook';
import { ComboButton } from './ComboButton';
import { Button, ButtonProps } from '../Button';
import { Groups } from '../Groups';

export default {
    title: 'Development/ComboButton',
    component: ComboButton,
} as Meta;
const cleanArgs = (args) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { icons, ...newArgs } = args;
    return newArgs;
};
export const Overview: Story<ButtonProps> = (args) => {
    const options = [
        <ComboButton.Option key={1}>Option 1</ComboButton.Option>,
        <ComboButton.Option key={2}>Option 2</ComboButton.Option>,
        <ComboButton.Option key={3}>Option 3</ComboButton.Option>,
        <ComboButton.Option key={4}>Option 4</ComboButton.Option>,
        <ComboButton.Option key={5}>Option 5</ComboButton.Option>,
    ];
    return (
        <Groups>
            <ComboButton fixed options={options} {...cleanArgs(args)}>
                <Button>Click me</Button>
            </ComboButton>
            <ComboButton disabled fixed options={options} {...cleanArgs(args)}>
                <Button>Click me</Button>
            </ComboButton>
        </Groups>
    );
};

export const TwoButtons: Story<ButtonProps> = (args) => {
    const options = [
        <ComboButton.Option key={1}>Option 1</ComboButton.Option>,
        <ComboButton.Option key={2}>Option 2</ComboButton.Option>,
        <ComboButton.Option key={3}>Option 3</ComboButton.Option>,
        <ComboButton.Option key={4}>Option 4</ComboButton.Option>,
        <ComboButton.Option key={5}>Option 5</ComboButton.Option>,
    ];
    return (
        <Groups>
            <ComboButton fixed options={options} {...cleanArgs(args)}>
                <Button>Click me</Button>
                <Button />
            </ComboButton>
        </Groups>
    );
};
TwoButtons.storyName = ' Двухкнопочный вариант';
export const AllDesigns: Story<ButtonProps> = (args) => {
    const options = [
        <ComboButton.Option onClick={(e) => console.log(e.target)} key={1}>
            Option 1
        </ComboButton.Option>,
        <ComboButton.Option onClick={(e) => console.log(e.target)} key={2}>
            Option 2
        </ComboButton.Option>,
        <ComboButton.Option onClick={(e) => console.log(e.target)} key={3}>
            Option 3
        </ComboButton.Option>,
    ];
    return (
        <Groups>
            <ComboButton options={options}>
                <Button onClick={(e) => console.log(e.target)}>Button</Button>
            </ComboButton>
            <ComboButton design='accent' options={options}>
                <Button onClick={(e) => console.log(e.target)}>Button</Button>
            </ComboButton>
            <ComboButton design='critical' options={options}>
                <Button onClick={(e) => console.log(e.target)}>Button</Button>
            </ComboButton>
            <ComboButton design='outline' options={options}>
                <Button onClick={(e) => console.log(e.target)}>Button</Button>
            </ComboButton>
        </Groups>
    );
};
export const AllDesignsPrimary: Story<ButtonProps> = (args) => {
    const options = [
        <ComboButton.Option key={1}>Option 1</ComboButton.Option>,
        <ComboButton.Option key={2}>Option 2</ComboButton.Option>,
        <ComboButton.Option key={3}>Option 3</ComboButton.Option>,
        <ComboButton.Option key={4}>Option 4</ComboButton.Option>,
        <ComboButton.Option key={5}>Option 5</ComboButton.Option>,
    ];
    return (
        <Groups design='vertical' size='xl'>
            <Groups>
                <ComboButton size='xs' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton size='s' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton size='m' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton size='l' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton size='xl' options={options}>
                    <Button>Button</Button>
                </ComboButton>
            </Groups>
            <Groups>
                <ComboButton size='xs' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton size='s' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton size='m' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton size='l' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton size='xl' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
            </Groups>
        </Groups>
    );
};
export const AllDesignsAccent: Story<ButtonProps> = (args) => {
    const options = [
        <ComboButton.Option key={1}>Option 1</ComboButton.Option>,
        <ComboButton.Option key={2}>Option 2</ComboButton.Option>,
        <ComboButton.Option key={3}>Option 3</ComboButton.Option>,
        <ComboButton.Option key={4}>Option 4</ComboButton.Option>,
        <ComboButton.Option key={5}>Option 5</ComboButton.Option>,
    ];
    return (
        <Groups design='vertical' size='xl'>
            <Groups>
                <ComboButton design='accent' size='xs' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton design='accent' size='s' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton design='accent' size='m' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton design='accent' size='l' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton design='accent' size='xl' options={options}>
                    <Button>Button</Button>
                </ComboButton>
            </Groups>
            <Groups>
                <ComboButton design='accent' size='xs' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton design='accent' size='s' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton design='accent' size='m' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton design='accent' size='l' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton design='accent' size='xl' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
            </Groups>
        </Groups>
    );
};
export const AllDesignsCritical: Story<ButtonProps> = (args) => {
    const options = [
        <ComboButton.Option key={1}>Option 1</ComboButton.Option>,
        <ComboButton.Option key={2}>Option 2</ComboButton.Option>,
        <ComboButton.Option key={3}>Option 3</ComboButton.Option>,
        <ComboButton.Option key={4}>Option 4</ComboButton.Option>,
        <ComboButton.Option key={5}>Option 5</ComboButton.Option>,
    ];
    return (
        <Groups design='vertical' size='xl'>
            <Groups>
                <ComboButton design='critical' size='xs' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton design='critical' size='s' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton design='critical' size='m' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton design='critical' size='l' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton design='critical' size='xl' options={options}>
                    <Button>Button</Button>
                </ComboButton>
            </Groups>
            <Groups>
                <ComboButton design='critical' size='xs' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton design='critical' size='s' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton design='critical' size='m' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton design='critical' size='l' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton design='critical' size='xl' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
            </Groups>
        </Groups>
    );
};

export const AllDesignsOutline: Story<ButtonProps> = (args) => {
    const options = [
        <ComboButton.Option key={1}>Option 1</ComboButton.Option>,
        <ComboButton.Option key={2}>Option 2</ComboButton.Option>,
        <ComboButton.Option key={3}>Option 3</ComboButton.Option>,
        <ComboButton.Option key={4}>Option 4</ComboButton.Option>,
        <ComboButton.Option key={5}>Option 5</ComboButton.Option>,
    ];
    return (
        <Groups design='vertical' size='xl'>
            <Groups>
                <ComboButton design='outline' size='xs' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton design='outline' size='s' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton design='outline' size='m' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton design='outline' size='l' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton design='outline' size='xl' options={options}>
                    <Button>Button</Button>
                </ComboButton>
            </Groups>
            <Groups>
                <ComboButton design='outline' size='xs' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton design='outline' size='s' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton design='outline' size='m' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton design='outline' size='l' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton design='outline' size='xl' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
            </Groups>
        </Groups>
    );
};
