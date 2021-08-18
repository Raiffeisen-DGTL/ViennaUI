import React, { useCallback } from 'react';
import { SelectOpenDown, SelectHide } from 'vienna.icons';
import { useTableService, useTableConfig } from '../Context/TableContext';
import { ExpanderCell, ExpanderIcon } from './ExpandingRow.styles';
import { Pinner } from '../PinnableColumn';

export const Expander = (props) => {
    const { toggleExpandingRow, isRowExpanded, getExpandingRowSettings } = useTableService();
    const { id } = props;
    const { base } = useTableConfig();
    const { pinnableColumns } = base.settings;

    const clickHandler = useCallback(
        (e) => {
            e.stopPropagation();
            toggleExpandingRow(id);

            const onExpand = getExpandingRowSettings().onExpand;
            if (typeof onExpand === 'function') {
                onExpand(e, id);
            }
        },
        [toggleExpandingRow]
    );

    return (
        <ExpanderCell data-column='expander' pinned={pinnableColumns} onClick={clickHandler}>
            <ExpanderIcon>{isRowExpanded(id) ? <SelectHide /> : <SelectOpenDown />}</ExpanderIcon>
            {pinnableColumns && <Pinner />}
        </ExpanderCell>
    );
};
