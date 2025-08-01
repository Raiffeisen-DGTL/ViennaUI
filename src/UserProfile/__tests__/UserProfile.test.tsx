import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserProfile } from '../UserProfile';

describe('UserProfile', () => {
    it('should call onFocus when focus', async () => {
        const fn = jest.fn();
        render(
            <UserProfile
                photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
                name='Super User Name'
                description='Some Description'
                onFocus={fn}>
                <UserProfile.Item>Профиль</UserProfile.Item>
                <UserProfile.Item>Товары</UserProfile.Item>
                <UserProfile.Item>Предложения</UserProfile.Item>
                <UserProfile.Item>Выход</UserProfile.Item>
            </UserProfile>
        );
        await userEvent.tab();
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onBlur when blur', async () => {
        const fn = jest.fn();
        render(
            <UserProfile
                photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
                name='Super User Name'
                description='Some Description'
                onBlur={fn}>
                <UserProfile.Item>Профиль</UserProfile.Item>
                <UserProfile.Item>Товары</UserProfile.Item>
                <UserProfile.Item>Предложения</UserProfile.Item>
                <UserProfile.Item>Выход</UserProfile.Item>
            </UserProfile>
        );
        await userEvent.tab();
        await userEvent.tab();
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onMouseDown when click', async () => {
        const fn = jest.fn();
        render(
            <UserProfile
                photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
                name='Super User Name'
                description='Some Description'
                onMouseDown={fn}>
                <UserProfile.Item>Профиль</UserProfile.Item>
                <UserProfile.Item>Товары</UserProfile.Item>
                <UserProfile.Item>Предложения</UserProfile.Item>
                <UserProfile.Item>Выход</UserProfile.Item>
            </UserProfile>
        );
        const user = screen.getByText(/user/i);
        await userEvent.click(user);
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onMouseUp when click', async () => {
        const fn = jest.fn();
        render(
            <UserProfile
                photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
                name='Super User Name'
                description='Some Description'
                onMouseUp={fn}>
                <UserProfile.Item>Профиль</UserProfile.Item>
                <UserProfile.Item>Товары</UserProfile.Item>
                <UserProfile.Item>Предложения</UserProfile.Item>
                <UserProfile.Item>Выход</UserProfile.Item>
            </UserProfile>
        );
        const user = screen.getByText(/user/i);
        await userEvent.click(user);
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });
    it('should show dropdown when click', async () => {
        const fn = jest.fn();
        render(
            <UserProfile
                photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
                name='Super User Name'
                description='Some Description'
                onClick={fn}>
                <UserProfile.Item>Профиль</UserProfile.Item>
                <UserProfile.Item>Товары</UserProfile.Item>
                <UserProfile.Item>Предложения</UserProfile.Item>
                <UserProfile.Item>Выход</UserProfile.Item>
            </UserProfile>
        );
        const user = screen.getByText(/user/i);
        await userEvent.click(user);
        const option = screen.getAllByRole('option');
        expect(option[0]).toBeInTheDocument();
        expect(option).toHaveLength(4);
    });
});
