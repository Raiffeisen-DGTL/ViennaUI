import { FilterModule, FilterState } from './FilterModule';
import { filterService } from './FilterService';

const filter: FilterState = {
    firtsName: 'firtsName',
    lastName: 'lastName',
};

const moduleParams = {
    settings: {
        filter,
    },
};

describe('Sort module', () => {
    test('Init config', () => {
        const state: FilterState = FilterModule.initState && FilterModule.initState(moduleParams);

        expect(state).not.toBeUndefined();
        expect(state.firtsName).toEqual('firtsName');
        expect(state.lastName).toEqual('lastName');
    });
});

describe('Filter service', () => {
    const state: any = {
        filter: {
            field: 'value',
            filed2: 'value 2',
        },
    };

    let newState: any = {};
    let serviceId = '';
    const update = (id, updateState) => {
        newState = updateState(state);
        serviceId = id;
    };

    const service = filterService(state, update);

    test('getFilter', () => {
        const filter = service.getFilter();

        expect(filter).not.toBeUndefined();
        expect(filter?.field).toEqual('value');
        expect(filter?.filed2).toEqual('value 2');
    });

    test('getFilterColumn', () => {
        const filter = service.getFilterColumn('field');

        expect(filter).not.toBeUndefined();
        expect(filter).toEqual('value');
    });

    test('setFilter', () => {
        service.setFilter('field', 'value 3');
        expect(serviceId).toEqual(FilterModule.name);

        expect(newState.filter).not.toBeUndefined();
        expect(newState?.filter?.field).toEqual('value 3');
        expect(newState?.filter?.filed2).toEqual('value 2');
    });
});
