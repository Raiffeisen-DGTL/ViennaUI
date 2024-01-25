import React from 'react';
import { Pinner, usePinnableColumns } from '..';
import { TableFeatures } from '../../types';
import { useTableContext } from '../Context/TableContext';
import { Row, Th } from '../TableHeader/TableHeader.styles';

// Depending on enabled features we want to span first or/and last group cells to extra columns
function getExtraSpans(features: TableFeatures) {
    const extras = {
        first: 0,
        last: 0,
    };

    if (features.has('SelectRow')) {
        extras.first += 1;
    }
    if (features.has('ExpandingRow')) {
        extras.first += 1;
    }
    if (features.has('ActionsColumn')) {
        extras.last += 1;
    }

    return extras;
}

// Gets map of columngroups colspans
function getColSpans(columnGroups, columnGroupSpan, features) {
    let firstVisible = null;
    let lastVisible = null;
    const spanMap = new Map<string, number>();

    const { first, last } = getExtraSpans(features);

    columnGroups.forEach((group) => {
        const colSpan = columnGroupSpan(group.id);

        spanMap.set(group.id, colSpan);

        // we add extra spans to the first and last columns depending on enabled table
        // features, at the same time we hide column groups if they don't have any visible
        // columns (colSpan === 0), so wee ned to track ids of fisrt and last visible
        // column groups to be able to add extra spans to proper ones.
        if ((first || last) && colSpan !== 0) {
            if (!firstVisible) {
                firstVisible = group.id;
            }

            lastVisible = group.id;
        }
    });

    if (first && firstVisible) {
        const firstColumnSpan = spanMap.get(firstVisible);

        if (firstColumnSpan) {
            spanMap.set(firstVisible, firstColumnSpan + first);
        }
    }

    if (last && lastVisible) {
        const lastVisibleColumnSpan = spanMap.get(lastVisible);

        if (lastVisibleColumnSpan) {
            spanMap.set(lastVisible, lastVisibleColumnSpan + last);
        }
    }

    return spanMap;
}

export const ColumnGroupInternal: React.FC = () => {
    const {
        config: { columnGroup, base },
        service: { columnGroupSpan },
        features,
    } = useTableContext();
    const headerRef = usePinnableColumns(base.settings?.pinnableColumns);

    const size = base.settings.size;

    const columnGroups = columnGroup?.groups ?? [];
    const colSpans = getColSpans(columnGroups, columnGroupSpan, features);

    const colGroups = columnGroups.map((group, index: number) => {
        const { title, color, id, pinned } = group;
        const hasRightDivider = columnGroups.length !== index + 1;
        const colSpan = colSpans.get(id);

        // hiding groups with no visible columns
        if (colSpan === 0) return null;

        return (
            <Th
                key={id}
                ref={headerRef}
                $group
                $size={size}
                $color={color}
                $hasBottomDivider={!!title}
                $hasRightDivider={hasRightDivider}
                colSpan={colSpan}
                $pinned={pinned}>
                {title}
                {pinned && <Pinner />}
            </Th>
        );
    });

    return <Row>{colGroups}</Row>;
};
