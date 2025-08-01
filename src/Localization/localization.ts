export type LocalizationFunction<T extends object, C> = <K extends keyof T>(key: K, context?: C) => T[K];
export type Localization<T extends object, C> = T | LocalizationFunction<T, C>;

export interface DSLocalizationProps<T extends object, C = undefined> {
    localization?: Localization<T, C>;
}

export type DSLocalization<T extends object, C = undefined> = <K extends keyof T>(
    param: K,
    context?: C
) => Required<T>[K];

const localizationIsFunction = <T extends object, C>(
    localization: Localization<T, C>
): localization is LocalizationFunction<T, C> => {
    return typeof localization === 'function';
};

const getValue = <T extends object, K extends keyof T, C>(
    localization: Localization<T, C>,
    key: K,
    context?: C
): T[K] => {
    if (localizationIsFunction(localization)) {
        return localization(key, context);
    }

    return localization[key];
};

export function useLocalization<T extends object, C>(
    localization: Localization<T, C> | undefined,
    defaultLocalization: Localization<Required<T>, C>
) {
    const l10n = localization;
    return <K extends keyof T>(key: K, context?: C) => {
        let result: T[K] | null = null;
        if (l10n) {
            result = getValue(l10n, key, context);
        }
        return result ?? getValue(defaultLocalization, key, context);
    };
}
