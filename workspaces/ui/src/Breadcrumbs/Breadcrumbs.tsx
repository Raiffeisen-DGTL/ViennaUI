import React, { useCallback } from 'react';
import { Home, LeftArrow } from 'vienna.icons';
import { Box, BackIcon } from './Breadcrumbs.styles';
import { Option, BreadcumbsOptionProps } from './Option';

export interface BreadcrumbsProps {
    size?: 's' | 'm' | 'l';

    onClickHome?: (e, data: { value: any }) => void;
}
export const Breadcrumbs: React.FC<BreadcrumbsProps> & { Option: React.FC<BreadcumbsOptionProps> } = (
    props: React.PropsWithChildren<BreadcrumbsProps>
) => {
    const { children, onClickHome, size = 'm', ...args } = props;

    const constructChildren = useCallback(() => {
        const arr = React.Children.toArray(children);

        /*
        Если больше одного шага то добавляем шаг "Домой"
        Если только один шаг то меняем его на кнопку "Вернуться к ..."
        */

        if (arr.length > 1) {
            arr.unshift(
                <Option key={0} first size={size} value='home' onClick={onClickHome}>
                    <Home size={size} />
                </Option>
            );
        }

        if (arr.length === 1) {
            arr[0] = React.createElement(
                Option,
                {
                    size,
                    first: true,
                    ...(arr[0] as any).props,
                },
                [
                    <BackIcon key={0}>
                        <LeftArrow size={size} />
                    </BackIcon>,
                    <span key={1}>Вернуться к {(arr[0] as any).props.children}</span>,
                ]
            );
        }

        return arr.map((child, index) =>
            React.cloneElement(child as any, {
                key: index,
                size,
                preLast: index === arr.length - 2,
                last: arr.length > 1 && index === arr.length - 1,
            })
        );
    }, [children, size, onClickHome]);

    return <Box {...args}>{constructChildren()}</Box>;
};

Breadcrumbs.Option = Option;
Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
