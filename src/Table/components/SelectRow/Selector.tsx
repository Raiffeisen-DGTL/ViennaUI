import React, { useCallback } from 'react';
import { Checkbox } from '../../../Checkbox';
import { Box } from './Selector.styles';
import { useTableService, useTableConfig } from '../Context';
import { SELECT_ALL } from './SelectRowModule';

export interface SelectorProps {
    item: any;
}

const onClick = (e) => e.stopPropagation();

export const Selector: React.FC<SelectorProps> = (props) => {
    const { item } = props;
    const { toggleSelectRow, isRowSelected } = useTableService();

    const { selectRow, selection } = useTableConfig();

    const onChange = useCallback(
        (e) => {
            toggleSelectRow(item, e.target.checked);

            if (typeof selectRow?.onSelect === 'function') {
                const data = {
                    item: item !== SELECT_ALL ? item : null,
                    isChecked: e.target.checked,
                    isSelectedAll: item === SELECT_ALL && e.target.checked,
                };

                selectRow.onSelect(e, data);
            }
        },
        [selectRow, selectRow?.onSelect, toggleSelectRow]
    );

    return (
        <Box>
            {selection ? (
                selection.template({ data: item, isSelected: isRowSelected(item), onClick, onChange })
            ) : (
                <Checkbox checked={isRowSelected(item)} onClick={onClick} onChange={onChange} />
            )}
        </Box>
    );
};
