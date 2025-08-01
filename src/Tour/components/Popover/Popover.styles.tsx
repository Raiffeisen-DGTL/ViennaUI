import styled, { css } from 'styled-components';
import { color } from 'vienna.tokens';
import { PopoverPopup as PopoverPopupOriginal } from '../../../Popover/PopoverPopup';

export const Box = styled.div<{ $isAccent: boolean }>`
    position: fixed;
    min-width: 320px;
    ${({ $isAccent }) =>
        $isAccent
            ? css`
                  background-color: ${color.primary.brand.primary};
              `
            : css`
                  background-color: ${color.primary.brand.white};
              `};
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
    z-index: 100000;
    transition: transform 0.3s;
    top: 0;
    left: 0;
`;

export const PopoverPopup = styled(PopoverPopupOriginal)`
    position: fixed;
    transition: transform 0.3s;
    top: 0;
    left: 0;
    z-index: 100000;
`;
