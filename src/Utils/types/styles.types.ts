import { FloatingPlacement } from '@/Floating';

export type AllSizeType = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
export type SizeType<T extends AllSizeType = AllSizeType> = T extends AllSizeType ? T : never;

export type PlacementType<T extends FloatingPlacement = FloatingPlacement> = T extends FloatingPlacement ? T : never;

export type DesignType = 'outline' | 'material';

export type ColorType =
    | 'white'
    | 'seattle05'
    | 'seattle10'
    | 'seattle60'
    | 'seattle120'
    | 'oslo10'
    | 'oslo60'
    | 'miami10'
    | 'miami100'
    | 'nice10'
    | 'nice100'
    | 'dubai10'
    | 'dubai100'
    | 'paris10'
    | 'paris100'
    | 'sochi10'
    | 'sochi100'
    | 'tokyo10'
    | 'tokyo100'
    | 'dublin10'
    | 'dublin100'
    | 'bern10'
    | 'bern100'
    | 'manila10'
    | 'manila100'
    | 'tallin10'
    | 'tallin100'
    | 'seoul10'
    | 'seoul100'
    | 'havana10'
    | 'havana100'
    | 'madrid10'
    | 'madrid100'
    | 'porto10'
    | 'porto100'
    | 'primary'
    | 'osaka10'
    | 'osaka100';
