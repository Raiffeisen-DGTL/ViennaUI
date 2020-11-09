import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const tags = getPresets('inputSlider.tags', {
    base: null,
});

const line = getPresets('inputSlider.line', {
    base: null,
    size: 'size',
    front: null,
    back: null,
    focus: null,
    design: 'design',
    disabled: null,
    animation: null,
});

const container = getPresets('inputSlider.container', {
    base: null,
    noInput: null,
});

const tag = getPresets('inputSlider.tag', {
    base: null,
    firstChild: 'design',
    lastChild: 'design',
});

const custom = getPresets('inputSlider.custom', {
    container: null,
    tags: null,
    tag: null,
    line: null,
    lineFront: null,
    lineBack: null,
    circle: null,
    box: null,
    partLeft: null,
    partRight: null,
});

const circle = getPresets('inputSlider.circle', {
    base: null,
    disabled: null,
    hover: null,
});

const box = getPresets('inputSlider.box', {
    base: null,
    disabled: null,
});

const part = getPresets('inputSlider.part', {
    base: null,
});

export const PartLeft = styled.div`
    display: flex;
    &:after {
        content: '';
        ${part.base}
    }
    ${custom.partLeft}
`;

export const PartRight = styled.div`
    display: flex;
    &:before {
        content: '';
        ${part.base}
    }
    ${custom.partRight}
`;

export const Box = styled.div<{ disabled?: boolean }>`
    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    ${box.base}
    ${({ disabled }) =>
        disabled &&
        css`
            ${box.disabled}
            * {
                ${box.disabled}
            }
        `}
    ${custom.box}
`;

export const Container = styled.div<{ noInput?: boolean }>`
    position: relative;
    ${container.base}
    ${({ noInput }) => noInput && container.noInput}
    ${custom.container}
`;

export const Tags = styled.div`
    position: relative;
    width: 100%;
    ${tags.base}
    ${custom.tags}
`;

export const Tag = styled.div<{ val?: number; design?: 'outline' | 'material' }>`
    position: absolute;
    user-select: none;
    ${tag.base}
    ${({ val }) => `left: ${val}px;`}

    &:last-child {
        ${tag.lastChild}
    }

    &:first-child {
        ${tag.firstChild}
    }

    ${custom.tag}
`;

export const Line = styled.div`
    position: absolute;
    user-select: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    bottom: 0px;
    ${custom.line}
`;

export const LineFront = styled.div<{
    disabled?: boolean;
    design?: 'outline' | 'material';
    drag?: boolean;
    noInput?: boolean;
    size?: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs';
}>`
    position: relative;
    display: inline-block;
    ${line.base}
    ${({ noInput }) => noInput && line.size}
    ${line.front}
    ${line.design}
    ${({ drag }) => !drag && line.animation}
    ${({ disabled }) => disabled && line.disabled}
    ${custom.lineFront}
`;
export const LineBack = styled.div<{
    disabled?: boolean;
    design?: 'outline' | 'material';
    drag?: boolean;
    noInput?: boolean;
    size?: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs';
}>`
    position: relative;
    display: inline-block;
    flex-grow: 1;
    ${line.base}
    ${({ noInput }) => noInput && line.size}
    ${line.back}
    ${line.design}
    ${({ drag }) => !drag && line.animation}
    ${({ noInput }) => !noInput && 'border-color: transparent;'}
    ${({ noInput, drag }) => noInput && drag && line.focus}
    ${({ disabled }) => disabled && line.disabled}
    ${custom.lineBack}
`;

export const Circle = styled.div<{
    disabled?: boolean;
    drag?: boolean;
    size?: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs';
}>`
    position: relative;
    display: inline-block;
    user-select: none;
    z-index: 1;

    &:after{
        content: '';
        position: absolute;
        ${circle.base}
        ${({ drag }) => !drag && line.animation}
        ${({ drag }) => drag && circle.hover}
        ${({ disabled }) => disabled && circle.disabled}
        ${custom.circle}
    }
    ${({ disabled }) =>
        !disabled &&
        css`
            &:hover:after,
            &:focus:after {
                ${circle.hover}
                ${custom.circle}
            }
        `}

`;
