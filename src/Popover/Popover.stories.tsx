import React from 'react';
import { Story, Meta } from 'storybook';
import { Popover, PopoverProps } from './Popover';
import { Button } from '../Button';
import { Groups } from '../Groups';
import { Calendar } from '../Calendar';
import { ITrigger } from '@/Trigger';

export default {
    title: 'Development/Popover',
    component: Popover,
} as Meta;

export const Overview: Story<PopoverProps<HTMLButtonElement>> = () => {
    return (
        <Popover<HTMLButtonElement>
            placement='right'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
            height={200}
            design='dark'
            disableOutsideClick>
            {(ref) => <Button forwardedRef={ref}>Click me</Button>}
        </Popover>
    );
};

export const PopoverWithArrow: Story<PopoverProps<HTMLButtonElement>> = (args) => {
    return (
        <Groups design='vertical'>
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '400px',
                    border: '1px solid gray',
                    margin: '20px',
                }}>
                <div style={{ width: '100px', position: 'absolute', top: 0, right: 0 }}>
                    <Popover<HTMLButtonElement>
                        placement='bottom'
                        action='click'
                        showPopoverWithArrow
                        design='dark'
                        header='This is header'
                        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
                        {...args}>
                        {(ref) => <Button forwardedRef={ref}>Popover</Button>}
                    </Popover>
                </div>
                <div style={{ width: '100px', position: 'absolute', top: 0, left: 0 }}>
                    <Popover<HTMLButtonElement>
                        placement='top'
                        action='click'
                        design='dark'
                        header='This is header'
                        showPopoverWithArrow
                        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
                        {...args}>
                        {(ref) => <Button forwardedRef={ref}>Popover</Button>}
                    </Popover>
                </div>
                <div style={{ width: '100px', position: 'absolute', top: 170, right: 0 }}>
                    <Popover<HTMLButtonElement>
                        placement='top'
                        action='click'
                        design='dark'
                        header='This is header'
                        showPopoverWithArrow
                        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
                        {...args}>
                        {(ref) => <Button forwardedRef={ref}>Popover</Button>}
                    </Popover>
                </div>
                <div style={{ width: '100px', position: 'absolute', top: 170, left: 0 }}>
                    <Popover<HTMLButtonElement>
                        placement='left'
                        action='click'
                        design='dark'
                        header='This is header'
                        showPopoverWithArrow
                        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
                        {...args}>
                        {(ref) => <Button forwardedRef={ref}>Popover</Button>}
                    </Popover>
                </div>
                <div style={{ width: '100px', position: 'absolute', top: 360, right: 0 }}>
                    <Popover<HTMLButtonElement>
                        placement='top-end'
                        action='click'
                        header='This is header'
                        showPopoverWithArrow
                        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
                        {...args}>
                        {(ref) => <Button forwardedRef={ref}>Popover</Button>}
                    </Popover>
                </div>
                <div style={{ width: '100px', position: 'absolute', top: 360, left: 0 }}>
                    <Popover<HTMLButtonElement>
                        placement='bottom-start'
                        action='click'
                        design='dark'
                        header='This is header'
                        showPopoverWithArrow
                        content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
                        {...args}>
                        {(ref) => <Button forwardedRef={ref}>Popover</Button>}
                    </Popover>
                </div>
            </div>
        </Groups>
    );
};

export const PopoverWithCalendar: Story<PopoverProps<HTMLButtonElement>> = (args) => {
    return (
        <Popover<HTMLButtonElement>
            width={280}
            placement='right'
            content={<Calendar date={new Date(2020, 1, 5)} format='date' />}
            showPopoverWithArrow
            {...args}>
            {(ref) => <Button forwardedRef={ref}>Click me</Button>}
        </Popover>
    );
};

export const PopoverWithDifferentVariants: Story<PopoverProps<HTMLButtonElement>> = (args) => {
    return (
        <Groups design='vertical'>
            <Popover<HTMLButtonElement>
                placement='right'
                header='This is header'
                design='light'
                size='m'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
                height={200}
                disableOutsideClick
                {...args}>
                {(ref) => <Button forwardedRef={ref}>Click me</Button>}
            </Popover>
            <Popover<HTMLButtonElement>
                placement='right'
                size='s'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
                height={200}
                design='dark'
                disableOutsideClick
                {...args}>
                {(ref) => <Button forwardedRef={ref}>Click me</Button>}
            </Popover>
            <Popover<HTMLButtonElement>
                placement='right'
                noClose
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
                height={200}
                design='dark'
                disableOutsideClick
                {...args}>
                {(ref) => <Button forwardedRef={ref}>Click me</Button>}
            </Popover>
            <Popover<HTMLButtonElement>
                header='This is header'
                placement='right'
                noClose
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
                height={200}
                design='light'
                disableOutsideClick
                {...args}>
                {(ref) => <Button forwardedRef={ref}>Click me</Button>}
            </Popover>
        </Groups>
    );
};

export const OpenPopover: Story<PopoverProps<HTMLButtonElement>> = (args) => {
    const ref = React.useRef<ITrigger>(null);
    return (
        <Groups>
            <Button onClick={() => ref.current?.open()}>Open</Button>
            <Button onClick={() => ref.current?.close()}>Close</Button>
            <Popover<HTMLButtonElement>
                ref={ref}
                placement='right'
                header='This is header'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
                height={200}
                design='dark'
                disableOutsideClick
                {...args}>
                {(ref) => <Button forwardedRef={ref}>Click me</Button>}
            </Popover>
        </Groups>
    );
};
