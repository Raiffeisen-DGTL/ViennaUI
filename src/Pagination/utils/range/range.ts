export function range(from: number, to: number, step = 1): number[] {
    let i: number = from;
    const rangeArr: number[] = [];

    while (i <= to) {
        rangeArr.push(i);
        i += step;
    }

    return rangeArr;
}
