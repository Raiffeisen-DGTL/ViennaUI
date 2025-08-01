import { PlacementType } from '@/atlant';

export const getOppositePlacement = (
    placement?: PlacementType
): PlacementType<'left' | 'right' | 'top' | 'bottom'> | undefined => {
    switch (placement) {
        case 'top':
        case 'top-start':
        case 'top-end':
            return 'bottom';
        case 'bottom':
        case 'bottom-start':
        case 'bottom-end':
            return 'top';
        case 'left':
        case 'left-start':
        case 'left-end':
            return 'right';
        case 'right':
        case 'right-start':
        case 'right-end':
            return 'left';
        default:
            return undefined;
    }
};
