import React, { forwardRef } from 'react';
import { Box, PropsBox } from './Pager.styles';
import { BoxStyled } from '../../Utils/styled';

interface PagerProps extends Omit<BoxStyled<typeof Box, PropsBox>, 'onClick'> {
    size?: 's' | 'm' | 'l';
    disabled?: boolean;
    active?: boolean;
    title?: string;
    onClick: (event: React.MouseEvent, data: { index: number }) => void;
}

export const Pager = forwardRef<HTMLButtonElement, PagerProps>((props, ref) => {
    const { children, size = 'm', active = false, disabled, ...attrs } = props;
    const tabIndex = disabled || !attrs.tabIndex ? -1 : attrs.tabIndex;

    return (
        <Box
            {...attrs}
            tabIndex={tabIndex}
            $active={active}
            $disabled={disabled}
            disabled={disabled}
            $size={size}
            ref={ref}>
            {children}
        </Box>
    );
});
