import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const star = getPresets('formField.star', {
    base: null,
    custom: null,
});

const box = getPresets('formField.label', {
    base: null,
    custom: null,
    size: 'size',
});

export const Box = styled.label<{ required?: boolean }>`
    ${box.base}
    ${box.custom}
    ${box.size}

    ${(props) =>
        props.required &&
        css`
            &::after {
                content: '*';
                ${star.base}
                ${star.custom}
            }
        `}
`;
