import React from 'react';
import { useTableConfig, useTableService } from '../Context/TableContext';
import { Row, Th } from '../TableHeader/TableHeader.styles';

export const ColumnGroupInternal: React.FC = () => {
    const { columnGroup, base } = useTableConfig();
    const { columnGroupSpan } = useTableService();
    const size = base.settings.size;

    return (
        <Row>
            {columnGroup &&
                columnGroup.groups &&
                columnGroup.groups.map((group, index: number) => {
                    const { title, color, id } = group;
                    const hasRightDivider = columnGroup.groups.length !== index + 1;

                    return (
                        <Th
                            key={id}
                            size={size}
                            colSpan={columnGroupSpan(id)}
                            color={color}
                            hasBottomDivider={!!title}
                            hasRightDivider={hasRightDivider}
                            group>
                            {title}
                        </Th>
                    );
                })}
        </Row>
    );
};
