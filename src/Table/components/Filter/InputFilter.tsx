import React, { useMemo, useState } from 'react';
import { Input, InputProps } from '../../../Input';
import { useTableService } from '../Context';
import { useFilterContext } from './FilterContext';
import { debounce } from '../../../Utils';

export const InputFilter = (props: Omit<InputProps, 'value' | 'size' | 'onChange'>) => {
    const id = useFilterContext();
    const { getFilterColumn, setFilter } = useTableService();
    const value: string = (getFilterColumn(id) as string) ?? '';

    const [localValue, setLocalValue] = useState(value);

    const debounced = useMemo(() => debounce(setFilter), [setFilter]);

    const onChange: InputProps['onChange'] = ({ value: newValue }) => {
        setLocalValue(newValue);
        debounced(id, newValue);
    };

    return <Input {...props} value={localValue} size='s' onChange={onChange} />;
};
