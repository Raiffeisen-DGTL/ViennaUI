import React from 'react';
import { Box, Icon, Title, Notification, Ripple } from './Item.styles';
import { useRipple } from './useRipple';

interface Props {
    id?: string;
    design?: string;
    active?: boolean;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    notification?: React.ReactNode;
    onClick?: any;
    ripple?: boolean;
    disabled?: boolean;
}

interface HTMLAttributeProps {
    id?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
    tabIndex?: number;
}

export type ItemProps = HTMLAttributeProps & Props;

export const Item = (props: ItemProps) => {
    const { icon, notification, children, ripple, disabled = false, onClick, ...attrs } = props;

    const [rippleStyles, rippleOnClick] = useRipple();
    const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        if (ripple) {
            rippleOnClick(e);
        }
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };

    return (
        <Box disabled={disabled} hasIcon={Boolean(icon)} onClick={handleClick} {...attrs}>
            {icon && <Icon>{icon}</Icon>}
            {children && <Title>{children}</Title>}
            {notification && <Notification>{notification}</Notification>}
            {ripple && <Ripple style={rippleStyles} />}
        </Box>
    );
};

export default Item;
