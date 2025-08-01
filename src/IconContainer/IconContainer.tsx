import React, { cloneElement, JSXElementConstructor } from 'react';
import { IconProps } from 'vienna.icons/dist/create-icon';
import { Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';
import { Spinner } from '../Spinner';
import { SizeType } from '../Utils';
import { Box, IconContainerSize, PropsBox } from './IconContainer.styles';

export type { IconContainerType, IconContainerSize } from './IconContainer.styles';

export interface IconContainerProps<B = Breakpoints> extends BoxStyled<typeof Box, PropsBox> {
    type?: PropsBox<B>['$type'];
    size?: PropsBox<B>['$size'];
    color?: PropsBox<B>['$color'];
    disabled?: PropsBox<B>['$disabled'];
    loading?: PropsBox<B>['$loading'];
    clickable?: PropsBox<B>['$clickable'];
}

const iconSizeMap: Record<IconContainerSize, SizeType> = {
    xs: 'xs',
    s: 's',
    m: 'm',
    l: 'm',
    xl: 'l',
    xxl: 'l',
};

export function IconContainer<B = void>(props: IconContainerProps<B extends void ? Breakpoints : B>) {
    const {
        children,
        type = 'circle',
        size = 'm',
        color = 'seattle10',
        disabled,
        loading,
        clickable,
        ...attrs
    } = props;
    const isClickable = Boolean(props.onClick) || clickable;

    const hasImage: boolean = React.isValidElement(children) ? children.type === 'img' : false;
    const disabledImage = disabled && hasImage;

    let content = loading ? <Spinner size={size} /> : children;

    const formattedIconComponent = children as React.ReactComponentElement<JSXElementConstructor<IconProps>>;
    if (formattedIconComponent && formattedIconComponent?.type?.name === 'IconComponent' && !loading) {
        content = cloneElement(formattedIconComponent, {
            size: iconSizeMap[size as IconContainerSize],
            ...formattedIconComponent.props,
        });
    }

    return (
        <Box
            {...attrs}
            $type={type}
            $color={color}
            $size={size}
            $disabled={disabled}
            $disabledImage={disabledImage}
            $loading={loading}
            $clickable={isClickable}>
            {content}
        </Box>
    );
}

IconContainer.displayName = 'IconContainer';
