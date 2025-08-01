export type PositionsType = 'left' | 'right' | 'top' | 'bottom';

export interface PositionsObjectType {
    [position: string]: number;
}

export type CoordType = number[];

export interface CoordsObjectType {
    [position: string]: CoordType;
}

export interface RectResult {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
    x: number;
    y: number;
}

export type InViewArgs = RectResult & {
    threshold?: { x?: number; y?: number } | number;
};
