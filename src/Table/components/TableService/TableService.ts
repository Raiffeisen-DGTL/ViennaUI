import { TableState, UpdateTableState, TableConfig } from '../../types';
import { columnService, ColumnService } from '../Column';
import { expandingRowService, ExpandingRowService } from '../ExpandingRow';
import { expandAllService, ExpandAllService } from '../ExapandAll';
import { resizableColumnService, ResizableColumnService } from '../ResizableColumn';
import { sortService, SortService } from '../Sort';
import { selectRowService, SelectRowService } from '../SelectRow';
import { draggableColumnService, DraggableColumnService } from '../DraggableColumn';
import { columnGroupService, ColumnGroupService } from '../ColumnGroup';
import { groupByService, GroupByService } from '../GroupBy';
import { filterService, FilterService } from '../Filter';
import { coloredRowsService, ColoredRowsService } from '../ColoredRows';
import { HiddenRowsService, hiddenRowsService } from '../HiddenRows';
import { tableBodyService, TableBodyService } from '../TableBody/TableBodyService';
import { TableProps } from '../../Table';

interface RootService<T> {
    sync: (state: TableState<T>, data: T[]) => void;
}

export type TableService<T> = RootService<T> &
    TableBodyService &
    ColumnService<T> &
    ExpandingRowService<T> &
    ExpandAllService &
    ResizableColumnService &
    SortService<T> &
    SelectRowService<T> &
    DraggableColumnService &
    ColumnGroupService &
    GroupByService<T> &
    FilterService<T> &
    ColoredRowsService &
    HiddenRowsService;

export type TableServiceFactory<T> = (
    state: TableState<T>,
    update: UpdateTableState<T>,
    config: TableConfig<T>,
    data: TableProps<T>['data']
) => TableService<T>;

export const tableService = <T>(
    state: TableState<T>,
    update: UpdateTableState<T>,
    config: TableConfig<T>,
    data: TableProps<T>['data']
) => {
    let localState = state;
    let localData = data;

    const sync: RootService<T>['sync'] = (state, data) => {
        localState = state;
        localData = data;
    };

    const getState = () => localState;
    const getData = () => localData || [];

    return {
        sync,
        ...tableBodyService(getState, update),
        ...columnService(getState, update),
        ...expandingRowService(getState, update, config),
        ...expandAllService(getState, update, config),
        ...resizableColumnService(getState, update),
        ...sortService(getState, update, getData),
        ...selectRowService(getState, update, getData),
        ...draggableColumnService(getState, update),
        ...columnGroupService(getState, update, config),
        ...groupByService(getState, update, config),
        ...filterService(getState, update),
        ...coloredRowsService(getState, update),
        ...hiddenRowsService(getState, update, getData, config),
    };
};
