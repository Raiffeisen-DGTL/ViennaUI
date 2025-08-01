import styled, { css } from 'styled-components';
import { DragIcon as Drag, SelectHideIcon } from 'vienna.icons';
import { color } from 'vienna.tokens';
import { v13sidebar } from 'vienna.ui-theme';
import { getPresets, getPresetsCustom } from '@/Utils/styling';
import { IconContainer } from '@/IconContainer';
import { SidebarDesign } from '../types';

export interface PropsBox {
    $isSubmenu?: boolean;
    $isSubmenuItem?: boolean;
    $isFooterItem?: boolean;
    $hasPrefix?: boolean;
    $active?: boolean;
    $disabled?: boolean;
    $design?: SidebarDesign;
    $draggable?: boolean;
    $truncate?: boolean;
}

const presets = getPresets(
    v13sidebar.item,
    'sidebar.item'
)({
    base: null,
    active: null,
    prefix: null,
    postfix: null,
    title: null,
    chevron: null,
    dragIcon: null,
});

const presetsCustom = getPresetsCustom('v13sidebar.item')({
    base: null,
    active: null,
    prefix: null,
    postfix: null,
    title: null,
    chevron: null,
    dragIcon: null,
});

const truncate = getPresets(
    v13sidebar.item.truncate,
    'sidebar.item.truncate'
)({
    prefix: null,
    title: null,
});

const truncateCustom = getPresetsCustom('v13sidebar.item.truncate')({
    prefix: null,
    title: null,
});

export const Title = styled.div`
    ${presets.title}
    ${presetsCustom.title}
`;

export const Prefix = styled.div<{ $collapsed?: boolean }>`
    ${presets.prefix}
    ${presetsCustom.prefix}


    ${({ $collapsed }) =>
        !$collapsed &&
        css`
            align-self: baseline;
            margin-top: 4px;
        `}
`;

export const Postfix = styled.div`
    ${presets.postfix}
    ${presetsCustom.postfix}
`;

export const DragIcon = styled(Drag)`
    ${presets.dragIcon}
    ${presetsCustom.dragIcon}

    &:hover {
        cursor: grab;
    }
`;

export const FooterIcon = styled(IconContainer)``;

const hover = ({ $disabled, $design, $draggable }: PropsBox) =>
    !$disabled &&
    css`
        &:hover {
            background: ${$design === 'light' ? color.primary.seattle.c05 : color.primary.brand.onPrimary};

            ${FooterIcon} {
                background: ${$design === 'light' ? color.primary.seattle.c10 : ''};
            }

            ${$draggable &&
            css`
                ${DragIcon} {
                    visibility: visible;
                }

                ${Postfix} {
                    visibility: hidden;
                }
            `}
        }
    `;

const disabled = ({ $disabled, $design }: PropsBox) =>
    $disabled &&
    css`
        color: ${$design === 'light' ? color.primary.seattle.c60 : color.primary.seattle.c100};
        cursor: not-allowed;
    `;

const footerIcon = ({ $design }: PropsBox) =>
    $design === 'light'
        ? css`
              ${FooterIcon} {
                  background: ${color.primary.seattle.c05};
              }
          `
        : css`
              ${FooterIcon} {
                  background: ${color.primary.seattle.c120};
                  color: ${color.primary.brand.white};
              }
          `;

export const Box = styled.div<PropsBox>`
    height: ${({ $isSubmenuItem, $isFooterItem, $truncate }) => {
        if (!$truncate) return '';
        if ($isSubmenuItem) return '36px';
        if ($isFooterItem) return '56px';

        return '44px';
    }};
    min-height: ${({ $truncate }) => ($truncate ? '' : '44px')};
    padding: ${({ $isSubmenu, $isSubmenuItem, $draggable }) => {
        if ($isSubmenu) return '11px 12px 11px 4px';
        if ($isSubmenuItem) return '7px 12px 7px 40px';

        return '11px 12px 11px 22px';
    }};

    ${presets.base}
    ${presetsCustom.base}
    border-radius: ${({ $isFooterItem }) => ($isFooterItem ? '16px' : '12px')};

    ${hover}
    ${disabled}
    ${footerIcon}

    ${({ $isSubmenu, $hasPrefix }) =>
        $isSubmenu &&
        !$hasPrefix &&
        css`
            ${Title} {
                margin-left: -6px;
            }

            ${Chevron} {
                margin-right: 0;
            }
        `}

    ${({ $active }) =>
        $active &&
        css`
            ${presets.active}
            ${presetsCustom.active}
        `}

    ${({ $truncate }) =>
        $truncate &&
        css`
            ${Prefix} {
                ${truncate.prefix}
                ${truncateCustom.prefix}
            }

            ${Title} {
                ${truncate.title}
                ${truncateCustom.title}
            }
        `}
`;

export const Chevron = styled(SelectHideIcon)`
    ${presets.chevron}
    ${presetsCustom.chevron}
`;

export const CollapsedPlaceholder = styled.div<PropsBox>`
    height: ${({ $isSubmenuItem, $isFooterItem }) => ($isSubmenuItem ? '36px' : $isFooterItem ? '56px' : '44px')};
`;
