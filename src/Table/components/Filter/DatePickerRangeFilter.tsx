import React, { useCallback } from 'react';
import { DatepickerRange, DatepickerRangeProps } from '../../../DatepickerRange';
import { useFilterContext } from './FilterContext';
import { useTableService } from '../Context';

export const DatePickerRangeFilter = () => {
    const id = useFilterContext();
    const { getFilterColumn, setFilter } = useTableService();
    const value = (getFilterColumn(id) as DatepickerRangeProps['value']) ?? '';

    const onChange = useCallback<NonNullable<DatepickerRangeProps['onChange']>>(
        ({ value }) => {
            setFilter(id, value ?? '');
        },
        [setFilter]
    );

    return <DatepickerRange value={value} onChange={onChange} />;
};
