import styled from 'styled-components';
import { getPresets } from '../Utils/styling';

const search = getPresets('search', {
    base: null,
    custom: null,
});

export const Box = styled.div`
    position: relative;
    ${search.base}
    ${search.custom}
`;
