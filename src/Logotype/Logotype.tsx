import React from 'react';
import { Box, PropsBox } from './Logotype.styles';
import { Logo as LogoImg, Logotype as LogotypeImg } from './Logotype.styles';
import { BoxStyled } from '../Utils/styled';
import { LogoTypes } from './LogoPath';

export interface LogotypeBaseProps {
    size?: PropsBox['$size'];
    design?: PropsBox['$design'];
    locale?: PropsBox['$locale'];
    orientation?: PropsBox['$orientation'];
    type?: PropsBox['$type'];
    collapsed?: boolean;
}

export type LogotypeProps = BoxStyled<typeof Box, PropsBox> & LogotypeBaseProps;

export const logotypesMapper = ({ size, design, locale, type, collapsed, orientation }: LogotypeBaseProps) => {
    if (collapsed) {
        return <LogoImg src={LogoTypes.logoWithBg} $size={size} $design={design} />;
    }
    if (design === 'monochrome-dark')
        // eslint-disable-next-line no-console
        console.warn(
            'Данный дизайн monochrome-dark не утверждён официально и его использование не рекомендуется. В последующих версиях vienna.ui свойство monochrome-dark может быть удалено. Рекомендуется использование дизайна dark для логотипа в тёмной теме.'
        );

    const colorName =
        design === 'light'
            ? 'original'
            : design === 'dark'
              ? 'white'
              : design === 'monochrome'
                ? 'black'
                : 'digitalWhite';
    const orientationName = orientation === 'horizontal' ? 'Horizontal' : 'Vertical';
    const typeName = type === 'one-line' ? 'OneLine' : 'TwoLines';
    const localeName = locale === 'en' ? 'En' : 'Ru';
    const logotypeKey = (colorName + orientationName + typeName + localeName) as keyof typeof LogoTypes;

    return (
        <LogotypeImg
            src={LogoTypes[logotypeKey]}
            $size={size}
            $type={type}
            $design={design}
            $locale={locale}
            $orientation={orientation}
        />
    );
};

export const Logotype: React.FC<LogotypeProps> = ({
    design = 'light',
    size = 'l',
    locale = 'ru',
    collapsed = false,
    orientation = 'horizontal',
    type = 'default',
    ...attrs
}) => {
    return (
        <Box {...attrs} $design={design} $locale={locale} $orientation={orientation} $size={size} $type={type}>
            {logotypesMapper({ collapsed, design, locale, orientation, size, type })}
        </Box>
    );
};

Logotype.displayName = 'Logotype';
