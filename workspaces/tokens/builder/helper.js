module.exports.mergeRecursive = function mergeRecursive(obj1, obj2) {
    for (const p in obj2) {
        try {
            if (obj2[p].constructor === Object) {
                obj1[p] = mergeRecursive(obj1[p], obj2[p]);
            } else {
                obj1[p] = obj2[p];
            }
        } catch (e) {
            obj1[p] = obj2[p];
        }
    }
    return obj1;
};
