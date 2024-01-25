import React from 'react';
import { DropList, DropListProps } from './DropList';

test('DropList', () => {
    const component = (
        <DropList>
            <DropList.Item>Item 1</DropList.Item>
            <DropList.Item>Very very long Item 2</DropList.Item>
            <DropList.Item disabled>Item 3</DropList.Item>
            <DropList.Item>Item 4</DropList.Item>
            <DropList.Item selected>Item 5</DropList.Item>
            <DropList.Item>Item 6</DropList.Item>
            <DropList.Item>Item 7</DropList.Item>
        </DropList>
    );

    const snap = snapshot.render(component);
    expect(snap).toMatchSnapshot();
});

test('DropList w/ size', () => {
    const components: JSX.Element[] = [];

    const sizes: DropListProps['size'][] = ['s', 'm', 'l'];
    sizes.forEach((size) =>
        components.push(
            <DropList size={size}>
                <DropList.Item>Item 1</DropList.Item>
                <DropList.Item>Very very long Item 2</DropList.Item>
                <DropList.Item disabled>Item 3</DropList.Item>
                <DropList.Item>Item 4</DropList.Item>
                <DropList.Item selected>Item 5</DropList.Item>
                <DropList.Item>Item 6</DropList.Item>
                <DropList.Item>Item 7</DropList.Item>
            </DropList>
        )
    );

    const snap = snapshot.render(components);
    expect(snap).toMatchSnapshot();
});

test('DropList.Item', () => {
    const snap = snapshot.render(<DropList.Item>Item 1</DropList.Item>);
    expect(snap).toMatchSnapshot();
});

test('DropList.Item /w selected', () => {
    const snap = snapshot.render(<DropList.Item selected>Item 1</DropList.Item>);
    expect(snap).toMatchSnapshot();
});

test('DropList.Item /w disabled', () => {
    const snap = snapshot.render(<DropList.Item disabled>Item 1</DropList.Item>);
    expect(snap).toMatchSnapshot();
});
