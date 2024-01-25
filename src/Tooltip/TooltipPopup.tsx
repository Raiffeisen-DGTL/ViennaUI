import React, { forwardRef, ReactNode, Ref, CSSProperties, HTMLAttributes } from 'react';
import { Box } from './TooltipNative/TolltipNative.styles';

export interface BaseTooltipPopupProps {
    size?: 's' | 'm';
    anchor?: 'left' | 'right' | 'top' | 'bottom' | 'auto';
    placement?: 'left' | 'right' | 'top' | 'bottom';
    width?: string | number;
    allowInteraction?: boolean;
    design?: 'light' | 'dark';
    disabled?: boolean;
    truncate?: boolean;
    inline?: boolean;
    style?: CSSProperties;
    children: ReactNode;
}

export type TooltipPopupProps = HTMLAttributes<HTMLDivElement> & BaseTooltipPopupProps;

const getOppositePlacement = (placement: BaseTooltipPopupProps['placement']): BaseTooltipPopupProps['placement'] => {
    switch (placement) {
        case 'top': {
            return 'bottom';
        }
        case 'bottom': {
            return 'top';
        }
        case 'left': {
            return 'right';
        }
        case 'right': {
            return 'left';
        }
        default: {
            return placement;
        }
    }
};

export const TooltipPopup: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<TooltipPopupProps> & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, TooltipPopupProps>((props: TooltipPopupProps, ref: Ref<HTMLDivElement>) => {
    const { size = 's', design = 'light', width, placement, ...attrs } = props;
    const arrowPlacement = getOppositePlacement(placement);
    return (
        <Box
            ref={ref}
            $design={design}
            $size={size}
            $width={width}
            $show
            $arrow={arrowPlacement}
            $placement={placement}
            {...attrs}
        />
    );
});

export default TooltipPopup;
