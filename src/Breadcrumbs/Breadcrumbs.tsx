import React, { useCallback, ReactElement, isValidElement } from 'react';
import { HomeIcon, BackIcon as Back } from 'vienna.icons';
import { useLocalization } from '../Localization';
import { Box, BackIcon } from './Breadcrumbs.styles';
import { BreadcrumbsOptionProps, Option } from './Option';
import { BreadcrumbsLocalizationProps, defaultBreadcrumbsLocalization } from './localization';
import { BoxStyled } from '../Utils/styled';

export const defaultBreadcrumbsTestId: BreadcrumbsProps['testId'] = {
    home: 'breadcrumbs_home',
    homeIcon: 'breadcrumbs_home-icon',
    back: 'breadcrumbs_back',
    backIconContainer: 'breadcrumbs_back-icon-container',
    backIcon: 'breadcrumbs_back-icon',
    page: (val) => `breadcrumbs_page-${val}`,
};

export interface BreadcrumbsProps extends BreadcrumbsLocalizationProps, BoxStyled<typeof Box, object> {
    size?: 's' | 'm' | 'l';
    noHomeButton?: boolean;
    noBackButton?: boolean;
    withoutTooltip?: boolean;
    testId?: {
        home?: string;
        homeIcon?: string;
        back?: string;
        backIconContainer?: string;
        backIcon?: string;
        page?: (val: string) => string;
    };
    onClickHome?: (e: React.MouseEvent<HTMLDivElement>, data: { value: React.ReactNode }) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> & { Option: typeof Option } = (props) => {
    const {
        children,
        onClickHome,
        noHomeButton,
        noBackButton,
        size = 'm',
        localization,
        withoutTooltip = false,
        testId = defaultBreadcrumbsTestId,
        ...attrs
    } = props;

    const l10n = useLocalization(localization, defaultBreadcrumbsLocalization);

    const constructChildren = useCallback(() => {
        const arr = React.Children.toArray(children) as ReactElement[];

        /**
            Если больше одного шага и noHomeButton === false то добавляем шаг "Домой"
            Если только один шаг и noBackButton === false то меняем его на кнопку "Вернуться к ..."
        */

        if ((arr.length > 1 && !noHomeButton) || (arr.length === 1 && !noHomeButton && noBackButton)) {
            arr.unshift(
                <Option
                    key={0}
                    aria-label='home'
                    first
                    size={size}
                    value='home'
                    withoutTooltip={withoutTooltip}
                    data-testid={testId?.home}
                    onClick={onClickHome}>
                    <HomeIcon size={size} data-testid={testId?.homeIcon} />
                </Option>
            );
        }

        if (arr.length === 1 && !noBackButton) {
            const backTo = `${l10n('ds.breadcrumbs.backTo')} ${
                (arr[0] as ReactElement<BreadcrumbsOptionProps>).props.children
            }`;
            arr[0] = (
                <Option
                    first
                    size={size}
                    withoutTooltip={withoutTooltip}
                    data-testid={testId?.back}
                    {...(arr[0] as ReactElement<BreadcrumbsOptionProps>).props}>
                    <BackIcon key={0} data-testid={testId?.backIconContainer}>
                        <Back size={size} data-testid={testId?.backIcon} />
                    </BackIcon>
                    <span key={1}>{backTo}</span>
                </Option>
            );
        }

        return arr.map((child: ReactElement<BreadcrumbsOptionProps>, index) => {
            const withoutTooltipProp: boolean | undefined =
                isValidElement(child) && child?.props.withoutTooltip === undefined
                    ? withoutTooltip
                    : child?.props.withoutTooltip;

            return React.cloneElement(child as React.ReactElement, {
                key: index,
                size,
                first: index === 0,
                noHomeButton: noHomeButton,
                preLast: index === arr.length - 2,
                last: arr.length > 1 && index === arr.length - 1,
                withoutTooltip: withoutTooltipProp,
                'data-testid': testId?.page?.(index.toString()),
            });
        });
    }, [children, size, onClickHome, l10n, withoutTooltip]);

    return <Box {...attrs}>{constructChildren()}</Box>;
};

Breadcrumbs.Option = Option;
Breadcrumbs.displayName = 'Breadcrumbs';
