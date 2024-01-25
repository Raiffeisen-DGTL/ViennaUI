import styled from 'styled-components';
import { HintProps } from './Hint';
import { getPresets } from '../Utils/styling';

const definition = getPresets('hint.definition', {
    base: null,
    custom: null,
});

const wrapper = getPresets('hint.wrapper', {
    base: null,
    custom: null,
});

const icon = getPresets('hint.icon', {
    base: null,
    hover: null,
    custom: null,
    size: '$size',
});

export const Definition = styled.span`
    ${definition.base}
    ${definition.custom}
`;

export const Wrapper = styled.span`
    ${wrapper.base}
    ${wrapper.custom}
`;

interface PropsIcon {
    $size?: HintProps['size'];
}
export const Icon = styled.svg<PropsIcon>`
    ${icon.base}
    ${icon.size}
    &:hover {
        ${icon.hover}
    }
    &:focus {
        ${icon.hover}
    }
    ${icon.custom}
`;
