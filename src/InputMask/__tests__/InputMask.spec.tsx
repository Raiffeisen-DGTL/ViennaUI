/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { InputPhone, InputDate, InputDateRange } from '../index';

describe('InputMask ', () => {
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

    it('InputDate /w defaultLocalization', async () => {
        const date = snapshot.render(<InputDate type='date' />);
        const time = snapshot.render(<InputDate type='time' />);
        const datetime = snapshot.render(<InputDate type='datetime' />);

        expect(date.text()).toEqual('ДД.ММ.ГГГГ');
        expect(time.text()).toEqual('ЧЧ:ММ');
        expect(datetime.text()).toEqual('ДД.ММ.ГГГГ ЧЧ:ММ');
    });

    it('InputDate /w customLocalization', async () => {
        const customLocalization = {
            'ds.inputDate.placeholder.date': 'DD.MM.YYYY',
            'ds.inputDate.placeholder.time': 'HH:MM',
            'ds.inputDate.placeholder.datetime': 'DD.MM.YYYY HH:MM',
        };
        const date = snapshot.render(<InputDate type='date' localization={customLocalization} />);
        const time = snapshot.render(<InputDate type='time' localization={customLocalization} />);
        const datetime = snapshot.render(<InputDate type='datetime' localization={customLocalization} />);

        expect(date.text()).toEqual(customLocalization['ds.inputDate.placeholder.date']);
        expect(time.text()).toEqual(customLocalization['ds.inputDate.placeholder.time']);
        expect(datetime.text()).toEqual(customLocalization['ds.inputDate.placeholder.datetime']);
    });

    it('InputDateRange /w defaultLocalization', async () => {
        const date = snapshot.render(<InputDateRange />);
        const dateRange = snapshot.render(<InputDateRange value='11.11.1993 -' />);

        expect(date.text()).toEqual('ДД.ММ.ГГГГ');
        expect(dateRange.text()).toEqual('11.11.1993');
    });

    it('InputDateRange /w customLocalization', async () => {
        const customLocalization = {
            'ds.inputDateRange.placeholder.date': 'DD.MM.YYYY',
            'ds.inputDateRange.placeholder.date.separator': 'DD.MM.YYYY - ',
            'ds.inputDateRange.placeholder.date.range': 'DD.MM.YYYY - DD.MM.YYYY',
        };
        const date = snapshot.render(<InputDateRange localization={customLocalization} />);
        const dateRange = snapshot.render(<InputDateRange value='11.11.1993 -' localization={customLocalization} />);

        expect(date.text()).toEqual(customLocalization['ds.inputDateRange.placeholder.date']);
        expect(dateRange.text()).toEqual('11.11.1993');
    });
});
