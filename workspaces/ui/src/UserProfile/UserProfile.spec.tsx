import React from 'react';
import UserProfile, { UserProfileProps } from './UserProfile';

test('UserProfile', () => {
    const component = (
        <UserProfile
            photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
            name='Super User Name'
            description='Some Description'>
            <UserProfile.Item>Профиль</UserProfile.Item>
            <UserProfile.Item>Товары</UserProfile.Item>
            <UserProfile.Item>Предложения</UserProfile.Item>
            <UserProfile.Item>Выход</UserProfile.Item>
        </UserProfile>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('UserProfile w/o description', () => {
    const component = (
        <UserProfile
            photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
            name='Super User Name'>
            <UserProfile.Item>Профиль</UserProfile.Item>
            <UserProfile.Item>Товары</UserProfile.Item>
            <UserProfile.Item>Предложения</UserProfile.Item>
            <UserProfile.Item>Выход</UserProfile.Item>
        </UserProfile>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('UserProfile w/o name and description', () => {
    const component = (
        <UserProfile photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'>
            <UserProfile.Item>Профиль</UserProfile.Item>
            <UserProfile.Item>Товары</UserProfile.Item>
            <UserProfile.Item>Предложения</UserProfile.Item>
            <UserProfile.Item>Выход</UserProfile.Item>
        </UserProfile>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('UserProfile w/o photo', () => {
    const component = (
        <UserProfile name='Super User Name' description='Some Description'>
            <UserProfile.Item>Профиль</UserProfile.Item>
            <UserProfile.Item>Товары</UserProfile.Item>
            <UserProfile.Item>Предложения</UserProfile.Item>
            <UserProfile.Item>Выход</UserProfile.Item>
        </UserProfile>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('UserProfile w/o align', () => {
    const component = (
        <UserProfile align='right' name='Super User Name' description='Some Description'>
            <UserProfile.Item>Профиль</UserProfile.Item>
            <UserProfile.Item>Товары</UserProfile.Item>
            <UserProfile.Item>Предложения</UserProfile.Item>
            <UserProfile.Item>Выход</UserProfile.Item>
        </UserProfile>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('UserProfile as link', () => {
    const component = (
        <UserProfile to='https://home.raiffeisen.ru' name='Super User Name' description='Some Description' />
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.mount(component);
    expect(wrapper.find('a')).toHaveLength(1);
});

test('UserProfile w/ size', () => {
    const sizes: UserProfileProps['size'][] = ['xs', 's', 'm'];

    sizes.forEach((size) => {
        const snap = snapshot.render(
            <UserProfile
                size={size}
                photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
                name='Super User Name'
                description='Some Description'>
                <UserProfile.Item>Профиль</UserProfile.Item>
                <UserProfile.Item>Товары</UserProfile.Item>
                <UserProfile.Item>Предложения</UserProfile.Item>
                <UserProfile.Item>Выход</UserProfile.Item>
            </UserProfile>
        );

        expect(snap).toMatchSnapshot(size);
    });
});

test('UserProfile w/ any props', () => {
    const props = { className: 'className', id: 'alarm', title: 'title' };
    const component = (
        <UserProfile
            {...props}
            photo='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
            name='Super User Name'
            description='Some Description'>
            <UserProfile.Item>Профиль</UserProfile.Item>
            <UserProfile.Item>Товары</UserProfile.Item>
            <UserProfile.Item>Предложения</UserProfile.Item>
            <UserProfile.Item>Выход</UserProfile.Item>
        </UserProfile>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});
