import React from 'react';
import { Story, Meta } from 'storybook';
import { UserProfile, UserProfileProps } from './UserProfile';

export default {
    title: 'Development/UserProfile',
    component: UserProfile,
} as Meta;

export const Overview: Story<UserProfileProps> = (args) => {
    return (
        <UserProfile
            photo='https://www.raiffeisen.ru/static/common/Digital_Marketing/Abstract/Abstract2.webp'
            name='Super User Name'
            description='Some Description'
            {...args}>
            <UserProfile.Item>Профиль</UserProfile.Item>
            <UserProfile.Item>Товары</UserProfile.Item>
            <UserProfile.Item>Предложения</UserProfile.Item>
            <UserProfile.Item>Выход</UserProfile.Item>
        </UserProfile>
    );
};

export const WithoutHover: Story<UserProfileProps> = (args) => {
    return (
        <UserProfile
            photo='https://www.raiffeisen.ru/static/common/Digital_Marketing/Abstract/Abstract2.webp'
            name='Super User Name'
            description='Some Description'
            {...args}></UserProfile>
    );
};
