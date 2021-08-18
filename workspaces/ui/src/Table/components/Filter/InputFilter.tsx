import React, { useCallback } from 'react';
import { Input } from '../../../index';
import { useTableService } from '../Context';
import { useFilterContext } from './FilterContext';

export const InputFilter = (props) => {
    const id = useFilterContext();
    const { getFilterColumn, setFilter } = useTableService();
    const value = getFilterColumn(id) ?? '';

    const onChange = useCallback(
        (_, { value }) => {
            setFilter(id, value || undefined);
        },
        [setFilter]
    );

    return <Input {...props} value={value} size='s' onChange={onChange} />;
};
