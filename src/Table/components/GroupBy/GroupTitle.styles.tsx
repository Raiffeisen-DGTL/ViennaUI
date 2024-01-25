import styled, { css } from 'styled-components';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets('table.groupBy', {
    title: null,
    select: null,
});

export const Td = styled.td`
    ${presets.title}
`;

export const SelectTd = styled.td`
    ${presets.select}
`;

interface PropsGroupTitleContainer {
    $pinned?: boolean;
}

export const GroupTitleContainer = styled.div<PropsGroupTitleContainer>`
    ${({ $pinned }) =>
        $pinned &&
        css`
            position: sticky;
            top: 0;
            left: 0;
        `}
`;
