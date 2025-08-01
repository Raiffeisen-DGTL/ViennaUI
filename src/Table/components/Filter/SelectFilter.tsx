import React, { useCallback } from 'react';
import { Select, SelectProps } from '../../../Select';
import { useTableService } from '../Context';
import { useFilterContext } from './FilterContext';

export const SelectFilter = (props: Omit<SelectProps, 'value' | 'fitOptions' | 'size' | 'onSelect'>) => {
    const id = useFilterContext();
    const { getFilterColumn, setFilter } = useTableService();
    const value: string = (getFilterColumn(id) as string) ?? '';

    const onChange: SelectProps['onSelect'] = ({ value }) => {
        const newValue: string = (value as string) ?? '';
        if (newValue) {
            setFilter(id, newValue);
        }
    };

    const onChangeMemo = useCallback(onChange, [setFilter]);

    return <Select {...props} value={value} fitOptions={false} size='s' onSelect={onChangeMemo} />;
};
