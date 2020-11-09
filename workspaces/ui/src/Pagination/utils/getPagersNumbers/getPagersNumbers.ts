import { range } from '../range';

export function getPagersNumbers(
    currentIndex: number,
    lastIndex: number,
    currentPageNeighboursCount: number,
    ellipsisPrev: number,
    ellipsisNext: number
): number[] {
    // @see https://www.figma.com/file/SBNBQInDC8Ms3GyiqtEzm3/%F0%9F%95%B9-Vienna-RDS-Components?node-id=1253%3A734
    // Обшее количество пэйджеров без учета стрелок вперед-назад берем равные 9
    const totalBlocks = 9;
    // Если текщий индекс страницы меньше leftPagesLimit или больше rightPagesLimit, то рендерим троеточия
    const leftPagesLimit = totalBlocks - 2;
    const rightPagesLimit = leftPagesLimit;

    if (lastIndex < totalBlocks) {
        return range(0, lastIndex);
    }

    const hasLeftSpill: boolean = currentIndex > leftPagesLimit - 1;
    const hasRightSpill: boolean = currentIndex <= lastIndex - rightPagesLimit || currentIndex < leftPagesLimit;

    if (hasLeftSpill && !hasRightSpill) {
        return [0, ellipsisPrev, ...range(lastIndex - rightPagesLimit + 1, lastIndex)];
    }

    if (!hasLeftSpill && hasRightSpill) {
        return [...range(0, leftPagesLimit - 1), ellipsisNext, lastIndex];
    }

    if (hasLeftSpill && hasRightSpill) {
        return [
            0,
            ellipsisPrev,
            ...range(currentIndex - currentPageNeighboursCount, currentIndex + currentPageNeighboursCount),
            ellipsisNext,
            lastIndex,
        ];
    }

    return range(0, lastIndex);
}
