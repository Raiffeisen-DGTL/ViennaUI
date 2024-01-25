export const getFileExtension = (file: Partial<File>) => {
    const tmp = file.name ? file.name.split('.') : [''];
    return tmp[tmp.length - 1];
};
