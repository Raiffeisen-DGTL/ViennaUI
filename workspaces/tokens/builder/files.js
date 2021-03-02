const yamlParse = require('js-yaml');
const path = require('path');
const fs = require('fs');
const { dirs } = require('./const');
const { mergeRecursive } = require('./helper');

// Создаем директорию для результирующих данных если требуется
module.exports.outDir = (output) => {
    if (!fs.existsSync(output)) {
        fs.mkdirSync(output);
    }
};

// Получаем yaml файлы из директории с исходниками (рекурсивно)
function getFiles(src) {
    let tmp = [];
    fs.readdirSync(src).forEach((file) => {
        if (/\.yaml/gm.test(file) && fs.lstatSync(path.resolve(src, file)).isFile()) {
            tmp.push(path.resolve(src, file));
        } else if (fs.lstatSync(path.resolve(src, file)).isDirectory()) {
            tmp = tmp.concat(getFiles(path.resolve(src, file)));
        }
    });
    return tmp;
}
module.exports.getFiles = getFiles;

// Читаем yaml файл
module.exports.readFile = (src) => {
    const tokens = fs.readFileSync(src, 'utf8');
    const json = {
        body: yamlParse.safeLoad(tokens),
        path: src,
    };

    return json;
};

function resolveImport(str, imports, asRef = false, filePath = '') {
    // Паттерн пути имени
    const reg = /\$(.*?)($| |,|")/gm;
    return str.replace(reg, (s, m1, m2) => {
        const arr = m1.split('.');
        let result = '';
        // Убираем название пространства име из пути и сохраняем в переменную
        const space = arr.shift();

        for (const obj of imports) {
            const body = obj.body;

            // Если название проостранства имен не совпадают ищем дальще
            if (body.space !== space) {
                continue;
            }

            // Если совпали пытаемся извлечь значение
            const val = arr.reduce(
                (obj, key) => {
                    return (obj && obj[key]) || undefined;
                },
                { ...body }
            );

            // Если значение найдено возвращаем его и заканчиваем просмотр списка
            if (val) {
                result = typeof val === 'number' ? `${val}px` : val;
                break;
            }
        }

        if (!result) {
            const message = `probably imported wrong ${(asRef && 'ref:') || 'token:'} ${m1} in ${filePath}`;
            console.log('\x1b[33m%s\x1b[0m', 'WARNING: ', message); // eslint-disable-line no-console
        }

        // Возвращаем новую строку в которой вместо пути импорта указано значение по этому пути
        return !asRef ? `${result}${m2}` : JSON.stringify(result);
    });
}

// раскрываем ссылки
function resolveRef(obj, imports, filePath) {
    if (obj) {
        const keys = Object.keys(obj);
        for (const key of keys) {
            const value = obj[key];
            if (typeof value === 'object') {
                obj[key] = resolveRef(value, imports, filePath);
            }
            if (key === 'ref') {
                if (!Array.isArray(value)) {
                    const part = JSON.parse(resolveImport(value, imports, true, filePath));
                    obj = { ...part, ...obj };
                } else {
                    const part = value.map((v) => JSON.parse(resolveImport(v, imports, true, filePath)));
                    obj = Object.assign(...part, obj);
                }
                delete obj.ref;
            }
        }
    }

    return obj;
}

// Получаем импорты для файла
module.exports.getImports = (src, idx, target, ext) => {
    // Список доступных файлов, где искать импорт. Либо по умолчанию, либо из блока imports в файле
    const imports =
        (src.body.imports && [...getFiles(dirs.defaultImports), ...src.body.imports]) || getFiles(dirs.defaultImports);
    const combined = [...(ext || []), ...target];
    if (imports && imports.length) {
        const resolves = imports.map((i) => path.resolve(src.path, i));
        const objs = combined.filter((el) => resolves.some((r) => r === el.path));
        src = resolveRef(src, [...objs, src], src.path);
        const str = JSON.stringify(src);
        // Заменяем путь импорта на значение
        const replaced = resolveImport(str, objs, false, src.path);
        src = JSON.parse(replaced);
    }

    return src;
};

// Форматируем "сырой" json-файл в требуемый формат
module.exports.format = (src, sanitazer) => {
    function resolver(object, subObject) {
        const part = {
            [subObject.body.space]: {
                ...object[subObject.body.space],
                ...sanitazer(subObject.body),
            },
        };
        return mergeRecursive(object, part);
    }

    src = [...src].reduce((o, e) => {
        return resolver(o, e);
    }, {});

    return JSON.stringify(src, null, 4);
};

// Записываем файлы
module.exports.write = (filepath, content) => {
    fs.writeFile(filepath, content, (err) => {
        if (err) {
            throw err;
        }
    });
};
