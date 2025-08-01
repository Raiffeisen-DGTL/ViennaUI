export const isEqualObjects = <T1, T2>(obj1: T1, obj2: T2): boolean => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};
