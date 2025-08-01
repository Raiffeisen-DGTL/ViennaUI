import styled, { css } from 'styled-components';
import { fileLoader } from 'vienna.ui-theme';
import { color } from 'vienna.tokens';
import { getPresets, getPresetsCustom } from '../Utils/styling';

const list = getPresets(
    fileLoader.list,
    'fileLoader.list'
)({
    base: null,
});

const content = getPresets(
    fileLoader.content,
    'fileLoader.content'
)({
    base: null,
    disabled: null,
});

const helperText = getPresets(
    fileLoader.helperText,
    'fileLoader.helperText'
)({
    base: null,
});

const subContent = getPresets(
    fileLoader.subContent,
    'fileLoader.subContent'
)({
    base: null,
    disabled: null,
});

const container = getPresets(
    fileLoader.container,
    'fileLoader.container'
)({
    base: null,
    invalid: null,
    over: null,
    disabled: null,
    disabledInner: null,
});

const custom = getPresetsCustom('fileLoader.custom')({
    list: null,
    content: null,
    subContent: null,
    container: null,
});

export interface PropsContent {
    $disabled?: boolean;
}

export const Content = styled.div<PropsContent>`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    ${content.base}
    ${({ $disabled }) =>
        $disabled &&
        css`
            ${content.disabled}
        `}

    ${custom.content}
`;

export interface PropsSubContent {
    $disabled?: boolean;
}

export const SubContent = styled.div<PropsSubContent>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${subContent.base}
    ${custom.subContent}

    ${({ $disabled }) =>
        $disabled &&
        css`
            ${subContent.disabled}
        `}
`;
export interface PropsBox {
    $over?: boolean;
    $invalid?: boolean;
    $disabled?: boolean;
}
export const Box = styled.div<PropsBox>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${container.base}

    ${({ $invalid }) =>
        $invalid &&
        css`
            ${container.invalid}
        `}

    ${({ $over }) =>
        $over &&
        css`
            ${container.over}
        `}

    ${({ $disabled }) =>
        $disabled &&
        css`
            ${container.disabled}
            ${container.disabledInner}
        `}


    ${custom.container}
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${list.base}
    ${custom.list}
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputFile = styled.input`
    display: none;
`;

export const ContentFirst = styled.span`
    margin-right: 4px;
    display: inline-block;
`;

export interface HelperTextBoxProps {
    $invalid?: boolean;
}

export const HelperTextBox = styled.div<HelperTextBoxProps>`
    ${helperText.base}

    ${({ $invalid }) =>
        $invalid &&
        css`
            color: ${color.utilitarian.moscow.c100};
        `}
`;
