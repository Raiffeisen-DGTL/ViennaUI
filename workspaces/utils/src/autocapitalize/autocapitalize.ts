export type Rule = 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';

export const autocapitalize = (value: string, rule?: Rule): string => {
    if (!value || rule === 'off' || rule === 'none' || !rule) {
        return value;
    }

    if (rule === 'on' || rule === 'sentences') {
        if (/[.?!]/.test(value)) {
            return value
                .split(/([.?!] )/g)
                .map((item: string) => (item ? `${item[0].toUpperCase()}${item.substring(1)}` : ''))
                .join('');
        }

        return `${value[0].toUpperCase()}${value.substring(1)}`;
    }

    if (rule === 'words') {
        return value
            .split(/([ -])/g)
            .map((item: string) => (item ? `${item[0].toUpperCase()}${item.substring(1)}` : ''))
            .join('');
    }

    if (rule === 'characters') {
        return value.toUpperCase();
    }

    return value;
};

export default autocapitalize;
