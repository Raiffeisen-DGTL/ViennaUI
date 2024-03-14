import styled, { css } from 'styled-components';
import { getPresets } from '../../Utils/styling';
import { Breakpoints, ResponsiveProp, responsivePreset } from '../../Utils/responsiveness';

export type ColorType =
    | 'brand-accent'
    | 'brand-on-accent'
    | 'brand-white'
    | 'brand-primary'
    | 'brand-on-primary'
    | 'brand-wildsand'
    | 'seattle01'
    | 'seattle05'
    | 'seattle10'
    | 'seattle30'
    | 'seattle60'
    | 'seattle100'
    | 'seattle120'
    | 'seattle140'
    | 'seattle160'
    | 'seattle180'
    | 'oslo10'
    | 'oslo30'
    | 'oslo60'
    | 'oslo80'
    | 'oslo100'
    | 'oslo120'
    | 'oslo140'
    | 'oslo160'
    | 'oslo180'
    | 'london40'
    | 'london80'
    | 'london120'
    | 'geneva10'
    | 'geneva30'
    | 'geneva60'
    | 'geneva100'
    | 'geneva120'
    | 'geneva140'
    | 'geneva160'
    | 'geneva180'
    | 'moscow10'
    | 'moscow30'
    | 'moscow60'
    | 'moscow100'
    | 'moscow120'
    | 'moscow140'
    | 'moscow160'
    | 'moscow180'
    | 'osaka10'
    | 'osaka30'
    | 'osaka60'
    | 'osaka80'
    | 'osaka100'
    | 'osaka120'
    | 'osaka140'
    | 'osaka160'
    | 'osaka180'
    | 'miami10'
    | 'miami30'
    | 'miami60'
    | 'miami80'
    | 'miami100'
    | 'miami120'
    | 'miami140'
    | 'miami160'
    | 'miami180'
    | 'sochi10'
    | 'sochi30'
    | 'sochi60'
    | 'sochi80'
    | 'sochi100'
    | 'sochi120'
    | 'sochi140'
    | 'sochi160'
    | 'sochi180'
    | 'paris10'
    | 'paris30'
    | 'paris60'
    | 'paris80'
    | 'paris100'
    | 'paris120'
    | 'paris140'
    | 'paris160'
    | 'paris180'
    | 'tokyo10'
    | 'tokyo30'
    | 'tokyo60'
    | 'tokyo80'
    | 'tokyo100'
    | 'tokyo120'
    | 'tokyo140'
    | 'tokyo160'
    | 'tokyo180'
    | 'dubai10'
    | 'dubai30'
    | 'dubai60'
    | 'dubai80'
    | 'dubai100'
    | 'dubai120'
    | 'dubai140'
    | 'dubai160'
    | 'dubai180'
    | 'nice10'
    | 'nice30'
    | 'nice60'
    | 'nice80'
    | 'nice100'
    | 'nice120'
    | 'nice140'
    | 'nice160'
    | 'nice180'
    | 'dublin10'
    | 'dublin30'
    | 'dublin60'
    | 'dublin80'
    | 'dublin100'
    | 'dublin120'
    | 'dublin140'
    | 'dublin160'
    | 'dublin180'
    | 'bern10'
    | 'bern30'
    | 'bern60'
    | 'bern80'
    | 'bern100'
    | 'bern120'
    | 'bern140'
    | 'bern160'
    | 'bern180'
    | 'manila10'
    | 'manila30'
    | 'manila60'
    | 'manila80'
    | 'manila100'
    | 'manila120'
    | 'manila140'
    | 'manila160'
    | 'manila180'
    | 'tallin10'
    | 'tallin30'
    | 'tallin60'
    | 'tallin80'
    | 'tallin100'
    | 'tallin120'
    | 'tallin140'
    | 'tallin160'
    | 'tallin180'
    | 'seoul10'
    | 'seoul30'
    | 'seoul60'
    | 'seoul80'
    | 'seoul100'
    | 'seoul120'
    | 'seoul140'
    | 'seoul160'
    | 'seoul180'
    | 'havana10'
    | 'havana30'
    | 'havana60'
    | 'havana80'
    | 'havana100'
    | 'havana120'
    | 'havana140'
    | 'havana160'
    | 'havana180'
    | 'madrid10'
    | 'madrid30'
    | 'madrid60'
    | 'madrid100'
    | 'madrid120'
    | 'madrid140'
    | 'madrid160'
    | 'madrid180'
    | 'porto10'
    | 'porto30'
    | 'porto60'
    | 'porto80'
    | 'porto100'
    | 'porto120'
    | 'porto140'
    | 'porto160'
    | 'porto180'
    | 'currentColor';

const presets = getPresets('typography.text', {
    base: null,
    size: responsivePreset('$size', 'm'),
    margin: responsivePreset('$margin', 'none'),
    custom: null,
});

const typography = getPresets('typography', {
    weight: '$weight',
    color: '$color',
});

export interface PropsBox<B = Breakpoints> {
    $size?: ResponsiveProp<'s' | 'm' | 'l' | 'xl' | 'xxl', B>;
    $weight?: 'thin' | 'extra-light' | 'light' | 'normal' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold' | 'black';
    $color?: ColorType;
    $align?: 'left' | 'center' | 'right' | 'justify';
    $margin?: ResponsiveProp<'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl', B>;
    $uppercase?: boolean;
    $monospace?: boolean;
}
export const Box = styled.span<PropsBox>`
    font-feature-settings: ${({ $monospace }) => ($monospace ? `'tnum' on, 'lnum' on` : 'normal')};
    vertical-align: baseline;
    padding: 0;
    ${presets.base}
    ${presets.size}
    ${presets.margin}
    ${typography.weight}
    ${typography.color}

    ${({ $align }) =>
        $align &&
        css`
            text-align: ${$align};
        `};

    ${({ $uppercase }) =>
        $uppercase &&
        css`
            text-transform: uppercase;
        `};

    ${presets.custom}
`;
