import styled from 'styled-components';
import { Chevron } from '../Item/Item.styles';

export const SubmenuContainer = styled.div<{ $collapsed?: boolean }>`
    ${Chevron} {
        transform: ${({ $collapsed }) => `rotate(${!$collapsed ? 180 : 90}deg)`};
    }
`;
