/**
 * result DD.MM.YYYY, HH:MM
 * @param {string} date as ISOString
 * @returns {string}
 */
export const formatDate = (date: string | Date): string => {
    date = date instanceof Date ? date.toISOString() : date;
    const temp = date.replace(/(.*)T(.*)\.(.*)Z/gm, '$1, $2').split(',');
    return `${temp[0].split('-').reverse().join('.')}, ${temp[1]}`;
};
