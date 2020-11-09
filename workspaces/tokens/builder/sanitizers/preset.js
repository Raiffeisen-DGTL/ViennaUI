module.exports.default = (src) => {
    src = { ...src };

    function sanitize(subSource) {
        Object.keys(subSource).forEach((key) => {
            const item = subSource[key];
            if (Array.isArray(item)) {
                subSource = { ...sanitize([...item]).reduce((o, e) => ({ ...o, ...e }), {}) };
                return;
            }

            if (item && !item.value && typeof item === 'object') {
                subSource[key] = sanitize(item);
            } else if (item && item.prop) {
                item[item.prop] = item.value;
                delete item.value;
                delete item.prop;
                delete item.desc;
            }
        });
        return subSource;
    }

    Object.keys(src).forEach((key) => {
        switch (key) {
            case 'space':
            case 'imports':
            case 'ref':
                delete src[key];
                return;
            default:
                src[key] = sanitize({ ...src[key] });
        }
    });
    return src;
};
