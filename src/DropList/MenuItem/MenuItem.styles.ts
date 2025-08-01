import styled from 'styled-components';
import { Flex } from '../../Flex';

export const ItemContent = styled(Flex)`
    width: 100%;
`;
export const PopoverContent = styled.div`
    position: absolute;
    visibility: visible;
    top: 0;
    left: 0;
    &:before {
        content: '';
        width: 20px;
        left: -20px;
        position: absolute;
        top: 0;
        height: 100%;
    }
    & > div {
        position: static !important;
    }
`;
