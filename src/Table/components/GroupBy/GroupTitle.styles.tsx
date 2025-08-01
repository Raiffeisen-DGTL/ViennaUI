import styled, { css } from 'styled-components';
import { table } from 'vienna.ui-theme';
import { getPresets } from '../../../Utils/styling';
import { Td } from '../TableBody/TableBody.styles';

const presets = getPresets(
    table.groupBy,
    'table.groupBy'
)({
    title: null,
    select: null,
    container: null,
});

interface PropsTitle {
    $isWithCheckbox?: boolean;
}

export const GroupTitleRoot = styled(Td)`
    padding: 0; // reset default "td" 1px padding
`;

export const Title = styled.div<PropsTitle>`
    ${presets.title}
`;

export const CheckboxContainer = styled.div`
    ${presets.select}
    padding: 0 22px;
`;

interface PropsGroupTitleContainer {
    $pinned?: boolean;
    $isWithCheckbox?: boolean;
    $isSelectAll?: boolean;
    $isSelectableTable?: boolean;
}

export const GroupContainer = styled.div<PropsGroupTitleContainer>`
    ${presets.container}

    ${({ $pinned }) =>
        $pinned &&
        css`
            position: sticky;
            top: 0;
            left: 0;
            display: inline-flex;
        `}

    ${({ $isWithCheckbox }) =>
        $isWithCheckbox &&
        css`
            align-items: center;
        `}

    ${({ $isSelectAll }) =>
        $isSelectAll &&
        css`
            padding-top: 0;
        `}

    ${({ $isSelectAll, $isWithCheckbox }) =>
        $isSelectAll &&
        !$isWithCheckbox &&
        css`
            padding-left: 12px;
        `}

    ${({ $isSelectableTable, $isWithCheckbox }) =>
        $isSelectableTable &&
        !$isWithCheckbox &&
        css`
            padding-left: 64px;
        `}
`;
