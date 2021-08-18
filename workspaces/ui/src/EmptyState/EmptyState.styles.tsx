import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('emptyState', {
    base: null,
    title: null,
    description: null,
    row: null,
    content: null,
});

const custom = getPresets('emptyState.custom', {
    base: null,
    row: null,
    baseRow: null,
    title: null,
    description: null,
    actions: null,
    content: null,
});

export const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${presets.base}
    ${custom.base}
`;

export const Title = styled.div`
    ${presets.title}
    ${custom.title}
`;

export const Description = styled.div`
    ${presets.description}
    ${custom.description}
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    ${custom.actions}
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    ${custom.baseRow}
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    ${presets.content}
    ${custom.content}

    > ${Row}:not(:last-child) {
        ${presets.row}
        ${custom.row}
    }
`;
