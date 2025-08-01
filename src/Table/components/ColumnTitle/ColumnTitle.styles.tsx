import styled, { css } from 'styled-components';
import { table } from 'vienna.ui-theme';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets(
    table.cell.header.title,
    'table.cell.header.title'
)({
    base: null,
    hover: null,
    box: null,
});

const icon = getPresets(
    table.cell.header.title.icon,
    'table.cell.header.title.icon'
)({
    active: null,
});

export const Icon = styled.span`
    visibility: hidden;
    display: inline-flex;
`;

export interface PropsBox {
    $forceIconVisibility?: boolean;
    $active?: boolean;
    $align?: 'left' | 'center' | 'right';
    $isIcon?: boolean;
}
export const Box = styled.div<PropsBox>`
    display: flex;
    align-items: center;
    max-width: 100%;
    width: 100%;

    ${({ $align }) =>
        $align &&
        css`
            justify-content: ${$align};
            flex-direction: ${$align === 'right' ? 'row-reverse' : 'row'};
        `}

    ${({ $isIcon }) =>
        $isIcon &&
        css`
            cursor: pointer;
            ${presets.box}

            &:hover {
                ${presets.hover}

                ${Icon} {
                    visibility: visible;
                }
            }
        `}

    ${({ $forceIconVisibility }) =>
        $forceIconVisibility &&
        css`
            ${Icon} {
                visibility: visible;
            }
        `}

    ${({ $active }) =>
        $active &&
        css`
            ${presets.hover}

            ${Icon} {
                visibility: visible;
                ${icon.active}
            }
        `}

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
`;

export const Title = styled.span`
    display: inline-block;
    ${presets.base}
`;
