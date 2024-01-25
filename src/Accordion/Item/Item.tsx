import React, { useCallback, ReactNode, forwardRef, CSSProperties } from 'react';
import { SelectHide, SelectOpenDown } from 'vienna.icons';
import { useControlState } from 'vienna.react-use';
import { ItemWrapper } from '../Accordion.styles';
import { Header, Content, IconBox, TextBox, PropsHeader } from './Item.styles';
import { BoxStyled } from '../../Utils/styled';

export interface ItemProps extends BoxStyled<typeof Header, PropsHeader> {
    /** Компонент неактивен если true */
    disabled?: PropsHeader['$disabled'];
    /** Управление состоянием */
    open?: PropsHeader['$open'];
    width?: PropsHeader['$width'];
    /** Заголовок */
    header: ReactNode;
    /**  Контент */
    children: ReactNode;
    iconSize?: 's' | 'm' | 'l';
    /** Открыт/закрыт аккордеон изначально */
    initiallyOpen?: boolean;
    /** Компонент всегда развернут, если false */
    collapsible?: boolean;
    headerClassName?: string;
    headerStyle?: CSSProperties;
    contentClassName?: string;
    contentStyle?: CSSProperties;
    onOpenChange?: (open: boolean) => void;
}

export const Item = forwardRef<HTMLDivElement, ItemProps>(
    (
        {
            header,
            children,
            disabled,
            initiallyOpen = false,
            collapsible = true,
            open: openProp,
            width,
            iconSize,
            headerClassName,
            headerStyle,
            contentClassName,
            contentStyle,
            onOpenChange,
            ...attrs
        },
        ref
    ) => {
        const [open, setOpen] = useControlState({
            value: openProp,
            defaultValue: initiallyOpen,
            defaultStateValue: initiallyOpen,
            onChange: onOpenChange,
        });

        const toggleOpen = useCallback(() => setOpen(!open), [open, setOpen]);
        const icon = open ? <SelectHide size={iconSize} /> : <SelectOpenDown size={iconSize} />;

        return (
            <ItemWrapper {...(attrs as {})} ref={ref}>
                <Header
                    role='header'
                    $open={open}
                    $disabled={disabled}
                    $width={width}
                    className={headerClassName}
                    // eslint-disable-next-line react/forbid-component-props
                    style={headerStyle}
                    onClick={!disabled && collapsible ? toggleOpen : undefined}>
                    <TextBox>{header}</TextBox>
                    <IconBox> {icon}</IconBox>
                </Header>
                {open && (
                    // eslint-disable-next-line react/forbid-component-props
                    <Content role='content' className={contentClassName} style={contentStyle}>
                        {children}
                    </Content>
                )}
            </ItemWrapper>
        );
    }
);

Item.displayName = 'Item';
