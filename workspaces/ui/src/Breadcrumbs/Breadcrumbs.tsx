import React, { useCallback } from 'react';
import { Home, Back } from 'vienna.icons';
import { useLocalization } from '../Localization';
import { Box, BackIcon } from './Breadcrumbs.styles';
import { Option, BreadcumbsOptionProps } from './Option';
import { BreadcrumbsLocalizationProps, defaultBreadcrumbsLocalization } from './localization';

export interface BreadcrumbsProps extends BreadcrumbsLocalizationProps {
    size?: 's' | 'm' | 'l';

    noHomeButton?: boolean;
    noBackButton?: boolean;

    onClickHome?: (e, data: { value: any }) => void;
}
export const Breadcrumbs: React.FC<BreadcrumbsProps> & { Option: React.FC<BreadcumbsOptionProps> } = (
    props: React.PropsWithChildren<BreadcrumbsProps>
) => {
    const { children, onClickHome, noHomeButton, noBackButton, size = 'm', ...args } = props;

    const localization = useLocalization(props, defaultBreadcrumbsLocalization);

    const constructChildren = useCallback(() => {
        const arr = React.Children.toArray(children);

        /*
        Если больше одного шага и noHomeButton === false то добавляем шаг "Домой"
        Если только один шаг и noBackButton === false то меняем его на кнопку "Вернуться к ..."
        */

        if (arr.length > 1 && !noHomeButton) {
            arr.unshift(
                <Option aria-label='home' key={0} first size={size} value='home' onClick={onClickHome}>
                    <Home size={size} />
                </Option>
            );
        }

        if (arr.length === 1 && !noBackButton) {
            const backTo = `${localization('ds.breadcrumbs.backTo')} ${(arr[0] as any).props.children}`;
            arr[0] = React.createElement(
                Option,
                {
                    size,
                    first: true,
                    ...(arr[0] as any).props,
                },
                [
                    <BackIcon key={0}>
                        <Back size={size} />
                    </BackIcon>,
                    <span key={1}>{backTo}</span>,
                ]
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
    }, [children, size, onClickHome, localization]);

    return <Box {...args}>{constructChildren()}</Box>;
};

Breadcrumbs.Option = Option;
Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
