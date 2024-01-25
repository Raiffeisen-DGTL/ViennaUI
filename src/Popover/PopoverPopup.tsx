import React, { CSSProperties, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { CloseCancelX } from '@fcc/icons';
import { Message, Header, Content, CloseIcon, PropsMessage } from './Popover.styles';
import { BoxStyled } from '../Utils/styled';

export interface PopoverPopupProps extends BoxStyled<typeof Message, PropsMessage> {
    design?: 'dark' | 'light';
    header?: ReactNode | string;
    /** Ширина элемента (250px по умолчанию) */
    width?: number;
    /** Отключает иконку закрытия */
    noClose?: boolean;
    /* Обработчик закрытия элемента */
    onClose?: () => void;
    headerClassName?: string;
    headerStyle?: CSSProperties;
    contentClassName?: string;
    contentStyle?: CSSProperties;
}

export const PopoverPopup = forwardRef<HTMLDivElement, PropsWithChildren<PopoverPopupProps>>(
    (
        {
            design = 'light',
            header,
            width,
            noClose,
            onClose,
            children,
            headerStyle,
            headerClassName,
            contentClassName,
            contentStyle,
            ...attrs
        },
        ref
    ) => {
        return (
            <Message ref={ref} $active $toggle $design={design} $width={width} {...(attrs as {})}>
                {!noClose && (
                    <CloseIcon>
                        <CloseCancelX size='s' onClick={onClose} />
                    </CloseIcon>
                )}
                {header && (
                    <Header className={headerClassName} style={headerStyle}>
                        {header}
                    </Header>
                )}
                <Content className={contentClassName} style={contentStyle}>
                    {children}
                </Content>
            </Message>
        );
    }
);
