import React, { CSSProperties, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { Cross16Icon } from 'vienna.icons';
import { Message, Header, Content, PropsPopover, CloseIconContainer, Arrow, BlockWithArrow } from './Popover.styles';
import { BoxStyled } from '../Utils/styled';
import { RendererPopupProps } from '../Floating';
import { Flex } from '../Flex';
import { getOppositePlacement, PlacementType } from '@/Utils';

export const defaultPopoverPopupTestId: PopoverTestId = {
    closeIcon: 'popover-popup_close-icon', // 'popover-close-icon'
};

export interface PopoverTestId {
    closeIcon?: string;
}

export interface PopoverPopupProps extends Omit<BoxStyled<typeof Message, PropsPopover>, 'ref'> {
    refArrow?: RendererPopupProps['attributes']['setArrowEl'];
    anchor?: PlacementType<'left' | 'right' | 'top' | 'bottom' | 'auto'>;
    arrowX?: number;
    arrowY?: number;
    design?: 'dark' | 'light';
    header?: ReactNode | string;
    placement?: PlacementType;
    /** Ширина элемента (250px по умолчанию) */
    width?: PropsPopover['$width'];
    height?: number;
    size?: Required<PropsPopover>['$size'];
    /** Отключает иконку закрытия */
    noClose?: boolean;
    /* Обработчик закрытия элемента */
    onClose?: () => void;
    headerClassName?: string;
    headerStyle?: CSSProperties;
    contentClassName?: string;
    contentStyle?: CSSProperties;
    showPopoverWithArrow?: boolean;
    testId?: PopoverTestId;
}

export const PopoverPopup = forwardRef<HTMLDivElement, PropsWithChildren<PopoverPopupProps>>(
    (
        {
            design = 'light',
            header,
            width,
            height,
            size = 's',
            noClose,
            onClose,
            children,
            headerStyle,
            headerClassName,
            contentClassName,
            contentStyle,
            placement,
            refArrow,
            arrowX,
            arrowY,
            showPopoverWithArrow,
            testId = defaultPopoverPopupTestId,
            ...attrs
        },
        ref
    ) => {
        const arrowPlacement = getOppositePlacement(placement);

        const PopoverCloseIcon = ({
            size,
            onClose,
            design,
        }: Pick<PopoverPopupProps, 'size' | 'onClose' | 'design'>) => {
            return (
                <CloseIconContainer $design={design}>
                    <Cross16Icon size={size === 's' ? 16 : 20} data-testid={testId?.closeIcon} onClick={onClose} />
                </CloseIconContainer>
            );
        };

        return (
            <Message
                ref={ref}
                $active
                $toggle
                $design={design}
                $width={width}
                $height={height}
                $showPopoverWithArrow={showPopoverWithArrow}
                $arrow={showPopoverWithArrow ? arrowPlacement : undefined}
                $placement={placement ? (placement.split('-')[0] as PropsPopover['$placement']) : undefined}
                {...attrs}>
                {header && (
                    <Header className={headerClassName} $size={size} style={headerStyle}>
                        <Flex>
                            <Flex.Item grow={'1'}>{header}</Flex.Item>
                            {!noClose && (
                                <Flex.Item>
                                    <PopoverCloseIcon size={size} design={design} onClose={onClose} />
                                </Flex.Item>
                            )}
                        </Flex>
                    </Header>
                )}
                <Flex>
                    <Flex.Item grow='1'>
                        <Content className={contentClassName} style={contentStyle}>
                            {children}
                        </Content>
                    </Flex.Item>
                    {!header && !noClose && (
                        <Flex.Item>
                            <PopoverCloseIcon size={size} design={design} onClose={onClose} />
                        </Flex.Item>
                    )}
                </Flex>
                {showPopoverWithArrow && (
                    <BlockWithArrow $offsetX={arrowX} $offsetY={arrowY} $placement={arrowPlacement} ref={refArrow}>
                        <Arrow $design={design} />
                    </BlockWithArrow>
                )}
            </Message>
        );
    }
);
