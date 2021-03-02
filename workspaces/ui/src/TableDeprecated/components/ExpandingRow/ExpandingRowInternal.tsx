import React from 'react';
import { useTableService } from '../Context/TableContext';
import { Row } from '../TableBody/TableBody.styles';
import { ExpandedContent } from './ExpandingRow.styles';

export const ExpandingRowInternal = (props) => {
    const { children, id } = props;
    const { isRowExpanded, colSpan, getExpandingRowSettings } = useTableService();

    const { attrs } = getExpandingRowSettings();

    return (
        <>
            {isRowExpanded(id) && (
                <Row noHover {...attrs}>
                    {isRowExpanded(id) && <ExpandedContent colSpan={colSpan()}>{children}</ExpandedContent>}
                </Row>
            )}
        </>
    );
};
