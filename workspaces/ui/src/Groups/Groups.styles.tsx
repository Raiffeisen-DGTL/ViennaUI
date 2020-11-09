import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('groups', {
    size: 'size',
    custom: null,
    customItem: null,
});

export const Box = styled.div<{ design: any; size: any; xheight: any; alignItems?: any; justifyContent?: any }>`
    display: ${(props) => (props.design === 'horizontal' ? 'inline-flex' : 'flex')};
    flex-direction: ${(props) => (props.design === 'horizontal' ? 'row' : 'column')};
    justify-content: ${(props) => props.justifyContent};
    align-content: flex-start;
    align-items: ${(props) => props.alignItems};
    margin-bottom: -${presets.size};
    flex-wrap: wrap;
    vertical-align: middle;
    width: 100%;

    ${(props) =>
        props.xheight === 'full' &&
        css`
            align-items: flex-start;
            height: 100%;
        `}

    ${presets.custom}
`;

export const Item = styled.div<{ design: any; size: any }>`
    position: relative;
    margin-bottom: ${presets.size};
    height: 100%;
    display: flex;
    align-content: center;
    align-items: center;

    ${(props) =>
        props.design === 'horizontal' &&
        css`
            margin-right: ${presets.size};
            width: auto;
            flex: none;

            &:last-child {
                margin-right: 0;
            }
        `}

    ${(props) =>
        props.design === 'vertical' &&
        css`
            width: 100%;
            flex: none;
        `}

    ${presets.customItem}
`;
