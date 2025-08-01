import React, { FC, MouseEvent, ReactNode } from 'react';
import { Box, PropsBox, Icon, Title, Notification, Ripple } from './Item.styles';
import { useRipple } from './useRipple';
import { BoxStyled } from '../../Utils/styled';
import { Design } from '../Sidebar';

export const deprecated_defaultSidebarItemTestId: ItemProps['testId'] = {
    container: 'sidebar-item_container',
};

export interface ItemProps extends BoxStyled<typeof Box, PropsBox> {
    design?: Design;
    active?: boolean;
    icon?: ReactNode;
    notification?: ReactNode;
    ripple?: boolean;
    hasIcon?: boolean;
    disabled?: boolean;
    testId?: {
        container?: string;
    };
}

export const Item: FC<ItemProps> = (props) => {
    const {
        icon,
        design,
        notification,
        children,
        ripple,
        onClick,
        hasIcon = Boolean(icon),
        active,
        disabled,
        testId = deprecated_defaultSidebarItemTestId,
        ...attrs
    } = props;

    const [rippleStyles, rippleOnClick] = useRipple();
    const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
        if (ripple) {
            rippleOnClick(e);
        }
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };

    return (
        <Box
            data-testid={testId?.container}
            {...attrs}
            $design={design}
            $active={active}
            $disabled={disabled}
            $hasIcon={hasIcon}
            onClick={handleClick}>
            {icon && <Icon>{icon}</Icon>}
            {children && <Title>{children}</Title>}
            {notification && <Notification>{notification}</Notification>}
            {ripple && <Ripple style={rippleStyles} />}
        </Box>
    );
};

Item.displayName = 'Item';
