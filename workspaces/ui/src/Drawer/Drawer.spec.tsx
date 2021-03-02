import React from 'react';
import { Close } from 'vienna.icons';
import { Fade, Box, Content, CloseIcon } from './Drawer.styles';

test('Drawer /w as drawer left', () => {
    const snap = snapshot.render(
        <Fade>
            <Box orientation='left' width='0px' height='0px'>
                <CloseIcon>
                    <Close />
                </CloseIcon>
                <Content>content</Content>
            </Box>
        </Fade>
    );
    expect(snap).toMatchSnapshot();
});

test('Drawer /w as drawer left show', () => {
    const snap = snapshot.render(
        <Fade show>
            <Box toggle orientation='left' width='0px' height='0px'>
                <CloseIcon>
                    <Close />
                </CloseIcon>
                <Content>content</Content>
            </Box>
        </Fade>
    );
    expect(snap).toMatchSnapshot();
});

test('Drawer /w as drawer top', () => {
    const snap = snapshot.render(
        <Fade>
            <Box orientation='top' width='0px' height='0px'>
                <CloseIcon>
                    <Close />
                </CloseIcon>
                <Content>content</Content>
            </Box>
        </Fade>
    );
    expect(snap).toMatchSnapshot();
});

test('Drawer /w as drawer right', () => {
    const snap = snapshot.render(
        <Fade>
            <Box orientation='right' width='0px' height='0px'>
                <CloseIcon>
                    <Close />
                </CloseIcon>
                <Content>content</Content>
            </Box>
        </Fade>
    );
    expect(snap).toMatchSnapshot();
});

test('Drawer /w as drawer bottom', () => {
    const snap = snapshot.render(
        <Fade>
            <Box orientation='bottom' width='0px' height='0px'>
                <CloseIcon>
                    <Close />
                </CloseIcon>
                <Content>content</Content>
            </Box>
        </Fade>
    );
    expect(snap).toMatchSnapshot();
});
