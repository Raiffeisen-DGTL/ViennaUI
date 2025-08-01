import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { H2, H4, CardVersatile, Flex, Skeleton, SkeletonProps } from '@/atlant';

type Story = StoryObj<typeof Skeleton>;

export default {
    title: 'Development/Skeleton',
    component: Skeleton,
    argTypes: {
        design: { control: 'select' },
        size: { control: 'radio' },
        disableAnimation: { control: 'boolean' },
        height: { control: 'number' },
        width: { control: 'number' },
        mode: { control: 'select' },
    },
    parameters: {
        controls: {
            include: ['design', 'size', 'width', 'height', 'disableAnimation', 'mode'],
        },
    },
} as Meta;

export const SkeletonSizes: Story = {
    render: (args) => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <H2>Size s</H2>
                <Skeleton {...args} design='line' size='s'></Skeleton>
                <Skeleton {...args} design='circle' size='s'></Skeleton>
                <Skeleton {...args} design='square' size='s'></Skeleton>
                <Skeleton {...args} design='block' height='50px'></Skeleton>
                <H2>Size m</H2>
                <Skeleton {...args} design='line' size='m'></Skeleton>
                <Skeleton {...args} design='circle' size='m'></Skeleton>
                <Skeleton {...args} design='square' size='m'></Skeleton>
                <Skeleton {...args} design='block' height='50px'></Skeleton>
                <H2>Size l</H2>
                <Skeleton {...args} design='line' size='l'></Skeleton>
                <Skeleton {...args} design='circle' size='l'></Skeleton>
                <Skeleton {...args} design='square' size='l'></Skeleton>
                <Skeleton {...args} design='block' height='50px'></Skeleton>
                <H2>Size xl</H2>
                <Skeleton {...args} design='line' size='xl'></Skeleton>
                <Skeleton {...args} design='circle' size='xl'></Skeleton>
                <Skeleton {...args} design='square' size='xl'></Skeleton>
                <Skeleton {...args} design='block' height='50px'></Skeleton>
            </div>
        );
    },
};

export const Layout1: Story = {
    render: () => {
        return (
            <Flex direction={'column'} gap='s6'>
                <Flex gap='s4'>
                    <Skeleton design='circle' size='xl'></Skeleton>
                    <Flex direction={'column'} gap='s4'>
                        <Skeleton design='line' size='s' width='616px'></Skeleton>
                        <Skeleton design='line' size='s' width='402px'></Skeleton>
                    </Flex>
                </Flex>
                <Flex gap='s4'>
                    <Skeleton design='circle' size='xl'></Skeleton>
                    <Flex direction={'column'} gap='s4'>
                        <Skeleton design='line' size='s' width='616px'></Skeleton>
                        <Skeleton design='line' size='s' width='402px'></Skeleton>
                    </Flex>
                </Flex>
                <Flex gap='s4'>
                    <Skeleton design='circle' size='xl'></Skeleton>
                    <Flex direction={'column'} gap='s4'>
                        <Skeleton design='line' size='s' width='616px'></Skeleton>
                        <Skeleton design='line' size='s' width='402px'></Skeleton>
                    </Flex>
                </Flex>
                <Skeleton design='line' size='l' width='144px'></Skeleton>
            </Flex>
        );
    },
};

export const Layout2: Story = {
    render: () => {
        return (
            <Flex direction={'column'} gap='s4'>
                <Flex gap='s3' paddingLeft='36px'>
                    <Flex.Item basis='267px'>
                        <Skeleton design='line' size='s' width='59.7%'></Skeleton>
                    </Flex.Item>
                    <Flex.Item basis='71px'>
                        <Skeleton design='line' size='s' width='71.8%'></Skeleton>
                    </Flex.Item>
                    <Flex.Item basis='320px'>
                        <Skeleton design='line' size='s' width='76.6%'></Skeleton>
                    </Flex.Item>
                    <Flex.Item basis='267px'>
                        <Skeleton design='line' size='s' width='59.7%'></Skeleton>
                    </Flex.Item>
                </Flex>
                <Flex gap='s3'>
                    <Skeleton design='square' size='m'></Skeleton>
                    <Skeleton design='line' size='m' width='269.5px'></Skeleton>
                    <Skeleton design='line' size='m' width='71px'></Skeleton>
                    <Skeleton design='line' size='m' width='320px'></Skeleton>
                    <Skeleton design='line' size='m' width='269.5px'></Skeleton>
                </Flex>
                <Flex gap='s3'>
                    <Skeleton design='square' size='m'></Skeleton>
                    <Skeleton design='line' size='m' width='269.5px'></Skeleton>
                    <Skeleton design='line' size='m' width='71px'></Skeleton>
                    <Skeleton design='line' size='m' width='320px'></Skeleton>
                    <Skeleton design='line' size='m' width='269.5px'></Skeleton>
                </Flex>
                <Flex gap='s3'>
                    <Skeleton design='square' size='m'></Skeleton>
                    <Skeleton design='line' size='m' width='269.5px'></Skeleton>
                    <Skeleton design='line' size='m' width='71px'></Skeleton>
                    <Skeleton design='line' size='m' width='320px'></Skeleton>
                    <Skeleton design='line' size='m' width='269.5px'></Skeleton>
                </Flex>
                <Flex gap='s3'>
                    <Skeleton design='square' size='m'></Skeleton>
                    <Skeleton design='line' size='m' width='269.5px'></Skeleton>
                    <Skeleton design='line' size='m' width='71px'></Skeleton>
                    <Skeleton design='line' size='m' width='320px'></Skeleton>
                    <Skeleton design='line' size='m' width='269.5px'></Skeleton>
                </Flex>
                <Flex gap='s3'>
                    <Skeleton design='square' size='m'></Skeleton>
                    <Skeleton design='line' size='m' width='269.5px'></Skeleton>
                    <Skeleton design='line' size='m' width='71px'></Skeleton>
                    <Skeleton design='line' size='m' width='320px'></Skeleton>
                    <Skeleton design='line' size='m' width='269.5px'></Skeleton>
                </Flex>
            </Flex>
        );
    },
};

export const Layout3: Story = {
    render: () => {
        return (
            <Flex direction={'column'} gap='s8'>
                <Flex>
                    <Skeleton design='line' width='769px'></Skeleton>
                </Flex>
                <Flex gap='s8'>
                    <Flex gap='s4' direction={'column'}>
                        <Flex gap='s4'>
                            <Skeleton design='square' size='xl'></Skeleton>
                            <Flex direction={'column'} gap='s4'>
                                <Skeleton design='line' width='240px' size='s'></Skeleton>
                                <Skeleton design='line' width='173px' size='s'></Skeleton>
                            </Flex>
                        </Flex>
                        <Skeleton design='block' width='300px' height='160px'></Skeleton>
                    </Flex>
                    <Flex gap='s4' direction={'column'}>
                        <Flex gap='s4'>
                            <Skeleton design='square' size='xl'></Skeleton>
                            <Flex direction={'column'} gap='s4'>
                                <Skeleton design='line' width='240px' size='s'></Skeleton>
                                <Skeleton design='line' width='173px' size='s'></Skeleton>
                            </Flex>
                        </Flex>
                        <Skeleton design='block' width='300px' height='160px'></Skeleton>
                    </Flex>
                    <Flex gap='s4' direction={'column'}>
                        <Flex gap='s4'>
                            <Skeleton design='square' size='xl'></Skeleton>
                            <Flex direction={'column'} gap='s4'>
                                <Skeleton design='line' width='240px' size='s'></Skeleton>
                                <Skeleton design='line' width='173px' size='s'></Skeleton>
                            </Flex>
                        </Flex>
                        <Skeleton design='block' width='300px' height='160px'></Skeleton>
                    </Flex>
                </Flex>
                <Flex gap='s2'>
                    <Skeleton design='line' width='190px' size='l'></Skeleton>
                    <Skeleton design='line' width='190px' size='l'></Skeleton>
                </Flex>
            </Flex>
        );
    },
};

export const SkeletonWithTimeout: Story = {
    render: () => {
        const [isLoading, setIsLoading] = React.useState(true);
        const [isLoading2, setIsLoading2] = React.useState(true);
        const [isLoading3, setIsLoading3] = React.useState(true);
        const [isLoading4, setIsLoading4] = React.useState(true);

        React.useEffect(() => {
            const timeout = setTimeout(() => {
                setIsLoading(false);
            }, 1000);

            return () => {
                clearTimeout(timeout);
            };
        }, []);

        React.useEffect(() => {
            const timeout = setTimeout(() => {
                setIsLoading2(false);
            }, 1500);

            return () => {
                clearTimeout(timeout);
            };
        }, []);

        React.useEffect(() => {
            const timeout = setTimeout(() => {
                setIsLoading3(false);
            }, 2000);

            return () => {
                clearTimeout(timeout);
            };
        }, []);

        React.useEffect(() => {
            const timeout = setTimeout(() => {
                setIsLoading4(false);
            }, 3000);

            return () => {
                clearTimeout(timeout);
            };
        }, []);
        return (
            <Flex direction='column' gap='s4'>
                <H4>Время загрузки 1 секунда</H4>
                {isLoading ? (
                    <Skeleton design='block' height='75px' />
                ) : (
                    <CardVersatile title=''>Какой-то текст</CardVersatile>
                )}
                <H4>Время загрузки 1,5 секунды</H4>
                {isLoading2 ? (
                    <Skeleton design='block' height='75px' />
                ) : (
                    <CardVersatile title=''>Какой-то текст</CardVersatile>
                )}
                <H4>Время загрузки 2 секунды</H4>
                {isLoading3 ? (
                    <Skeleton design='block' height='75px' />
                ) : (
                    <CardVersatile title=''>Какой-то текст</CardVersatile>
                )}
                <H4>Время загрузки 3 секунды</H4>
                {isLoading4 ? (
                    <Skeleton design='block' height='75px' />
                ) : (
                    <CardVersatile title=''>Какой-то текст</CardVersatile>
                )}
            </Flex>
        );
    },
};

export const SkeletonWithDarkMode: Story = {
    render: (args) => {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    width: '100%',
                    margin: '0 auto',
                    backgroundColor: '#2B2D33',
                    padding: '50px',
                }}>
                <H2 style={{ color: '#FFFFFF' }}>Size s</H2>
                <Skeleton {...args} design='line' size='s' mode='dark' width='80%'></Skeleton>
                <Skeleton {...args} design='circle' size='s' mode='dark'></Skeleton>
                <Skeleton {...args} design='square' size='s' mode='dark'></Skeleton>
                <Skeleton {...args} design='block' height='50px' mode='dark' width='80%'></Skeleton>
                <H2 style={{ color: '#FFFFFF' }}>Size m</H2>
                <Skeleton {...args} design='line' size='m' mode='dark' width='80%'></Skeleton>
                <Skeleton {...args} design='circle' size='m' mode='dark'></Skeleton>
                <Skeleton {...args} design='square' size='m' mode='dark'></Skeleton>
                <Skeleton {...args} design='block' height='50px' mode='dark' width='80%'></Skeleton>
                <H2 style={{ color: '#FFFFFF' }}>Size l</H2>
                <Skeleton {...args} design='line' size='l' mode='dark' width='80%'></Skeleton>
                <Skeleton {...args} design='circle' size='l' mode='dark'></Skeleton>
                <Skeleton {...args} design='square' size='l' mode='dark'></Skeleton>
                <Skeleton {...args} design='block' height='50px' mode='dark' width='80%'></Skeleton>
                <H2 style={{ color: '#FFFFFF' }}>Size xl</H2>
                <Skeleton {...args} design='line' size='xl' mode='dark' width='80%'></Skeleton>
                <Skeleton {...args} design='circle' size='xl' mode='dark'></Skeleton>
                <Skeleton {...args} design='square' size='xl' mode='dark'></Skeleton>
                <Skeleton {...args} design='block' height='50px' mode='dark' width='80%'></Skeleton>
            </div>
        );
    },
};
