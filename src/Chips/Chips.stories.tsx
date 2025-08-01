import React from 'react';
import { Story, Meta } from 'storybook';
import { Chips, ChipsProps } from './Chips';
import { Tooltip } from '../Tooltip';

export default {
    title: 'Development/Chips',
    component: Chips,
} as Meta;

export const Overview: Story<ChipsProps> = (args) => {
    const [active, setActive] = React.useState();
    const onClick = (e) => setActive(e.target.id);

    return (
        <Chips {...args} active={active} onClick={onClick} {...args}>
            <Chips.Item size='l' id='1' tabIndex={1}>
                Chip 1
            </Chips.Item>
            <Chips.Item size='l' id='2' tabIndex={1}>
                Chip 2
            </Chips.Item>
            <Chips.Item size='l' id='3' tabIndex={1}>
                Chip 3
            </Chips.Item>
            <Chips.Item size='l' id='4' tabIndex={1} disabled>
                Chip 3
            </Chips.Item>
        </Chips>
    );
};

export const MultipleSelection: Story<ChipsProps> = (args) => {
    const [active, setActive] = React.useState<string[]>([]);
    const onClick = (event) => {
        const id = event.target.id;
        setActive((state) => (state.includes(id) ? state.filter((i) => i !== id) : [...state, id]));
    };

    return (
        <Chips active={active} onClick={onClick} {...args}>
            <Chips.Item id='1' tabIndex={1} role='checkbox'>
                Chip 1
            </Chips.Item>
            <Chips.Item id='2' tabIndex={1} role='checkbox'>
                Chip 2
            </Chips.Item>
            <Chips.Item id='3' tabIndex={1} role='checkbox'>
                Chip 3
            </Chips.Item>
            <Chips.Item id='4' tabIndex={1} role='checkbox' disabled>
                Chip 4
            </Chips.Item>
        </Chips>
    );
};
MultipleSelection.storyName = 'Выбрать несколько';

export const ChipsWithTooltip: Story<ChipsProps> = (args) => {
    const [active, setActive] = React.useState();
    const onClick = (e) => setActive(e.currentTarget.id);

    return (
        <Chips {...args} active={active} onClick={onClick} {...args}>
            <Tooltip action={'hover'} content={'Chip 1 Tooltip text'}>
                <Chips.Item size='l' id='1' tabIndex={1}>
                    Chip 1
                </Chips.Item>
            </Tooltip>
            <Tooltip action={'hover'} content={'Chip 2 Tooltip text'}>
                <Chips.Item size='l' id='2' tabIndex={1}>
                    Chip 2
                </Chips.Item>
            </Tooltip>
            <Tooltip action={'hover'} content={'Chip 3 Tooltip text'}>
                <Chips.Item size='l' id='3' tabIndex={1}>
                    Chip 3
                </Chips.Item>
            </Tooltip>
            <Tooltip action={'hover'} content={'Chip 4 Tooltip text'}>
                <Chips.Item size='l' id='4' tabIndex={1} disabled>
                    Chip 4
                </Chips.Item>
            </Tooltip>
        </Chips>
    );
};
ChipsWithTooltip.storyName = 'Chips с Tooltip внутри';

export const AllDesigns: Story<ChipsProps> = (args) => {
    return (
        <>
            <Chips design='accent'>
                <Chips.Item id='1' tabIndex={1} active>
                    Chip
                </Chips.Item>
                <Chips.Item id='2' tabIndex={1}>
                    Chip
                </Chips.Item>
                <Chips.Item id='3' tabIndex={1}>
                    Chip
                </Chips.Item>
            </Chips>
            <Chips design='primary'>
                <Chips.Item id='1' tabIndex={1} active>
                    Chip
                </Chips.Item>
                <Chips.Item id='2' tabIndex={1}>
                    Chip
                </Chips.Item>
                <Chips.Item id='3' tabIndex={1}>
                    Chip
                </Chips.Item>
            </Chips>
            <Chips design='ghost'>
                <Chips.Item id='1' tabIndex={1} active>
                    Chip
                </Chips.Item>
                <Chips.Item id='2' tabIndex={1}>
                    Chip
                </Chips.Item>
                <Chips.Item id='3' tabIndex={1}>
                    Chip
                </Chips.Item>
            </Chips>
        </>
    );
};
export const AllSizes: Story<ChipsProps> = (args) => {
    const [active, setActive] = React.useState<string | null>(null);
    const onClick = (event) => setActive(event.target.id);
    return (
        <Chips onClick={onClick} active={active}>
            <Chips.Item size='xs' id='1' active>
                Chip
            </Chips.Item>
            <Chips.Item size='s' id='2'>
                Chip
            </Chips.Item>
            <Chips.Item size='m' id='3'>
                Chip
            </Chips.Item>
            <Chips.Item size='l' id='4'>
                Chip
            </Chips.Item>
            <Chips.Item size='xl' id='5'>
                Chip
            </Chips.Item>
            <Chips.Item size='xxl' id='6'>
                Chip
            </Chips.Item>
        </Chips>
    );
};
export const RightAligned: Story<ChipsProps> = (args) => {
    return (
        <Chips align='right'>
            <Chips.Item id='1' active>
                Chip
            </Chips.Item>
            <Chips.Item id='2'>Chip</Chips.Item>
            <Chips.Item id='3'>Chip</Chips.Item>
        </Chips>
    );
};
export const DisabledChips: Story<ChipsProps> = (args) => {
    return (
        <>
            <Chips design='accent'>
                <Chips.Item id='1' disabled active>
                    Chip
                </Chips.Item>
                <Chips.Item id='2' disabled>
                    Chip
                </Chips.Item>
                <Chips.Item id='3' disabled>
                    Chip
                </Chips.Item>
            </Chips>
            <Chips design='primary'>
                <Chips.Item id='1' disabled active>
                    Chip
                </Chips.Item>
                <Chips.Item id='2' disabled>
                    Chip
                </Chips.Item>
                <Chips.Item id='3' disabled>
                    Chip
                </Chips.Item>
            </Chips>
            <Chips design='ghost'>
                <Chips.Item id='1' disabled active>
                    Chip
                </Chips.Item>
                <Chips.Item id='2' disabled>
                    Chip
                </Chips.Item>
                <Chips.Item id='3' disabled>
                    Chip
                </Chips.Item>
            </Chips>
        </>
    );
};

export const ChipsWithOnClickOnItems: Story<ChipsProps> = (args) => {
    const [active, setActive] = React.useState('1');
    return (
        <>
            <Chips active={active}>
                <Chips.Item id='1' onClick={() => setActive('1')}>
                    Chip
                </Chips.Item>
                <Chips.Item id='2' disabled onClick={() => setActive('2')}>
                    Chip
                </Chips.Item>
                <Chips.Item id='3' onClick={() => setActive('3')}>
                    Chip
                </Chips.Item>
            </Chips>
        </>
    );
};

export const ViewOnly: Story<ChipsProps> = (args) => {
    const [active, setActive] = React.useState(['1', '2']);

    return (
        <Chips active={active} viewOnly>
            <Chips.Item size='l' id='1'>
                Chip 1
            </Chips.Item>
            <Chips.Item size='l' id='2'>
                Chip 2
            </Chips.Item>
            <Chips.Item size='l' id='3'>
                Chip 3
            </Chips.Item>
            <Chips.Item size='l' id='4'>
                Chip 3
            </Chips.Item>
        </Chips>
    );
};
