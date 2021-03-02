import React from 'react';
import Filter from './Filter';

test('Alarm w/ primary', async () => {
    const snap = snapshot.render(
        <Filter>
            <Filter.Item>Пол</Filter.Item>
            <Filter.Item maxWidth={100}>Рост очень высокий</Filter.Item>
            <Filter.Item>Вес</Filter.Item>
        </Filter>
    );
    expect(snap).toMatchSnapshot();
});

test('Alarm w/ ghost', async () => {
    const snap = snapshot.render(
        <Filter design='ghost'>
            <Filter.Item>Пол</Filter.Item>
            <Filter.Item maxWidth={100}>Рост очень высокий</Filter.Item>
            <Filter.Item>Вес</Filter.Item>
        </Filter>
    );
    expect(snap).toMatchSnapshot();
});
