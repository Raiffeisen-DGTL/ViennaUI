import React, { useCallback } from 'react';
import { Box, Label } from './SelectAll.styles';
import { Link } from '../../../Link';
import { useTableService, useTableConfig, useTableLocalization } from '../Context';

export interface SelectAllProps {
    fullData: any[];
}

export const SelectAll: React.FC<SelectAllProps> = (props) => {
    const { fullData } = props;
    const [mode, toggleMode] = React.useState(false);
    const { getData, selectAll } = useTableService();
    const { selectRow } = useTableConfig();
    const localize = useTableLocalization();

    const data = getData();

    const onClick = useCallback(
        (e) => {
            const selected = mode ? data : fullData;
            selectAll(selected);
            toggleMode(!mode);

            if (typeof selectRow?.onSelect === 'function') {
                const data = {
                    isSelectedAll: true,
                    isSelectedFullData: !mode,
                };

                selectRow.onSelect(e, data);
            }
        },
        [selectRow?.onSelect, data, fullData, selectAll, toggleMode]
    );

    return (
        <Box>
            <span>
                {!mode && (
                    <>
                        <Label>
                            {`${localize('ds.table.settings.selectAll.fullData')[2]} (${data.length}) ${
                                localize('ds.table.settings.selectAll.fullData')[3]
                            }`}
                        </Label>
                        <Label>
                            <Link design='accent' onClick={onClick}>
                                {`${localize('ds.table.settings.selectAll.fullData')[0]} (${fullData.length}) ${
                                    localize('ds.table.settings.selectAll.fullData')[1]
                                }`}
                            </Link>
                        </Label>
                    </>
                )}

                {mode && (
                    <>
                        <Label>
                            <Link design='accent' onClick={onClick}>
                                {`${localize('ds.table.settings.selectAll.onPage')[0]} (${data.length}) ${
                                    localize('ds.table.settings.selectAll.onPage')[1]
                                }`}
                            </Link>
                        </Label>
                        <Label>
                            {`${localize('ds.table.settings.selectAll.onPage')[2]} (${fullData.length}) ${
                                localize('ds.table.settings.selectAll.onPage')[3]
                            }`}
                        </Label>
                    </>
                )}
            </span>
        </Box>
    );
};

SelectAll.displayName = 'SelectAll';
