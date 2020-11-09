module.exports.default = function sanitizeJsonRaw(src) {
    src = { ...src };

    function sanitize(subSource) {
        Object.keys(subSource).forEach((key) => {
            const item = subSource[key];
            if (item && item.values) {
                delete subSource[key];
                return;
            }

            if (item && !item.value && typeof item === 'object') {
                subSource[key] = sanitize({ ...item });
            } else if (item && item.value) {
                subSource[key] = item.value;
            }
        });

        return subSource;
    }

    Object.keys(src).forEach((key) => {
        switch (key) {
            case 'space':
            case 'desc':
            case 'imports':
            case 'ref':
                delete src[key];
                return;
            default:
                src[key] = sanitize({ ...src[key] });
        }

        if (!Object.keys(src[key]).length) {
            delete src[key];
        }
    });

    return src;
};
