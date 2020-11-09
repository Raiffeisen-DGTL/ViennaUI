import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getScrollParent } from 'vienna.react-use';
import { getPosition } from '../utils';
import { Box } from './TolltipNative.styles';

interface TooltipNativeProps {
    id?: string;
    width?: number;
    target: HTMLElement;
    value?: React.ReactNode;
    anchor?: 'left' | 'right' | 'top' | 'bottom' | 'auto';
    design?: 'light' | 'dark';
    size?: 's' | 'm';
    allowInteraction?: boolean;
    onClose?: () => void;
}

export const TooltipNative: React.FC<TooltipNativeProps> = (props: React.PropsWithChildren<TooltipNativeProps>) => {
    const { allowInteraction, onClose, children, target, anchor = 'auto', width, design = 'light', size = 's' } = props;
    const [innerPos, setPos] = useState({});
    const ref = useRef<HTMLDivElement>(null);

    const scrollableParent = getScrollParent(target);

    useEffect(() => {
        const current = ref.current;

        const scrollHandler = () => typeof onClose === 'function' && onClose();

        if (current && children) {
            setPos({ ...getPosition(target, current, anchor) });
        }

        scrollableParent.addEventListener('scroll', scrollHandler);

        return () => {
            scrollableParent.removeEventListener('scroll', scrollHandler);
        };
    }, [ref, children, anchor, scrollableParent, target, onClose]);

    return (
        document.body &&
        ReactDOM.createPortal(
            <Box {...innerPos} allowInteraction={allowInteraction} width={width} design={design} ref={ref} size={size}>
                {children}
            </Box>,
            document.body
        )
    );
};
