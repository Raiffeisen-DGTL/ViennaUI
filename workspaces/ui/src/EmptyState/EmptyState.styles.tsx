import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('emptyState', {
    base: null,
    title: null,
    description: null,
    row: null,
    content: null,
});

export const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${presets.base}
`;

export const Title = styled.div`
    ${presets.title}
`;

export const Description = styled.div`
    ${presets.description}
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    ${presets.content}

    > ${Row}:not(:last-child) {
        ${presets.row}
    }
`;
