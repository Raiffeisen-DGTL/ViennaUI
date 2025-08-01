import React, { FC, ReactNode } from 'react';
import { Box, Actions, Content, Description, ErrorText, Title, Image } from './Result.styles';
import { BoxStyled } from '../Utils/styled';

export interface ResultProps extends BoxStyled<typeof Box, object> {
    errorText?: string;
    title: string;
    description?: string;
    imageSrc: string;
    actions: ReactNode;
}

export const Result: FC<ResultProps> = (props) => {
    const { errorText, title, description, imageSrc, actions, ...attrs } = props;

    return (
        <Box {...attrs}>
            <Content>
                {errorText && <ErrorText>{errorText}</ErrorText>}
                <Title>{title}</Title>
                {description && <Description>{description}</Description>}
                <Actions>{actions}</Actions>
            </Content>
            <Image src={imageSrc} />
        </Box>
    );
};

Result.displayName = 'Result';
