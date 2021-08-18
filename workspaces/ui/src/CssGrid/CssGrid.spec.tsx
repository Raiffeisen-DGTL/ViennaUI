import React from 'react';
import { CssGrid, CssGridProps } from './CssGrid';

const getSnaps = (components: any[]) => components.map((component) => snapshot.render(component));

describe('CssGrid shots', () => {
    test('base', async () => {
        const component = (
            <CssGrid height='100%' templateColumns='100px auto 100px' templateRows='100px auto 50px'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </CssGrid>
        );
        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();
    });

    test('w/ inline', async () => {
        const component = (
            <CssGrid height='100%' templateColumns='100px auto 100px' templateRows='100px auto 50px' inline>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </CssGrid>
        );
        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();
    });

    test('w/ justifyItems', async () => {
        const justifyItems: CssGridProps['justifyItems'][] = ['start', 'end', 'center', 'stretch'];

        const components = justifyItems.map((ji, index) => (
            <CssGrid
                key={index}
                height='100%'
                templateColumns='100px auto 100px'
                templateRows='100px auto 50px'
                justifyItems={ji}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </CssGrid>
        ));
        const snaps = getSnaps(components);
        snaps.forEach((snap) => expect(snap).toMatchSnapshot());
    });

    test('w/ alignItems', async () => {
        const alignItems: CssGridProps['alignItems'][] = ['start', 'end', 'center', 'stretch'];

        const components = alignItems.map((ai, index) => (
            <CssGrid
                key={index}
                height='100%'
                templateColumns='100px auto 100px'
                templateRows='100px auto 50px'
                alignItems={ai}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </CssGrid>
        ));
        const snaps = getSnaps(components);
        snaps.forEach((snap) => expect(snap).toMatchSnapshot());
    });

    test('w/ placeItems', async () => {
        const component = (
            <CssGrid
                height='100%'
                templateColumns='100px auto 100px'
                templateRows='100px auto 50px'
                placeItems='center stretch'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </CssGrid>
        );
        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();
    });

    test('w/ justifyContent', async () => {
        const justifyContent: CssGridProps['justifyContent'][] = [
            'start',
            'end',
            'center',
            'stretch',
            'space-around',
            'space-between',
            'space-evenly',
        ];

        const components = justifyContent.map((jc, index) => (
            <CssGrid
                key={index}
                height='100%'
                templateColumns='100px auto 100px'
                templateRows='100px auto 50px'
                justifyContent={jc}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </CssGrid>
        ));

        const snaps = getSnaps(components);
        snaps.forEach((snap) => expect(snap).toMatchSnapshot());
    });

    test('w/ alignContent', async () => {
        const alignContent: CssGridProps['alignContent'][] = [
            'start',
            'end',
            'center',
            'stretch',
            'space-around',
            'space-between',
            'space-evenly',
        ];

        const components = alignContent.map((ac, index) => (
            <CssGrid
                key={index}
                height='100%'
                templateColumns='100px auto 100px'
                templateRows='100px auto 50px'
                alignContent={ac}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </CssGrid>
        ));

        const snaps = getSnaps(components);
        snaps.forEach((snap) => expect(snap).toMatchSnapshot());
    });

    test('w/ placeContent', async () => {
        const component = (
            <CssGrid
                height='100%'
                templateColumns='100px auto 100px'
                templateRows='100px auto 50px'
                placeContent='end space-between'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </CssGrid>
        );
        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();
    });

    test('w/ autoFlow', async () => {
        const autoFlows: CssGridProps['autoFlow'][] = ['row', 'column', 'row dense', 'column dense'];

        const components = autoFlows.map((af, index) => (
            <CssGrid
                key={index}
                height='100%'
                templateColumns='100px auto 100px'
                templateRows='100px auto 50px'
                autoFlows={af}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </CssGrid>
        ));
        const snaps = getSnaps(components);
        snaps.forEach((snap) => expect(snap).toMatchSnapshot());
    });

    test('w/ dimensions', async () => {
        const component = (
            <CssGrid
                height='100px'
                maxHeight='300px'
                width='500px'
                maxWidth='1000px'
                templateColumns='100px auto 100px'
                templateRows='100px auto 50px'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </CssGrid>
        );
        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();
    });

    test('w/ gap', async () => {
        const gaps: CssGridProps['gap'][] = [
            's1',
            's2',
            's3',
            's4',
            's5',
            's6',
            's7',
            's8',
            's9',
            's10',
            's11',
            's12',
            's13',
            's14',
            's15',
            's16',
        ];

        const components = gaps.map((gap, index) => (
            <CssGrid
                key={index}
                height='100%'
                templateColumns='100px auto 100px'
                templateRows='100px auto 50px'
                rowGap={gap}
                columnGap={gap}
                gap={gap}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </CssGrid>
        ));
        const snaps = getSnaps(components);
        snaps.forEach((snap) => expect(snap).toMatchSnapshot());
    });

    test('w/ Item', async () => {
        const component = (
            <CssGrid height='100%' templateColumns='100px auto 100px' templateRows='100px auto auto 50px'>
                <CssGrid.Item columnStart='1' columnEnd='1' row='1'>
                    header
                </CssGrid.Item>
                <CssGrid.Item column='1' rowStart='2' rowEnd='4'>
                    sidebar
                </CssGrid.Item>
                <CssGrid.Item area='content' column='2 / 3' row='2 / 3' width='300px' mwxWidth='500px'>
                    content
                </CssGrid.Item>
                <CssGrid.Item area='toolbar' row='2/3' column='4'>
                    toolbar
                </CssGrid.Item>
                <CssGrid.Item area='footer' row='4' column='1/4'>
                    footer
                </CssGrid.Item>
            </CssGrid>
        );
        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();
    });

    test('w/ Item & templateAreas', async () => {
        const component = (
            <CssGrid
                height='450px'
                templateColumns='100px auto 100px'
                templateRows='50px 40% 40% 50px'
                templateAreas={[
                    'header header header',
                    'sidebar content toolbar',
                    'sidebar content2 toolbar',
                    'footer footer2 footer3',
                ]}>
                <CssGrid.Item area='header' justifySelf='start' alignSelf='start'>
                    1
                </CssGrid.Item>
                <CssGrid.Item area='sidebar' height='100px' maxHeight='200px'>
                    2
                </CssGrid.Item>
                <CssGrid.Item area='content' width='300px' mwxWidth='500px'>
                    3
                </CssGrid.Item>
                <CssGrid.Item area='content2' placeSelf='center center'>
                    4
                </CssGrid.Item>
                <CssGrid.Item area='toolbar'>5</CssGrid.Item>
                <CssGrid.Item area='footer'>6</CssGrid.Item>
                <CssGrid.Item area='footer2'>7</CssGrid.Item>
                <CssGrid.Item area='footer3'>8</CssGrid.Item>
            </CssGrid>
        );
        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();
    });

    test('CSSGrid w/ whitespace', async () => {
        const component = (
            <CssGrid
                height='100%'
                templateColumns='100px auto 100px'
                templateRows='100px auto auto 50px'
                mx='s3'
                my='s2'
                p='s2'>
                <CssGrid.Item columnStart='1' columnEnd='1' row='1' p='s1'>
                    header
                </CssGrid.Item>
                <CssGrid.Item column='1' rowStart='2' rowEnd='4' p='s2'>
                    sidebar
                </CssGrid.Item>
                <CssGrid.Item area='content' column='2 / 3' row='2 / 3' width='300px' mwxWidth='500px'>
                    content
                </CssGrid.Item>
                <CssGrid.Item area='toolbar' row='2/3' column='4' p='1rem'>
                    toolbar
                </CssGrid.Item>
                <CssGrid.Item area='footer' row='4' column='1/4' p='20px'>
                    footer
                </CssGrid.Item>
            </CssGrid>
        );
        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();
    });
});
