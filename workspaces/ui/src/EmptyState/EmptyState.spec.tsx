import React from 'react';
import EmptyState, { EmptyStateProps } from './EmptyState';

test('EmptyState', () => {
    const snap = snapshot.render(<EmptyState />);
    expect(snap).toMatchSnapshot();
});

test('EmptyState w/ loading', () => {
    const loading: EmptyStateProps['loading'][] = [true, false];

    loading.forEach((value) => {
        const snap = snapshot.render(<EmptyState loading={value} />);
        expect(snap).toMatchSnapshot(`loading-${value}`);
    });
});

test('EmptyState w/ title', () => {
    const component = (
        <EmptyState>
            <EmptyState.Title>EmptyState title</EmptyState.Title>
        </EmptyState>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('EmptyState w/ description', () => {
    const component = (
        <EmptyState>
            <EmptyState.Description>EmptyState description</EmptyState.Description>
        </EmptyState>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('EmptyState w/ actions', () => {
    const component = (
        <EmptyState>
            <EmptyState.Actions>EmptyState actions</EmptyState.Actions>
        </EmptyState>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('EmptyState w/ some child', () => {
    const component = (
        <EmptyState>
            <div>Some child</div>
        </EmptyState>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('EmptyState w/ title, descriptions, actions', () => {
    const component = (
        <EmptyState>
            <EmptyState.Title>EmptyState title</EmptyState.Title>
            <EmptyState.Description>EmptyState description</EmptyState.Description>
            <EmptyState.Actions>EmptyState actions</EmptyState.Actions>
        </EmptyState>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('EmptyState w/ some props', () => {
    const props: EmptyStateProps = { className: 'className', id: 'EmptyState', title: 'this is EmptyState' };
    const component = <EmptyState {...props} />;

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();

    const wrapper = snapshot.shallow(component);
    for (const [key, value] of Object.entries(props)) {
        expect(wrapper.props()[key]).toEqual(value);
    }
});
