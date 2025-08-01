import React, { FC, useState, useCallback, useEffect } from 'react';
import { MoreVertIcon } from 'vienna.icons';
import { Icon, WrapperIcon } from './ActionIcon.styles';
import { useTableConfig } from '../Context';
import { Tooltip } from '../../../Tooltip';
import { Spinner } from '../../../Spinner';
import { TableSize } from '../../types';
import { ComponentWrapper, SizeType } from '../../../Utils';
import { IconContainerProps } from '../../../IconContainer';
import { Popover } from '../../../Popover';
import { ThemeProvider } from 'styled-components';

// Matching the table size to icon size.
const sizes: Record<string, SizeType<'xs' | 's'>> = {
    xs: 'xs',
    s: 'xs',
    m: 's',
    l: 's',
};

export interface ActionIconProps extends IconContainerProps {
    children: React.ReactNode;
    isAlwaysVisible?: boolean;
    disabled?: boolean;
    tooltipTextForDisabled?: string;
    loading?: boolean;
}

export const ActionIcon: FC<ActionIconProps> = (props) => {
    const {
        children,
        isAlwaysVisible = false,
        disabled,
        tooltipTextForDisabled = 'Это действие недоступно',
        color,
        loading,
        ...attrs
    } = props;
    const { base } = useTableConfig();
    const size = base?.settings?.size;

    return (
        <ComponentWrapper
            component={disabled ? Tooltip : undefined}
            props={{
                design: 'dark',
                placement: 'left',
                content: tooltipTextForDisabled,
                width: 181,
                action: 'hover',
                children: tooltipTextForDisabled,
            }}>
            <WrapperIcon $disabled={disabled}>
                <Icon
                    size={sizes[size]}
                    $visible={isAlwaysVisible}
                    $disabled={disabled}
                    $loading={loading}
                    color={color}
                    {...attrs}>
                    {!disabled && loading ? <Spinner size='xs' color='seattle60' /> : children}
                </Icon>
            </WrapperIcon>
        </ComponentWrapper>
    );
};

export const ActionsListIcon: FC<ActionIconProps> = (props) => {
    const {
        children,
        onClick,
        isAlwaysVisible = false,
        disabled,
        color,
        tooltipTextForDisabled = 'Это действие недоступно',
        loading,
        ...attrs
    } = props;
    const { base } = useTableConfig();
    const size: TableSize | undefined = base?.settings?.size;

    const [isOpen, setOpen] = useState(false);
    const [isHovered, setHovered] = useState(false);

    const close = useCallback(() => {
        setOpen(false);
        document.removeEventListener('click', close);
    }, []);

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
            setOpen(!isOpen);
            document.addEventListener('click', close, { once: true });

            if (typeof onClick === 'function') {
                onClick(e);
            }
        },
        [isOpen, close, onClick]
    );

    useEffect(() => {
        return () => {
            document.removeEventListener('click', close);
        };
    }, [close]);

    const theme = {
        popover: {
            message: {
                base: {
                    'z-index': '1000',
                },
            },
        },
    };

    return (
        <ComponentWrapper
            component={disabled ? Tooltip : undefined}
            props={{
                design: 'dark',
                placement: 'left',
                content: tooltipTextForDisabled,
                width: 181,
                action: 'hover',
                children: tooltipTextForDisabled,
            }}>
            <ThemeProvider theme={theme}>
                <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <Popover<HTMLDivElement>
                        action='click'
                        placement='right-start'
                        content={isHovered && isOpen && children}
                        width={0}
                        noClose>
                        {(ref) => (
                            <WrapperIcon ref={ref} $disabled={disabled}>
                                <Icon
                                    size={sizes[size]}
                                    $visible={isAlwaysVisible}
                                    $disabled={disabled}
                                    $loading={loading}
                                    color={color}
                                    onClick={handleClick}
                                    {...attrs}>
                                    {loading ? (
                                        <Spinner size='xs' color='seattle60' />
                                    ) : (
                                        <MoreVertIcon size={sizes[size]} />
                                    )}
                                </Icon>
                            </WrapperIcon>
                        )}
                    </Popover>
                </div>
            </ThemeProvider>
        </ComponentWrapper>
    );
};
