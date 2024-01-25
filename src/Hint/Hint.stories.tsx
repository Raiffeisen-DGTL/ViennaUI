import React from 'react';
import { Story, Meta } from 'storybook';
import { Hint, HintProps } from './Hint';

export default {
    title: 'Development/Hint',
    component: Hint,
} as Meta;

export const Overview: Story<HintProps> = (args) => {
    return (
        <Hint
            placement='right'
            anchorIcon='question'
            header='This is header'
            content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
            {...(args as {})}
        />
    );
};
