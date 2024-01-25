export type Localization<T, C = undefined> = T | ((key: keyof T, context?: C) => any);

export interface DSLocalizationProps<T, C = undefined> {
    localization?: Localization<T, C>;
}

export type DSLocalization<T, C = undefined> = (param: keyof T, context?: C) => any;

const getValue = <T, C>(localization: Localization<T, C>, key: keyof T, context?: C): T[keyof T] | void => {
    if (typeof localization === 'function') {
        // TS doesn't handle functions in union types well
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return localization(key, context);
    }

    return localization[key];
};

export function useLocalization<T, C = undefined>(
    localization,
    defaultLocalization: Localization<T, C>
): DSLocalization<T, C> {
    const l10n = localization as Localization<T, C>;
    return (key, context) => {
        let result;
        if (l10n) {
            result = getValue(l10n, key, context);
        }

        // there should always be a result
        return result ?? getValue(defaultLocalization, key, context);
    };
}
