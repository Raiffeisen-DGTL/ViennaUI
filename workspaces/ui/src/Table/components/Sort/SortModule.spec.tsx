import { SortModule } from './SortModule';
import { sortService } from './SortService';

const moduleParams = {
    settings: {
        onSort: 'function',
    },
};

describe('Sort module', () => {
    test('Init config', () => {
        const config = SortModule.initConfig && SortModule.initConfig(moduleParams);

        expect(config).not.toBeUndefined();
        expect(config.onSort).toEqual('function');
    });
});

describe('Sort service', () => {
    const state: any = {
        sort: {
            field: 'field1',
            direction: 'asc',
        },
    };
    let newState: any = {};
    const update = (state) => {
        newState = state;
    };

    const service = sortService(state, update);

    test('getSortColumn', () => {
        const sort = service.getSortColumn();

        expect(sort).not.toBeUndefined();
        expect(sort?.field).toEqual('field1');
        expect(sort?.direction).toEqual('asc');
    });

    test('setSortColumn', () => {
        service.setSortColumn('field2', 'desc');
        expect(newState.sort).not.toBeUndefined();
        expect(newState.sort.field).toEqual('field2');
        expect(newState.sort.direction).toEqual('desc');
    });
});
