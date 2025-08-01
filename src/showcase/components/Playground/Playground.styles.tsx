import styled from 'styled-components';
import { LiveError, LivePreview, LiveEditor } from 'react-live';

export const SContainer = styled.div`
    background: rgb(251, 251, 251);
    border: 1px solid rgb(233, 234, 234);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
`;

export const SPreview = styled(LivePreview)`
    padding: 20px;
    border-radius: 8px 8px 0px 0px;
    border-bottom: 1px solid rgb(233, 234, 234);
`;

export const SEditor = styled(LiveEditor)`
    overflow-x: auto;
    max-height: 320px;
    border-radius: 0 0 8px 0;

    > pre {
        background: white !important;
    }
`;

export const SError = styled(LiveError)`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: pink;
    margin: 0;
    padding: 10px;
    border-radius: 0px 0px 8px 8px;
`;

export const SButtonContainer = styled.div`
    width: fit-content;
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 100%;
    display: flex;
    background: #ffffff;
    z-index: 1;
    border-radius: 0 0 8px 0;
`;

export const SButton = styled.button`
    border: 0 none;
    padding: 4px 10px;
    cursor: pointer;
    min-width: 49px;
    background: #ffffff;
    font-size: 12px;
    font-family:
        'Nunito Sans',
        -apple-system,
        '.SFNSText-Regular',
        'San Francisco',
        BlinkMacSystemFont,
        'Segoe UI',
        'Helvetica Neue',
        Helvetica,
        Arial,
        sans-serif;
    line-height: 16px;
    font-weight: 700;
    border-top: 1px solid hsla(203, 50%, 30%, 0.15);
    border-left: 1px solid hsla(203, 50%, 30%, 0.15);
    border-radius: 4px 0 8px 0;
`;

export const SUnderscore = styled.div`
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 0;
    right: 0;
    background: rgba(2, 156, 253, 255);
    z-index: 1;
    border-radius: 0 0 3px 0;
`;

export const SErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background: pink;
    padding: 30px 20px;
`;
