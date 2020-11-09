import { draggableColumnService } from './DraggableColumnService';

describe('Sort service', () => {
    const state: any = {
        columns: {
            list: [{ id: '1' }, { id: '2' }, { id: '3' }],
        },
    };

    let newState: any = {};
    const update = (state) => {
        newState = state;
    };

    const service = draggableColumnService(state, update);

    test('moveColumn 1', () => {
        service.moveColumn('2', '3');
        const columns = newState.columns?.list;
        expect(columns).not.toBeUndefined();
        expect(Array.isArray(columns)).toBe(true);
        expect(columns[1].id).toBe('3');
        expect(columns[2].id).toBe('2');
    });

    test('moveColumn 2', () => {
        service.moveColumn('2', '1');
        const columns = newState.columns?.list;

        expect(columns).not.toBeUndefined();
        expect(Array.isArray(columns)).toBe(true);
        expect(columns[0].id).toBe('2');
        expect(columns[1].id).toBe('1');
        expect(columns[2].id).toBe('3');
    });
});
