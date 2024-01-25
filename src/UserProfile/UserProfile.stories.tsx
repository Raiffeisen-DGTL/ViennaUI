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
            photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
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
