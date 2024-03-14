import React from 'react';
import { Story, Meta } from 'storybook';
import { Popover, PopoverProps } from './Popover';
import { Button } from '../Button';

export default {
    title: 'Development/Popover',
    component: Popover,
} as Meta;

export const Overview: Story<PopoverProps> = (args) => {
    return (
        <Popover<HTMLButtonElement>
            placement='right'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero.
            Aenean placerat leo nec ex pharetra finibus. Nunc id turpis
            eu risus rhoncus cursus quis efficitur sapien. Donec vitae
            arcu at lectus placerat fringilla.'
            disableOutsideClick
            {...(args as {})}>
            {(ref) => <Button forwardedRef={ref}>Click me</Button>}
        </Popover>
    );
};
