import React from 'react';
import { Box, PropsBox } from './Logotype.styles';
import {
    CollapsedLogo,
    HorizontalOneLineEn,
    HorizontalOneLineRu,
    HorizontalTwoLinesEn,
    HorizontalTwoLinesRu,
    MonochromeHorizontalOneLineEn,
    MonochromeHorizontalOneLineRu,
    MonochromeHorizontalTwoLinesEn,
    MonochromeHorizontalTwoLinesRu,
    MonochromeVerticalOneLineEn,
    MonochromeVerticalOneLineRu,
    MonochromeVerticalTwoLinesEn,
    MonochromeVerticalTwoLinesRu,
    VerticalOneLineEn,
    VerticalOneLineRu,
    VerticalTwoLinesEn,
    VerticalTwoLinesRu,
} from './Logos';
import { BoxStyled } from '../Utils/styled';

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
        return <CollapsedLogo size={size} design={design} />;
    }
    if (design === 'monochrome-dark')
        // eslint-disable-next-line no-console
        console.warn(
            'Данный дизайн monochrome-dark не утверждён официально и его использование не рекомендуется. В последующих версиях @fcc/ui свойство monochrome-dark может быть удалено. Рекомендуется использование дизайна dark для логотипа в тёмной теме.'
        );

    if (locale === 'ru') {
        if (orientation === 'horizontal') {
            if (design === 'light' || design === 'dark') {
                if (type === 'one-line') {
                    return <HorizontalOneLineRu size={size} design={design} type={type} />;
                }
                if (type === 'default') {
                    return <HorizontalTwoLinesRu size={size} design={design} type={type} />;
                }
            }
            if (design === 'monochrome' || design === 'monochrome-dark') {
                if (type === 'one-line') {
                    return <MonochromeHorizontalOneLineRu size={size} design={design} type={type} />;
                }
                if (type === 'default') {
                    return <MonochromeHorizontalTwoLinesRu size={size} design={design} type={type} />;
                }
            }
        }
        if (orientation === 'vertical') {
            if (design === 'light' || design === 'dark') {
                if (type === 'one-line') {
                    return <VerticalOneLineRu size={size} design={design} type={type} />;
                }
                if (type === 'default') {
                    return <VerticalTwoLinesRu size={size} design={design} type={type} />;
                }
            }
            if (design === 'monochrome' || design === 'monochrome-dark') {
                if (type === 'one-line') {
                    return <MonochromeVerticalOneLineRu size={size} design={design} type={type} />;
                }
                if (type === 'default') {
                    return <MonochromeVerticalTwoLinesRu size={size} design={design} type={type} />;
                }
            }
        }
    }

    if (locale === 'en') {
        if (orientation === 'horizontal') {
            if (design === 'light' || design === 'dark') {
                if (type === 'one-line') {
                    return <HorizontalOneLineEn size={size} design={design} type={type} />;
                }
                if (type === 'default') {
                    return <HorizontalTwoLinesEn size={size} design={design} type={type} />;
                }
            }
            if (design === 'monochrome' || design === 'monochrome-dark') {
                if (type === 'one-line') {
                    return <MonochromeHorizontalOneLineEn size={size} design={design} type={type} />;
                }
                if (type === 'default') {
                    return <MonochromeHorizontalTwoLinesEn size={size} design={design} type={type} />;
                }
            }
        }
        if (orientation === 'vertical') {
            if (design === 'light' || design === 'dark') {
                if (type === 'one-line') {
                    return <VerticalOneLineEn size={size} design={design} type={type} />;
                }
                if (type === 'default') {
                    return <VerticalTwoLinesEn size={size} design={design} type={type} />;
                }
            }
            if (design === 'monochrome' || design === 'monochrome-dark') {
                if (type === 'one-line') {
                    return <MonochromeVerticalOneLineEn size={size} design={design} type={type} />;
                }
                if (type === 'default') {
                    return <MonochromeVerticalTwoLinesEn size={size} design={design} type={type} />;
                }
            }
        }
    }

    return <HorizontalOneLineRu size={size} design={design} type={type} />;
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
        <Box {...(attrs as {})} $design={design} $locale={locale} $orientation={orientation} $size={size} $type={type}>
            {logotypesMapper({ collapsed, design, locale, orientation, size, type })}
        </Box>
    );
};

Logotype.displayName = 'Logotype';
