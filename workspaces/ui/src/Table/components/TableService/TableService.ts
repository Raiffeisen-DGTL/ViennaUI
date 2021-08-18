import { TableState, UpdateTableState, TableConfig } from '../../types';
import { columnService, ColumnService } from '../Column/ColumnService';
import { expandingRowService, ExpandingRowService } from '../ExpandingRow/ExpandingRowService';
import { resizableColumnService, ResizableColumnService } from '../ResizableColumn/ResizableColumnService';
import { sortService, SortService } from '../Sort/SortService';
import { selectRowService, SelectRowService } from '../SelectRow/SelectRowService';
import { draggableColumnService, DraggableColumnService } from '../DraggableColumn/DraggableColumnService';
import { columnGroupService, ColumnGroupService } from '../ColumnGroup/ColumnGroupService';
import { groupByService, GroupByService } from '../GroupBy/GroupByService';
import { filterService, FilterService } from '../Filter/FilterService';

interface RootService {
    sync: (state, data) => void;
}

export type TableService = RootService &
    ColumnService &
    ExpandingRowService &
    ResizableColumnService &
    SortService &
    SelectRowService &
    DraggableColumnService &
    ColumnGroupService &
    GroupByService &
    FilterService;

export type TableServiceFactory = (
    state: TableState,
    update: UpdateTableState,
    config: TableConfig,
    data: any[]
) => TableService;

export const tableService: TableServiceFactory = function (state, update, config, data) {
    let localState = state;
    let localData = data;

    const sync = (state, data) => {
        localState = state;
        localData = data;
    };

    const getState = () => localState;
    const getData = () => localData;

    return {
        sync,
        ...columnService(getState, update),
        ...expandingRowService(getState, update, config),
        ...resizableColumnService(getState, update),
        ...sortService(getState, update),
        ...selectRowService(getState, update, getData),
        ...draggableColumnService(getState, update),
        ...columnGroupService(getState, update, config),
        ...groupByService(getState, update, config),
        ...filterService(getState, update),
    };
};
