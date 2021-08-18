import React from 'react';
import Option from '../Select/Option/Option';
import { Button, Groups, Search } from '..';
import Header, { HeaderProps } from './Header';

test('Header', () => {
    const snap = snapshot.render(<Header />);
    expect(snap).toMatchSnapshot();
});

test('Header w/ without shadow', () => {
    const snap = snapshot.render(<Header shadow={false} />);
    expect(snap).toMatchSnapshot();
});

test('Header w/ search', () => {
    const snap = snapshot.render(<Header search={<Search size='s' />} />);
    expect(snap).toMatchSnapshot();
});

test('Header w/ item', () => {
    const snap = snapshot.render(
        <Header
            items={
                <Header.Items design='primary'>
                    <Header.Item value='score' label='Счета' />
                    <Header.Item value='operations' label='Операции' />
                    <Header.Item value='requisites' label='Реквизиты' />
                </Header.Items>
            }
        />
    );
    expect(snap).toMatchSnapshot();
});

test('Header w/ action', () => {
    const snap = snapshot.render(
        <Header
            action={
                <Button size='xs' design='accent'>
                    Открыть
                </Button>
            }
        />
    );
    expect(snap).toMatchSnapshot();
});

test('Header w/ actions', () => {
    const snap = snapshot.render(
        <Header
            action={
                <Groups design='horizontal'>
                    <Button size='s' design='accent'>
                        Открыть
                    </Button>
                    <Button size='s'> Закрыть </Button>
                </Groups>
            }
        />
    );
    expect(snap).toMatchSnapshot();
});

test('Header w/ all elements', () => {
    const snap = snapshot.render(
        <Header
            search={<Search size='s' />}
            items={
                <Header.Items design='primary'>
                    <Header.Item value='score' label='Счета' />
                    <Header.Item value='operations' label='Операции' />
                    <Header.Item value='requisites' label='Реквизиты' />
                </Header.Items>
            }
            action={
                <Groups design='horizontal'>
                    <Button size='s' design='accent'>
                        Открыть
                    </Button>
                    <Button size='s'> Закрыть </Button>
                </Groups>
            }
        />
    );
    expect(snap).toMatchSnapshot();
});

test('Header w/ size', () => {
    const sizes: HeaderProps['size'][] = ['s', 'm', 'l'];

    sizes.forEach((size) => {
        const snap = snapshot.render(<Header size={size} />);
        expect(snap).toMatchSnapshot();
    });
});

test.skip('Header w/ isMobile', () => {
    const header = snapshot.shallow(
        <Header
            items={
                <Header.Items value='score' design='primary'>
                    <Header.Item value='score' label='Счета' />
                    <Header.Item value='operations' label='Операции' />
                    <Header.Item value='requisites' label='Реквизиты' />
                </Header.Items>
            }
        />
    );

    header.find(Button).simulate('click');
    expect(header.find(Option).exists()).toEqual(true);
});
