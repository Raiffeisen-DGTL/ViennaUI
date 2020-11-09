import { getPagersNumbers } from './getPagersNumbers';

interface CaseInput {
    currentIndex: number;
    lastIndex: number;
    currentPageNeighboursCount: number;
    ellipsisPrev: number;
    ellipsisNext: number;
}

test('getPagersNumbers()', () => {
    const testCases: { input: CaseInput; output: number[] }[] = [
        {
            input: {
                currentIndex: 0,
                lastIndex: 2,
                currentPageNeighboursCount: 2,
                ellipsisPrev: -1,
                ellipsisNext: -2,
            },
            output: [0, 1, 2],
        },
        {
            input: {
                currentIndex: 0,
                lastIndex: 8,
                currentPageNeighboursCount: 2,
                ellipsisPrev: -1,
                ellipsisNext: -2,
            },
            output: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        },
        {
            input: {
                currentIndex: 2,
                lastIndex: 8,
                currentPageNeighboursCount: 2,
                ellipsisPrev: -1,
                ellipsisNext: -2,
            },
            output: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        },
        {
            input: {
                currentIndex: 0,
                lastIndex: 9,
                currentPageNeighboursCount: 2,
                ellipsisPrev: -1,
                ellipsisNext: -2,
            },
            output: [0, 1, 2, 3, 4, 5, 6, -2, 9],
        },
        {
            input: {
                currentIndex: 6,
                lastIndex: 9,
                currentPageNeighboursCount: 2,
                ellipsisPrev: -1,
                ellipsisNext: -2,
            },
            output: [0, 1, 2, 3, 4, 5, 6, -2, 9],
        },
        {
            input: {
                currentIndex: 0,
                lastIndex: 12,
                currentPageNeighboursCount: 2,
                ellipsisPrev: -1,
                ellipsisNext: -2,
            },
            output: [0, 1, 2, 3, 4, 5, 6, -2, 12],
        },
        {
            input: {
                currentIndex: 7,
                lastIndex: 12,
                currentPageNeighboursCount: 2,
                ellipsisPrev: -1,
                ellipsisNext: -2,
            },
            output: [0, -1, 6, 7, 8, 9, 10, 11, 12],
        },
        {
            input: {
                currentIndex: 9,
                lastIndex: 12,
                currentPageNeighboursCount: 2,
                ellipsisPrev: -1,
                ellipsisNext: -2,
            },
            output: [0, -1, 6, 7, 8, 9, 10, 11, 12],
        },
        {
            input: {
                currentIndex: 7,
                lastIndex: 15,
                currentPageNeighboursCount: 2,
                ellipsisPrev: -1,
                ellipsisNext: -2,
            },
            output: [0, -1, 5, 6, 7, 8, 9, -2, 15],
        },
        {
            input: {
                currentIndex: 999,
                lastIndex: 1000,
                currentPageNeighboursCount: 2,
                ellipsisPrev: -1,
                ellipsisNext: -2,
            },
            output: [0, -1, 994, 995, 996, 997, 998, 999, 1000],
        },
        {
            input: {
                currentIndex: 500,
                lastIndex: 1000,
                currentPageNeighboursCount: 2,
                ellipsisPrev: -1,
                ellipsisNext: -2,
            },
            output: [0, -1, 498, 499, 500, 501, 502, -2, 1000],
        },
        {
            input: {
                currentIndex: 4,
                lastIndex: 1000,
                currentPageNeighboursCount: 2,
                ellipsisPrev: -1,
                ellipsisNext: -2,
            },
            output: [0, 1, 2, 3, 4, 5, 6, -2, 1000],
        },
        {
            input: {
                currentIndex: 123,
                lastIndex: 130,
                currentPageNeighboursCount: 2,
                ellipsisPrev: -1,
                ellipsisNext: -2,
            },
            output: [0, -1, 121, 122, 123, 124, 125, -2, 130],
        },
    ];

    testCases.forEach((testCase) => {
        const { currentIndex, lastIndex, currentPageNeighboursCount, ellipsisPrev, ellipsisNext } = testCase.input;
        const result = getPagersNumbers(
            currentIndex,
            lastIndex,
            currentPageNeighboursCount,
            ellipsisPrev,
            ellipsisNext
        );
        expect(result).toEqual(testCase.output);
    });
});
