import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const breadcrumbs = getPresets('breadcrumbs', {
    custom: null,
});

const backIcon = getPresets('breadcrumbs.backIcon', {
    base: null,
    custom: null,
});

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    ${breadcrumbs.custom}
`;

export const BackIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${backIcon.base}
    ${backIcon.custom}
`;
