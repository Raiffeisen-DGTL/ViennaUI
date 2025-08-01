import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Carousel, CarouselProps } from '../Carousel';

const mockItems = [
    {
        id: '0',
        render: () => <div>Card 1</div>,
    },
    {
        id: '1',
        render: () => <div>Card 2</div>,
    },
    {
        id: '2',
        render: () => <div>Card 3</div>,
    },
    {
        id: '3',
        render: () => <div>Card 4</div>,
    },
    {
        id: '4',
        render: () => <div>Card 5</div>,
    },
    {
        id: '5',
        render: () => <div>Card 6</div>,
    },
];

const defaultProps: CarouselProps = {
    header: 'Test Carousel',
    carouselMode: { mode: 'fill', itemsVisible: 3 },
    items: mockItems,
    flipByOne: true,
    dragToFlip: false,
    testId: {
        leftBtn: 'carousel-left-button',
        rightBtn: 'carousel-right-button',
        track: 'carousel-track',
        item: (item) => `carousel-item-${item.id}`,
    },
};

describe('Carousel Component', () => {
    test('renders correctly', () => {
        render(<Carousel {...defaultProps} />);
        expect(screen.getByText('Test Carousel')).toBeInTheDocument();
        expect(screen.getByTestId('carousel-left-button')).toBeInTheDocument();
        expect(screen.getByTestId('carousel-right-button')).toBeInTheDocument();
    });

    test('handles next button click', async () => {
        render(<Carousel {...defaultProps} />);
        const nextButton = screen.getByTestId('carousel-right-button');

        await act(async () => {
            await userEvent.click(nextButton);
        });

        await waitFor(() => {
            expect(screen.getByTestId('carousel-item-2')).toBeInTheDocument();
        });

        expect(screen.getByTestId('carousel-left-button')).not.toBeDisabled();
    });

    test('handles drag', async () => {
        render(<Carousel {...defaultProps} dragToFlip />);
        const track = screen.getByTestId('carousel-track');

        await act(async () => {
            fireEvent.mouseDown(track, { clientX: 200 });
            fireEvent.mouseMove(track, { clientX: 100 });
            fireEvent.mouseUp(track);
        });

        await waitFor(() => {
            expect(screen.getByTestId('carousel-item-2')).toBeInTheDocument();
        });
    });

    it('should call onClickNext when next button is clicked', async () => {
        const onClickNext = jest.fn();
        const { getByTestId } = render(<Carousel {...defaultProps} onClickNext={onClickNext} />);
        fireEvent.click(getByTestId('carousel-right-button'));
        expect(onClickNext).toHaveBeenCalled();
    });

    it('should call onClickPrev when prev button is clicked', () => {
        const onClickPrev = jest.fn();
        const { getByTestId } = render(<Carousel {...defaultProps} onClickPrev={onClickPrev} />);
        fireEvent.click(getByTestId('carousel-left-button'));
        expect(onClickPrev).toHaveBeenCalled();
    });
});
