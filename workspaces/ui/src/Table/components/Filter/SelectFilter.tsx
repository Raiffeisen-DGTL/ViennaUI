import React, { useCallback } from 'react';
import { Select } from '../../../index';
import { useTableService } from '../Context';
import { useFilterContext } from './FilterContext';

export const SelectFilter = (props) => {
    const id = useFilterContext();
    const { getFilterColumn, setFilter } = useTableService();
    const value = getFilterColumn(id);

    const onChange = useCallback(
        (_, { value }) => {
            setFilter(id, value);
        },
        [setFilter]
    );

    return <Select {...props} value={value} fitOptions={false} size='s' onSelect={onChange} />;
};
