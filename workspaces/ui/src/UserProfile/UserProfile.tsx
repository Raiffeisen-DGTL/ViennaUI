import React, { useState, useEffect, useCallback, HTMLAttributes } from 'react';
import { Man } from 'vienna.icons';
import Avatar from '../Avatar/Avatar';
import RoundIcon from '../RoundIcon/RoundIcon';
import DropList from '../DropList/DropList';
import { Props as ItemProps } from '../DropList/Item/Item';
import Link from './Link/Link';
import { Box, Profile, Name, Description } from './UserProfile.styles';

export interface UserProfileProps extends Omit<HTMLAttributes<HTMLAnchorElement>, 'size'> {
    [key: string]: any;
    children?: React.ReactNode;
    size?: 'xs' | 's' | 'm';
    name?: string;
    description?: string;
    photo?: string;
    to?: string;
    align?: 'left' | 'right';
}

export const UserProfile: React.FC<UserProfileProps> & { Item: React.FC<ItemProps> } = (props): JSX.Element => {
    const { children, name, description, photo, to, size = 'm', align = 'left', rel, target, ...attrs } = props;

    const [isOpen, setOpen] = useState(false);

    const close = useCallback(() => {
        setTimeout(() => setOpen(false));
        document.removeEventListener('click', close);
    }, [setOpen]);

    const open = useCallback(() => {
        setOpen((prevIsOpen) => !prevIsOpen);
        document.addEventListener('click', close);
    }, [setOpen, close]);

    const handleClickDropdown = useCallback(
        (event) => {
            event.stopPropagation();
            open();
        },
        [open]
    );

    const handleEnterKeyPress = useCallback(
        (event) => {
            event.stopPropagation();
            if (event.key === 'Enter') {
                open();
            }
        },
        [open]
    );

    useEffect(() => {
        return () => {
            document.body.removeEventListener('click', close);
        };
    }, [close]);

    const component = (
        <Box
            {...attrs}
            position={align}
            onClick={to ? undefined : handleClickDropdown}
            onKeyPress={to ? undefined : handleEnterKeyPress}>
            <Avatar src={photo} size={size} title={name} valign='top'>
                <RoundIcon color={photo ? 'seattle10' : 'dubai10'}>{name ? name[0] : <Man />}</RoundIcon>
            </Avatar>

            {name && (
                <Profile position={align}>
                    <Name size={size}>{name}</Name>
                    <Description size={size}>{description}</Description>
                </Profile>
            )}

            {isOpen && <DropList float={align === 'right' ? 'end' : 'start'}>{children}</DropList>}
        </Box>
    );

    if (to) {
        return (
            <Link href={to} rel={rel} target={target}>
                {component}
            </Link>
        );
    }

    return component;
};

UserProfile.Item = DropList.Item;
UserProfile.defaultProps = {
    size: 'm',
    align: 'left',
    tabIndex: 0,
    role: 'button',
};

UserProfile.displayName = 'UserProfile';
export default UserProfile;
