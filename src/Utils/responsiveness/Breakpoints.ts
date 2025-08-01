export interface Breakpoints {
    [key: string]: string | undefined;

    /* default size for unspecified viewport */
    base?: string;

    /* smartphones in vertical orientation */
    xs?: string;

    /* smartphones in horizontal, tablets in vertical orientations */
    s?: string;

    /* laptops & tablets in horizontal  orientation */
    m?: string;

    /*  desktops */
    l?: string;

    /* desktops */
    xl?: string;

    belowS?: string;
    belowM?: string;
    belowL?: string;
}

export const defaultBreakpoints = {
    s: 768,
    m: 1024,
    l: 1920,
    xl: 2560,
};

export const systemBreakpoints: Breakpoints = {
    /* xs */
    xs: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* s */
    s: `(min-width: ${defaultBreakpoints.s}px)`,
    belowS: `(max-width: ${defaultBreakpoints.s - 1}px)`,

    /* m */
    m: `(min-width: ${defaultBreakpoints.m}px)`,
    belowM: `(max-width: ${defaultBreakpoints.m - 1}px)`,

    /* l */
    l: `(min-width: ${defaultBreakpoints.l}px)`,
    belowL: `(max-width: ${defaultBreakpoints.l - 1}px)`,

    /* xl */
    xl: `(min-width: ${defaultBreakpoints.xl}px)`,
};
