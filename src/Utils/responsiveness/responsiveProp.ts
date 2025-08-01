import { Breakpoints } from './Breakpoints';

export type ResponsiveProp<Value, B = Breakpoints> = Value | { [key in keyof B]: Value };

export interface WithMedia<T, B = Breakpoints> {
    media?: { [key in keyof B]: T };
}

export interface WithMediaStyled {
    $media?: any;
}
