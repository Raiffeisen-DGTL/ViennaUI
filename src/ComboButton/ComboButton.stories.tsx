import React from 'react';
import { Story, Meta } from 'storybook';
import { ComboButton, ComboButtonControls } from './ComboButton';
import { Button, ButtonProps } from '../Button';
import { Groups } from '../Groups';
import { Flex } from '@/Flex';
import { DatepickerRange, DatepickerRangeProps } from '@/DatepickerRange';
import { FormField } from '@/FormField';

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
                <ComboButton pressed design='critical' size='xl' options={options}>
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

export const DroplistContent: Story<ButtonProps> = () => {
    const [value, setValue] = React.useState('');
    const [design, setDesign] = React.useState<ButtonProps['design']>('primary');
    const isPending = React.useRef(false);
    const isDirty = React.useRef(false);
    const controls = React.useRef<ComboButtonControls>(null);
    const calendarBoxRef = React.useRef(null);
    const onClick = () => {
        if (isPending.current) return;
        isPending.current = true;
        setDesign('accent');
        setTimeout(() => {
            setDesign('primary');
            isPending.current = false;
            controls.current?.setOpen(false);
            isDirty.current = false;
        }, 333);
    };
    const onChange: DatepickerRangeProps['onChange'] = ({ value }) => {
        isDirty.current = true;
        setValue(value);
    };
    const onClose = () => {
        if (!isDirty.current) return;
        setValue('');
        isDirty.current = false;
    };
    return (
        <Groups>
            <FormField style={{ width: '250px' }}>
                <FormField.Label>Период учета:</FormField.Label>
                <FormField.Content>
                    <ComboButton
                        controlsRef={controls}
                        fitOptions={false}
                        additionalOutsideClickRefs={[calendarBoxRef]}
                        onClose={onClose}
                        droplistContent={
                            <Flex direction='column' alignItems='center' padding='10px 16px' style={{ gap: '16px' }}>
                                <DatepickerRange
                                    calendarBoxRef={calendarBoxRef}
                                    value={value}
                                    onChange={onChange}
                                    placeholder='Выберите период'
                                />
                                <Button design={design} onClick={onClick}>
                                    Применить
                                </Button>
                            </Flex>
                        }>
                        <Button grid={12}>{value || 'Не выбрано'}</Button>
                    </ComboButton>
                </FormField.Content>
            </FormField>
        </Groups>
    );
};

export const AllDesignsNeutral: Story<ButtonProps> = (args) => {
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
                <ComboButton design='neutral' size='xs' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton disabled design='neutral' size='s' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton design='neutral' size='m' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton design='neutral' size='l' options={options}>
                    <Button>Button</Button>
                </ComboButton>
                <ComboButton design='neutral' size='xl' options={options}>
                    <Button>Button</Button>
                </ComboButton>
            </Groups>
            <Groups>
                <ComboButton disabled design='neutral' size='xs' options={options}>
                    <Button loading>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton design='neutral' size='s' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton design='neutral' size='m' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton design='neutral' size='l' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
                <ComboButton pressed design='neutral' size='xl' options={options}>
                    <Button>Button</Button>
                    <Button />
                </ComboButton>
            </Groups>
        </Groups>
    );
};

export const Pressed: Story<ButtonProps> = (args) => {
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
                <ComboButton pressed design='accent' options={options}>
                    <Button>Accent</Button>
                </ComboButton>
                <ComboButton pressed design='primary' options={options}>
                    <Button>Primary</Button>
                </ComboButton>
                <ComboButton pressed design='outline' options={options}>
                    <Button>Outline</Button>
                </ComboButton>
                <ComboButton pressed design='critical' options={options}>
                    <Button>Critical</Button>
                </ComboButton>
                <ComboButton pressed design='outline-critical' options={options}>
                    <Button>Outline-critical</Button>
                </ComboButton>
                <ComboButton pressed design='ghost' options={options}>
                    <Button>Ghost</Button>
                </ComboButton>
                <ComboButton pressed design='ghost-accent' options={options}>
                    <Button>Ghost-accent</Button>
                </ComboButton>
                <ComboButton pressed design='white' options={options}>
                    <Button>White</Button>
                </ComboButton>
                <ComboButton pressed design='ghost-white' options={options}>
                    <Button>Ghost-white</Button>
                </ComboButton>
                <ComboButton pressed design='neutral' options={options}>
                    <Button>Neutral</Button>
                </ComboButton>
            </Groups>
        </Groups>
    );
};
