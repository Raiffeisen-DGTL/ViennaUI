import React, { FC } from 'react';
import { AddIcon } from 'vienna.icons';
import { Wrapper, Icon, Text } from './AddButton.styles';
import { BoxStyled } from '@/Utils/styled';

export interface AddButtonProps extends Omit<BoxStyled<typeof Wrapper, object>, 'onClick'> {
    search?: string;
    duplication?: boolean;
    onClick?: (search: string) => void;
}

export const AddButton: FC<AddButtonProps> = ({ search, duplication, onClick, children, ...attrs }) => {
    const searchText = duplication && search ? `«${search}»` : '';
    const handleClick = () => {
        onClick && onClick(search || '');
    };
    return (
        <Wrapper onClick={handleClick} {...attrs}>
            <Icon>
                <AddIcon />
            </Icon>
            <Text>
                {children} {searchText}
            </Text>
        </Wrapper>
    );
};
