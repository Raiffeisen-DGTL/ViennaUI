import styled, { css } from 'styled-components';
import { Item } from '../../DropList/Item';
import { getPresets } from '../../Utils/styling';

const item = getPresets('dropList.item', {
    hover: null,
});

export interface PropsStyledOption {
    $hover?: boolean;
    $selected?: any;
}
export const StyledOption = styled(Item)<PropsStyledOption>`
    justify-content: space-between;
    ${({ $hover, $selected }) =>
        $hover
            ? item.hover
            : $selected
            ? ''
            : css`
                  background-color: transparent !important;
              `}
`;

interface PropsValue {
    $wrapLine?: boolean;
}
export const Value = styled.div<PropsValue>`
    ${({ $wrapLine }) =>
        !$wrapLine &&
        css`
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `}
`;

export const Icon = styled.div`
    display: flex;
`;
