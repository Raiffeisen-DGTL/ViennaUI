module.exports.default = (src) => {
    src = { ...src };

    Object.keys(src).forEach((key) => {
        switch (key) {
            case 'space':
            case 'imports':
            case 'ref':
                delete src[key];
        }
    });

    return src;
};
