export function parseNumberFromString(str: string): number {
    // Регулярное выражение для поиска чисел с любыми разделителями
    const match = str.match(/-?\d+[\d\s,.]*/)?.[0] === str;
    if (!match) return NaN;

    // Заменяем все пробелы и запятые на точки
    const replaced = str.replace(/\s/g, '').replace(/,/g, '.');

    const parts = replaced.split('.');
    if (parts.length > 2) {
        // Если больше одной точки — оставляем только первую
        const firstDotIndex = replaced.indexOf('.');
        return parseFloat(
            replaced.substring(0, firstDotIndex + 1) + replaced.substring(firstDotIndex + 1).replace(/\./g, '')
        );
    }

    return parseFloat(replaced);
}
