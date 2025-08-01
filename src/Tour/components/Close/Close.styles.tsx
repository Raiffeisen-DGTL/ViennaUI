import styled from 'styled-components';
import { CloseCancelXIcon } from 'vienna.icons';
import { color } from 'vienna.tokens';

export const CloseButton = styled(CloseCancelXIcon).attrs((p) => ({
    color: color.primary.seattle.c60,
    size: 'm' as const,
    ...p,
}))<{ $isAccent: boolean }>`
    position: absolute;
    right: 12px;
    top: 12;
    cursor: pointer;
    &:hover {
        fill: ${({ $isAccent }) => ($isAccent ? color.primary.brand.white : color.primary.brand.primary)};
        transition: 0.3s;
    }
`;
