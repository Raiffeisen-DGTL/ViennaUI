import React, { useCallback } from 'react';
import { SelectHideIcon, SelectOpenDownIcon } from 'vienna.icons';
import { useTableService } from '../Context';
import { ExpanderCell } from './Expander.styles';

interface ExpanderProps {
    id: string;
    isActive?: boolean;
}

export const Expander = (props: ExpanderProps) => {
    const { toggleExpandingGroup, isGroupExpanded, getExpandingGroup } = useTableService();
    const { id, isActive } = props;

    const clickHandler = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (isActive) {
                e.stopPropagation();
                toggleExpandingGroup(id);

                const onExpand = getExpandingGroup(id)?.onExpand;
                if (typeof onExpand === 'function') {
                    onExpand(id, e);
                }
            }
        },
        [toggleExpandingGroup, isActive]
    );

    return (
        <ExpanderCell data-column='group-expander' onClick={clickHandler}>
            {isActive && <>{isGroupExpanded(id) ? <SelectHideIcon /> : <SelectOpenDownIcon />}</>}
        </ExpanderCell>
    );
};
