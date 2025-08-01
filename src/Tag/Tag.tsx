import React, { forwardRef, KeyboardEvent, MouseEvent, PropsWithChildren, ForwardedRef } from 'react';
import { Cross16Icon } from 'vienna.icons';
import { Box, Text, Cross, Group, type BoxStyledProps, type GroupStyledProps } from './Tag.styles';
import { BoxStyled } from '../Utils/styled';
import { Breakpoints } from '../Utils/responsiveness';

export interface TagProps<B = Breakpoints>
    extends Omit<BoxStyled<typeof Box, BoxStyledProps>, 'ref'>,
        PropsWithChildren {
    design?: BoxStyledProps['$design'];
    size?: BoxStyledProps<B>['$size'];
    disabled?: BoxStyledProps['$disabled'];
    maxWidth?: BoxStyledProps['$maxWidth'];
    disabledTabIndex?: boolean;
    disableTitle?: boolean;
    onClick?: () => void;
    onDelete?: (event: MouseEvent<HTMLButtonElement>) => void;
    onCrossMouseDown?: () => void;
}

export interface TagGroupProps {
    offset?: GroupStyledProps['$offset'];
    nowrap?: GroupStyledProps['$nowrap'];
    fitContent?: GroupStyledProps['$fitContent'];
}

const TagGroup = forwardRef<HTMLDivElement, PropsWithChildren<TagGroupProps>>(
    ({ offset = 10, nowrap, fitContent, children }, ref) => (
        <Group ref={ref} $offset={offset} $nowrap={nowrap} $fitContent={fitContent}>
            {children}
        </Group>
    )
);

const TagInternal = <B,>(props: TagProps<B>, ref: ForwardedRef<HTMLSpanElement>) => {
    const {
        design = 'gray',
        size = 'l',
        disabled = false,
        maxWidth,
        disabledTabIndex = false,
        disableTitle = false,
        children,
        onClick,
        onCrossMouseDown,
        onDelete,
        ...attrs
    } = props;
    const crossSize = 16;

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        !disabled && onClick && onClick();
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
        switch (event.key) {
            case ' ':
            case 'Enter':
                !disabled && onClick && onClick();
        }
    };

    const handleCrossClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        !disabled && onDelete && onDelete(event);
    };

    const handleCrossKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        event.stopPropagation();
    };

    return (
        <Box
            ref={ref}
            $design={design}
            $size={size}
            $disabled={disabled}
            $maxWidth={maxWidth}
            tabIndex={disabledTabIndex ? undefined : 1}
            title={!disableTitle ? children : undefined}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            {...attrs}>
            <Text>{children}</Text>
            <Cross
                tabIndex={disabledTabIndex ? undefined : 1}
                $design={design}
                $disabled={disabled}
                onClick={handleCrossClick}
                onMouseDown={onCrossMouseDown}
                onKeyDown={handleCrossKeyDown}>
                <Cross16Icon size={crossSize} />
            </Cross>
        </Box>
    );
};

export const Tag = forwardRef(TagInternal) as unknown as (<B>(
    props: TagProps<B> & React.RefAttributes<HTMLSpanElement>
) => ReturnType<typeof TagInternal>) & {
    Group: typeof TagGroup;
    displayName?: string;
};

Tag.Group = TagGroup;
Tag.displayName = 'Tag';
