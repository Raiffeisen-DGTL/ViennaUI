import React from 'react';
import { MultiselectWithSearch } from '../MultiselectWithSearch';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('MultiselectWithSearch', () => {
    it('should open droplist when click on part', async () => {
        const { getByTestId, getAllByTestId } = render(
            <MultiselectWithSearch testId={{ arrow: 'part', option: () => 'Multiselect.Option' }}>
                <MultiselectWithSearch.Option>Значение 1</MultiselectWithSearch.Option>
                <MultiselectWithSearch.Option>Значение 2</MultiselectWithSearch.Option>
            </MultiselectWithSearch>
        );
        const part = getByTestId('part');
        expect(part).toBeInTheDocument();
        fireEvent.click(part);
        const option = getAllByTestId('Multiselect.Option')[0];
        expect(option).toBeInTheDocument();
    });

    it('calls onAddValue when adding a new value and pressing Enter', () => {
        const options = [{ value: 'Значение 1' }, { value: 'Значение 2' }];
        const onAddValue = jest.fn();

        const { getByTestId } = render(
            <MultiselectWithSearch
                values={[]}
                options={options}
                onAddValue={onAddValue}
                testId={{ search: 'search-input' }}
            />
        );

        const search = getByTestId('search-input');
        fireEvent.input(search, { target: { value: 'Значение 3' } });
        fireEvent.keyDown(search, { key: 'Enter', code: 'Enter' });

        expect(onAddValue).toHaveBeenCalledTimes(1);
        expect(onAddValue).toHaveBeenCalledWith('Значение 3');
    });

    it('do not show options if hideOptionsList=true', () => {
        const options = [{ value: 'Значение 1' }, { value: 'Значение 2' }];

        const { getByTestId } = render(
            <MultiselectWithSearch hideOptionsList values={[]} options={options} testId={{ search: 'search-input' }} />
        );

        const search = getByTestId('search-input');

        fireEvent.focus(search);

        options.forEach((optionText) => {
            expect(screen.queryByText(optionText.value)).not.toBeInTheDocument();
        });
    });

    it('other msws chevron fires outside click', async () => {
        const user = userEvent.setup();

        const options = [{ value: 'Значение 1' }, { value: 'Значение 2' }];

        const { getByTestId } = render(
            <>
                <MultiselectWithSearch
                    values={[]}
                    options={options}
                    testId={{ search: 'search-input', arrow: 'arrow' }}
                />
                <MultiselectWithSearch values={[]} options={[]} testId={{ search: 'search-input1', arrow: 'arrow1' }} />
            </>
        );

        const search = getByTestId('search-input');
        const arrow = getByTestId('arrow1');

        await act(async () => {
            await user.click(search);
        });

        options.forEach((optionText) => {
            expect(screen.queryByText(optionText.value)).toBeInTheDocument();
        });

        await act(async () => {
            await user.click(arrow);
        });

        options.forEach((optionText) => {
            expect(screen.queryByText(optionText.value)).not.toBeInTheDocument();
        });
    });
});
