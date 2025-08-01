import React, { forwardRef, ReactNode, Ref, CSSProperties, HTMLAttributes } from 'react';
import { Box, Arrow, Block, PropsBox } from './TooltipNative/TolltipNative.styles';
import { FloatingPlacement, RendererPopupProps } from '../Floating';
import { getOppositePlacement } from '@/Utils';

export interface BaseTooltipPopupProps {
    refArrow?: RendererPopupProps['attributes']['setArrowEl'];
    size?: 's' | 'm';
    anchor?: 'left' | 'right' | 'top' | 'bottom' | 'auto';
    placement?: FloatingPlacement;
    arrowX?: number;
    arrowY?: number;
    width?: string | number;
    allowInteraction?: boolean;
    /** Цветовая схема */
    design?: 'light' | 'dark' | 'warning' | 'critical' | 'success';
    disabled?: boolean;
    style?: CSSProperties;
    children: ReactNode;
}

export type TooltipPopupProps = HTMLAttributes<HTMLDivElement> & BaseTooltipPopupProps;

export const TooltipPopup: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<TooltipPopupProps> & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, TooltipPopupProps>((props: TooltipPopupProps, ref: Ref<HTMLDivElement>) => {
    const { refArrow, arrowX, arrowY, size = 's', design = 'light', width, placement, children, ...attrs } = props;
    const arrowPlacement = getOppositePlacement(placement);

    return (
        <Box
            ref={ref}
            $design={design}
            $size={size}
            $width={width}
            $show
            $placement={placement ? (placement.split('-')[0] as PropsBox['$placement']) : undefined}
            $arrow={arrowPlacement}
            {...attrs}>
            {children}
            <Block
                $offsetX={arrowX}
                $offsetY={arrowY}
                $placement={arrowPlacement}
                ref={(el) => refArrow?.(el ?? undefined)}>
                <Arrow $design={design} />
            </Block>
        </Box>
    );
});

export default TooltipPopup;
