import React, { useState } from 'react';
import { Story, Meta } from 'storybook';
import { AttachIcon as Attach } from 'vienna.icons';
import { Groups } from '../Groups';
import { ColorType } from '../Utils';
import { IconContainer } from './IconContainer';
import type { IconContainerProps, IconContainerSize, IconContainerType } from './IconContainer';

const types: IconContainerType[] = ['square', 'squircle', 'circle'];
const sizes: IconContainerSize[] = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

export default {
    title: 'Development/IconContainer',
    component: IconContainer,
    argTypes: {
        size: {
            options: sizes,
            control: 'radio',
        },
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        clickable: { control: 'boolean' },
    },
} as Meta;

export const Overview: Story<IconContainerProps> = (args) => {
    return <IconContainer {...args}>D</IconContainer>;
};

export const WithIcon: Story<IconContainerProps> = () => (
    <Groups design='vertical'>
        {types.map((type) => (
            <Groups key={type}>
                {sizes.map((size) => (
                    <IconContainer size={size} type={type} key={size}>
                        <Attach />
                    </IconContainer>
                ))}
            </Groups>
        ))}
    </Groups>
);
WithIcon.storyName = 'С иконкой';

export const WithText: Story<IconContainerProps> = () => (
    <Groups>
        {sizes.map((size) => (
            <IconContainer size={size} type='squircle' key={size}>
                {size}
            </IconContainer>
        ))}
    </Groups>
);
WithText.storyName = 'С текстом';

export const WithImage: Story<IconContainerProps> = () => (
    <Groups design='vertical'>
        <Groups>
            {types.map((type) => (
                <IconContainer size='xl' type={type} key={type}>
                    <img src='https://cdn-rf.raiffeisen.ru/ds/img/icon-container/mock-image.jpg' />
                </IconContainer>
            ))}
        </Groups>

        <Groups>
            {types.map((type) => (
                <IconContainer size='xl' type={type} key={type} disabled>
                    <img src='https://cdn-rf.raiffeisen.ru/ds/img/icon-container/mock-image.jpg' />
                </IconContainer>
            ))}
        </Groups>
    </Groups>
);
WithImage.storyName = 'С изображением';

export const WithColor: Story<IconContainerProps> = () => {
    const colors: ColorType[] = [
        'white',
        'seattle05',
        'seattle10',
        'seattle60',
        'seattle120',
        'oslo10',
        'oslo60',
        'miami10',
        'miami100',
        'nice10',
        'nice100',
        'dubai10',
        'dubai100',
        'paris10',
        'paris100',
        'sochi10',
        'sochi100',
        'tokyo10',
        'tokyo100',
        'dublin10',
        'dublin100',
        'bern10',
        'bern100',
        'manila10',
        'manila100',
        'tallin10',
        'tallin100',
        'seoul10',
        'seoul100',
        'havana10',
        'havana100',
        'madrid10',
        'madrid100',
        'porto10',
        'porto100',
        'primary',
        'osaka10',
        'osaka100',
    ];
    return (
        <Groups>
            {colors.map((color) => (
                <IconContainer size='xl' color={color} key={color}>
                    <Attach />
                </IconContainer>
            ))}
        </Groups>
    );
};
WithColor.storyName = 'С указанием цвета';

export const WithLoading: Story<IconContainerProps> = () => {
    const [isLoading, setLoading] = useState(false);

    const onClick = () => {
        setLoading((prevState) => !prevState);
    };

    return (
        <IconContainer size='xl' type='square' loading={isLoading} onClick={onClick} clickable>
            <Attach />
        </IconContainer>
    );
};
WithLoading.storyName = 'Добавление клика и состояние загрузки';
