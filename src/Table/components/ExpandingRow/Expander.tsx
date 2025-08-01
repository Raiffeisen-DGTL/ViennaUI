import React, { useCallback } from 'react';
import { SelectOpenDownIcon, SelectHideIcon } from 'vienna.icons';
import { useTableService, useTableConfig } from '../Context';
import { ExpanderCell, ExpanderIcon } from './ExpandingRow.styles';
import { Pinner } from '../PinnableColumn';

interface ExpanderProps {
    id: string | number;
    isActive?: boolean;
    bg?: string;
}

export const Expander = (props: ExpanderProps) => {
    const { toggleExpandingRow, isRowExpanded, getExpandingRowSettings } = useTableService<string>();
    const { id, isActive, bg } = props;
    const { base } = useTableConfig();
    const { pinnableColumns, size, valign } = base.settings;
    const strId = String(id);

    const clickHandler = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            event.stopPropagation();
            toggleExpandingRow(strId);

            const onExpand = getExpandingRowSettings()?.onExpand;
            if (typeof onExpand === 'function') {
                onExpand({ value: strId, event });
            }
        },
        [getExpandingRowSettings, toggleExpandingRow, strId]
    );

    return (
        <ExpanderCell
            data-column='expander'
            $size={size}
            $valign={valign}
            $pinned={pinnableColumns}
            $bg={bg}
            onClick={clickHandler}>
            {isActive && (
                <ExpanderIcon>{isRowExpanded(strId) ? <SelectHideIcon /> : <SelectOpenDownIcon />}</ExpanderIcon>
            )}
            {pinnableColumns && <Pinner />}
        </ExpanderCell>
    );
};
