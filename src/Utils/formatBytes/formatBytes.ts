export const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return '0 байт';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['байт', 'Кб', 'Мб', 'Гб', 'Тб', 'Пб', 'Эб', 'Зб', 'Йб'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};
