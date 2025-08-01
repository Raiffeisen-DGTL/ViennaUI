import React, { useState, useEffect, useCallback, ComponentProps } from 'react';
import { ManPersonIcon } from 'vienna.icons';
import { DropList } from '../DropList/DropList';
import { Link } from './Link/Link';
import { Box, Profile, Name, Description, Size, PropsBox } from './UserProfile.styles';
import { Breakpoints } from '../Utils/responsiveness';
import { ItemProps } from '../DropList/Item/Item';
import { BoxStyled } from '../Utils/styled';
import { IconContainer } from '../IconContainer';

export interface UserProfileProps<B = Breakpoints>
    extends BoxStyled<typeof Box, PropsBox>,
        Pick<ComponentProps<typeof Link>, 'rel' | 'target'> {
    size?: Size<B>['$size'];
    name?: string;
    description?: string;
    photo?: string;
    to?: string;
    align?: 'left' | 'right';
}

export function UserProfile<B = void>(
    props: UserProfileProps<B extends void ? Breakpoints : B> & { Item?: React.FC<ItemProps> }
) {
    const {
        children,
        name,
        description,
        photo,
        to,
        size = 'm',
        align = 'left',
        rel,
        target,
        tabIndex = 0,
        role = 'button',
        ...attrs
    } = props;

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
        (event: React.MouseEvent) => {
            event.stopPropagation();
            open();
        },
        [open]
    );

    const handleEnterKeyPress = useCallback(
        (event: React.KeyboardEvent) => {
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

    const withoutHover = !children && !to;

    const component = (
        <Box
            {...attrs}
            tabIndex={tabIndex}
            role={role}
            $position={align}
            $noHover={withoutHover}
            onClick={to ? undefined : handleClickDropdown}
            onKeyPress={to ? undefined : handleEnterKeyPress}>
            <IconContainer color={photo ? 'seattle10' : 'dubai10'} size={size} title={name}>
                {photo ? <img src={photo} alt='Аватар' /> : name ? name[0] : <ManPersonIcon />}
            </IconContainer>

            {name && (
                <Profile $position={align}>
                    <Name $size={size}>{name}</Name>
                    <Description $size={size}>{description}</Description>
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
}

UserProfile.displayName = 'UserProfile';
UserProfile.Item = DropList.Item;
