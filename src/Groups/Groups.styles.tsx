import styled, { css } from 'styled-components';
import { groups } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';

const presets = getPresets(
    groups,
    'groups'
)({
    size: '$size',
    custom: null,
    customItem: null,
});

export interface PropsBox {
    $design?: 'horizontal' | 'vertical';
    $size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    $height?: 'full' | 'auto';
    $alignItems?:
        | 'normal'
        | 'inherit'
        | 'initial'
        | 'unset'
        | 'stretch'
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'self-start'
        | 'self-end'
        | 'baseline';
    $justifyContent?:
        | 'normal'
        | 'inherit'
        | 'initial'
        | 'unset'
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'space-between'
        | 'space-around';
    $bottomGap?: boolean;
}
export const Box = styled.div<PropsBox>`
    display: ${({ $design }) => ($design === 'horizontal' ? 'flex' : 'flex')};
    flex-direction: ${({ $design }) => ($design === 'horizontal' ? 'row' : 'column')};
    justify-content: ${({ $justifyContent }) => $justifyContent};
    align-content: flex-start;
    align-items: ${({ $alignItems }) => $alignItems};
    flex-wrap: wrap;
    vertical-align: middle;
    width: 100%;

    ${({ $bottomGap }) =>
        !$bottomGap &&
        css`
            margin-bottom: -${presets.size};
        `}

    ${({ $height }) =>
        $height === 'full' &&
        css`
            align-items: flex-start;
            height: 100%;
        `}

    ${presets.custom}
`;

type PropsItem = Pick<PropsBox, '$design' | '$size'>;
export const Item = styled.div<PropsItem>`
    position: relative;
    margin-bottom: ${presets.size};
    height: 100%;
    display: flex;
    align-content: center;
    align-items: center;

    ${({ $design }) =>
        $design === 'horizontal' &&
        css`
            margin-right: ${presets.size};
            width: auto;
            flex: none;

            &:last-child {
                margin-right: 0;
            }
        `}

    ${({ $design }) =>
        $design === 'vertical' &&
        css`
            width: 100%;
            flex: none;
        `}

    ${presets.customItem}
`;
