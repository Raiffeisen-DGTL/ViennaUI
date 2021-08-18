import React from 'react';
import { useTableService, useTableConfig } from '../Context/TableContext';
import { Row } from '../TableBody/TableBody.styles';
import { ExpandedContent } from './ExpandingRow.styles';

export const ExpandingRowInternal = (props) => {
    const { children, id } = props;
    const { expandingRow } = useTableConfig();
    const { isRowExpanded, colSpan, getExpandingRowSettings } = useTableService();

    const hasPadding = !expandingRow?.settings.noPadding;

    const { attrs } = getExpandingRowSettings();

    return (
        <>
            {isRowExpanded(id) && (
                <Row noHover {...attrs}>
                    {isRowExpanded(id) && (
                        <ExpandedContent hasPadding={hasPadding} colSpan={colSpan()}>
                            {children}
                        </ExpandedContent>
                    )}
                </Row>
            )}
        </>
    );
};
