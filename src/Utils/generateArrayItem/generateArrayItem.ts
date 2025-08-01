export function generateArrayItem<T>(arr: T[], startItem?: T) {
    const maxIdx = arr.length - 1;
    let i = startItem ? arr.indexOf(startItem) + 1 : 0;
    return function next() {
        i = i > maxIdx ? 0 : i;
        return arr[i++];
    };
}
