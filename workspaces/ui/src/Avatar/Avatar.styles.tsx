import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const boxPresets = getPresets('avatar', {
    size: 'size',
    base: null,
});

export const Box = styled.div<{
    size: 'xs' | 's' | 'm' | 'l' | 'xl';
}>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    ${boxPresets.base}
    ${boxPresets.size}
`;

export const ImageLayer = styled.div<{
    src?: string;
    align?: 'left' | 'center' | 'right';
    valign?: 'top' | 'center' | 'bottom';
}>`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: ${({ src }) => `url(${src})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: ${({ align }) => align} ${({ valign }) => valign};
`;
