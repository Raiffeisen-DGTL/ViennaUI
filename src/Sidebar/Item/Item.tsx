import React, { FC, MouseEvent, ReactNode } from 'react';
import { Box, PropsBox, Icon, Title, Notification, Ripple } from './Item.styles';
import { useRipple } from './useRipple';
import { BoxStyled } from '../../Utils/styled';

export interface ItemProps extends BoxStyled<typeof Box, PropsBox> {
    design?: string;
    active?: boolean;
    icon?: ReactNode;
    notification?: ReactNode;
    ripple?: boolean;
    hasIcon?: boolean;
}

export const Item: FC<ItemProps> = (props) => {
    const { icon, notification, children, ripple, onClick, hasIcon = Boolean(icon), active, ...attrs } = props;

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
        <Box {...(attrs as {})} $active={active} $hasIcon={hasIcon} onClick={handleClick}>
            {icon && <Icon>{icon}</Icon>}
            {children && <Title>{children}</Title>}
            {notification && <Notification>{notification}</Notification>}
            {ripple && <Ripple style={rippleStyles} />}
        </Box>
    );
};
