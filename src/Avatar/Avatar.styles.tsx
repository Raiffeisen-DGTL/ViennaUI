import styled from 'styled-components';
import { avatar } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';
import { Breakpoints, ResponsiveProp } from '../Utils/responsiveness';

const presets = getPresets(
    avatar,
    'avatar'
)({
    base: null,
    size: ['$size', 'm'],
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
    ${presets.base}
    ${presets.size}
`;

export interface PropsImageLayer {
    $align?: 'left' | 'center' | 'right';
    $valign?: 'top' | 'center' | 'bottom';
}

export const ImageLayer = styled.img<PropsImageLayer>`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: ${({ $align }) => $align} ${({ $valign }) => $valign};
`;
