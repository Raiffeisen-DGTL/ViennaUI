/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

test('Breadcrumbs', () => {
    const snap = snapshot.render(
        <Breadcrumbs>
            <Breadcrumbs.Option>Long Name Page 1</Breadcrumbs.Option>
            <Breadcrumbs.Option>Long Name Page 2</Breadcrumbs.Option>
            <Breadcrumbs.Option>Long Name Page 3</Breadcrumbs.Option>
        </Breadcrumbs>
    );

    expect(snap).toMatchSnapshot();
});

test('Breadcrumbs w/ sizes more then 1 item', async () => {
    const sizes: BreadcrumbsProps['size'][] = ['s', 'm', 'l'];

    sizes.forEach((size) => {
        const snap = snapshot.render(
            <Breadcrumbs size={size}>
                <Breadcrumbs.Option>Long Name Page 1</Breadcrumbs.Option>
                <Breadcrumbs.Option>Long Name Page 2</Breadcrumbs.Option>
                <Breadcrumbs.Option>Long Name Page 3</Breadcrumbs.Option>
            </Breadcrumbs>
        );

        expect(snap).toMatchSnapshot();
    });
});

test('Breadcrumbs w/ sizes only 1 item', async () => {
    const sizes: BreadcrumbsProps['size'][] = ['s', 'm', 'l'];

    sizes.forEach((size) => {
        const snap = snapshot.render(
            <Breadcrumbs size={size}>
                <Breadcrumbs.Option>Long Name Page 1</Breadcrumbs.Option>
            </Breadcrumbs>
        );

        expect(snap).toMatchSnapshot();
    });
});

test('Breadcrumbs w/ less width with altText', async () => {
    const snap = snapshot.render(
        <div style={{ width: '300px' }}>
            <Breadcrumbs>
                <Breadcrumbs.Option altText='Page 1'>Long Name Page 1</Breadcrumbs.Option>
                <Breadcrumbs.Option altText='Page 2'>Long Name Page 2</Breadcrumbs.Option>
                <Breadcrumbs.Option altText='Page 3'>Long Name Page 3</Breadcrumbs.Option>
            </Breadcrumbs>
        </div>
    );
    expect(snap).toMatchSnapshot();
});

test('Breadcrumbs w/ less width without altText', async () => {
    const snap = snapshot.render(
        <div style={{ width: '300px' }}>
            <Breadcrumbs>
                <Breadcrumbs.Option>Long Name Page 1</Breadcrumbs.Option>
                <Breadcrumbs.Option>Long Name Page 2</Breadcrumbs.Option>
                <Breadcrumbs.Option>Long Name Page 3</Breadcrumbs.Option>
            </Breadcrumbs>
        </div>
    );
    expect(snap).toMatchSnapshot();
});
