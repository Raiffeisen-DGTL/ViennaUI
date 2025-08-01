import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from '../Accordion';
import { Button } from '../../Button';

describe('Accordion', () => {
    beforeEach(() => jest.resetModules());
    afterEach(cleanup);

    it('should  be open', () => {
        const component = (
            <Accordion>
                <Accordion.Item open header='header' testId={{ header: 'Item.Header', content: 'Item.Content' }}>
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

    it('should open correctly', async () => {
        const component = (
            <Accordion>
                <Accordion.Item header='header' testId={{ header: 'Item.Header', content: 'Item.Content' }}>
                    <Button />
                </Accordion.Item>
            </Accordion>
        );

        render(component);
        const header = screen.getByTestId('Item.Header');

        await userEvent.click(header);
        const content = screen.getByTestId('Item.Content');
        expect(header).toBeInTheDocument();
        expect(content).toBeInTheDocument();
    });

    it('should close correctly', async () => {
        const component = (
            <Accordion>
                <Accordion.Item header='header' testId={{ header: 'Item.Header' }}>
                    <Button />
                </Accordion.Item>
            </Accordion>
        );

        render(component);
        const header = screen.getByTestId('Item.Header');

        await userEvent.click(header);
        await userEvent.click(header);
        expect(header).toBeInTheDocument();
    });
});
