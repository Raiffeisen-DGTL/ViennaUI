import React, { useEffect } from 'react';
import { Story, Meta } from 'storybook';
import { Carousel, CarouselControlsRef } from './Carousel';
import { CardVersatile } from '../CardVersatile';
import { Groups } from '../Groups';
import { Hint } from '../Hint';
import { H5 } from '../Typography';
import { Button } from '../Button';

export default {
    title: 'Development/Carousel',
    component: Carousel,
    argTypes: {
        buttonDesign: { control: 'select' },
        itemsVisible: { control: 'number' },
        flipByOne: { control: 'boolean' },
        dragToFlip: { control: 'boolean' },
        itemWidth: { control: 'number' },
    },
} as Meta;

export const Overview: Story = (args) => {
    return (
        <Groups design='vertical'>
            <Carousel
                onClickNext={() => {
                    console.log('click next');
                }}
                onClickPrev={() => {
                    console.log('click prev');
                }}
                carouselMode={{ mode: 'fill', itemsVisible: 4 }}
                header={<H5>Fill</H5>}
                postfix={<Hint action='hover' header='Едят ли кошки мошек?' content='Едят ли мошки кошек?' />}
                dragToFlip
                items={[
                    {
                        id: '1',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '2',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '3',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '4',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '5',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '6',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                ]}></Carousel>

            <Carousel
                carouselMode={{ mode: 'fixed', itemWidth: 250 }}
                header={<H5>Fixed</H5>}
                items={[
                    {
                        id: '1',
                        render: () => (
                            <CardVersatile design='stroke' disableDivider title='Card title 1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '2',
                        render: () => (
                            <CardVersatile design='stroke' disableDivider title='Card title 2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '3',
                        render: () => (
                            <CardVersatile design='stroke' disableDivider title='Card title 3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '4',
                        render: () => (
                            <CardVersatile design='stroke' disableDivider title='Card title 4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '5',
                        render: () => (
                            <CardVersatile design='stroke' disableDivider title='Card title 5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '6',
                        render: () => (
                            <CardVersatile design='stroke' disableDivider title='Card title 6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                ]}></Carousel>
        </Groups>
    );
};

export const FillMode: Story = (args) => {
    return (
        <Carousel
            {...args}
            carouselMode={{ mode: 'fill', itemsVisible: 4 }}
            flipByOne
            header={<H5>Fill</H5>}
            postfix={<Hint action='hover' header='Едят ли кошки мошек?' content='Едят ли мошки кошек?' />}
            dragToFlip
            items={[
                {
                    id: '1',
                    render: () => (
                        <CardVersatile disableDivider design='stroke' title='Card title 1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                            bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit
                            amet turpis vitae, mattis congue neque.
                        </CardVersatile>
                    ),
                },
                {
                    id: '2',
                    render: () => (
                        <CardVersatile disableDivider design='stroke' title='Card title 2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                            bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit
                            amet turpis vitae, mattis congue neque.
                        </CardVersatile>
                    ),
                },
                {
                    id: '3',
                    render: () => (
                        <CardVersatile disableDivider design='stroke' title='Card title 3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                            bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit
                            amet turpis vitae, mattis congue neque.
                        </CardVersatile>
                    ),
                },
                {
                    id: '4',
                    render: () => (
                        <CardVersatile disableDivider design='stroke' title='Card title 4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                            bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit
                            amet turpis vitae, mattis congue neque.
                        </CardVersatile>
                    ),
                },
                {
                    id: '5',
                    render: () => (
                        <CardVersatile disableDivider design='stroke' title='Card title 5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                            bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit
                            amet turpis vitae, mattis congue neque.
                        </CardVersatile>
                    ),
                },
                {
                    id: '6',
                    render: () => (
                        <CardVersatile disableDivider design='stroke' title='Card title 6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                            bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit
                            amet turpis vitae, mattis congue neque.
                        </CardVersatile>
                    ),
                },
            ]}></Carousel>
    );
};

export const FixedMode: Story = (args) => {
    return (
        <Carousel
            {...args}
            carouselMode={{ mode: 'fixed', itemWidth: 300 }}
            header={<H5>Fixed</H5>}
            items={[
                {
                    id: '1',
                    render: () => (
                        <CardVersatile design='stroke' disableDivider title='Card title 1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                            bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit
                            amet turpis vitae, mattis congue neque.
                        </CardVersatile>
                    ),
                },
                {
                    id: '2',
                    render: () => (
                        <CardVersatile design='stroke' disableDivider title='Card title 2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                            bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit
                            amet turpis vitae, mattis congue neque.
                        </CardVersatile>
                    ),
                },
                {
                    id: '3',
                    render: () => (
                        <CardVersatile design='stroke' disableDivider title='Card title 3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                            bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit
                            amet turpis vitae, mattis congue neque.
                        </CardVersatile>
                    ),
                },
                {
                    id: '4',
                    render: () => (
                        <CardVersatile design='stroke' disableDivider title='Card title 4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                            bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit
                            amet turpis vitae, mattis congue neque.
                        </CardVersatile>
                    ),
                },
                {
                    id: '5',
                    render: () => (
                        <CardVersatile design='stroke' disableDivider title='Card title 5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                            bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit
                            amet turpis vitae, mattis congue neque.
                        </CardVersatile>
                    ),
                },
                {
                    id: '6',
                    render: () => (
                        <CardVersatile design='stroke' disableDivider title='Card title 6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                            bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit
                            amet turpis vitae, mattis congue neque.
                        </CardVersatile>
                    ),
                },
            ]}></Carousel>
    );
};

export const AddDeleteCards: Story = (args) => {
    const items = [
        {
            id: '1',
            render: () => (
                <CardVersatile design='stroke' disableDivider title='Card title 1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                    bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit amet
                    turpis vitae, mattis congue neque.
                </CardVersatile>
            ),
        },
        {
            id: '2',
            render: () => (
                <CardVersatile design='stroke' disableDivider title='Card title 2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                    bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit amet
                    turpis vitae, mattis congue neque.
                </CardVersatile>
            ),
        },
        {
            id: '3',
            render: () => (
                <CardVersatile design='stroke' disableDivider title='Card title 3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                    bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit amet
                    turpis vitae, mattis congue neque.
                </CardVersatile>
            ),
        },
        {
            id: '4',
            render: () => (
                <CardVersatile design='stroke' disableDivider title='Card title 4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                    bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit amet
                    turpis vitae, mattis congue neque.
                </CardVersatile>
            ),
        },
        {
            id: '5',
            render: () => (
                <CardVersatile design='stroke' disableDivider title='Card title 5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                    bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit amet
                    turpis vitae, mattis congue neque.
                </CardVersatile>
            ),
        },
        {
            id: '6',
            render: () => (
                <CardVersatile design='stroke' disableDivider title='Card title 6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                    bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit amet
                    turpis vitae, mattis congue neque.
                </CardVersatile>
            ),
        },
    ];
    const [value, setValue] = React.useState(items);

    const deleteitem = () => {
        setValue((prev) => prev.slice(0, -1));
    };

    const addItem = () => {
        setValue((prev) => [
            ...prev,
            {
                id: String(prev.length + 1),
                render: () => (
                    <CardVersatile design='stroke' disableDivider title={`Card title ${String(prev.length + 1)}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero, quis
                        bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien, sagittis sit amet
                        turpis vitae, mattis congue neque.
                    </CardVersatile>
                ),
            },
        ]);
    };
    return (
        <Groups design='vertical'>
            <Groups design='horizontal'>
                <Button onClick={addItem}>Add item</Button>
                <Button onClick={deleteitem}>Delete item </Button>
            </Groups>
            <Carousel
                {...args}
                carouselMode={{ mode: 'fixed', itemWidth: 300 }}
                dragToFlip
                header={<H5>Fixed 300px</H5>}
                items={value}></Carousel>
            <Carousel
                {...args}
                carouselMode={{ mode: 'fixed', itemWidth: 300 }}
                dragToFlip
                flipByOne
                header={<H5>Fixed 300px flipByOne</H5>}
                items={value}></Carousel>
            <Carousel
                {...args}
                carouselMode={{ mode: 'fixed', itemWidth: 500 }}
                dragToFlip
                header={<H5>Fixed 500px</H5>}
                items={value}></Carousel>
            <Carousel
                {...args}
                carouselMode={{ mode: 'fixed', itemWidth: 500 }}
                dragToFlip
                flipByOne
                header={<H5>Fixed flipByOne 500px</H5>}
                items={value}></Carousel>
            <Carousel
                {...args}
                carouselMode={{ mode: 'fill', itemsVisible: 3 }}
                dragToFlip
                header={<H5>Fill 3 items </H5>}
                items={value}></Carousel>
            <Carousel
                {...args}
                carouselMode={{ mode: 'fill', itemsVisible: 3 }}
                dragToFlip
                flipByOne
                header={<H5>Fill 3 items flipByOne</H5>}
                items={value}></Carousel>
            <Carousel
                {...args}
                carouselMode={{ mode: 'fill', itemsVisible: 1 }}
                dragToFlip
                header={<H5>Fill 1 items </H5>}
                items={value}></Carousel>
            <Carousel
                {...args}
                carouselMode={{ mode: 'fill', itemsVisible: 1 }}
                dragToFlip
                flipByOne
                header={<H5>Fill 1 items flipByOne</H5>}
                items={value}></Carousel>
            <Carousel
                {...args}
                carouselMode={{ mode: 'fill', itemsVisible: 4 }}
                dragToFlip
                header={<H5>Fill 4 items </H5>}
                items={value}></Carousel>
            <Carousel
                {...args}
                carouselMode={{ mode: 'fill', itemsVisible: 4 }}
                dragToFlip
                flipByOne
                header={<H5>Fill 4 items flipByOne</H5>}
                items={value}></Carousel>
            <Carousel
                {...args}
                carouselMode={{ mode: 'fill', itemsVisible: 6 }}
                dragToFlip
                header={<H5>Fill 6 items </H5>}
                items={value}></Carousel>
            <Carousel
                {...args}
                carouselMode={{ mode: 'fill', itemsVisible: 6 }}
                dragToFlip
                flipByOne
                header={<H5>Fill 6 items flipByOne</H5>}
                items={value}></Carousel>
        </Groups>
    );
};

export const Autoplay: Story = (args) => {
    const controlsRef = React.useRef<CarouselControlsRef | null>(null);
    const intervalId = React.useRef<NodeJS.Timeout | null>(null);
    const clearCurrentInterval = () => {
        if (intervalId.current) {
            clearInterval(intervalId.current);
        }
    };
    const restartAutoplay = () => {
        if (!controlsRef.current) return;
        clearCurrentInterval();
        intervalId.current = setInterval(() => {
            controlsRef.current?.next();
        }, 3000);
    };
    useEffect(() => {
        restartAutoplay();
        return () => clearCurrentInterval();
    }, []);

    return (
        <Groups design='vertical'>
            <Carousel
                onClickNext={restartAutoplay}
                onClickPrev={restartAutoplay}
                carouselMode={{ mode: 'fill', itemsVisible: 4 }}
                header={<H5>Fill</H5>}
                postfix={<Hint action='hover' header='Едят ли кошки мошек?' content='Едят ли мошки кошек?' />}
                dragToFlip
                flipByOne
                controlsRef={controlsRef}
                items={[
                    {
                        id: '1',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '2',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '3',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '4',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '5',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                    {
                        id: '6',
                        render: () => (
                            <CardVersatile disableDivider design='stroke' title='Card title 6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus scelerisque libero,
                                quis bibendum ipsum molestie ut. Etiam eu efficitur felis. Maecenas lectus sapien,
                                sagittis sit amet turpis vitae, mattis congue neque.
                            </CardVersatile>
                        ),
                    },
                ]}></Carousel>
        </Groups>
    );
};
