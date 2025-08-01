import styled from 'styled-components';
import { multiselect } from 'vienna.ui-theme';
import { Breakpoints, ResponsiveProp } from '../../Utils/responsiveness';
import { SizeType } from '../../Utils';
import { getPresets } from '../../Utils/styling';

const multiselectWrapper = getPresets(
    multiselect.emptyState.wrapper,
    'multiselect.emptyState.wrapper'
)({
    base: null,
    size: ['$size', 'm'],
});

const multiselectText = getPresets(
    multiselect.emptyState.text,
    'multiselect.emptyState.text'
)({
    size: ['$size', 'm'],
});

export interface BoxProps<B = Breakpoints> {
    $size: ResponsiveProp<SizeType<'s' | 'm' | 'l'>, B>;
}

export const Box = styled.div<BoxProps>`
    ${multiselectWrapper.base}
    ${multiselectWrapper.size}
`;

export const Text = styled.span<BoxProps>`
    ${multiselectText.size}
`;
