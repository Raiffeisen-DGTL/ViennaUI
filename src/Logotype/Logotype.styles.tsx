import styled from 'styled-components';
import { getPresets } from '../Utils/styling';

const presets = getPresets('logotype', {
    design: '$design',
    width: '$size',
    height: '$size',
});

const logotype = getPresets('logotype.logotype', {
    design: '$design',
    size: null,
});

const custom = getPresets('logotype.custom', {
    root: null,
    logo: null,
    title: null,
});

export interface PropsBox {
    $size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    $design?: 'light' | 'dark' | 'monochrome' | 'monochrome-dark';
    $locale?: 'ru' | 'en';
    $orientation?: 'horizontal' | 'vertical';
    $type?: 'default' | 'one-line';
}

export const Box = styled.div<PropsBox>`
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    ${presets.height}
    ${custom.root}
`;

export const Logo = styled.svg<PropsBox>`
    ${presets.design}
    ${presets.width}
    ${presets.height}
    ${custom.logo}
`;

export const Logotype = styled.svg<PropsBox>`
    ${logotype.design}
    ${({ $locale = 'ru', $type = 'default', $size = 'l', $orientation = 'horizontal', $design }) => {
        const style = $design === 'light' || $design === 'dark' ? 'color' : 'monochrome';
        const preset = logotype.size({});
        return preset[$orientation][style][$locale][$type][$size];
    }}
`;
