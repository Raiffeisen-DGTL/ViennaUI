import { TableState, TableService as TS } from './types';
import { baseService } from './components/Base/BaseService';
import { expandingRowService } from './components/ExpandingRow/ExpandingRowService';
import { resizableColumnService } from './components/ResizableColumn/ResizableColumnService';
import { sortService } from './components/Sort/SortService';
import { selectRowService } from './components/SelectRow/SelectRowService';
import { draggableColumnService } from './components/DraggableColumn/DraggableColumnService';
import { columnGroupService } from './components/ColumnGroup/ColumnGroupService';
import { groupByService } from './components/GroupBy/GroupByService';

export type TableService = TS;

export function tableService(state: TableState, update, config, data): TableService {
    return {
        ...baseService(state, update),
        ...expandingRowService(state, update, config),
        ...resizableColumnService(state, update),
        ...sortService(state, update),
        ...selectRowService(state, update, data),
        ...draggableColumnService(state, update),
        ...columnGroupService(state, config),
        ...groupByService(state, update, config),
    };
}
