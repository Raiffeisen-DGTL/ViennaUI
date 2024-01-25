import styled, { css, keyframes } from 'styled-components';
import { getPresets } from '../../Utils/styling';

const show = keyframes`
  0% {
    opacity: 0;
    height: 0px;
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
    height: 0px;
    display: none;
  }
`;

const container = getPresets('fileLoader.file.container', {
    base: null,
});

const icon = getPresets('fileLoader.file.icon', {
    base: null,
});

const image = getPresets('fileLoader.file.image', {
    base: null,
});

const main = getPresets('fileLoader.file.main', {
    base: null,
});

const name = getPresets('fileLoader.file.name', {
    base: null,
    focus: null,
    custom: null,
});

const data = getPresets('fileLoader.file.data', {
    base: null,
    invalid: null,
});

const closeIcon = getPresets('fileLoader.file.closeIcon', {
    base: null,
    focus: null,
});

const custom = getPresets('fileLoader.file.custom', {
    container: null,
    icon: null,
    image: null,
    main: null,
    name: null,
    data: null,
    closeIcon: null,
});

interface PropsBox {
    $toggle?: boolean;
}
export const Box = styled.div<PropsBox>`
    display: flex;
    align-items: center;
    &:last-child {
        margin-bottom: 0px;
    }
    opacity: 1;

    ${container.base}

    ${({ $toggle }) =>
        $toggle
            ? css`
                  animation: ${show} 0.2s ease-in-out 0s alternate 1;
              `
            : css`
                  opacity: 0;
                  height: 0px;
                  animation: ${hide} 0.2s ease-in-out 0s alternate 1;
              `}

    ${custom.container}
`;

export const ImgIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${image.base}
    ${custom.image}
`;

interface PropsIcon {
    $image?: string;
}
export const Icon = styled.div<PropsIcon>`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    user-select: none;
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

export const Name = styled.div`
    outline: none;
    cursor: pointer;
    transition: all 0.2s;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    ${name.base}
    &:hover,
    &:focus {
        ${name.focus}
    }
    ${name.custom}
    ${custom.name}
`;

interface PropsData {
    $invalid?: boolean;
}
export const Data = styled.div<PropsData>`
    ${data.base}
    &:last-child {
        margin-bottom: 0px;
    }

    ${({ $invalid }) =>
        $invalid &&
        css`
            ${data.invalid}
        `}
    ${custom.data}
`;

export const CloseIcon = styled.div`
    display: flex;
    outline: none;
    cursor: pointer;
    ${closeIcon.base}
    &:hover,
    &:focus {
        ${closeIcon.focus}
    }
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
