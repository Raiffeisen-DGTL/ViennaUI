import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading, Text, H1, H2, H3, H4, H5, H6, P, Span } from '../Typography';

describe('Heading', () => {
    xit('w/ any props', async () => {
        const props = { id: 'id', title: 'title' };
        render(
            <>
                <Heading {...props}>Условия обработки персональных данных</Heading>
                <H1 {...props}>Условия обработки персональных данных</H1>
                <H2 {...props}>Условия обработки персональных данных</H2>
                <H3 {...props}>Условия обработки персональных данных</H3>
                <H4 {...props}>Условия обработки персональных данных</H4>
                <H5 {...props}>Условия обработки персональных данных</H5>
                <H6 {...props}>Условия обработки персональных данных</H6>
            </>
        );
        const headings = screen.getAllByRole('heading');
        headings.forEach((heading) => {
            expect(heading).toBeInTheDocument();
            expect(heading).toHaveAttribute('id', 'id');
            expect(heading).toHaveAttribute('title', 'title');
        });
    });
});
describe('Text', () => {
    xit('w/ P any props', async () => {
        const props = { id: 'id', title: 'title' };
        render(<P {...props}>Условия обработки персональных данных</P>);
        const text = screen.getByTestId('P');
        const heading = screen.queryByRole('heading');
        expect(heading).not.toBeInTheDocument();
        expect(text).toBeInTheDocument();
        expect(text).toHaveAttribute('id', 'id');
        expect(text).toHaveAttribute('title', 'title');
    });
    xit('w/ Text any props', async () => {
        const props = { id: 'id', title: 'title' };
        render(<Text {...props}>Условия обработки персональных данных</Text>);
        const text = screen.getByTestId('Text');
        const heading = screen.queryByRole('heading');
        expect(heading).not.toBeInTheDocument();
        expect(text).toBeInTheDocument();
        expect(text).toHaveAttribute('id', 'id');
        expect(text).toHaveAttribute('title', 'title');
    });
    xit('w/ Span any props', async () => {
        const props = { id: 'id', title: 'title' };
        render(<Span {...props}>Условия обработки персональных данных</Span>);
        const text = screen.getByTestId('Span');
        const heading = screen.queryByRole('heading');
        expect(heading).not.toBeInTheDocument();
        expect(text).toBeInTheDocument();
        expect(text).toHaveAttribute('id', 'id');
        expect(text).toHaveAttribute('title', 'title');
    });
});
