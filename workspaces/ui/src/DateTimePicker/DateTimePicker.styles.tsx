import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const left = getPresets('datetimepicker.left', {
    base: null,
    custom: null,
});

const right = getPresets('datetimepicker.right', {
    base: null,
    isInput: null,
    custom: null,
});

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const Left = styled.div`
    flex: 1;
    ${left.base}
    ${left.custom}
`;

export const Right = styled.div<{ isInput?: boolean }>`
    ${right.base}
    ${({ isInput }) => isInput && right.isInput}
    ${right.custom}
`;
