import { render, screen } from '@testing-library/react';
import React from 'react';
import { Skeleton } from '../Skeleton';

describe('Skeleton tests', () => {
    test('Skeleton line renders', () => {
        render(<Skeleton data-testid={'skeleton-line'} design='line' />);
        const line = screen.getByTestId('skeleton-line');

        expect(line).toBeInTheDocument();
    });
    test('Skeleton block renders', () => {
        render(<Skeleton data-testid={'skeleton-block'} design='block' height='50px' />);
        const block = screen.getByTestId('skeleton-block');

        expect(block).toBeInTheDocument();
    });
    test('Skeleton circle renders', () => {
        render(<Skeleton data-testid={'skeleton-circle'} design='circle' />);
        const circle = screen.getByTestId('skeleton-circle');

        expect(circle).toBeInTheDocument();
    });
    test('Skeleton square renders', () => {
        render(<Skeleton data-testid={'skeleton-square'} design='square' />);
        const square = screen.getByTestId('skeleton-square');

        expect(square).toBeInTheDocument();
    });
});
