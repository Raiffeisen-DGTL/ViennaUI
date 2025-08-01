import styled from 'styled-components';
import { SizeType } from '../Utils';
import { Text } from '../Typography';
import { Breakpoints, ResponsiveProp } from '@/Utils/responsiveness';
import { getPresets } from '@/Utils/styling';
import { viewOnly } from 'vienna.ui-theme';

export interface BoxProps<B = Breakpoints> {
    $size: ResponsiveProp<SizeType<'s' | 'm' | 'l'>, B>;
}

const presetsBox = getPresets(
    viewOnly.box,
    'viewOnly.box'
)({
    base: null,
    size: ['$size', 'm'],
});

const presetsContent = getPresets(
    viewOnly.content,
    'viewOnly.content'
)({
    base: null,
});

export const Box = styled.div<BoxProps>`
    ${presetsBox.base}
    ${presetsBox.size}
`;

export const Content = styled(Text)`
    ${presetsContent.base}
`;
