import React from 'react';
import Grid from './Grid';

test('Grid', () => {
    const snap = snapshot.render(
        <>
            <Grid.Row>
                <Grid.Col size={1}>1</Grid.Col>
                <Grid.Col size={1}>1</Grid.Col>
                <Grid.Col size={1}>1</Grid.Col>
                <Grid.Col size={1}>1</Grid.Col>
                <Grid.Col size={1}>1</Grid.Col>
                <Grid.Col size={1}>1</Grid.Col>
                <Grid.Col size={1}>1</Grid.Col>
                <Grid.Col size={1}>1</Grid.Col>
                <Grid.Col size={1}>1</Grid.Col>
                <Grid.Col size={1}>1</Grid.Col>
                <Grid.Col size={1}>1</Grid.Col>
                <Grid.Col size={1}>1</Grid.Col>
            </Grid.Row>
            <Grid.Row>
                <Grid.Col size={6}>One of two columns</Grid.Col>
                <Grid.Col size={6}>One of two columns</Grid.Col>
            </Grid.Row>
            <Grid.Row>
                <Grid.Col size={4}>One of three columns</Grid.Col>
                <Grid.Col size={4}>One of three columns</Grid.Col>
                <Grid.Col size={4}>One of three columns</Grid.Col>
            </Grid.Row>
            <Grid.Row>
                <Grid.Col size={3}>One of four columns</Grid.Col>
                <Grid.Col size={3}>One of four columns</Grid.Col>
                <Grid.Col size={3}>One of four columns</Grid.Col>
                <Grid.Col size={3}>One of four columns</Grid.Col>
            </Grid.Row>
        </>
    );
    expect(snap).toMatchSnapshot();
});

test('Grid w/ columnGap', () => {
    const snap = snapshot.render(
        <>
            <Grid.Row>
                <Grid.Col size={1}>24</Grid.Col>
                <Grid.Col size={1}>24</Grid.Col>
                <Grid.Col size={1}>24</Grid.Col>
                <Grid.Col size={1}>24</Grid.Col>
                <Grid.Col size={1}>24</Grid.Col>
                <Grid.Col size={1}>24</Grid.Col>
                <Grid.Col size={1}>24</Grid.Col>
                <Grid.Col size={1}>24</Grid.Col>
                <Grid.Col size={1}>24</Grid.Col>
                <Grid.Col size={1}>24</Grid.Col>
                <Grid.Col size={1}>24</Grid.Col>
                <Grid.Col size={1}>24</Grid.Col>
            </Grid.Row>
            <Grid.Row columnGap='12px'>
                <Grid.Col size={1}>12</Grid.Col>
                <Grid.Col size={1}>12</Grid.Col>
                <Grid.Col size={1}>12</Grid.Col>
                <Grid.Col size={1}>12</Grid.Col>
                <Grid.Col size={1}>12</Grid.Col>
                <Grid.Col size={1}>12</Grid.Col>
                <Grid.Col size={1}>12</Grid.Col>
                <Grid.Col size={1}>12</Grid.Col>
                <Grid.Col size={1}>12</Grid.Col>
                <Grid.Col size={1}>12</Grid.Col>
                <Grid.Col size={1}>12</Grid.Col>
                <Grid.Col size={1}>12</Grid.Col>
            </Grid.Row>
            <Grid.Row columnGap='5px'>
                <Grid.Col size={1}>5</Grid.Col>
                <Grid.Col size={1}>5</Grid.Col>
                <Grid.Col size={1}>5</Grid.Col>
                <Grid.Col size={1}>5</Grid.Col>
                <Grid.Col size={1}>5</Grid.Col>
                <Grid.Col size={1}>5</Grid.Col>
                <Grid.Col size={1}>5</Grid.Col>
                <Grid.Col size={1}>5</Grid.Col>
                <Grid.Col size={1}>5</Grid.Col>
                <Grid.Col size={1}>5</Grid.Col>
                <Grid.Col size={1}>5</Grid.Col>
                <Grid.Col size={1}>5</Grid.Col>
            </Grid.Row>
            <Grid.Row columnGap='0'>
                <Grid.Col size={1}>0</Grid.Col>
                <Grid.Col size={1}>0</Grid.Col>
                <Grid.Col size={1}>0</Grid.Col>
                <Grid.Col size={1}>0</Grid.Col>
                <Grid.Col size={1}>0</Grid.Col>
                <Grid.Col size={1}>0</Grid.Col>
                <Grid.Col size={1}>0</Grid.Col>
                <Grid.Col size={1}>0</Grid.Col>
                <Grid.Col size={1}>0</Grid.Col>
                <Grid.Col size={1}>0</Grid.Col>
                <Grid.Col size={1}>0</Grid.Col>
                <Grid.Col size={1}>0</Grid.Col>
            </Grid.Row>
        </>
    );
    expect(snap).toMatchSnapshot();
});

test('Grid w/ rowGap', () => {
    const snap = snapshot.render(
        <>
            <Grid.Row rowGap='5px'>
                <Grid.Col size={12}>5px row gap</Grid.Col>
            </Grid.Row>
            <Grid.Row rowGap='10px'>
                <Grid.Col size={12}>10px row gap</Grid.Col>
            </Grid.Row>
            <Grid.Row>
                <Grid.Col size={12}>No row gap</Grid.Col>
            </Grid.Row>
            <Grid.Row>
                <Grid.Col size={12}>No row gap</Grid.Col>
            </Grid.Row>
        </>
    );
    expect(snap).toMatchSnapshot();
});

test('Grid w/ offset', () => {
    const snap = snapshot.render(
        <>
            <Grid.Row>
                <Grid.Col offset={11} size={1}>
                    1
                </Grid.Col>
                <Grid.Col offset={10} size={2}>
                    2
                </Grid.Col>
                <Grid.Col offset={9} size={3}>
                    3
                </Grid.Col>
                <Grid.Col offset={8} size={4}>
                    4
                </Grid.Col>
                <Grid.Col offset={7} size={5}>
                    5
                </Grid.Col>
                <Grid.Col offset={6} size={6}>
                    6
                </Grid.Col>
                <Grid.Col offset={5} size={7}>
                    7
                </Grid.Col>
                <Grid.Col offset={4} size={8}>
                    8
                </Grid.Col>
                <Grid.Col offset={3} size={9}>
                    9
                </Grid.Col>
                <Grid.Col offset={2} size={10}>
                    10
                </Grid.Col>
                <Grid.Col offset={1} size={11}>
                    11
                </Grid.Col>
            </Grid.Row>
            <Grid.Row>
                <Grid.Col offset={3} size={3}>
                    offset: 3
                </Grid.Col>
                <Grid.Col offset={2} size={3}>
                    offset: 2
                </Grid.Col>
            </Grid.Row>
            <Grid.Row>
                <Grid.Col size={3}>size 3</Grid.Col>
                <Grid.Col offset={3} size={2}>
                    size 2
                </Grid.Col>
                <Grid.Col offset={3} size={1}>
                    1
                </Grid.Col>
            </Grid.Row>
        </>
    );
    expect(snap).toMatchSnapshot();
});

test('Grid adaptive', () => {
    const sizes: any = [
        { xs: 12, s: 10, m: 8, l: 6, xl: 4 },
        { xs: 12, s: 2, m: 4, l: 6, xl: 8 },
        { xs: 12, s: 2, m: 4, l: 6, xl: 8 },
        { xs: 12, s: 2, m: 4, l: 6, xl: 8 },
        { xs: 12, s: 2, m: 4, l: 2, xl: 3 },
    ];

    const snap = snapshot.render(
        <>
            <Grid.Row>
                <Grid.Col size={sizes[0]}>1</Grid.Col>
                <Grid.Col size={sizes[1]}>2</Grid.Col>
            </Grid.Row>
            <Grid.Row>
                <Grid.Col size={sizes[2]} offset={sizes[3]}>
                    1
                </Grid.Col>
                <Grid.Col size={sizes[4]}>2</Grid.Col>
            </Grid.Row>
        </>
    );
    expect(snap).toMatchSnapshot();
});

test('Grid w align', () => {
    const snap = snapshot.render(
        <>
            <Grid.Row align='left'>
                <Grid.Col size={2}>1</Grid.Col>
                <Grid.Col size={2}>1</Grid.Col>
                <Grid.Col size={2}>1</Grid.Col>
            </Grid.Row>
            <Grid.Row align='center'>
                <Grid.Col size={2}>1</Grid.Col>
                <Grid.Col size={2}>1</Grid.Col>
                <Grid.Col size={2}>1</Grid.Col>
            </Grid.Row>
            <Grid.Row align='right'>
                <Grid.Col size={2}>1</Grid.Col>
                <Grid.Col size={2}>1</Grid.Col>
                <Grid.Col size={2}>1</Grid.Col>
            </Grid.Row>
            <Grid.Row align='around'>
                <Grid.Col size={2}>1</Grid.Col>
                <Grid.Col size={2}>1</Grid.Col>
                <Grid.Col size={2}>1</Grid.Col>
            </Grid.Row>
            <Grid.Row align='between'>
                <Grid.Col size={2}>1</Grid.Col>
                <Grid.Col size={2}>1</Grid.Col>
                <Grid.Col size={2}>1</Grid.Col>
            </Grid.Row>
            <Grid.Row align='stretch'>
                <Grid.Col>1</Grid.Col>
                <Grid.Col>1</Grid.Col>
                <Grid.Col>1</Grid.Col>
            </Grid.Row>
        </>
    );
    expect(snap).toMatchSnapshot();
});

test('Grid w valign', () => {
    const snap = snapshot.render(
        <>
            <Grid.Row valign='top'>
                <Grid.Col size={6}>Tall column</Grid.Col>
                <Grid.Col size={6}>top</Grid.Col>
            </Grid.Row>
            <Grid.Row valign='middle'>
                <Grid.Col size={6}>Tall column</Grid.Col>
                <Grid.Col size={6}>middle</Grid.Col>
            </Grid.Row>
            <Grid.Row valign='bottom'>
                <Grid.Col size={6}>Tall column</Grid.Col>
                <Grid.Col size={6}>bottom</Grid.Col>
            </Grid.Row>
            <Grid.Row>
                <Grid.Col size={6}>Tall column</Grid.Col>
                <Grid.Col size={6}>bottom</Grid.Col>
            </Grid.Row>
        </>
    );
    expect(snap).toMatchSnapshot();
});
