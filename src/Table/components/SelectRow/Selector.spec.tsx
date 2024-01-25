/* eslint-disable import/first */

jest.mock('../Context');

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Selector } from './Selector';
import { useTableService, useTableConfig } from '../Context';

xit('Selector - custom checkbox', async () => {
    const mockData = {};

    (useTableService as jest.MockedFunction<typeof useTableService>).mockReturnValue({
        isRowSelected: () => true,
    } as any);
    //  TestingLibraryElementError: Unable to find an element by: [data-testid="test-checkbox"]
    const tcSelectionTemplate = jest.fn(() => <div data-marker='test-checkbox' />);
    (useTableConfig as jest.MockedFunction<typeof useTableConfig>).mockReturnValue({
        selection: {
            template: tcSelectionTemplate,
        },
    } as any);

    render(<Selector item={mockData} />);

    const element = await screen.findByTestId('test-checkbox');

    expect(element).not.toBeNull();

    expect(tcSelectionTemplate).toHaveBeenCalledWith(
        expect.objectContaining({
            data: mockData,
            isSelected: true,
            onClick: expect.any(Function),
            onChange: expect.any(Function),
        })
    );
});
