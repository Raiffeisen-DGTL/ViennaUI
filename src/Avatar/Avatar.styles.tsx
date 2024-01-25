import styled from 'styled-components';
import { getPresets } from '../Utils/styling';
import { Breakpoints, ResponsiveProp, responsivePreset } from '../Utils/responsiveness';

const { base, size } = getPresets('avatar', {
    base: null,
    size: responsivePreset('$size', 'm'),
});

export interface PropsBox<B = Breakpoints> {
    $size?: ResponsiveProp<'xs' | 's' | 'm' | 'l' | 'xl', B>;
}
export const Box = styled.div<PropsBox>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    ${base}
    ${size}
`;

export interface PropsImageLayer {
    $src?: string;
    $align?: 'left' | 'center' | 'right';
    $valign?: 'top' | 'center' | 'bottom';
}
export const ImageLayer = styled.div<PropsImageLayer>`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: ${({ $src }) => `url(${$src})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: ${({ $align }) => $align} ${({ $valign }) => $valign};
`;
