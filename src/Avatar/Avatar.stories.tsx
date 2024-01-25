import React from 'react';
import { Story, Meta } from 'storybook';
import { Avatar, AvatarProps } from './Avatar';
import { RoundIcon } from '../RoundIcon';

export default {
    title: 'Development/Avatar',
    component: Avatar,
} as Meta;

export const Overview: Story<AvatarProps> = (args) => {
    return <Avatar src='https://bad.url.to.avatar/avatar.png' size={{ belowM: 'l', belowS: 's' }} {...args} />;
};

export const NoIcon: Story<AvatarProps> = (args) => {
    return (
        <Avatar src='https://bad.url.to.avatar/avatar.png' size={{ belowS: 's', s: 'l', m: 'xl' }}>
            <RoundIcon size='xl' color='nice10'>
                A
            </RoundIcon>
        </Avatar>
    );
};
NoIcon.storyName = 'Без изображения';
