import React, { useMemo } from 'react';
import { TableFeature } from '../../types';
import { useTableContext } from '../Context/TableContext';
import { Row, Th } from '../TableHeader/TableHeader.styles';

export const ColumnGroupInternal: React.FC = () => {
    const {
        config: { columnGroup, base },
        service: { columnGroupSpan },
        features,
    } = useTableContext();
    const size = base.settings.size;

    const columnGroups = columnGroup?.groups ?? [];

    const colGroups = useMemo(() => {
        let extraColSpan = 0;

        if (features.has(TableFeature.SelectRow)) {
            extraColSpan += 1;
        }
        if (features.has(TableFeature.ExpandingRow)) {
            extraColSpan += 1;
        }

        return columnGroups.map((group, index: number) => {
            const { title, color, id } = group;
            const hasRightDivider = columnGroups.length !== index + 1;
            const colSpan = columnGroupSpan(id) + (index === 0 ? extraColSpan : 0);

            return (
                <Th
                    key={id}
                    size={size}
                    colSpan={colSpan}
                    color={color}
                    hasBottomDivider={!!title}
                    hasRightDivider={hasRightDivider}
                    group>
                    {title}
                </Th>
            );
        });
    }, [columnGroups, features]);

    return <Row>{colGroups}</Row>;
};
