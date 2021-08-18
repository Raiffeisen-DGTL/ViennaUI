import React from 'react';
import Flex, { FlexProps } from './Flex';

describe('Flex shots', () => {
    test('w/o arguments', async () => {
        const component = (
            <Flex>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </Flex>
        );

        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();
    });

    const directions: FlexProps['direction'][] = ['column', 'column-reverse', 'row', 'row-reverse'];

    directions.forEach((dir) => {
        test('w/ direction', async () => {
            const component = (
                <Flex direction={dir}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </Flex>
            );

            const snap = snapshot.render(component);
            expect(snap).toMatchSnapshot();
        });
    });

    test('w/ inline', async () => {
        const component = (
            <Flex inline>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </Flex>
        );

        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();
    });

    test('w/ center', async () => {
        const component = (
            <Flex center>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </Flex>
        );

        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();
    });

    const justifyContent: FlexProps['justifyContent'][] = [
        'normal',
        'inherit',
        'initial',
        'unset',
        'center',
        'flex-start',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
        'stretch',
    ];

    justifyContent.forEach((jc) => {
        test('w/ justifyContent', async () => {
            const component = (
                <Flex justifyContent={jc}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </Flex>
            );

            const snap = snapshot.render(component);
            expect(snap).toMatchSnapshot();
        });
    });

    const alignItems: FlexProps['alignItems'][] = [
        'normal',
        'inherit',
        'initial',
        'unset',
        'center',
        'flex-start',
        'flex-end',
        'stretch',
        'self-start',
        'self-end',
        'baseline',
    ];

    alignItems.forEach((ai) => {
        test('w/ alignItems', async () => {
            const component = (
                <Flex alignItems={ai}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </Flex>
            );

            const snap = snapshot.render(component);
            expect(snap).toMatchSnapshot();
        });
    });

    const alignContent: FlexProps['alignContent'][] = [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
        'stretch',
        'baseline',
    ];

    alignContent.forEach((ac) => {
        test('w/ alignContent', async () => {
            const component = (
                <Flex alignContent={ac}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </Flex>
            );

            const snap = snapshot.render(component);
            expect(snap).toMatchSnapshot();
        });
    });

    const wrap: FlexProps['wrap'][] = ['wrap', 'nowrap', 'wrap-reverse'];

    wrap.forEach((w) => {
        test('w/ wrap', async () => {
            const component = (
                <Flex wrap={w}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </Flex>
            );

            const snap = snapshot.render(component);
            expect(snap).toMatchSnapshot();
        });
    });

    const gaps: FlexProps['gap'][] = [
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

    gaps.forEach((gap) => {
        test('w/ gap', async () => {
            const component = (
                <Flex gap={gap}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </Flex>
            );

            const snap = snapshot.render(component);
            expect(snap).toMatchSnapshot();
        });
    });

    test('w/ item', async () => {
        const component = (
            <Flex>
                <Flex.Item grow='1' order='2' alignSelf='flex-start'>
                    1
                </Flex.Item>
                <Flex.Item grow='2' order='3' alignSelf='center'>
                    2
                </Flex.Item>
                <Flex.Item basis='100px' shrink='1' order='4'>
                    3
                </Flex.Item>
                <Flex.Item basis='200px' order='1' alignSelf='flex-end'>
                    4
                </Flex.Item>
            </Flex>
        );

        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();
    });

    test('w/ whitespcae', async () => {
        const component = (
            <Flex mx='s3' my='s2' p='s2'>
                <Flex.Item grow='1' order='2' alignSelf='flex-start' p='s1'>
                    1
                </Flex.Item>
                <Flex.Item grow='2' order='3' alignSelf='center' p='s2'>
                    2
                </Flex.Item>
                <Flex.Item basis='100px' shrink='1' order='4' p='1rem'>
                    3
                </Flex.Item>
                <Flex.Item basis='200px' order='1' alignSelf='flex-end' p='20px'>
                    4
                </Flex.Item>
            </Flex>
        );
        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();
    });
});
