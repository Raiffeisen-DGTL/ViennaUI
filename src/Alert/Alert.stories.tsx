import React from 'react';
import { Story, Meta } from 'storybook';
import { Alert, AlertProps } from './Alert';
import { Groups } from '../Groups';
import { Button } from '../Button';

export default {
    title: 'Development/Alert',
    component: Alert,
} as Meta;

export const Overview: Story<AlertProps> = (args) => {
    return <Alert {...args}>Я обычный текст</Alert>;
};

export const WithButton: Story<AlertProps> = () => {
    return (
        <Alert
            title={'Успех!'}
            design={'success'}
            actions={
                <Groups>
                    <Button>Ок</Button>
                </Groups>
            }>
            Здесь написано что-то хорошее
        </Alert>
    );
};
WithButton.storyName = 'С одной кнопкой';

export const WithTwoButtons: Story<AlertProps> = () => {
    return (
        <Alert
            title={'Внимание!'}
            design={'warning'}
            actions={
                <Groups>
                    <Button>Ок</Button>
                    <Button design='ghost'>Отмена</Button>
                </Groups>
            }>
            Что-то пошло не так
        </Alert>
    );
};
WithTwoButtons.storyName = 'С двумя кнопками.';

export const WithAllDesigns: Story<AlertProps> = () => {
    return (
        <>
            <Alert>Я обычный текст</Alert>
            <Alert design='success'>Я успешный текст</Alert>
            <Alert design='warning'>Я предупреждающий текст</Alert>
            <Alert design='error'>Я ошибочный текст</Alert>
            <Alert design='accent'>Я акцентирующий текст</Alert>
        </>
    );
};
WithAllDesigns.storyName = 'Дизайны алертов';

export const WithAdaptive: Story<AlertProps> = () => {
    return (
        <Alert title='Успешно!' design='success' compact={{ belowS: false, s: true, m: false }}>
            Я обычный текст успешно адаптированный
        </Alert>
    );
};
WithAdaptive.storyName = 'Адаптив';

export const PlaywrightAllCases: Story<AlertProps> = () => {
    return (
        <>
            <Alert>Я обычный текст</Alert>
            <Alert design='success'>Я успешный текст</Alert>
            <Alert design='warning'>Я предупреждающий текст</Alert>
            <Alert design='error'>Я ошибочный текст</Alert>
            <Alert design='accent'>Я акцентирующий текст</Alert>
        </>
    );
};
PlaywrightAllCases.storyName = 'Для тестирования';

export const PlaywrightWithCases: Story<AlertProps> = () => {
    const title = 'Заголовок';
    return (
        <>
            <Alert
                title={title}
                design='success'
                actions={
                    <Groups>
                        <Button>Complete</Button>
                        <Button design='ghost'>Cancel</Button>
                    </Groups>
                }>
                Я текст с кнопками
            </Alert>
            <Alert title={title} noIcon design='warning'>
                Я предупреждающий текст
            </Alert>
            <Alert dynamic design='error'>
                Я ошибочный текст
            </Alert>
            <Alert compact={{ belowS: false, s: true, m: false }} design='accent'>
                Я акцентирующий текст
            </Alert>
        </>
    );
};
PlaywrightWithCases.storyName = 'Алерт в разных состояниях';
