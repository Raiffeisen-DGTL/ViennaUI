import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getScrollParent, usePortal } from '@fcc/react-use';
import { getPosition } from '../utils';
import { Box, PropsBox } from './TolltipNative.styles';
import { BoxStyled } from '../../Utils/styled';

interface TooltipNativeProps extends BoxStyled<typeof Box, PropsBox> {
    width?: PropsBox['$width'];
    design?: PropsBox['$design'];
    size?: PropsBox['$size'];
    allowInteraction?: PropsBox['$allowInteraction'];
    id?: string;
    target: HTMLElement;
    value?: React.ReactNode;
    anchor?: 'left' | 'right' | 'top' | 'bottom' | 'auto';
    onClose?: () => void;
}

export const TooltipNative: React.FC<TooltipNativeProps> = ({
    allowInteraction,
    onClose,
    children,
    target,
    anchor = 'auto',
    width,
    design = 'light',
    size = 's',
    ...attrs
}) => {
    const [innerPos, setPos] = useState<PropsBox>({});
    const ref = useRef<HTMLDivElement>(null);
    const scrollableParent = getScrollParent(target);
    const containerPortal = usePortal('tooltip-native');

    useEffect(() => {
        const current = ref.current;

        const scrollHandler = () => typeof onClose === 'function' && onClose();

        if (current && children) {
            setPos(getPosition(target, current, anchor));
        }

        scrollableParent.addEventListener('scroll', scrollHandler);

        return () => {
            scrollableParent.removeEventListener('scroll', scrollHandler);
        };
    }, [ref, children, anchor, scrollableParent, target, onClose]);

    return (
        document.body &&
        ReactDOM.createPortal(
            <Box
                {...(attrs as {})}
                {...(innerPos as {})}
                ref={ref}
                $allowInteraction={allowInteraction}
                $width={width}
                $design={design}
                $size={size}>
                {children}
            </Box>,
            containerPortal ?? document.body
        )
    );
};
