import React, { ReactNode } from 'react';
import { useTableService, useTableConfig, useTableFeatures } from '../Context/TableContext';
import { Row, Td } from '../TableBody/TableBody.styles';
import { ExpandedContent } from './ExpandingRow.styles';
import { DEFAULT_EXPANDER_WIDTH } from '../../constants';
import { ExpandingRowProps } from './ExpandingRow';

export interface ExpandingRowInternalProps<T> {
    id: string;
    CustomWrapper: ExpandingRowProps<T>['customWrapper'];
    children: ReactNode | T[];
    hasActionsColumn?: boolean;
}

export const ExpandingRowInternal = <T,>(props: ExpandingRowInternalProps<T>) => {
    const { children, id, CustomWrapper, hasActionsColumn } = props;
    const features = useTableFeatures();
    const tableConfig = useTableConfig<T>();
    const { expandingRow } = tableConfig;
    const { isRowExpanded, colSpan, getExpandingRowSettings } = useTableService<T>();

    const hasPadding = !expandingRow?.settings.noPadding;

    const attrs = getExpandingRowSettings()?.attrs;
    const columnSpan = hasActionsColumn ? colSpan() + 1 : colSpan();

    if (CustomWrapper && Array.isArray(children)) {
        return (
            <>
                {isRowExpanded(id) && (
                    <CustomWrapper
                        noHover
                        hasPadding={hasPadding}
                        colSpan={columnSpan}
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
                <Row {...attrs} $noHover>
                    {isRowExpanded(id) && (
                        <>
                            {features.has('ExpandingGroup') && (
                                <Td
                                    data-column='expander'
                                    $width={DEFAULT_EXPANDER_WIDTH}
                                    $minWidth={DEFAULT_EXPANDER_WIDTH}
                                />
                            )}
                            <ExpandedContent $hasPadding={hasPadding} colSpan={columnSpan}>
                                {children as ReactNode}
                            </ExpandedContent>
                        </>
                    )}
                </Row>
            )}
        </>
    );
};
