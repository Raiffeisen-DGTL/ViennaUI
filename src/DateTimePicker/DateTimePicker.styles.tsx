import styled from 'styled-components';
import { datetimepicker } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';

const left = getPresets(
    datetimepicker.left,
    'datetimepicker.left'
)({
    base: null,
    custom: null,
});

const right = getPresets(
    datetimepicker.right,
    'datetimepicker.right'
)({
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

interface PropsRight {
    $isInput?: boolean;
}
export const Right = styled.div<PropsRight>`
    ${right.base}
    ${({ $isInput }) => $isInput && right.isInput}
    ${right.custom}
`;
