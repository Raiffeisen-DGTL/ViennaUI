module.exports.preparator = function preparator(json) {
    // schema: name -> design -> designName

    function clear(src) {
        let string = JSON.stringify(src);
        string = string.replace(/\"|\{|\}/gm, '');
        string = string.replace(/($)(?!\d)/gm, ';');
        string = string.replace(/(,)(?!\d)/gm, ';\n  ');
        string = string.replace(/:/gm, ': ');
        return string;
    }

    json = JSON.parse(json);
    const names = Object.keys(json);
    let result = '';
    for (const name of names) {
        const className = name;
        const subclasses = json[name].design;
        if (!subclasses) {
            continue;
        }
        const subclassesNames = Object.keys(subclasses);
        for (const subClassName of subclassesNames) {
            const css = subclasses[subClassName];
            for (const c in css) {
                if (typeof css[c] === 'object') {
                    throw new Error(`invalid css schema for ${className}`);
                }
            }
            result += `.${className}.${subClassName} {\n  ${clear(css)}\n}\n\n`;
        }
    }

    return result;
};
