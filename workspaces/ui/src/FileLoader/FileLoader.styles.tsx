import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const list = getPresets('fileLoader.list', {
    base: null,
});

const content = getPresets('fileLoader.content', {
    base: null,
});

const subContent = getPresets('fileLoader.subContent', {
    base: null,
});

const container = getPresets('fileLoader.container', {
    base: null,
    invalid: null,
    over: null,
    disabled: null,
});

const custom = getPresets('fileLoader.custom', {
    list: null,
    content: null,
    subContent: null,
    container: null,
});

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    ${content.base}
    ${custom.content}
`;

export const SubContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${subContent.base}
    ${custom.subContent}
`;

export const Box = styled.div<{ over?: boolean; invalid?: boolean; disabled?: boolean }>`
    position: relative;
    display: flex;
    flex-direction: column;
    aligne-items: center;
    justify-content: center;
    ${container.base}

    ${({ invalid }) =>
        invalid &&
        css`
            ${container.invalid}
        `}

    ${({ over }) =>
        over &&
        css`
            ${container.over}
        `}

    ${({ disabled }) =>
        disabled &&
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
