import { resizableColumnService, resizableColumnServiceId } from './ResizableColumnService';

describe('ResizableColumn service', () => {
    const state: any = {
        columns: { list: [{ id: '1' }, { id: '2' }, { id: '3' }] },
    };
    let newState: any = {};
    let serviceId = '';
    const update = (id, state) => {
        newState = state;
        serviceId = id;
    };

    const getState = () => state;
    const service = resizableColumnService(getState, update);

    test('setColumnWidth', () => {
        service.setColumnWidth('1', '100px');
        expect(serviceId).toEqual(resizableColumnServiceId);
        expect(newState.columns).not.toBeUndefined();

        const list = newState.columns.list;
        expect(Array.isArray(list)).toBe(true);
        expect(list).toHaveLength(3);
        expect(list.find((i) => i.id === '1').width).toEqual('100px');
    });
});
