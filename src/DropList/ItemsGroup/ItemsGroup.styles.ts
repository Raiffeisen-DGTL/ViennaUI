import styled from 'styled-components';
import { dropList } from 'vienna.ui-theme';
import { Breakpoints, ResponsiveProp } from '../../Utils/responsiveness';
import { getPresets } from '../../Utils/styling';

interface PropsSubheader<B = Breakpoints> {
    $size?: ResponsiveProp<'s' | 'm' | 'l', B>;
}

const subheader = getPresets(
    dropList.subheader,
    'dropList.subheader'
)({
    base: null,
    size: ['$size', 'm'],
    custom: null,
});

export const Subheader = styled.div<PropsSubheader>`
    ${subheader.base}
    ${subheader.size}
    ${subheader.custom}
`;
