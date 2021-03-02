/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { DatepickerRange } from './DatepickerRange';

test('DatepickerRange', async () => {
    const snap = snapshot.render(<DatepickerRange />);
    expect(snap).toMatchSnapshot();
});

test('DatepickerRange /w not complete startDate', async () => {
    const snap = snapshot.render(<DatepickerRange value='22.02' />);
    expect(snap).toMatchSnapshot();
});

test('DatepickerRange /w complete startDate', async () => {
    const snap = snapshot.render(<DatepickerRange value='22.02.1988' />);
    expect(snap).toMatchSnapshot();
});

test('DatepickerRange /w not complete endDate', async () => {
    const snap = snapshot.render(<DatepickerRange value='22.02.1988-22' />);
    expect(snap).toMatchSnapshot();
});

test('DatepickerRange /w not complete', async () => {
    const snap = snapshot.render(<DatepickerRange value='11.12.1900-22.02.1988' />);
    expect(snap).toMatchSnapshot();
});

test('DatepickerRange /w date not in range', async () => {
    const snap = await snapshot.render(
        <DatepickerRange
            value={'01.06.2000 - 14.06.2000'}
            minDate={new Date(2000, 5, 2, 0, 0, 0, 0)}
            maxDate={new Date(2000, 5, 12, 0, 0, 0, 0)}
        />
    );
    expect(snap).toMatchSnapshot();
});

test('DatepickerRange /w invalid', async () => {
    const snap = snapshot.render(<DatepickerRange value={undefined} invalid />);
    expect(snap).toMatchSnapshot();
});
