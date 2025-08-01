import styled, { css } from 'styled-components';
import { getPresetsCustom } from '../Utils/styling';

const presets = getPresetsCustom('divider')({
    base: null,
});

interface PropsBox {
    $orientation?: 'horizontal' | 'vertical';
    $size?: string;
    $color?: string;
}

export const Hr = styled.hr<PropsBox>`
    border: none;
    ${({ $orientation, $size }) =>
        $orientation === 'vertical'
            ? css`
                  display: inline-block;
                  border-right: ${$size} solid;
                  min-height: 100%;
              `
            : css`
                  border-top: ${$size} solid;
                  width: 100%;
              `}
    ${({ $color }) => css`
        border-color: ${$color};
    `}
    align-self: stretch;
    ${presets.base}
`;
