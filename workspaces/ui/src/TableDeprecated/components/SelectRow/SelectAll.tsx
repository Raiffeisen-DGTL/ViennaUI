import React, { useCallback } from 'react';
import { Box, Label } from './SelectAll.styles';
import { Link } from '../../../Link';
import { useTableService, useTableConfig } from '../Context';

export interface SelectAllProps {
    fullData: any[];
}

export const SelectAll: React.FC<SelectAllProps> = (props) => {
    const { fullData } = props;
    const [mode, toggleMode] = React.useState(false);
    const { getData, selectAll } = useTableService();
    const { selectRow } = useTableConfig();

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
                        <Label>Выбраны все строки ({data.length}) на странице</Label>
                        <Label>
                            <Link design='accent' onClick={onClick}>
                                {`Выбрать все строки (${fullData.length}) в таблице`}
                            </Link>
                        </Label>
                    </>
                )}

                {mode && (
                    <>
                        <Label>
                            <Link design='accent' onClick={onClick}>
                                {`Выбрать все строки (${data.length}) на странице`}
                            </Link>
                        </Label>
                        <Label>Выбраны все строки ({fullData.length}) в таблице</Label>
                    </>
                )}
            </span>
        </Box>
    );
};

SelectAll.displayName = 'SelectAll';
export default SelectAll;
