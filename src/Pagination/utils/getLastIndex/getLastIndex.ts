export function getLastIndex(itemsCount: number, pageSize: number): number {
    return Math.ceil(itemsCount / pageSize) - 1;
}
