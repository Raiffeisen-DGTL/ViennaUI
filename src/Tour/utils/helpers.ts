import { CoordsObjectType, CoordType, InViewArgs, PositionsObjectType } from './types';
import { Position } from '../components/Popover';

export const safe = (sum: number): number => {
    return sum < 0 ? 0 : sum;
};

export const getInViewThreshold = (threshold: InViewArgs['threshold']) => {
    if (typeof threshold === 'object' && threshold !== null) {
        return {
            thresholdX: threshold.x || 0,
            thresholdY: threshold.y || 0,
        };
    }

    return {
        thresholdX: threshold || 0,
        thresholdY: threshold || 0,
    };
};

export const getWindow = (): { w: number; h: number } => {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return { w, h };
};

export const inView = ({ top, right, bottom, left, threshold }: InViewArgs): boolean => {
    const { w: windowWidth, h: windowHeight } = getWindow();
    const { thresholdX, thresholdY } = getInViewThreshold(threshold);

    return top < 0 && bottom - top > windowHeight
        ? true
        : top >= 0 + thresholdY &&
              left >= 0 + thresholdX &&
              bottom <= windowHeight - thresholdY &&
              right <= windowWidth - thresholdX;
};

export const isHoriz = (pos: string) => /(left|right)/.test(pos);
export const isOutsideX = (val: number, windowWidth: number): boolean => {
    return val > windowWidth;
};
export const isOutsideY = (val: number, windowHeight: number): boolean => {
    return val > windowHeight;
};

export const bestPositionOf = (positions: PositionsObjectType, filters: string[] = []): string[] => {
    const compareFn = (a: string, b: string) => (filters.includes(a) ? 1 : filters.includes(b) ? -1 : 0);
    return Object.keys(positions)
        .map((p) => {
            return {
                position: p,
                value: positions[p],
            };
        })
        .sort((a, b) => b.value - a.value)
        .sort((a, b) => compareFn(a.position, b.position))
        .filter((p) => p.value > 0)
        .map((p) => p.position);
};

const defaultPadding = 10;

export const getPadding = (padding: number | number[] = defaultPadding): number[] => {
    if (Array.isArray(padding)) {
        if (padding.length === 1) {
            return [padding[0], padding[0], padding[0], padding[0]];
        }
        if (padding.length === 2) {
            return [padding[1], padding[0], padding[1], padding[0]];
        }
        if (padding.length === 3) {
            return [padding[0], padding[1], padding[2], padding[1]];
        }
        if (padding.length > 3) {
            return [padding[0], padding[1], padding[2], padding[3]];
        }

        return [defaultPadding, defaultPadding];
    }

    return [padding, padding, padding, padding];
};

export const adjustPadding = (position: string, coords: number[], padding: [number, number, number, number]) => {
    const newCoords = coords;
    if (position === 'left' || position === 'right') {
        newCoords[1] = coords[1] + padding[0];
    }
    if (position === 'bottom' || position === 'top') {
        newCoords[0] = coords[0] + padding[2];
    }

    return newCoords;
};

export const calculateAvailableSpace = (
    targetLeft: number,
    targetRight: number,
    targetTop: number,
    targetBottom: number,
    windowWidth: number,
    windowHeight: number
): PositionsObjectType => {
    return {
        left: targetLeft,
        right: windowWidth - targetRight,
        top: targetTop,
        bottom: windowHeight - targetBottom,
    };
};

export const couldPositionAt = (
    position: string,
    available: PositionsObjectType,
    helperWidth: number,
    helperHeight: number,
    padding: number[],
    isOutsideX: boolean,
    isOutsideY: boolean
): boolean => {
    const [pt, pr, pb, pl] = padding;

    switch (position) {
        case 'top':
            return available.top > helperHeight + pb;
        case 'right':
            return isOutsideX ? false : available.right > helperWidth + pl;
        case 'bottom':
            return isOutsideY ? false : available.bottom > helperHeight + pt;
        case 'left':
            return available.left > helperWidth + pr;
        default:
            return false;
    }
};

export const autoPosition = (
    coords: CoordsObjectType,
    available: PositionsObjectType,
    padding: number[],
    helperWidth: number,
    helperHeight: number,
    isOutsideX: boolean,
    isOutsideY: boolean
): { coords: CoordType; positionRef: string } => {
    const positionsOrder: string[] = bestPositionOf(
        available,
        isOutsideY ? ['right', 'left'] : isOutsideX ? ['top', 'bottom'] : []
    );

    for (const position of positionsOrder) {
        if (couldPositionAt(position, available, helperWidth, helperHeight, padding, isOutsideX, isOutsideY)) {
            return {
                coords: coords[position],
                positionRef: position,
            };
        }
    }

    return {
        coords: coords.center,
        positionRef: 'center',
    };
};

export const calculatePosition = (
    helperPosition: Position,
    targetLeft: number,
    targetTop: number,
    targetRight: number,
    targetBottom: number,
    helperWidth: number,
    helperHeight: number,
    windowWidth: number,
    windowHeight: number,
    padding: number[],
    available: PositionsObjectType
): { coords: CoordType; positionRef: string } => {
    const [pt, pr, pb, pl] = padding;

    if (Array.isArray(helperPosition)) {
        const isOutX = isOutsideX(helperPosition[0], windowWidth);
        const isOutY = isOutsideY(helperPosition[1], windowHeight);

        return {
            coords: [
                isOutX ? windowWidth / 2 - helperWidth / 2 : helperPosition[0],
                isOutY ? windowHeight / 2 - helperHeight / 2 : helperPosition[1],
            ],
            positionRef: 'custom',
        };
    }

    const isHelperOutsideX = isOutsideX(targetLeft + helperWidth, windowWidth);
    const isHelperOutsideY = isOutsideY(targetBottom + helperHeight, windowHeight);

    const x = isHelperOutsideX ? Math.min(targetLeft, windowWidth - helperWidth) : Math.max(targetLeft, 0);

    const y = isHelperOutsideY
        ? helperHeight > available.bottom
            ? Math.max(targetBottom - helperHeight, 0)
            : Math.max(targetTop, 0)
        : targetTop;

    const coords: CoordsObjectType = {
        top: [x - pl, targetTop - helperHeight - pb],
        right: [targetRight + pl, y - pt],
        bottom: [x - pl, targetBottom + pt],
        left: [targetLeft - helperWidth - pr, y - pt],
        center: [windowWidth / 2 - helperWidth / 2, windowHeight / 2 - helperHeight / 2],
    };

    if (
        helperPosition === 'center' ||
        (couldPositionAt(
            helperPosition,
            available,
            helperWidth,
            helperHeight,
            padding,
            isHelperOutsideX,
            isHelperOutsideY
        ) &&
            !isHelperOutsideX &&
            !isHelperOutsideY)
    ) {
        return {
            coords: coords[helperPosition],
            positionRef: helperPosition,
        };
    }

    return autoPosition(coords, available, padding, helperWidth, helperHeight, isHelperOutsideX, isHelperOutsideY);
};
