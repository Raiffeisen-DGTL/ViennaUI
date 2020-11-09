import { resizableColumnService } from './ResizableColumnService';

describe('ResizableColumn service', () => {
    const state: any = {
        columns: { list: [{ id: '1' }, { id: '2' }, { id: '3' }] },
    };
    let newState: any = {};
    const update = (state) => {
        newState = state;
    };

    const service = resizableColumnService(state, update);

    test('setColumnWidth', () => {
        service.setColumnWidth('1', '100px');
        expect(newState.columns).not.toBeUndefined();

        const list = newState.columns.list;
        expect(Array.isArray(list)).toBe(true);
        expect(list).toHaveLength(3);
        expect(list.find((i) => i.id === '1').width).toEqual('100px');
    });
});
