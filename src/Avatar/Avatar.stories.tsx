import React from 'react';
import { Story, Meta } from 'storybook';
import { Avatar, AvatarProps } from './Avatar';
import { IconContainer } from '../IconContainer';

export default {
    title: 'Development/Avatar',
    component: Avatar,
} as Meta;

export const Overview: Story<AvatarProps> = (args) => {
    return (
        <Avatar>
            <IconContainer color='nice10'>A</IconContainer>
        </Avatar>
    );
};

export const NoIcon: Story<AvatarProps> = (args) => {
    return (
        <Avatar
            src='https://bad.url.to.avatar/avatar.png'
            size={{ belowS: 's', s: 'l', m: 'xl' }}
            alt='Broken image example'>
            <IconContainer size={{ belowS: 's', s: 'l', m: 'xl' }} color='nice10'>
                A
            </IconContainer>
        </Avatar>
    );
};
NoIcon.storyName = 'Битое изображение';
