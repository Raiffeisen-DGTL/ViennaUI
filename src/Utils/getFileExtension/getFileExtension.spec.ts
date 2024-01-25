import { getFileExtension } from './getFileExtension';

test('getFileExtension()', () => {
    const file: any = { name: 'filename.js', lastModified: 1590164630231, size: 1000 };
    const noext: any = { name: 'filenamejs', lastModified: 1590164630231, size: 1000 };

    expect(getFileExtension(file)).toBe('js');
    expect(getFileExtension(noext)).toBe('filenamejs');
});
