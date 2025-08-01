export function getLastIndex(itemsCount: number, pageSize: number): number {
    const pagesCount = Math.ceil(itemsCount / pageSize);

    return pagesCount > 0 ? pagesCount - 1 : 0;
}
