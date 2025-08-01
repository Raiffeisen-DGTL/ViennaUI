import styled, { css } from 'styled-components';
import { v13sidebar } from 'vienna.ui-theme';
import { color } from 'vienna.tokens';
import { Box as Item, Title, Prefix, Postfix, Chevron } from './Item/Item.styles';
import { SidebarDesign } from './types';
import { getPresets, getPresetsCustom } from '@/Utils/styling';

export interface PropsBox {
    $design?: SidebarDesign;
    $collapsed?: boolean;
    $width?: string;
}

export interface PropsMenu {
    $design?: SidebarDesign;
    $collapsed?: boolean;
    $hasFooter?: boolean;
}

const presets = getPresets(
    v13sidebar,
    'sidebar'
)({
    base: null,
    collapsed: null,
    collapser: null,
    header: null,
    footer: null,
    menu: null,
});

const collapser = getPresets(
    v13sidebar.collapser,
    'sidebar.collapser'
)({
    base: null,
    collapsed: null,
});

const presetsCustom = getPresetsCustom('v13sidebar')({
    base: null,
    collapsed: null,
    collapser: null,
    header: null,
    footer: null,
    menu: null,
});

const customCollapser = getPresetsCustom('v13sidebar.collapser')({
    base: null,
    collapsed: null,
});

const design = ({ $design }: { $design?: SidebarDesign }) => {
    switch (true) {
        case $design === 'light':
            return css`
                background: ${color.primary.brand.white};
                color: ${color.primary.brand.primary};

                &::before {
                    border-right: 1px solid ${color.primary.brand.white};
                }

                &::after {
                    border-right: 1px solid ${color.primary.seattle.c10};
                }
            `;

        case $design === 'dark':
            return css`
                background: ${color.primary.brand.primary};
                color: ${color.primary.brand.white};

                &::before {
                    border-right: 1px solid ${color.primary.brand.primary};
                }

                &::after {
                    border-right: 1px solid ${color.primary.seattle.c120};
                }
            `;

        default:
            return '';
    }
};

export const Box = styled.div<PropsBox>`
    width: ${({ $width }) => $width};
    ${presets.base}
    ${presetsCustom.base}

    &::before {
        content: '';
        height: 100%;
        position: absolute;
        right: -1px;
        top: 0px;
    }

    &::after {
        content: '';
        height: calc(100% - 24px);
        position: absolute;
        right: -1px;
        top: 12px;
    }

    ${design}
    ${({ $collapsed }) =>
        $collapsed &&
        css`
            ${presets.collapsed}
            ${presetsCustom.collapsed}

            ${Chevron} {
                display: none;
            }

            ${Item} {
                padding: 0 16px;
                justify-content: center;
            }

            ${Title} {
                display: none;
            }

            ${Prefix} {
                visibility: visible;
            }

            ${Postfix} {
                display: none;
            }
        `};
`;

export const Collapser = styled.div<PropsBox>`
    ${collapser.base}
    ${customCollapser.collapsed}

    &:hover {
        color: ${({ $design }) => ($design === 'light' ? color.primary.oslo.c100 : color.primary.oslo.c60)};
    }

    ${(props) => props.$collapsed && collapser.collapsed(props)}
`;

export const Header = styled.div`
    ${presets.header}
    ${presetsCustom.header}
`;

export const Logo = styled.img<{ $shouldApplyHover?: boolean }>`
    ${({ $shouldApplyHover }) =>
        $shouldApplyHover &&
        css`
            cursor: pointer;

            &:hover {
                filter: hue-rotate(-15deg);
            }
        `}
`;

export const Menu = styled.div<PropsMenu>`
    ${presets.menu}
    ${presetsCustom.menu}

    margin-bottom: ${({ $hasFooter }) => ($hasFooter ? '16px' : '0')};

    @supports (scrollbar-color: auto) {
        scrollbar-color: ${({ $design }) =>
            $design === 'light' ? 'unset' : `${color.primary.seattle.c100} ${color.primary.brand.primary}`};
    }

    @supports (not (scrollbar-color: auto)) {
        &::-webkit-scrollbar {
            width: 8px;
            background: ${({ $design }) => ($design === 'light' ? 'unset' : color.primary.brand.primary)};
        }

        &::-webkit-scrollbar-thumb {
            background: ${({ $design }) =>
                $design === 'light' ? color.primary.seattle.c30 : color.primary.seattle.c100};
            border-radius: 4px;
        }

        &::-webkit-scrollbar-button {
            display: none;
        }
    }
`;

// Костыль для ::-webkit-scrollbar - не работает стилизация по условиям
export const MenuCollapsed = styled.div<PropsMenu>`
    ${presets.menu}
    ${presetsCustom.menu}

    margin-bottom: ${({ $hasFooter }) => ($hasFooter ? '16px' : '0')};

    @supports (scrollbar-width: auto) {
        scrollbar-width: none;
    }

    @supports (not (scrollbar-width: auto)) {
        &::-webkit-scrollbar {
            display: none;
        }

        &::-webkit-scrollbar-thumb {
            display: none;
        }
    }
`;

export const Footer = styled.div<PropsMenu>`
    ${presets.footer}
    ${presetsCustom.footer}

    border-top: ${({ $design }) =>
        `1px solid ${$design === 'light' ? color.primary.seattle.c10 : color.primary.seattle.c120}`};
`;

export const DragPlaceholder = styled.div<{ $width: number; $height: number }>`
    ${({ $width, $height }) => css`
        width: ${$width}px;
        height: ${$height}px;
    `};
`;
