import styled from 'styled-components';
import { RoundIcon } from '../../../RoundIcon';
import { Row } from '../TableBody/TableBody.styles';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets('table.actionIcon', {
    base: null,
    hover: null,
});

export const Icon = styled(RoundIcon)`
    visibility: hidden;
    ${presets.base}

    &:hover {
        ${presets.hover}
    }

    ${Row}:hover & {
        visibility: visible;
    }
`;
