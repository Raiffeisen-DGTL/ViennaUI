import { getPosition } from '../utils';

const getPropsStyled = (obj) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [`$${key}`, value]));

describe('test Tooltip position util for anchor = "auto" and targetWidth === tootlipWidth', () => {
    const anchor = 'auto';
    const targetDem = {
        // размеры целевого объекта.
        width: 300,
        height: 40,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    };
    const current = { offsetWidth: 300, offsetHeight: 300 }; // размеры тултипа
    const window = { innerWidth: 1024, innerHeight: 768 }; // размеры видимой области
    const windowSpy = jest.spyOn(global, 'window', 'get');
    windowSpy.mockImplementation(() => window);

    test('target at top-left', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                right: targetDem.width, // Подробнее можно посмотреть в спецификации Element.getBoundingClientRect (MDN)
                bottom: targetDem.height,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'top', left: 0, top: 50, show: true, arrowShift: { left: 143 } })
        );
    });

    test('target at top', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                left: window.innerWidth / 2 - targetDem.width / 2,
                right: window.innerWidth / 2 + targetDem.width / 2,
                bottom: targetDem.height,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'top', right: 362, top: 50, show: true, arrowShift: { left: 143 } })
        );
    });

    test('target at top-right', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                left: window.innerWidth - targetDem.width,
                right: window.innerWidth,
                bottom: targetDem.height,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'top', right: 0, top: 50, show: true, arrowShift: { left: 143 } })
        );
    });

    test('target at right', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                left: window.innerWidth - targetDem.width,
                right: window.innerWidth,
                top: window.innerHeight / 2 - targetDem.height / 2,
                bottom: window.innerHeight / 2 + targetDem.height / 2,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'top', right: 0, top: 414, show: true, arrowShift: { left: 143 } })
        );
    });

    test('target at bottom-right', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                left: window.innerWidth - targetDem.width,
                right: window.innerWidth,
                top: window.innerHeight - targetDem.height,
                bottom: window.innerHeight,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'bottom', right: 0, top: 418, show: true, arrowShift: { left: 143 } })
        );
    });

    test('target at bottom', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                left: window.innerWidth / 2 - targetDem.width / 2,
                right: window.innerWidth / 2 + targetDem.width / 2,
                top: window.innerHeight - targetDem.height,
                bottom: window.innerHeight,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'bottom', right: 362, top: 418, show: true, arrowShift: { left: 143 } })
        );
    });

    test('target at bottom-left', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                right: targetDem.width,
                top: window.innerHeight - targetDem.height,
                bottom: window.innerHeight,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'bottom', left: 0, top: 418, show: true, arrowShift: { left: 143 } })
        );
    });

    test('target at left', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                right: targetDem.width,
                top: window.innerHeight / 2 - targetDem.height / 2,
                bottom: window.innerHeight / 2 + targetDem.height / 2,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'top', left: 0, top: 414, show: true, arrowShift: { left: 143 } })
        );
    });

    test('target at center', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                left: window.innerWidth / 2 - targetDem.width / 2,
                right: window.innerWidth / 2 + targetDem.width / 2,
                top: window.innerHeight / 2 - targetDem.height / 2,
                bottom: window.innerHeight / 2 + targetDem.height / 2,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'top', right: 362, top: 414, show: true, arrowShift: { left: 143 } })
        );
    });
});

describe('test Tooltip position util for anchor = "auto" and targetWidth < tootlipWidth', () => {
    const anchor = 'auto';
    const targetDem = {
        // размеры целевого объекта
        width: 100,
        height: 40,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    };
    const current = { offsetWidth: 300, offsetHeight: 300 }; // размеры тултипа
    const window = { innerWidth: 1024, innerHeight: 768 }; // размеры видимой области
    const windowSpy = jest.spyOn(global, 'window', 'get');
    windowSpy.mockImplementation(() => window);

    test('target at top-left', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                right: targetDem.width, // Подробнее можно посмотреть в спецификации Element.getBoundingClientRect (MDN)
                bottom: targetDem.height,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'top', arrowShift: { left: 35 }, left: 8, top: 50, show: true })
        );
    });

    test('target at top', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                left: window.innerWidth / 2 - targetDem.width / 2,
                right: window.innerWidth / 2 + targetDem.width / 2,
                bottom: targetDem.height,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'top', right: 362, top: 50, show: true, arrowShift: { left: 143 } })
        );
    });

    test('target at top-right', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                left: window.innerWidth - targetDem.width,
                right: window.innerWidth,
                bottom: targetDem.height,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'top', arrowShift: { right: 35 }, right: 8, top: 50, show: true })
        );
    });

    test('target at right', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                left: window.innerWidth - targetDem.width,
                right: window.innerWidth,
                top: window.innerHeight / 2 - targetDem.height / 2,
                bottom: window.innerHeight / 2 + targetDem.height / 2,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'top', arrowShift: { right: 35 }, right: 8, top: 414, show: true })
        );
    });

    test('target at bottom-right', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                left: window.innerWidth - targetDem.width,
                right: window.innerWidth,
                top: window.innerHeight - targetDem.height,
                bottom: window.innerHeight,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'bottom', arrowShift: { right: 35 }, right: 8, top: 418, show: true })
        );
    });

    test('target at bottom', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                left: window.innerWidth / 2 - targetDem.width / 2,
                right: window.innerWidth / 2 + targetDem.width / 2,
                top: window.innerHeight - targetDem.height,
                bottom: window.innerHeight,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'bottom', right: 362, top: 418, show: true, arrowShift: { left: 143 } })
        );
    });

    test('target at bottom-left', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                right: targetDem.width,
                top: window.innerHeight - targetDem.height,
                bottom: window.innerHeight,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'bottom', arrowShift: { left: 35 }, left: 8, top: 418, show: true })
        );
    });

    test('target at left', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                right: targetDem.width,
                top: window.innerHeight / 2 - targetDem.height / 2,
                bottom: window.innerHeight / 2 + targetDem.height / 2,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'top', arrowShift: { left: 35 }, left: 8, top: 414, show: true })
        );
    });

    test('target at center', () => {
        const target = {
            getBoundingClientRect: () => ({
                ...targetDem,
                left: window.innerWidth / 2 - targetDem.width / 2,
                right: window.innerWidth / 2 + targetDem.width / 2,
                top: window.innerHeight / 2 - targetDem.height / 2,
                bottom: window.innerHeight / 2 + targetDem.height / 2,
            }),
        };
        const result = getPosition(target, current, anchor);
        expect(result).toStrictEqual(
            getPropsStyled({ arrow: 'top', right: 362, top: 414, show: true, arrowShift: { left: 143 } })
        );
    });
});
