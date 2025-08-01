import React from 'react';
import type { BaseComponentProps, StepTypeContent } from '../Tour/types';
import { Image } from './Content.styles';
import { Flex, Text } from '../../..';

export interface ContentProps extends BaseComponentProps {
    content: StepTypeContent;
    isAccent?: boolean;
}

export const Content = ({ content, isAccent }: ContentProps) => {
    const { image, description } = content ?? {};

    return (
        <Flex direction={'column'} gap={'s1'}>
            {description && <Text color={isAccent ? 'brand-white' : 'brand-primary'}>{description}</Text>}
            {image && <Image src={`${image}`} alt='' />}
        </Flex>
    );
};
