import styled from 'styled-components';
import { MoreHor } from 'vienna.icons';
import { getPresets } from 'vienna.ui-primitives';
import { RoundIcon } from '../../../RoundIcon';

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
`;

// TODO: temporary solution until proper icon is added to the icon pack
export const More: any = styled(MoreHor)`
    transform: rotate(90deg);
`;
