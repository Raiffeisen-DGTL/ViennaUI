import React, { useCallback } from 'react';
import { useFilterContext } from './FilterContext';
import { useTableService } from '../Context';
import { Datepicker, DatepickerProps } from '../../../Datepicker';

export const DatePickerFilter = () => {
    const id = useFilterContext();
    const { getFilterColumn, setFilter } = useTableService();
    const value = (getFilterColumn(id) as DatepickerProps['value']) ?? '';

    const onChange = useCallback<NonNullable<DatepickerProps['onChange']>>(
        ({ value }) => {
            setFilter(id, value ?? '');
        },
        [setFilter]
    );

    return <Datepicker value={value} onChange={onChange} />;
};
