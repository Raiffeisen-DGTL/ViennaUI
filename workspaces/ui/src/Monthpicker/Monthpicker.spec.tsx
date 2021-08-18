/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { Monthpicker } from './Monthpicker';

test('Monthpicker', async () => {
    const snap = snapshot.render(<Monthpicker />);
    expect(snap).toMatchSnapshot();
});
