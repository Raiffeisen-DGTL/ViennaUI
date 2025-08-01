import Observables from './Observables';
import { useRect, useElemRect, getRect } from './useRect';
import { smoothScroll } from './smoothScroll';
import { useIntersectionObserver } from './useIntersectionObserver';
import {
    safe,
    getInViewThreshold,
    getWindow,
    inView,
    isHoriz,
    isOutsideX,
    isOutsideY,
    bestPositionOf,
    getPadding,
} from './helpers';
import { useTourLogic } from './useTourLogic';
import { PositionsType, PositionsObjectType, CoordType, CoordsObjectType, RectResult, InViewArgs } from './types';

export {
    Observables,
    useRect,
    useElemRect,
    getRect,
    smoothScroll,
    useIntersectionObserver,
    safe,
    getInViewThreshold,
    getWindow,
    inView,
    isHoriz,
    isOutsideX,
    isOutsideY,
    bestPositionOf,
    getPadding,
    useTourLogic,
};

export type { PositionsType, PositionsObjectType, CoordType, CoordsObjectType, RectResult, InViewArgs };
