import styled from 'styled-components';
import { logotype } from 'vienna.ui-theme';
import { getPresets, getPresetsCustom } from '../Utils/styling';
import { AnyObject } from '../Utils';

const presets = getPresets(
    logotype,
    'logotype'
)({
    design: '$design',
    width: '$size',
    height: '$size',
});

const logotypePresets = getPresets(
    logotype.logotype,
    'logotype.logotype'
)({
    design: '$design',
    size: null,
});

const custom = getPresetsCustom('logotype.custom')({
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

export const Logo = styled.img<PropsBox>`
    ${presets.design}
    ${presets.width}
    ${presets.height}
    ${custom.logo}
`;

export const Logotype = styled.img<PropsBox>`
    ${logotypePresets.design}
    ${({ $locale = 'ru', $type = 'default', $size = 'l', $orientation = 'horizontal', $design }) => {
        const style = $design === 'light' || $design === 'dark' ? 'color' : 'monochrome';
        const preset = logotypePresets.size({}) as AnyObject;
        return preset[$orientation][style][$locale][$type][$size];
    }}
`;
