export function readObjectByPath(obj: Record<string, any>, path: string): Record<string, any> {
    if (!path || !obj) {
        // @ts-ignore
        return null;
    }

    const chunks = path.split('.');
    const result = chunks.reduce((obj: Record<string, any>, chunk: string) => {
        if (!obj || !obj.hasOwnProperty(chunk)) {
            return null;
        }

        return obj[chunk];
    }, obj);

    return result;
}

export default readObjectByPath;
