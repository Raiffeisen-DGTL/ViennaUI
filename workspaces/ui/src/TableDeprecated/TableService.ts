import { TableService, TableServiceFactoryConfig } from './types';
import { columnService } from './components/Column/ColumnService';
import { expandingRowService } from './components/ExpandingRow/ExpandingRowService';
import { resizableColumnService } from './components/ResizableColumn/ResizableColumnService';
import { sortService } from './components/Sort/SortService';
import { selectRowService } from './components/SelectRow/SelectRowService';
import { draggableColumnService } from './components/DraggableColumn/DraggableColumnService';
import { columnGroupService } from './components/ColumnGroup/ColumnGroupService';
import { groupByService } from './components/GroupBy/GroupByService';
import { filterService } from './components/Filter/FilterService';

export type { TableService };

export const tableService: TableServiceFactoryConfig<TableService> = function (
    state,
    update,
    config,
    data
): TableService {
    return {
        ...columnService(state, update),
        ...expandingRowService(state, update, config),
        ...resizableColumnService(state, update),
        ...sortService(state, update),
        ...selectRowService(state, update, data),
        ...draggableColumnService(state, update),
        ...columnGroupService(state, update, config),
        ...groupByService(state, update, config),
        ...filterService(state, update),
    };
};
