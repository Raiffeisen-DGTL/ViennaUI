import styled, { css, keyframes } from 'styled-components';
import { file } from 'vienna.ui-theme';
import { getPresets, getPresetsCustom } from '../Utils/styling';

const show = keyframes`
  0% {
    opacity: 0;
    height: 0;
  }

  50% {
    opacity: 0;
    height: 36px;
  }

  100% {
    opacity: 1;
    height: 72px;
  }
`;

const hide = keyframes`
  0% {
    opacity: 1;
    height: 72px;
  }

  50% {
    opacity: 0;
    height: 36px;
  }

  100% {
    opacity: 0;
    height: 0;
    display: none;
  }
`;

const container = getPresets(
    file.container,
    'file.container'
)({
    base: null,
});

const icon = getPresets(
    file.icon,
    'file.icon'
)({
    base: null,
    disabled: null,
});

const image = getPresets(
    file.image,
    'file.image'
)({
    base: null,
});

const main = getPresets(
    file.main,
    'file.main'
)({
    base: null,
});

const name = getPresets(
    file.name,
    'file.name'
)({
    base: null,
    focus: null,
    disabled: null,
    custom: null,
});

const data = getPresets(
    file.data,
    'file.data'
)({
    base: null,
    invalid: null,
});

const description = getPresets(
    file.description,
    'file.description'
)({
    base: null,
    disabled: null,
    invalid: null,
});

const info = getPresets(
    file.info,
    'file.info'
)({
    base: null,
    disabled: null,
});

const closeIcon = getPresets(
    file.closeIcon,
    'file.closeIcon'
)({
    base: null,
    focus: null,
    disabled: null,
});

const custom = getPresetsCustom('file.custom')({
    container: null,
    icon: null,
    image: null,
    main: null,
    name: null,
    data: null,
    closeIcon: null,
});

export interface PropsBox {
    $toggle?: boolean;
    $animation: boolean;
}
export const Box = styled.div<PropsBox>`
    display: flex;
    align-items: center;
    &:last-child {
        margin-bottom: 0;
    }
    opacity: 1;

    ${container.base}

    ${({ $toggle, $animation }) => {
        if (!$animation) return '';

        return $toggle
            ? css`
                  animation: ${show} 0.2s ease-in-out 0s alternate 1;
              `
            : css`
                  opacity: 0;
                  height: 0;
                  animation: ${hide} 0.2s ease-in-out 0s alternate 1;
              `;
    }}

    ${custom.container}
`;

export const ImgIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${image.base}
    ${custom.image}
`;

export interface PropsIcon {
    $image?: string;
    $disabled?: boolean;
}
export const Icon = styled.div<PropsIcon>`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    user-select: none;
    cursor: pointer;
    ${icon.base}
    ${({ $image }) =>
        $image &&
        css`
            background-image: url(${$image});
            background-position: center;
            background-size: cover;
            > div {
                display: none;
            }
        `}
    ${({ $disabled }) =>
        $disabled &&
        css`
            ${icon.disabled}
            cursor: auto;
        `}
    ${custom.icon}
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    justify-content: center;
    ${main.base}
    ${custom.main}
`;

export interface PropsName {
    $disabled?: boolean;
    $hover?: boolean;
}
export const Name = styled.div<PropsName>`
    outline: none;
    transition: all 0.2s;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    ${name.base}
    ${({ $disabled }) =>
        $disabled &&
        css`
            ${name.disabled}
            cursor: auto;
        `}
      ${({ $hover }) =>
        $hover &&
        css`
            &:hover,
            &:focus {
                cursor: pointer;
                ${name.focus}
            }
        `}         
    ${name.custom}
    ${custom.name}
`;

export const Data = styled.div`
    ${data.base}
    &:last-child {
        margin-bottom: 0;
    }
    ${custom.data}
`;

export interface PropsDescription {
    $invalid?: boolean;
    $disabled?: boolean;
}
export const DataDescription = styled.div<PropsDescription>`
    ${description.base}

    ${({ $invalid }) =>
        $invalid &&
        css`
            ${description.invalid}
        `}

    ${({ $disabled }) =>
        $disabled &&
        css`
            ${description.disabled}
        `}
`;

export interface PropsInfo {
    $disabled?: boolean;
}
export const DataInfo = styled.div<PropsInfo>`
    ${info.base}

    ${({ $disabled }) =>
        $disabled &&
        css`
            ${info.disabled}
        `}
`;

export interface PropsCloseIcon {
    $disabled?: boolean;
}
export const CloseIcon = styled.div<PropsCloseIcon>`
    display: flex;
    outline: none;
    cursor: pointer;
    ${closeIcon.base}
    ${({ $disabled }) =>
        $disabled
            ? css`
                  ${closeIcon.disabled}
                  cursor: auto;
              `
            : css`
                  &:hover,
                  &:focus {
                      ${closeIcon.focus}
                  }
              `}
    ${custom.closeIcon}
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Progress = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
`;
