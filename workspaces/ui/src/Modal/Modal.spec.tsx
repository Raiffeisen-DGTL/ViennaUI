import React from 'react';
import { Close } from 'vienna.icons';
import { Fade, Box, CloseIcon } from './Modal.styles';

test('Modal', () => {
    const snap = snapshot.render(
        <Fade>
            <Box>
                <CloseIcon>
                    <Close />
                </CloseIcon>
            </Box>
        </Fade>
    );
    expect(snap).toMatchSnapshot();
});

test('Modal /w show', () => {
    const snap = snapshot.render(
        <Fade show>
            <Box toggle>
                <CloseIcon>
                    <Close />
                </CloseIcon>
            </Box>
        </Fade>
    );
    expect(snap).toMatchSnapshot();
});
