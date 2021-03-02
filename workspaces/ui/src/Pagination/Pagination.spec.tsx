import React from 'react';
import Pagination, { PaginationProps } from './Pagination';

test('Pagination', () => {
    const snap = snapshot.render(<Pagination pageSize={25} totalItemsCount={100} onChange={jest.fn()} />);
    expect(snap).toMatchSnapshot();
});

test('Pagination w/ initialPageIndex', () => {
    const snap = snapshot.render(
        <Pagination initialPageIndex={3} pageSize={25} totalItemsCount={100} onChange={jest.fn()} />
    );

    expect(snap).toMatchSnapshot();
});

test('Pagination w/ currentPageNeighboursCount', () => {
    const snap = snapshot.render(
        <Pagination currentPageNeighboursCount={3} pageSize={25} totalItemsCount={100} onChange={jest.fn()} />
    );

    expect(snap).toMatchSnapshot();
});

test('Pagination w/ size', () => {
    const sizes: PaginationProps['size'][] = ['s', 'm', 'l'];

    sizes.forEach((size) => {
        const snap = snapshot.render(
            <Pagination size={size} pageSize={25} totalItemsCount={100} onChange={jest.fn()} />
        );

        expect(snap).toMatchSnapshot();
    });
});

test('Pagination w/ onChange (next)', () => {
    const fn = jest.fn();
    const event = { currentTarget: {} };
    const snap = snapshot.shallow(<Pagination pageSize={25} totalItemsCount={100} onChange={fn} />);

    snap.children().last().simulate('click', event);

    expect(snap).toMatchSnapshot();
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { pageIndex: 1, pageSize: 25 });

    expect(snap).toMatchSnapshot();
});

test('Pagination w/ onChange (target)', () => {
    const fn = jest.fn();
    const event = { currentTarget: {} };
    const snap = snapshot.shallow(<Pagination pageSize={25} totalItemsCount={100} onChange={fn} />);

    snap.childAt(2).simulate('click', event);

    expect(snap).toMatchSnapshot();
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { pageIndex: 1, pageSize: 25 });

    expect(snap).toMatchSnapshot();
});

test('Pagination w/ onChange (prev)', () => {
    const fn = jest.fn();
    const event = { currentTarget: {} };
    const snap = snapshot.shallow(
        <Pagination initialPageIndex={3} pageSize={25} totalItemsCount={100} onChange={fn} />
    );

    snap.children().first().simulate('click', event);

    expect(snap).toMatchSnapshot();
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { pageIndex: 2, pageSize: 25 });

    expect(snap).toMatchSnapshot();
});

test('Pagination w/ onChange (first and prev)', () => {
    const fn = jest.fn();
    const event = { currentTarget: {} };
    const snap = snapshot.shallow(<Pagination pageSize={25} totalItemsCount={100} onChange={fn} />);

    snap.children().first().simulate('click', event);

    expect(snap).toMatchSnapshot();
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { pageIndex: 0, pageSize: 25 });

    expect(snap).toMatchSnapshot();
});

test('Pagination w/ onChange (last and next)', () => {
    const fn = jest.fn();
    const event = { currentTarget: {} };
    const snap = snapshot.shallow(
        <Pagination initialPageIndex={3} pageSize={25} totalItemsCount={100} onChange={fn} />
    );

    snap.children().last().simulate('click', event);
    snap.children().last().simulate('click', event);

    expect(snap).toMatchSnapshot();
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(event, { pageIndex: 3, pageSize: 25 });

    expect(snap).toMatchSnapshot();
});
