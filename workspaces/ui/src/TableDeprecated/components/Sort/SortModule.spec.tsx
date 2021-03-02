import { SortModule, SortState } from './SortModule';
import { sortService } from './SortService';
import { SortDirection } from '../../types';

const sort: SortState = {
    field: 'field',
    direction: SortDirection.Desc,
};

const moduleParams = {
    settings: {
        sort,
    },
};

describe('Sort module', () => {
    test('Init config', () => {
        const state: SortState = SortModule.initState && SortModule.initState(moduleParams);

        expect(state).not.toBeUndefined();
        expect(state.field).toEqual(sort.field);
        expect(state.direction).toEqual(sort.direction);
    });
});

describe('Sort service', () => {
    const state: any = {
        sort: {
            field: 'field1',
            direction: SortDirection.Asc,
        },
    };

    let newState: any = {};
    let serviceId = '';
    const update = (id, state) => {
        newState = state;
        serviceId = id;
    };

    const service = sortService(state, update);

    test('getSortColumn', () => {
        const sort = service.getSortColumn();

        expect(sort).not.toBeUndefined();
        expect(sort?.field).toEqual('field1');
        expect(sort?.direction).toEqual(SortDirection.Asc);
    });

    test('setSortColumn', () => {
        service.setSortColumn('field2', SortDirection.Desc);

        expect(serviceId).toEqual(SortModule.name);
        expect(newState.sort).not.toBeUndefined();
        expect(newState.sort.field).toEqual('field2');
        expect(newState.sort.direction).toEqual(SortDirection.Desc);
    });
});
