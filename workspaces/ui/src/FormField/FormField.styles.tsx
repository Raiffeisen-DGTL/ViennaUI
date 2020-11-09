import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('formField.container', {
    inline: null,
    custom: null,
});

export const Box = styled.div<any>`
    ${(props) =>
        props.inline &&
        css`
            ${presets.inline}
        `};

    ${presets.custom}
`;
