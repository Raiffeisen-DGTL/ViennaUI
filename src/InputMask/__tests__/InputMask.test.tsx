/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { render } from '@testing-library/react';
import { InputAccount, InputCard, InputDate, InputDateRange } from '../index';

describe('InputMask ', () => {
    it('InputDate /w defaultLocalization', async () => {
        const { getByTestId } = render(
            <>
                <InputDate data-testid={'date'} type='date' />
                <InputDate data-testid={'time'} type='time' />
                <InputDate data-testid={'datetime'} type='datetime' />
            </>
        );

        const date = getByTestId('date');
        const time = getByTestId('time');
        const datetime = getByTestId('datetime');

        expect(date.getAttribute('placeholder')).toEqual('ДД.ММ.ГГГГ');
        expect(time.getAttribute('placeholder')).toEqual('ЧЧ:ММ');
        expect(datetime.getAttribute('placeholder')).toEqual('ДД.ММ.ГГГГ ЧЧ:ММ');
    });

    it('InputDate /w customLocalization', async () => {
        const customLocalization = {
            'ds.inputDate.placeholder.date': 'DD.MM.YYYY',
            'ds.inputDate.placeholder.time': 'HH:MM',
            'ds.inputDate.placeholder.datetime': 'DD.MM.YYYY HH:MM',
        };
        const { getByTestId } = render(
            <>
                <InputDate data-testid={'date'} type='date' localization={customLocalization} />
                <InputDate data-testid={'time'} type='time' localization={customLocalization} />
                <InputDate data-testid={'datetime'} type='datetime' localization={customLocalization} />
            </>
        );

        const date = getByTestId('date');
        const time = getByTestId('time');
        const datetime = getByTestId('datetime');

        expect(date.getAttribute('placeholder')).toEqual(customLocalization['ds.inputDate.placeholder.date']);
        expect(time.getAttribute('placeholder')).toEqual(customLocalization['ds.inputDate.placeholder.time']);
        expect(datetime.getAttribute('placeholder')).toEqual(customLocalization['ds.inputDate.placeholder.datetime']);
    });

    it('InputDateRange /w defaultLocalization', async () => {
        const { getByTestId } = render(
            <>
                <InputDateRange data-testid={'date'} />
                <InputDateRange data-testid={'dateRange'} value='11.11.1993 -' />
            </>
        );
        const date = getByTestId('date');
        const dateRange = getByTestId('dateRange');

        expect(date.getAttribute('placeholder')).toEqual('ДД.ММ.ГГГГ');
        expect(dateRange.getAttribute('placeholder')).toEqual('11.11.1993');
    });

    it('InputDateRange /w customLocalization', async () => {
        const customLocalization = {
            'ds.inputDateRange.placeholder.date': 'DD.MM.YYYY',
            'ds.inputDateRange.placeholder.date.separator': 'DD.MM.YYYY - ',
            'ds.inputDateRange.placeholder.date.range': 'DD.MM.YYYY - DD.MM.YYYY',
        };
        const { getByTestId } = render(
            <>
                <InputDateRange data-testid={'date'} localization={customLocalization} />
                <InputDateRange data-testid={'dateRange'} value='11.11.1993 -' localization={customLocalization} />
            </>
        );
        const date = getByTestId('date');
        const dateRange = getByTestId('dateRange');

        expect(date.getAttribute('placeholder')).toEqual(customLocalization['ds.inputDateRange.placeholder.date']);
        expect(dateRange.getAttribute('placeholder')).toEqual('11.11.1993');
    });

    it('should render an empty string instead of undefined or null when value is null or undefined on first render', () => {
        const { getByRole } = render(<InputAccount value={null} />);
        const input = getByRole('textbox');
        expect(input.value).toBe('');
    });

    it('should render an empty string instead of undefined or null when value is null or undefined on first render', () => {
        const { getByRole } = render(<InputCard value={null} />);
        const input = getByRole('textbox');
        expect(input.value).toBe('');
    });
});
