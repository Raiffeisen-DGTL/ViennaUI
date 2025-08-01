import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { useDeferredLoading, UseDeferredLoadingArgs } from './useDeferredLoading';

async function delay(timeout: number) {
    return new Promise<void>((res) => setTimeout(() => res(), timeout));
}

describe('useDeferredLoading', () => {
    it('single toggle', async () => {
        const { result, rerender } = renderHook<boolean, UseDeferredLoadingArgs>(
            (params) => useDeferredLoading(params),
            {
                initialProps: { isLoading: true },
            }
        );

        await act(async () => {
            rerender({ isLoading: false });
            expect(result.current).toBe(true);
            await delay(600);
        });
        expect(result.current).toBe(false);
    });

    it('toggle back', async () => {
        const { result, rerender } = renderHook<boolean, UseDeferredLoadingArgs>(
            (params) => useDeferredLoading(params),
            {
                initialProps: { isLoading: true },
            }
        );

        await act(async () => {
            rerender({ isLoading: false });
            expect(result.current).toBe(true);
            rerender({ isLoading: true });
            expect(result.current).toBe(true);
            await delay(600);
        });
        expect(result.current).toBe(true);
    });

    it('single toggle, delayed', async () => {
        const { result, rerender } = renderHook<boolean, UseDeferredLoadingArgs>(
            (params) => useDeferredLoading(params),
            {
                initialProps: { isLoading: true },
            }
        );

        await delay(600);
        expect(result.current).toBe(true);

        act(() => {
            rerender({ isLoading: false });
        });
        expect(result.current).toBe(false);
    });

    it('multiple toggle', async () => {
        const { result, rerender } = renderHook<boolean, UseDeferredLoadingArgs>(
            (params) => useDeferredLoading(params),
            {
                initialProps: { isLoading: true },
            }
        );

        await act(async () => {
            rerender({ isLoading: false });
            expect(result.current).toBe(true);
            await delay(600);
        });
        expect(result.current).toBe(false);

        act(() => {
            rerender({ isLoading: true });
        });
        expect(result.current).toBe(true);

        await act(async () => {
            rerender({ isLoading: false });
            expect(result.current).toBe(true);
            await delay(600);
        });
        expect(result.current).toBe(false);
    });
});
