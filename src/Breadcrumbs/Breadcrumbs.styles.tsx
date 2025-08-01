import styled from 'styled-components';
import { breadcrumbs } from 'vienna.ui-theme';
import { getPresets, getPresetsCustom } from '../Utils/styling';

const body = getPresetsCustom('breadcrumbs')({
    custom: null,
});

const backIcon = getPresets(
    breadcrumbs.backIcon,
    'breadcrumbs.backIcon'
)({
    base: null,
    custom: null,
});

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    ${body.custom}
`;

export const BackIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${backIcon.base}
    ${backIcon.custom}
`;
