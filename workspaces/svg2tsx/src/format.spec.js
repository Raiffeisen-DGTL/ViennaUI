import fmt from './format';

test('fmt naming()', () => {
    expect(fmt.naming('name')).toEqual('Name');
    expect(fmt.naming('name01')).toEqual('Name01');
    expect(fmt.naming('component-name')).toEqual('ComponentName');
    expect(fmt.naming('component name')).toEqual('ComponentName');
    expect(fmt.naming('component+name')).toEqual('ComponentName');
    expect(fmt.naming('component01 name01')).toEqual('Component01Name01');
    expect(fmt.naming('component name01')).toEqual('ComponentName01');
});

test('fmt generateCode()', () => {
    const code = fmt.generateCode(
        'ComponentName',
        "<path d='M19 20h3v2H2v-2h3V3.982C5 2.888 5.888 2.001 6.982 2h10.036c1.094 0 1.981.888 1.982 1.982V20zM17.016 4H7v1h10.016V4zM7 20h10.016V7H7v13zm2-4.844h6v1.688H9v-1.688zM8 14V8h8v6H8zm1.7-4.3v2.6h4.6V9.7H9.7z' />"
    );

    expect(code).toMatchSnapshot();
});

test('fmt beautify()', () => {
    const code = fmt.generateCode(
        'ComponentName',
        "<path d='M19 20h3v2H2v-2h3V3.982C5 2.888 5.888 2.001 6.982 2h10.036c1.094 0 1.981.888 1.982 1.982V20zM17.016 4H7v1h10.016V4zM7 20h10.016V7H7v13zm2-4.844h6v1.688H9v-1.688zM8 14V8h8v6H8zm1.7-4.3v2.6h4.6V9.7H9.7z' />"
    );

    expect(fmt.beautify(code)).toMatchSnapshot();
});
