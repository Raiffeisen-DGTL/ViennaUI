import { draggableColumnService, draggableColumnServiceId } from './DraggableColumnService';

describe('Sort service', () => {
    const state: any = {
        columns: {
            list: [{ id: '1' }, { id: '2' }, { id: '3' }],
        },
    };

    let newState: any = {};
    let serviceId = '';
    const update = (id, state) => {
        newState = state;
        serviceId = id;
    };

    const service = draggableColumnService(state, update);

    beforeEach(() => {
        serviceId = '';
    });

    test('moveColumn 1', () => {
        service.moveColumn('2', '3');
        expect(serviceId).toEqual(draggableColumnServiceId);
        const columns = newState.columns?.list;
        expect(columns).not.toBeUndefined();
        expect(Array.isArray(columns)).toBe(true);
        expect(columns[1].id).toBe('3');
        expect(columns[2].id).toBe('2');
    });

    test('moveColumn 2', () => {
        service.moveColumn('2', '1');
        expect(serviceId).toEqual(draggableColumnServiceId);
        const columns = newState.columns?.list;

        expect(columns).not.toBeUndefined();
        expect(Array.isArray(columns)).toBe(true);
        expect(columns[0].id).toBe('2');
        expect(columns[1].id).toBe('1');
        expect(columns[2].id).toBe('3');
    });
});
