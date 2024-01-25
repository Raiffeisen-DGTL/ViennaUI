import React, { useCallback } from 'react';
import { Home, Back } from '@fcc/icons';
import { useLocalization } from '../Localization';
import { Box, BackIcon } from './Breadcrumbs.styles';
import { Option } from './Option';
import { BreadcrumbsLocalizationProps, defaultBreadcrumbsLocalization } from './localization';
import { BoxStyled } from '../Utils/styled';

export interface BreadcrumbsProps extends BreadcrumbsLocalizationProps, BoxStyled<typeof Box, {}> {
    size?: 's' | 'm' | 'l';
    noHomeButton?: boolean;
    noBackButton?: boolean;
    onClickHome?: (e, data: { value: React.ReactNode }) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> & { Option: typeof Option } = (props) => {
    const { children, onClickHome, noHomeButton, noBackButton, size = 'm', localization, ...attrs } = props;

    const l10n = useLocalization(localization, defaultBreadcrumbsLocalization);

    const constructChildren = useCallback(() => {
        const arr = React.Children.toArray(children);

        /**
            Если больше одного шага и noHomeButton === false то добавляем шаг "Домой"
            Если только один шаг и noBackButton === false то меняем его на кнопку "Вернуться к ..."
        */

        if (arr.length > 1 && !noHomeButton) {
            arr.unshift(
                <Option key={0} aria-label='home' first size={size} value='home' onClick={onClickHome}>
                    <Home size={size} />
                </Option>
            );
        }

        if (arr.length === 1 && !noBackButton) {
            const backTo = `${l10n('ds.breadcrumbs.backTo')} ${(arr[0] as any).props.children}`;
            arr[0] = (
                <Option first size={size} {...(arr[0] as any).props}>
                    <BackIcon key={0}>
                        <Back size={size} />
                    </BackIcon>
                    <span key={1}>{backTo}</span>
                </Option>
            );
        }

        return arr.map((child, index) =>
            React.cloneElement(child as any, {
                key: index,
                size,
                first: index === 0,
                preLast: index === arr.length - 2,
                last: arr.length > 1 && index === arr.length - 1,
            })
        );
    }, [children, size, onClickHome, l10n]);

    return <Box {...(attrs as {})}>{constructChildren()}</Box>;
};

Breadcrumbs.Option = Option;
Breadcrumbs.displayName = 'Breadcrumbs';
