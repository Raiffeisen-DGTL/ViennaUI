import React, { useState, useCallback, MouseEvent, ReactNode, forwardRef, ComponentProps, useEffect } from 'react';
import { UpChevronIcon, DownChevronIcon } from 'vienna.icons';
import { OpBox, StyledItem } from './Operation.styles';
import { Button } from '../../Button';
import { DropList } from '../../DropList';
import { Spinner } from '../../Spinner';
import { Flex } from '../../Flex';

export type ClickEvent = (data: { id?: string; name?: string }, event: MouseEvent<HTMLDivElement>) => void;
export interface Props extends Omit<ComponentProps<typeof Button>, 'design' | 'onClick'> {
    id?: string;
    name?: string;
    icon?: ReactNode;
    label?: ReactNode;
    design?: 'light' | 'dark';
    onClick?: ClickEvent;
    enableArrowIcons?: boolean;
    asSubOperation?: boolean;
    hideEllipsis?: boolean;
    /** Компонент скрыт если false */
    visible?: boolean;
    /** Компонент неактивен, если disabled или loading true */
    disabled?: boolean;
    loading?: boolean;
    isFixed?: boolean;
}

export const Operation = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const {
        id,
        name,
        icon,
        label,
        children,
        asSubOperation,
        design,
        hideEllipsis = false,
        visible = true,
        loading = false,
        disabled = false,
        enableArrowIcons = false,
        isFixed,
        onClick,
        ...attrs
    } = props;
    const [open, setOpen] = useState(false);

    const isGlobalDisabled = loading || disabled;
    const CurrentIcon = loading ? (
        <Flex>
            <Spinner color={design === 'light' ? 'london120' : 'white'} />
        </Flex>
    ) : (
        icon
    );

    useEffect(() => {
        if (isGlobalDisabled) {
            setOpen(false);
        }
    }, [isGlobalDisabled]);

    const handleEnter = useCallback(() => {
        if (!isGlobalDisabled) {
            setOpen(true);
        }
    }, [isGlobalDisabled]);

    const handleLeave = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const handleClick = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
            if (!isGlobalDisabled) {
                setOpen(!open);
                if (typeof onClick === 'function') {
                    onClick({ id, name }, e);
                }
            }
        },
        [open, onClick, isGlobalDisabled, id, name]
    );

    if (!visible) {
        return null;
    }

    const renderEllipsisIcon = () => {
        const isChildren = Boolean(children);

        if (!enableArrowIcons && !hideEllipsis && isChildren) {
            return '...';
        }

        if (!hideEllipsis && isChildren) {
            return open ? <UpChevronIcon /> : <DownChevronIcon />;
        }

        return null;
    };
    return (
        <OpBox
            ref={ref}
            $design={design}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onClick={handleClick}
            $disabled={isGlobalDisabled}>
            <Button design={design === 'dark' ? 'ghost-white' : 'ghost'} disabled={isGlobalDisabled} {...attrs}>
                {CurrentIcon}
                {label}
                {renderEllipsisIcon()}
            </Button>
            {open && children && (
                <DropList
                    align={asSubOperation ? 'horizontal' : 'vertical'}
                    float={'end'}
                    fixed={isFixed}
                    scrollable={false}
                    margins={asSubOperation ? { x: 0, y: -8 } : { x: 0, y: 0 }}>
                    {React.Children.toArray(children)
                        .filter(Boolean)
                        .map((child, idx) => (
                            <StyledItem key={idx}>{child}</StyledItem>
                        ))}
                </DropList>
            )}
        </OpBox>
    );
});

Operation.displayName = 'Toolbar.Operation';
