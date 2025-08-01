import styled from 'styled-components';
import { result } from 'vienna.ui-theme';
import { getPresets, getPresetsCustom } from '../Utils/styling';
import { Text } from '../Typography';

const presets = getPresets(
    result,
    'result'
)({
    base: null,
    title: null,
    description: null,
    image: null,
    content: null,
    errorText: null,
    actions: null,
});

const custom = getPresetsCustom('result.custom')({
    base: null,
    title: null,
    description: null,
    image: null,
    content: null,
});

export const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    ${presets.base}
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;

    ${presets.content}
    ${custom.content}
`;

export const ErrorText = styled.div`
    ${presets.errorText};
`;

export const Title = styled(Text)`
    ${presets.title}
    ${custom.title}
`;

export const Description = styled.div`
    ${presets.description}
    ${custom.description}
`;

export const Actions = styled.div`
    display: flex;
    justify-content: flex-start;

    ${presets.actions};
`;

export const Image = styled.img`
    object-fit: cover;

    ${presets.image}
    ${custom.image}
`;
