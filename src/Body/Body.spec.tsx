import React from 'react';
import { Body } from './Body';

test('Body', () => {
    const snap = snapshot.render(<Body>Hello body!</Body>);
    expect(snap).toMatchSnapshot();
});
