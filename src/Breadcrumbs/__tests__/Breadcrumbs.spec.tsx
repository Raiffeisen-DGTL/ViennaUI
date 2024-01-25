import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Breadcrumbs } from '../Breadcrumbs';

describe('Breadcrumbs', () => {
    it('should show altText', () => {
        const altText = 'text';
        render(
            <Breadcrumbs>
                <Breadcrumbs.Option>option 1</Breadcrumbs.Option>
                <Breadcrumbs.Option altText={altText}>option 2</Breadcrumbs.Option>
            </Breadcrumbs>
        );

        const [option] = screen.getAllByText(/option 2/i);
        userEvent.hover(option);
        const tooltip = screen.getByText(altText);
        expect(tooltip).toBeInTheDocument();
    });

    xit('should call onClickHome', () => {
        const fn = jest.fn();
        render(
            <Breadcrumbs onClickHome={fn}>
                <Breadcrumbs.Option>option 1</Breadcrumbs.Option>
                <Breadcrumbs.Option>option 2</Breadcrumbs.Option>
            </Breadcrumbs>
        );

        const home = screen.getByLabelText(/home/i);
        userEvent.click(home);
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { value: 'home' });
    });

    xit('should call onClick', () => {
        const fn = jest.fn();
        render(
            <Breadcrumbs>
                <Breadcrumbs.Option onClick={fn} value='1'>
                    option 1
                </Breadcrumbs.Option>
                <Breadcrumbs.Option>option 2</Breadcrumbs.Option>
            </Breadcrumbs>
        );

        const [option] = screen.getAllByText(/option 1/i);
        userEvent.click(option);
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { value: '1' });
    });
});
