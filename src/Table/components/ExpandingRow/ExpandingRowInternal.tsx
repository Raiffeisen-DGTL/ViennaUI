import React from 'react';
import { useTableService, useTableConfig } from '../Context/TableContext';
import { Row } from '../TableBody/TableBody.styles';
import { ExpandedContent } from './ExpandingRow.styles';

export const ExpandingRowInternal = (props) => {
    const { children, id, CustomWrapper } = props;
    const tableConfig = useTableConfig();
    const { expandingRow } = tableConfig;
    const { isRowExpanded, colSpan, getExpandingRowSettings } = useTableService();

    const hasPadding = !expandingRow?.settings.noPadding;

    const { attrs } = getExpandingRowSettings();

    if (CustomWrapper) {
        return (
            <>
                {isRowExpanded(id) && (
                    <CustomWrapper
                        noHover
                        hasPadding={hasPadding}
                        colSpan={colSpan()}
                        tableConfig={tableConfig}
                        {...attrs}>
                        {children}
                    </CustomWrapper>
                )}
            </>
        );
    }

    return (
        <>
            {isRowExpanded(id) && (
                <Row {...(attrs as {})} $noHover>
                    {isRowExpanded(id) && (
                        <ExpandedContent $hasPadding={hasPadding} colSpan={colSpan()}>
                            {children}
                        </ExpandedContent>
                    )}
                </Row>
            )}
        </>
    );
};
