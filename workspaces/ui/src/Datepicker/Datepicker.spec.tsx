/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { Datepicker } from './Datepicker';

test('Datepicker', async () => {
    const snap = snapshot.render(<Datepicker />);
    expect(snap).toMatchSnapshot();
});

test('Datepicker /w not complete', async () => {
    const snap = snapshot.render(<Datepicker value='22.02' />);
    expect(snap).toMatchSnapshot();
});

test('Datepicker /w complete', async () => {
    const snap = snapshot.render(<Datepicker value='11.12.1900' />);
    expect(snap).toMatchSnapshot();
});

test('Datepicker /w date min and max valid', () => {
    const fn = function (e, data) {
        expect(data.value).toBe('15.06.2020');
    };
    const snap = snapshot.mount(
        <Datepicker minDate={new Date(2020, 5, 2)} maxDate={new Date(2020, 5, 15)} onChange={fn} />
    );

    const input = snap.find('input');
    input.simulate('change', { target: { value: '15.06.2020' } });
});

test('Datepicker /w date min and max invalid', () => {
    const fn = function (e, data) {
        expect(data.value).toBe('15.06.2020');
    };
    const snap = snapshot.mount(
        <Datepicker minDate={new Date(2020, 5, 2)} maxDate={new Date(2020, 5, 15)} onChange={fn} />
    );

    const input = snap.find('input');
    input.simulate('change', { target: { value: '15.06.2021' } });
});

test('Datepicker /w date not in range', async () => {
    const snap = await snapshot.mount(
        <Datepicker value={new Date(2020, 5, 17)} minDate={new Date(2020, 5, 2)} maxDate={new Date(2020, 5, 15)} />
    );
    expect(snap).toMatchSnapshot();
});

test('Datepicker /w date not in range and not fix value', async () => {
    const snap = await snapshot.mount(
        <Datepicker value={new Date(2020, 5, 17)} minDate={new Date(2020, 5, 2)} maxDate={new Date(2020, 5, 15)} />
    );
    expect(snap).toMatchSnapshot();
});

test('Datepicker /w invalid', async () => {
    const snap = snapshot.render(<Datepicker value={undefined} invalid />);
    expect(snap).toMatchSnapshot();
});
