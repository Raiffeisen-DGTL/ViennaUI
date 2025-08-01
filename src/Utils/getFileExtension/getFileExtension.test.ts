import { getFileExtension } from './getFileExtension';

test('getFileExtension()', () => {
    const file: Partial<File> = { name: 'filename.js', lastModified: 1590164630231, size: 1000 };
    const noext: Partial<File> = { name: 'filenamejs', lastModified: 1590164630231, size: 1000 };

    expect(getFileExtension(file)).toBe('js');
    expect(getFileExtension(noext)).toBe('filenamejs');
});
