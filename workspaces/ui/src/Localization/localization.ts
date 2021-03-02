export type Localization<T, C = undefined> = T | ((key: keyof T, context?: C) => any);

export interface DSLocalizationProps<T, C = undefined> {
    localization?: Localization<T, C>;
}

export type DSLocalization<T, C = undefined> = (param: keyof T, context?: C) => any;

export const getValue = <T, C>(localization: Localization<T, C>, key: keyof T, context?: C): T[keyof T] | void => {
    if (typeof localization === 'function') {
        // TS doesn't handle functions in union types well
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        return localization(key, context);
    }

    return localization[key];
};

export function useLocalization<T, C = undefined>(
    props,
    defaultLocalization: Localization<T, C>
): DSLocalization<T, C> {
    const { localization }: { localization: Localization<T, C> } = props;
    return (key, context) => {
        let result;
        if (localization) {
            result = getValue(localization, key, context);
        }

        // there should always be a result
        return result ?? getValue(defaultLocalization, key, context);
    };
}
