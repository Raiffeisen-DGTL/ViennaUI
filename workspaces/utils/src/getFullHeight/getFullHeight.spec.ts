import readObjectByPath from './getFullHeight';

const elem = document.createElement('div');
elem.style.marginBottom = '5px';
elem.style.marginTop = '5px';

test('getFullHeight', () => {
    expect(readObjectByPath(elem)).toBe(10);
});
