import { getFileExtension } from './getFileExtension';

test('getFileExtension()', () => {
    const file: any = { name: 'filename.js', lastModified: 1590164630231, size: 1000 };
    const noext: any = { name: 'filenamejs', lastModified: 1590164630231, size: 1000 };

    expect(getFileExtension(file)).toEqual('js');
    expect(getFileExtension(noext)).toEqual('filenamejs');
});
