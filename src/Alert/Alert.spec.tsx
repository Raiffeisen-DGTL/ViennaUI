import React from 'react';
import { Alert, AlertProps } from './Alert';
import { Button } from '../Button';
import { Groups } from '../Groups';

const title = 'Alert title';
const text = 'This is a test alert message.';

test('Alert', () => {
    const snap = snapshot.render(<Alert title={title}>{text}</Alert>);
    expect(snap).toMatchSnapshot();
});

test('Alert w/ design', () => {
    const designs: AlertProps['design'][] = ['plain', 'success', 'warning', 'error', 'accent'];

    designs.forEach((design) => {
        const snap = snapshot.render(
            <Alert title={title} design={design}>
                {text}
            </Alert>
        );
        expect(snap).toMatchSnapshot();
    });
});

test('Alert w/o title', () => {
    const snap = snapshot.render(<Alert>{text}</Alert>);
    expect(snap).toMatchSnapshot();
});

test('Alert w/o icon', () => {
    const snap = snapshot.render(
        <Alert title={title} noIcon>
            {text}
        </Alert>
    );
    expect(snap).toMatchSnapshot();
});

test('Alert w/ dynamic', () => {
    const snap = snapshot.render(
        <Alert title={title} dynamic>
            {text}
        </Alert>
    );
    expect(snap).toMatchSnapshot();
});

test('Alert w/ compactBelow', () => {
    const snap = snapshot.render(
        <Alert title={title} compactBelow={10000}>
            {text}
        </Alert>
    );
    expect(snap).toMatchSnapshot();
});

test('Alert w/ compact', () => {
    const snap = snapshot.render(
        <Alert title={title} compact={true}>
            {text}
        </Alert>
    );
    expect(snap).toMatchSnapshot();
});

test('Alert w/ responsive compact', () => {
    const snap = snapshot.render(
        <Alert title={title} compact={{ base: true, m: false }}>
            {text}
        </Alert>
    );
    expect(snap).toMatchSnapshot();
});

// when alert contains actions compact is forced to true even if the prop is set to false
test('Alert w/ compact & buttons', () => {
    const snap = snapshot.render(
        <Alert
            title={title}
            compact={false}
            actions={
                <Groups>
                    <Button>Complete</Button>
                    <Button design='ghost'>Cancel</Button>
                </Groups>
            }>
            {text}
        </Alert>
    );
    expect(snap).toMatchSnapshot();
});

test('Alert w/ buttons', () => {
    const snap = snapshot.render(
        <Alert
            title={title}
            actions={
                <Groups>
                    <Button>Complete</Button>
                    <Button design='ghost'>Cancel</Button>
                </Groups>
            }>
            {text}
        </Alert>
    );
    expect(snap).toMatchSnapshot();
});

test('Alert w/ any props', () => {
    const props = { className: 'className', id: 'id', onClick: () => 'Alert' };
    const component = <Alert {...props}>{text}</Alert>;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});
