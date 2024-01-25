import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from '../Accordion';
import { Button } from '../../Button';

describe('Accordion', () => {
    beforeEach(() => jest.resetModules());
    afterEach(cleanup);

    xit('should  be open', () => {
        const component = (
            <Accordion>
                <Accordion.Item open header='header'>
                    <Button />
                </Accordion.Item>
            </Accordion>
        );

        render(component);
        const header = screen.getByTestId('Item.Header');
        const content = screen.getByTestId('Item.Content');
        expect(header).toBeInTheDocument();
        expect(content).toBeInTheDocument();
    });

    xit('should open correctly', () => {
        const component = (
            <Accordion>
                <Accordion.Item header='header'>
                    <Button />
                </Accordion.Item>
            </Accordion>
        );

        render(component);
        const header = screen.getByTestId('Item.Header');

        userEvent.click(header);
        const content = screen.getByTestId('Item.Content');
        expect(header).toBeInTheDocument();
        expect(content).toBeInTheDocument();
    });

    xit('should close correctly', () => {
        const component = (
            <Accordion>
                <Accordion.Item header='header'>
                    <Button />
                </Accordion.Item>
            </Accordion>
        );

        render(component);
        const header = screen.getByTestId('Item.Header');

        userEvent.click(header);
        userEvent.click(header);
        expect(header).toBeInTheDocument();
    });

    xit('should be disabled', () => {
        const component = (
            <Accordion>
                <Accordion.Item disabled header='header'>
                    <Button />
                </Accordion.Item>
            </Accordion>
        );

        render(component);
        const header = screen.getByTestId('Item.Header');
        expect(header).toBeInTheDocument();
        expect(header).toHaveAttribute('disabled');
    });
});
