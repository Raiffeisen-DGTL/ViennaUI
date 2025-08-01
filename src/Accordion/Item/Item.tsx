import React, { forwardRef, CSSProperties } from 'react';
import { SelectHideIcon, SelectOpenDownIcon } from 'vienna.icons';
import { useControlState } from 'vienna.react-use';
import { ItemWrapper } from '../Accordion.styles';
import { Header, Content, IconBox, TextBox, PropsHeader, ContentTextWrapper } from './Item.styles';
import { BoxStyled } from '../../Utils/styled';
import { Collapse } from '../../Collapse';
import { WrapperProps } from '../../Collapse/Wrapper';

export const defaultAccordionItemTestId: ItemProps['testId'] = {
    header: 'accordion-item_header',
    content: 'accordion-item_content',
};

export interface ItemProps extends BoxStyled<typeof Header, PropsHeader> {
    /** Компонент неактивен если true */
    disabled?: WrapperProps['disabled'];
    /** Управление состоянием */
    open?: WrapperProps['open'];
    width?: PropsHeader['$width'];
    initiallyOpen?: boolean;
    /** Заголовок */
    header: WrapperProps['header'];
    /**  Контент */
    children: WrapperProps['children'];
    iconSize?: 's' | 'm' | 'l';
    headerClassName?: string;
    headerStyle?: CSSProperties;
    contentClassName?: string;
    contentStyle?: CSSProperties;
    /** Компонент всегда развернут, если false */
    collapsible?: WrapperProps['collapsible'];
    hideByStyles?: WrapperProps['hideByStyles'];
    onOpenChange?: WrapperProps['onOpenChange'];
    flexDirection?: 'row' | 'column';
    testId?: {
        header?: string;
        content?: string;
    };
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
            hideByStyles,
            headerClassName,
            headerStyle,
            contentClassName,
            contentStyle,
            flexDirection = 'row',
            testId = defaultAccordionItemTestId,
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
        const icon = open ? <SelectHideIcon size={iconSize} /> : <SelectOpenDownIcon size={iconSize} />;

        return (
            <ItemWrapper {...attrs} ref={ref}>
                <Collapse.Wrapper
                    header={
                        <Header
                            role='header'
                            open={open}
                            $open={open}
                            $disabled={disabled}
                            $width={width}
                            className={headerClassName}
                            // eslint-disable-next-line react/forbid-component-props
                            style={headerStyle}
                            data-testid={testId?.header}>
                            <TextBox>{header}</TextBox>
                            <IconBox> {icon}</IconBox>
                        </Header>
                    }
                    disabled={disabled}
                    collapsible={collapsible}
                    open={open}
                    hideByStyles={hideByStyles}
                    onOpenChange={setOpen}>
                    <Content
                        role='content'
                        className={contentClassName}
                        style={contentStyle}
                        data-testid={testId?.content}
                        $flexDirection={flexDirection}>
                        {typeof children === 'string' ? <ContentTextWrapper>{children}</ContentTextWrapper> : children}
                    </Content>
                </Collapse.Wrapper>
            </ItemWrapper>
        );
    }
);

Item.displayName = 'Item';
