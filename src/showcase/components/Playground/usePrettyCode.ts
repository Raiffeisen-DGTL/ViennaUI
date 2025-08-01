import { useEffect, useState } from 'react';
import prettier, { Plugin } from 'prettier';
import * as babel from 'prettier/plugins/babel';
import * as estree from 'prettier/plugins/estree';

export function usePrettyCode(code: string | null) {
    const [prettyCode, setPrettyCode] = useState('');

    useEffect(() => {
        const prettify = async () => {
            if (!code) return;

            setPrettyCode(await prettifyCode(code));
        };

        prettify();
    }, [code]);

    return prettyCode;
}

async function prettifyCode(code: string | null) {
    if (code === null) return '';

    let pretty = code;

    try {
        pretty = await prettier.format(code, {
            parser: 'babel-ts',
            plugins: [babel, estree as Plugin],
            tabWidth: 6,
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Ошибка prettier в Playground:\n', error);
    }

    return pretty;
}
