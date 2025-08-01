import React, { useRef } from 'react';
import { useRect, getWindow, getPadding, RectResult } from '../../utils';
import { adjustPadding, calculateAvailableSpace, calculatePosition } from '../../utils/helpers';
import { PopoverPopup } from './Popover.styles';
import { PopoverPopupProps } from '../../../Popover/PopoverPopup';

export interface PopoverProps {
    header?: React.ReactNode;
    sizes: RectResult;
    children?: React.ReactNode;
    position?: PositionType;
    padding?: number | number[];
    className?: string;
    refresher?: number;
    width?: string;
    isAccent?: boolean;
    hideCross?: NonNullable<PopoverPopupProps['noClose']>;
    onClose?: NonNullable<PopoverPopupProps['onClose']>;
    testId?: PopoverPopupProps['testId'];
}

export type PositionType = Position | ((postionsProps: PositionProps, prevRect: RectResult) => Position);

export type PositionProps = RectResult & {
    windowWidth: number;
    windowHeight: number;
};

export type Position = 'top' | 'right' | 'bottom' | 'left' | 'center' | [number, number];

export const Popover: React.FC<PopoverProps> = ({
    children,
    position: providedPosition = 'bottom',
    padding = 10,
    sizes,
    refresher,
    width = '320px',
    isAccent = false,
    hideCross,
    onClose,
    ...props
}) => {
    const helperRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef('');
    const { w: windowWidth, h: windowHeight } = getWindow();

    const helperRect = useRect(helperRef, refresher);
    const { width: helperWidth, height: helperHeight } = helperRect;

    const paddings = getPadding(padding);
    const [pt, pr, pb, pl] = paddings;
    const targetLeft = sizes?.left - pl;
    const targetTop = sizes?.top - pt;
    const targetRight = sizes?.right + pr;
    const targetBottom = sizes?.bottom + pb;

    const position =
        providedPosition && typeof providedPosition === 'function'
            ? providedPosition(
                  {
                      width: helperWidth,
                      height: helperHeight,
                      windowWidth,
                      windowHeight,
                      top: targetTop,
                      left: targetLeft,
                      right: targetRight,
                      bottom: targetBottom,
                      x: sizes.x,
                      y: sizes.y,
                  },
                  helperRect
              )
            : providedPosition;

    const available = calculateAvailableSpace(
        targetLeft,
        targetRight,
        targetTop,
        targetBottom,
        windowWidth,
        windowHeight
    );
    const { coords, positionRef: newPositionRef } = calculatePosition(
        position,
        targetLeft,
        targetTop,
        targetRight,
        targetBottom,
        helperWidth,
        helperHeight,
        windowWidth,
        windowHeight,
        paddings,
        available
    );

    positionRef.current = newPositionRef;

    const adjustedPosition = adjustPadding(positionRef.current, coords, [pt, pr, pb, pl]);

    const arrowCoords = React.useMemo(() => {
        const offset = 19.8;
        const margin = 2;
        const offsetX = (targetRight - targetLeft) / 2;
        const offsetY = (targetBottom - targetTop) / 2;
        const popoverSize = helperRef.current
            ? [helperRef.current.offsetWidth - offset * 2, helperRef.current.offsetHeight - offset * 2]
            : [0, 0];

        const positionMap = {
            top: [Math.min(offsetX, popoverSize[0]), helperHeight],
            bottom: [Math.min(offsetX, popoverSize[0]), -offset / 2 + margin],
            left: [helperWidth - margin * 2, Math.min(offsetY, popoverSize[1])],
            right: [-offset / 2, Math.min(offsetY, popoverSize[1])],
        };

        return positionMap[positionRef.current as keyof typeof positionMap] || [0, 0];
    }, [positionRef.current, helperWidth, helperHeight, targetTop, targetBottom, targetLeft, targetRight, helperRef]);

    return (
        <PopoverPopup
            style={{
                transform: `translate(${Math.round(adjustedPosition[0])}px, ${Math.round(adjustedPosition[1])}px)`,
                width,
            }}
            ref={helperRef}
            design={isAccent ? 'dark' : 'light'}
            size={'m'}
            showPopoverWithArrow={!['center', 'custom'].includes(positionRef.current)}
            placement={
                ['top', 'bottom', 'left', 'right'].includes(positionRef.current)
                    ? (positionRef.current as 'top' | 'bottom' | 'left' | 'right')
                    : 'auto'
            }
            arrowX={arrowCoords[0]}
            arrowY={arrowCoords[1]}
            noClose={hideCross}
            onClose={onClose}
            {...props}>
            {children}
        </PopoverPopup>
    );
};
