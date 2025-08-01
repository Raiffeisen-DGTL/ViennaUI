import React from 'react';
import { Story, Meta } from 'storybook';
import { CardVersatile, type CardVersatileProps } from './CardVersatile';
import { CardVersatileGroupProps } from './CardVersatileGroup/CardVersatileGroup';

export default {
    title: 'Development/CardVersatile',
    component: CardVersatile,
    args: {
        design: 'stroke',
        title: 'Simple card',
        subtitle: 'Card subtitle',
        info: 'More information',
        extraText: 'Extra text',
        hasInteractive: false,
        disableDivider: false,
        selected: false,
        badge: {
            children: 'Status',
        },
        icon: {
            type: 'square',
            children: 'ВВ',
        },
        counter: {
            children: '2',
        },
        hint: {
            header: 'This is header',
            content:
                'Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.',
        },
    },
    argTypes: {
        design: {
            control: 'select',
        },
        title: {
            control: 'text',
        },
        subtitle: {
            control: 'text',
        },
        info: {
            control: 'text',
        },
        extraText: {
            control: 'text',
        },
        hasInteractive: {
            control: 'boolean',
        },
        disableDivider: {
            control: 'boolean',
        },
        selected: {
            control: 'boolean',
        },
        topRightSlot: {
            control: false,
        },
        iconSlot: {
            control: false,
        },
        key: {
            control: false,
        },
    },
} as Meta;

export const Overview: Story<CardVersatileProps> = (args) => {
    return <CardVersatile {...args}>Какой-то текст</CardVersatile>;
};

export const GroupsCardVersatile: Story<CardVersatileProps> = (args) => {
    const cardsList: CardVersatileGroupProps['list'] = [
        {
            title: 'Title',
            subtitle: 'Subtitle',
            design: 'white',
            icon: args.icon,
            hint: args.hint,
            counter: args.counter,
            hasInteractive: true,
            extraText: args.extraText,
            selected: false,
            disableDivider: true,
        },
        {
            title: 'Title',
            subtitle: 'Subtitle',
            design: 'white',
            icon: args.icon,
            hint: args.hint,
            counter: args.counter,
            extraText: args.extraText,
            selected: false,
            disableDivider: true,
            hasInteractive: true,
        },
        {
            title: 'Title',
            subtitle: 'Subtitle',
            design: 'white',
            icon: args.icon,
            hint: args.hint,
            counter: args.counter,
            extraText: args.extraText,
            selected: false,
            disableDivider: true,
            hasInteractive: true,
        },
    ];
    return (
        <div style={{ width: '100%', height: '100%', background: '#F0ECEC', padding: '200px' }}>
            <CardVersatile.Group {...args} list={cardsList} design='white'></CardVersatile.Group>
        </div>
    );
};
