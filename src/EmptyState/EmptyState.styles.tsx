import styled, { css } from 'styled-components';
import { emptyState } from 'vienna.ui-theme';
import { layout } from 'vienna.tokens';
import { getPresets, getPresetsCustom } from '../Utils/styling';
import { Text } from '../Typography';

const presets = getPresets(
    emptyState,
    'emptyState'
)({
    base: null,
    title: null,
    description: null,
    image: null,
    row: null,
    column: null,
    content: null,
});

const custom = getPresetsCustom('emptyState.custom')({
    base: null,
    row: null,
    column: null,
    baseRow: null,
    title: null,
    description: null,
    image: null,
    actions: null,
    content: null,
});

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    ${presets.content}
    ${custom.content}
`;

export const Title = styled(Text).attrs((props) => ({
    weight: 'medium' as const,
    size: 'xl',
    ...props,
}))`
    ${presets.title}
    ${custom.title}
`;

export type EmptyStateImageObjectFit = 'contain' | 'cover' | 'fill' | 'none';
interface ImageProps {
    $objectFit?: 'contain' | 'cover' | 'fill' | 'none';
}

export const Image = styled.img<ImageProps>`
    ${presets.image}
    object-fit: ${({ $objectFit }) => $objectFit ?? 'cover'}
    ${custom.image}
`;

export const Description = styled.div`
    ${presets.description}
    ${custom.description}
`;

export const Column = styled.div`
    ${presets.column}
    &:not(:last-child) {
        margin-bottom: 24px;
    }

    ${custom.column}
`;

export type ActionsDirection = 'row' | 'column';

interface ActionsProps {
    direction?: ActionsDirection;
}

export const Actions = styled.div.attrs<ActionsProps>((props) => ({
    direction: 'column',
    ...props,
}))`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    gap: ${layout.size.s6}px;
    ${custom.actions}
`;

interface RowProps {
    $isSmallMargin?: boolean;
}

export const Row = styled.div<RowProps>`
    display: flex;
    flex-direction: column;

    ${custom.baseRow}
    &:not(:last-child) {
        ${presets.row}
        ${custom.row}
    }

    ${({ $isSmallMargin }) =>
        $isSmallMargin &&
        css`
            &:not(:last-child) {
                margin-bottom: ${layout.size.s2}px;
            }
        `}
`;

export interface BoxProps {
    $isLeftAlignment?: boolean;
    $isHorizontalDirection?: boolean;
}

export const Box = styled.div<BoxProps>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${presets.base}

    ${({ $isLeftAlignment }) =>
        $isLeftAlignment &&
        css`
            align-items: flex-start;
            justify-content: flex-start;

            ${Column},
            ${Content} {
                align-items: flex-start;
                justify-content: flex-start;
            }

            ${Title},
            ${Description} {
                text-align: left;
            }
        `}

    ${({ $isHorizontalDirection }) =>
        $isHorizontalDirection &&
        css`
            ${Content} {
                align-items: center;
                flex-direction: row;
                gap: 24px;
            }

            ${Row},
            ${Column} {
                margin-bottom: 0;
            }

            ${Description} {
                padding-top: ${layout.size.s2}px;
            }

            ${Actions} {
                padding-top: ${layout.size.s5}px;
            }
        `}

    ${custom.base}
`;
