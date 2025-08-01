import React from 'react';
import { Sidebar } from '../index';
import { render, screen } from '@testing-library/react';

describe('Sidebar', () => {
    it('should pass disabled', () => {
        const component = (
            <Sidebar>
                <Sidebar.Item disabled data-testId={'Sidebar.Item'}>
                    Home
                </Sidebar.Item>
                <Sidebar.Item>Mail</Sidebar.Item>
                <Sidebar.Item>Documents</Sidebar.Item>
            </Sidebar>
        );

        render(component);
        const item = screen.getByTestId('Sidebar.Item');
        expect(item).toBeInTheDocument();
        expect(item).toHaveAttribute('disabled');
    });
});
