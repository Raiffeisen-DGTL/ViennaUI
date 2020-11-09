import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { Item, Props } from '../../DropList/Item';

const item = getPresets('dropList.item', {
    hover: null,
});

export const StyledOption = styled<React.FC<Props>>(Item)`
    justify-content: space-between;
    ${({ hover, selected }) => (hover ? item.hover : selected ? '' : 'background-color: transparent!important;')}
`;

export const Value = styled.div<{ wrapLine?: boolean }>`
    ${({ wrapLine }) =>
        !wrapLine &&
        css`
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `}
`;

export const Icon = styled.div`
    display: flex;
`;
