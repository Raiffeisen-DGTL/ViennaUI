/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import InputMask, {
    InputPhone,
    InputDate,
    InputNumber,
    InputAccount,
    InputCard,
    InputDigital,
    InputDateRange,
    InputMaskProps,
} from './index';

it('InputMask', async () => {
    const mask = snapshot.render(<InputMask value='' />);

    expect(mask).toMatchSnapshot();
});

it('InputPhone', async () => {
    const mask = snapshot.render(<InputPhone />);

    expect(mask).toMatchSnapshot();
});

it('InputPhone /w focused', async () => {
    const mask = snapshot.mount(<InputPhone value='' />);
    const input = mask.find('input');

    input.simulate('focus');

    expect(mask).toMatchSnapshot();
});

it('InputPhone /w not complete', async () => {
    const mask = snapshot.render(<InputPhone value='4953' />);

    expect(mask).toMatchSnapshot();
});

it('InputPhone /w completed', async () => {
    const mask = snapshot.render(<InputPhone value='4959191242' />);

    expect(mask).toMatchSnapshot();
});

it('InputPhone /w onPaste', () => {
    function fn(e, data) {
        expect(JSON.stringify(data)).toBe(
            JSON.stringify({
                value: '+7 (495) 919-12-42',
                originalValue: '74959191242',
            })
        );
    }

    const mask = snapshot.mount(<InputPhone value='' onChange={fn} />);
    const input = mask.find('input');

    const event = (string) => ({
        nativeEvent: {
            clipboardData: {
                getData: () => string,
            },
        },
    });

    // base
    input.simulate('paste', event('4959191242'));
    // +7
    input.simulate('paste', event('+74959191242'));
    input.simulate('paste', event('+7 495 919 12 42'));
    input.simulate('paste', event('+7 495 919 1242'));
    input.simulate('paste', event('+7(495)9191242'));
    input.simulate('paste', event('+7(495) 9191242'));
    input.simulate('paste', event('+7(495)919-12-42'));
    input.simulate('paste', event('+7(495) 919-12-42'));
    // just 7
    input.simulate('paste', event('74959191242'));
    input.simulate('paste', event('7 495 919 12 42'));
    input.simulate('paste', event('7 495 919 1242'));
    input.simulate('paste', event('7(495)9191242'));
    input.simulate('paste', event('7(495) 9191242'));
    input.simulate('paste', event('7(495)919-12-42'));
    input.simulate('paste', event('7(495) 919-12-42'));
    // just 8
    input.simulate('paste', event('84959191242'));
    input.simulate('paste', event('8 495 919 12 42'));
    input.simulate('paste', event('8 495 919 1242'));
    input.simulate('paste', event('8(495)9191242'));
    input.simulate('paste', event('8(495) 9191242'));
    input.simulate('paste', event('8(495)919-12-42'));
    input.simulate('paste', event('8(495) 919-12-42'));
    // crazy (or old) gay style input
    input.simulate('paste', event('плюс 74959191242'));
    input.simulate('paste', event('плюс семь 4959191242'));
});

it('InputPhone /w onPaste custom mask', () => {
    function fn(e, data) {
        expect(JSON.stringify(data)).toBe(
            JSON.stringify({
                value: '+45 (11) 22-333',
                originalValue: '451122333',
            })
        );
    }

    const mask = snapshot.mount(<InputPhone value='' mask='+{45} (00) 00-000' onChange={fn} />);
    const input = mask.find('input');

    const event = (string) => ({
        nativeEvent: {
            clipboardData: {
                getData: () => string,
            },
        },
    });

    // +45
    input.simulate('paste', event('+451122333'));
    input.simulate('paste', event('+45 11 22 333'));
    input.simulate('paste', event('+45 11 22333'));
    input.simulate('paste', event('+45(11)22333'));
    input.simulate('paste', event('+45(11) 22333'));
    input.simulate('paste', event('+45(11)22-333'));
    input.simulate('paste', event('+45(11) 22-333'));
    // just 45
    input.simulate('paste', event('451122333'));
    input.simulate('paste', event('45 11 22 333'));
    input.simulate('paste', event('45 11 22333'));
    input.simulate('paste', event('45(11)22333'));
    input.simulate('paste', event('45(11) 22333'));
    input.simulate('paste', event('45(11)22-333'));
    input.simulate('paste', event('45(11) 22-333'));
    // crazy (or old) gay style input
    input.simulate('paste', event('my phone number is +45 11 22 333'));
});

it('InputPhone /w Eight mean Russia', () => {
    function fn(e, data) {
        expect(JSON.stringify(data)).toBe(
            JSON.stringify({
                value: '+456 (84) 56-112',
                originalValue: '4568456112',
            })
        );
    }

    const mask = snapshot.mount(<InputPhone value='' mask='+{456} (00) 00-000' onChange={fn} />);
    const input = mask.find('input');

    const event = (string) => ({
        nativeEvent: {
            clipboardData: {
                getData: () => string,
            },
        },
    });

    input.simulate('paste', event('8456112233'));
});

it('InputDate', async () => {
    const mask = snapshot.render(<InputDate value='22.02.1988' />);

    expect(mask).toMatchSnapshot();
});

it('InputDate /w new Date', async () => {
    const mask = snapshot.render(<InputDate value={new Date(1988, 1, 22)} />);

    expect(mask).toMatchSnapshot();
});

it('InputDate /w time', async () => {
    const mask = snapshot.render(<InputDate type='time' value='21:00' />);

    expect(mask).toMatchSnapshot();
});
it('InputDate /w datetime', async () => {
    const mask = snapshot.render(<InputDate type='datetime' value='22.02.1988 21:00' />);

    expect(mask).toMatchSnapshot();
});

it('InputDate /w not in range', async () => {
    const mask = snapshot.render(
        <InputDate value={new Date(2000, 5, 17)} min={new Date(2000, 5, 2)} max={new Date(2000, 5, 15)} />
    );

    expect(mask).toMatchSnapshot();
});

it('InputNumber', () => {
    const mask = snapshot.render(<InputNumber value='1000000' />);

    expect(mask).toMatchSnapshot();
});

it('InputAccount', async () => {
    const mask = snapshot.render(<InputAccount value='00000.810.0.000001' />);

    expect(mask).toMatchSnapshot();
});

it('InputCard', async () => {
    const mask = snapshot.render(<InputCard value='1234 1234 12' />);

    expect(mask).toMatchSnapshot();
});

it('InputDigital', async () => {
    const mask = snapshot.render(<InputDigital value='10.10' />);

    expect(mask).toMatchSnapshot();
});

it('InputDigital scale = 0', async () => {
    const mask = snapshot.render(<InputDigital value='10.10' scale={0} />);

    expect(mask).toMatchSnapshot();
});

it('InputDigital /w scale = 2', async () => {
    const mask = snapshot.render(<InputDigital value='10.10' scale={2} />);

    expect(mask).toMatchSnapshot();
});

it('InputDateRange', async () => {
    const mask = snapshot.render(<InputDateRange value='12.02.1930 - 22.0' />);

    expect(mask).toMatchSnapshot();
});

it('InputDateRange /w not in range', async () => {
    const mask = snapshot.render(
        <InputDateRange value={'01.06.2000 - 14.06.2000'} min={new Date(2000, 5, 2)} max={new Date(2000, 5, 12)} />
    );

    expect(mask).toMatchSnapshot();
});

test('InputDateRange w/ size', async () => {
    const sizes: InputMaskProps['size'][] = ['xs', 's', 'm', 'l', 'xl'];

    sizes.forEach(async (size) => {
        const snap = snapshot.render(<InputDateRange size={size} value='12.02.1930 - 22.0' />);
        expect(snap).toMatchSnapshot();
    });
});

test('InputDateRange w/ design', async () => {
    const designs: InputMaskProps['design'][] = ['outline', 'material'];

    designs.forEach(async (design) => {
        const snap = snapshot.render(<InputDateRange design={design} value='12.02.1930 - 22.0' />);
        expect(snap).toMatchSnapshot();
    });
});
