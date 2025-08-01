import React, { useState } from 'react';
import { Story, Meta } from 'storybook';
import { EmptyState, EmptyStateAlignment, EmptyStateProps } from './EmptyState';
import { ActionsDirection, EmptyStateImageObjectFit } from './EmptyState.styles';
import { Button } from '../Button';
import { IconContainer } from '../IconContainer';
import { DocumentIcon as Document } from 'vienna.icons';

export default {
    title: 'Development/EmptyState',
    component: EmptyState,
    argTypes: {
        loading: { control: 'boolean' },
    },
} as Meta;

export const Overview: Story<EmptyStateProps> = (args) => (
    <EmptyState {...args}>
        <IconContainer type='squircle' color='seattle05' size='xxl'>
            <Document />
        </IconContainer>

        <EmptyState.Title>Рублевых платежей нет</EmptyState.Title>

        <EmptyState.Description>
            Чтобы список появился, импортируйте файл Excel или создайте платеж
        </EmptyState.Description>

        <EmptyState.Actions>
            <Button design='primary' size='l'>
                Импорт
            </Button>

            <Button design='ghost' size='l'>
                Создать платеж
            </Button>
        </EmptyState.Actions>
    </EmptyState>
);

Overview.storyName = 'Вставка иконки';

export const LeftAlignment: Story = () => (
    <EmptyState alignment='left'>
        <IconContainer type='squircle' color='seattle05' size='xxl'>
            <Document />
        </IconContainer>

        <EmptyState.Title>Рублевых платежей нет</EmptyState.Title>

        <EmptyState.Description>
            Чтобы список появился, импортируйте файл Excel или создайте платеж
        </EmptyState.Description>

        <EmptyState.Actions direction='row'>
            <Button design='primary' size='l'>
                Импорт
            </Button>

            <Button design='ghost' size='l'>
                Создать платеж
            </Button>
        </EmptyState.Actions>
    </EmptyState>
);

LeftAlignment.storyName = 'Выравнивание по левому краю';

export const OnlyTitle: Story = () => (
    <EmptyState>
        <IconContainer type='squircle' color='seattle05' size='xxl'>
            <Document />
        </IconContainer>

        <EmptyState.Title>1 декабря 2025 года событий нет</EmptyState.Title>
    </EmptyState>
);

OnlyTitle.storyName = 'Только заголовок';

export const WithLoader: Story = () => {
    const [isLoading, setLoading] = useState(true);

    const onToggle = () => setLoading((prevState) => !prevState);

    return (
        <EmptyState loading={isLoading}>
            <EmptyState.Title>Рублевых платежей нет</EmptyState.Title>

            <EmptyState.Description>
                Чтобы список появился, импортируйте файл Excel или создайте платеж
            </EmptyState.Description>

            <EmptyState.Actions direction='row'>
                <Button design='primary' size='l'>
                    Импорт
                </Button>

                <Button design='ghost' size='l' onClick={onToggle}>
                    {!isLoading ? 'Начать загрузку' : 'Прекратить загрузку'}
                </Button>
            </EmptyState.Actions>
        </EmptyState>
    );
};

WithLoader.storyName = 'Лоадер';

export const WithImage: Story = () => {
    const [alignment, setAlignment] = useState<EmptyStateAlignment>('center');

    const onToggle = () => {
        setAlignment((prevState) => (prevState === 'center' ? 'left' : 'center'));
    };

    return (
        <EmptyState alignment={alignment}>
            <EmptyState.Image src='https://cdn-rf.raiffeisen.ru/ds/img/empty-state/mock-image.png' />

            <EmptyState.Title>Рублевых платежей нет</EmptyState.Title>

            <EmptyState.Description>
                Мы не смогли найти ни одного совпадения. Пожалуйста, попробуйте изменить запрос
            </EmptyState.Description>

            <EmptyState.Actions>
                <Button design='primary' size='l' onClick={onToggle}>
                    <>Выровнять по {alignment === 'center' ? 'левому краю' : 'центру'}</>
                </Button>
            </EmptyState.Actions>
        </EmptyState>
    );
};

WithImage.storyName = 'Вставка изображения';

export const ImageObjectFit: Story = () => {
    const [objectFit, setObjectFit] = useState<EmptyStateImageObjectFit>('fill');

    const onToggle = () => {
        setObjectFit((prevState) => (prevState === 'fill' ? 'cover' : 'fill'));
    };

    return (
        <EmptyState>
            <EmptyState.Image
                src='https://cdn-rf.raiffeisen.ru/ds/img/empty-state/mock-image.png'
                $objectFit={objectFit}
            />

            <EmptyState.Title>Рублевых платежей нет</EmptyState.Title>

            <EmptyState.Description>
                Мы не смогли найти ни одного совпадения. Пожалуйста, попробуйте изменить запрос
            </EmptyState.Description>

            <EmptyState.Actions>
                <Button design='primary' size='l' onClick={onToggle}>
                    Сменить object-fit
                </Button>
            </EmptyState.Actions>
        </EmptyState>
    );
};

ImageObjectFit.storyName = 'Поведение заполнения изображения';

export const HorizontalDirection: Story = () => (
    <EmptyState direction='horizontal'>
        <EmptyState.Image src='https://cdn-rf.raiffeisen.ru/ds/img/empty-state/mock-image.png' />

        <EmptyState.Title>Ничего не найдено</EmptyState.Title>

        <EmptyState.Description>
            Мы не смогли найти ни одного совпадения. Пожалуйста, попробуйте изменить запрос
        </EmptyState.Description>

        <EmptyState.Actions direction='row'>
            <Button design='primary' size='l'>
                Завершить оценку 360
            </Button>

            <Button design='ghost' size='l'>
                Напомнить
            </Button>
        </EmptyState.Actions>
    </EmptyState>
);

HorizontalDirection.storyName = 'Горизонтальное выравнивание';

export const ChangeHeadingStyles: Story = () => (
    <EmptyState>
        <IconContainer type='squircle' color='seattle05' size='xxl'>
            <Document />
        </IconContainer>

        <EmptyState.Title weight='normal' size='l'>
            Рублевых платежей нет
        </EmptyState.Title>

        <EmptyState.Description>
            Чтобы список появился, импортируйте файл Excel или создайте платеж
        </EmptyState.Description>
    </EmptyState>
);

ChangeHeadingStyles.storyName = 'Изменение стилей заголовка';

export const ChangeActionsDirection: Story = () => {
    const [direction, setDirection] = useState<ActionsDirection>('row');

    const changeDirection = (value: ActionsDirection) => () => setDirection(value);

    return (
        <EmptyState>
            <EmptyState.Title>Ничего не найдено</EmptyState.Title>

            <EmptyState.Description>
                Мы не смогли найти ни одного совпадения. Пожалуйста, попробуйте изменить запрос
            </EmptyState.Description>

            <EmptyState.Actions direction={direction}>
                <Button design='primary' size='l' onClick={changeDirection('column')}>
                    Вертикально
                </Button>

                <Button design='ghost' size='l' onClick={changeDirection('row')}>
                    Горизонтально
                </Button>
            </EmptyState.Actions>
        </EmptyState>
    );
};

ChangeActionsDirection.storyName = 'Изменение направления кнопок';
