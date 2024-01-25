import React, { FC, useState, useCallback, useEffect, ComponentProps } from 'react';
import { MoreVert } from '@fcc/icons';
import { Icon } from './ActionIcon.styles';
import { useTableConfig } from '../Context/TableContext';

// Matching the table size to icon size.
const sizes = {
    xs: 'xs',
    s: 'xs',
    m: 's',
    l: 's',
};

export type ActionIconProps = ComponentProps<typeof Icon>;

export const ActionIcon: FC<ActionIconProps> = (props) => {
    const { children, ...attrs } = props;
    const { base } = useTableConfig();
    const size: any = base?.settings?.size;

    return (
        <Icon size={sizes[size]} {...attrs}>
            {children}
        </Icon>
    );
};

export const ActionsListIcon: FC<ActionIconProps> = (props) => {
    const { children, onClick, ...attrs } = props;
    const { base } = useTableConfig();
    const size: any = base?.settings?.size;

    const [isOpen, open] = useState(false);

    const close = useCallback(() => {
        setTimeout(() => open(false));
        document.removeEventListener('click', close);
    }, [open]);

    const handleClick = useCallback(
        (e) => {
            e.stopPropagation();
            open(!isOpen);
            document.addEventListener('click', close);

            if (typeof onClick === 'function') {
                onClick(e);
            }
        },
        [open, isOpen]
    );

    useEffect(() => {
        return () => {
            document.removeEventListener('click', close);
        };
    }, [open]);

    return (
        <Icon size={sizes[size]} onClick={handleClick} {...attrs}>
            <MoreVert size={sizes[size]} />
            {isOpen && children}
        </Icon>
    );
};
