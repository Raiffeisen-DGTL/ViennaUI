import React from 'react';
import { CollapsedownIcon, CollapseupIcon, IconProps } from 'vienna.icons';
import { useTableConfig, useTableService } from '../Context';
import { ExpanderIcon } from '../ExpandingRow/ExpandingRow.styles';
import { ExpandAllCell } from '../ExapandAll/ExpandAll.styles';
import { Pinner } from '../PinnableColumn';
import { DEFAULT_EXPANDER_WIDTH } from '../../constants';

interface ExpanderAllProps {
    isGroupExpanded?: boolean;
}

export const ExpandAll = (props: ExpanderAllProps) => {
    const { isGroupExpanded } = props;
    const { isAllExpanded, toggleExpandingAll } = useTableService<string>();
    const { base, expandingRow, groupBy } = useTableConfig();
    const { pinnableColumns } = base.settings;
    const allowMultiple = expandingRow?.settings?.allowMultiple;
    const hasGroupExpand = groupBy?.options?.some((option) => option.groups.some((group) => group.expandable)) || false;
    const iconsProps: IconProps = { size: 20 };

    return (
        <ExpandAllCell
            data-column={isGroupExpanded ? 'expand_all' : 'expander'}
            $width={DEFAULT_EXPANDER_WIDTH}
            $pinned={pinnableColumns}
            $hasBottomDivider
            $hasInteractive={allowMultiple}
            onClick={toggleExpandingAll}>
            {(allowMultiple || hasGroupExpand) && (
                <ExpanderIcon>
                    {isAllExpanded() ? <CollapseupIcon {...iconsProps} /> : <CollapsedownIcon {...iconsProps} />}
                </ExpanderIcon>
            )}
            {pinnableColumns && <Pinner />}
        </ExpandAllCell>
    );
};
