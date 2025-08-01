import styled from 'styled-components';
import { Value } from '@/MultiselectWithSearch/Option/Option.styles';
import { color } from 'vienna.tokens';
import { Item } from '@/DropList/Item';
import { ItemWrapper } from '@/DropList/Item/Item.styles';

export const Wrapper = styled(Item)`
    color: ${color.primary.oslo.c120};
    user-select: none;

    ${ItemWrapper} {
        justify-content: flex-start;
        align-items: center;
    }
`;

export const Icon = styled.div`
    margin-right: 8px;

    > svg {
        display: block;
    }
`;

export const Text = styled(Value)``;
