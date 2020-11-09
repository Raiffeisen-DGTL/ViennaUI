import React from 'react';
import Screen from './Screen';

test('Screen', () => {
    const snap = snapshot.render(
        <Screen>
            <Screen.Head>
                <Screen.Title>Title</Screen.Title>
                <Screen.SubTitle>SubTitle</Screen.SubTitle>
            </Screen.Head>
            <Screen.Body>Body</Screen.Body>
            <Screen.Footer>Footer</Screen.Footer>
        </Screen>
    );
    expect(snap).toMatchSnapshot();
});
