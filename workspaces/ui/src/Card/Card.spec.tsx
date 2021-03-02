import React from 'react';
import { Settings } from 'vienna.icons';
import { Card } from './Card';

test('Card', () => {
    const snap = snapshot.render(<Card>Card content</Card>);
    expect(snap).toMatchSnapshot();
});

test('Card w/ titile', () => {
    const snap = snapshot.render(<Card title='Card title'>Card content</Card>);
    expect(snap).toMatchSnapshot();
});

test('Card w/ actions', () => {
    const snap = snapshot.render(
        <Card title='Card title' actions={<Settings />}>
            Card content
        </Card>
    );
    expect(snap).toMatchSnapshot();
});

test('Card w/ header', () => {
    const snap = snapshot.render(
        <Card
            header={
                <>
                    <Card.Title>Card title</Card.Title>
                    <Card.Subtitle>Card subtitle</Card.Subtitle>
                </>
            }>
            Card content
        </Card>
    );
    expect(snap).toMatchSnapshot();
});

test('Card w/ footer', () => {
    const snap = snapshot.render(<Card footer={<>Card footer</>}>Card content</Card>);
    expect(snap).toMatchSnapshot();
});

test('Card w/ content title', () => {
    const snap = snapshot.render(
        <Card>
            <Card.ContentTitle>Section header</Card.ContentTitle>
            <div>Section 1</div>
            <Card.ContentTitle>Section header</Card.ContentTitle>
            <div>Section2</div>
        </Card>
    );
    expect(snap).toMatchSnapshot();
});

test('Card w/ stretch', () => {
    const snap = snapshot.render(
        <Card stretch title='Simple card'>
            Card content
        </Card>
    );
    expect(snap).toMatchSnapshot();
});

test('Card w/ any props', () => {
    const props = { className: 'className', id: 'id', onClick: () => 'Card' };
    const component = <Card {...props}>Card content</Card>;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});
