import styled, { css } from 'styled-components';
import { color } from 'vienna.tokens';
import { select, multiselect as mainMultiselect } from 'vienna.ui-theme';
import { Postfix, Wrapped, Wrapper } from '../Input/Input.styles';
import { InputWrapper } from '../Input';
import { getPresets, getPresetsCustom } from '../Utils/styling';
import { type SizeType, type DesignType } from '../Utils';
import { Breakpoints, ResponsiveProp } from '../Utils/responsiveness';

const multiselect = getPresets(
    select,
    'select'
)({
    base: null,
    placeholder: null,
    placeholderDisabled: null,
    styledTooltip: null,
    custom: null,
});

const current = getPresets(
    select.current,
    'select.current'
)({
    size: '$size',
    custom: null,
});

const part = getPresetsCustom('select.part')({
    base: null,
    focus: null,
});

const chip = getPresets(
    select.chip,
    'select.chip'
)({
    base: null,
    size: '$size',
    text: null,
});

const chipIcon = getPresets(
    select.chip.icon,
    'select.chip.icon'
)({
    base: null,
    size: '$size',
    hover: null,
});

const extra = getPresets(
    select.extra,
    'select.extra'
)({
    base: null,
    custom: null,
});

const wrapper = getPresets(
    select.wrapper,
    'select.wrapper'
)({
    base: null,
    size: '$size',
});
const styledTooltip = getPresets(
    select.styledTooltip,
    'select.styledTooltip'
)({
    base: null,
    custom: null,
});

const mainWrapper = getPresets(
    mainMultiselect.wrapper.base,
    'multiselect.wrapper.base'
)({
    size: ['$size', 'm'],
    withTags: ['$size', 'm'],
});

const mainWrapperPostfix = getPresets(
    mainMultiselect.wrapper.postfix,
    'multiselect.wrapper.postfix'
)({
    size: ['$size', 'm'],
});

const mainSelectAll = getPresets(
    mainMultiselect.selectAll,
    'multiselect.selectAll'
)({
    base: null,
    size: ['$size', 'm'],
    before: null,
});
export interface PropsPart {
    $active?: boolean;
    $right?: boolean;
    $disableEvents?: boolean;
}
export const Part = styled.div<PropsPart>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${part.base}
    ${({ $active }) =>
        $active &&
        css`
            ${part.focus}
        `}
    ${({ $disableEvents }) =>
        $disableEvents &&
        css`
            pointer-events: none;
        `}
    &:hover {
        ${part.focus}
    }
`;

export interface PropsCurrent<B = Breakpoints> {
    $size: ResponsiveProp<SizeType, B>;
    $hasTags: boolean;
    $isMaterial: boolean;
}
export const Current = styled.div<PropsCurrent>`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    height: 100%;
    ${current.size}
    ${current.custom}

    > * {
        flex: 1;
        width: 100%;
    }
`;

export const Extra = styled.span`
    ${extra.base}
    margin-right: 30px;
    ${extra.custom}
`;

export interface PropsBox {
    $design: DesignType;
    $disabled?: boolean;
}
export const Box = styled.div<PropsBox>`
    position: relative;
    ${multiselect.base}

    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed;
        `}

    ${multiselect.custom}
`;

export interface PropsChip {
    $size: SizeType;
}
export const Chip = styled.div<PropsChip>`
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    flex: none;

    &:only-of-type {
        width: 100%;
    }

    span {
        ${chip.text}
        ${chip.size}
    }

    svg {
        ${chipIcon.base}
        ${chipIcon.size}
        min-width: fit-content;
        flex-shrink: 0;
        &:hover {
            ${chipIcon.hover}
        }
    }
`;

export interface PropsPlaceholder<B = Breakpoints> {
    $size?: ResponsiveProp<SizeType, B>;
    $disabled?: boolean;
    $positionStatic?: boolean;
}
export const Placeholder = styled.div<PropsPlaceholder>`
    position: ${({ $positionStatic }) => ($positionStatic ? 'static' : 'absolute')};
    width: 100%;
    flex-basis: 100%;
    overflow: hidden;
    ${multiselect.placeholder}
    ${({ $disabled }) => $disabled && multiselect.placeholderDisabled}
`;

export interface PropsStyledInputWrapper<B = Breakpoints> {
    $size?: ResponsiveProp<SizeType, B>;
    $hasTags?: boolean;
    $tagsWrap?: boolean;
    $prefix?: boolean;
}
export const StyledInputWrapper = styled(InputWrapper)<PropsStyledInputWrapper>`
    height: auto;
    transition: none;
    ${mainWrapper.size}
    ${({ $hasTags, $prefix }) => $hasTags && !$prefix && mainWrapper.withTags}


    ${Wrapped} {
        ${wrapper.base}
    }

    ${({ $tagsWrap }) =>
        $tagsWrap &&
        css`
            ${Postfix} {
                align-self: flex-start;
                ${mainWrapperPostfix.size}
            }
        `}

    ${Wrapper} {
        ${mainWrapper.size}
    }
`;

export interface SelectAllStyledProps<B = Breakpoints> {
    $size: ResponsiveProp<SizeType<'s' | 'm' | 'l'>, B>;
}

export const SelectAllStyled = styled.div<SelectAllStyledProps>`
    ${mainSelectAll.base}
    ${mainSelectAll.size}

    &:before {
        content: '';
        ${mainSelectAll.before}
    }
`;

export const DropdownBottomSlot = styled.div`
    position: sticky;
    bottom: 0;
    background-color: ${color.primary.brand.white};
    z-index: 1;

    &:before {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 100%;
        height: 8px;
        background: ${color.primary.brand.white};
    }
`;

export const ResetButtonWrapperStyled = styled.div`
    padding: 8px 12px;
`;

export const StyledTooltip = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
    line-clamp: 10;
    text-overflow: ellipsis;
    ${styledTooltip.base}
    ${styledTooltip.custom}
`;
