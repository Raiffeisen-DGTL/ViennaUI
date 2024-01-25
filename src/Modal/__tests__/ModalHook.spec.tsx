import React from 'react';
import { render, screen, waitFor, renderHook, act, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useModal } from '../ModalHook';
import { Modal } from '../Modal';

describe('ModalHook', () => {
    afterEach(cleanup);

    it('should call setters when pass to modal component', async () => {
        const { result } = renderHook(() => useModal());
        expect(result.current).toEqual(
            expect.objectContaining({
                open: expect.any(Function),
                close: expect.any(Function),
            })
        );

        expect(result.current).not.toEqual(
            expect.objectContaining({
                nativeClose: expect.any(Function),
                nativeOpen: expect.any(Function),
            })
        );
        /* eslint-disable @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        const spySetChildren = jest.spyOn(result.current, 'children', 'set');
        // @ts-ignore
        const spySetOnClose = jest.spyOn(result.current, 'onClose', 'set');
        /* eslint-enable @typescript-eslint/ban-ts-comment */
        const component = (
            <Modal state={result.current}>
                <Modal.Layout>
                    <Modal.Head>
                        <Modal.Title>Modal header</Modal.Title>
                    </Modal.Head>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </Modal.Body>
                    <Modal.Footer>
                        <button>Button example</button>
                    </Modal.Footer>
                </Modal.Layout>
            </Modal>
        );
        render(component);

        expect(spySetChildren).toHaveBeenCalledTimes(1);
        expect(spySetOnClose).toHaveBeenCalledTimes(1);

        expect(result.current).toEqual(
            expect.objectContaining({
                nativeClose: expect.any(Function),
                nativeOpen: expect.any(Function),
            })
        );
    });

    xit('should be closed when click to close icon', async () => {
        const { result } = renderHook(() => useModal());
        const component = (
            <Modal state={result.current}>
                <Modal.Layout>
                    <Modal.Head>
                        <Modal.Title>Modal header</Modal.Title>
                    </Modal.Head>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </Modal.Body>
                    <Modal.Footer>
                        <button>Button example</button>
                    </Modal.Footer>
                </Modal.Layout>
            </Modal>
        );
        const { rerender } = render(component);

        act(() => {
            result.current.open();
        });

        rerender(component);
        const box = screen.getByTestId('Modal.Box');
        await waitFor(() => expect(window.getComputedStyle(box).opacity).toBe('1')); // wait animation

        const closeIcon = screen.getByRole('button', { name: /Close/i });
        userEvent.click(closeIcon);
        await waitFor(() => expect(box).not.toBeInTheDocument());
    });

    xit('should be closed when useModal with arguments and click to close icon', async () => {
        const callback = jest.fn();
        const component = () => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [open] = useModal(
                <Modal.Layout>
                    <Modal.Head>
                        <Modal.Title>Modal header</Modal.Title>
                    </Modal.Head>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </Modal.Body>
                </Modal.Layout>,
                callback
            );
            open();
            return <button>Show modal</button>;
        };
        render(component());
        const box = screen.getByTestId('Modal.Box');
        await waitFor(() => expect(window.getComputedStyle(box).opacity).toBe('1')); // wait animation

        const closeIcon = screen.getByRole('button', { name: /Close/i });
        userEvent.click(closeIcon);
        await waitFor(() => expect(box).not.toBeInTheDocument());
    });

    xit('should call close handler when useModal with arguments and click to close icon', async () => {
        const callback = jest.fn();
        const component = () => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [open, close] = useModal(
                <Modal.Layout>
                    <Modal.Head>
                        <Modal.Title>Modal header</Modal.Title>
                    </Modal.Head>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={() => close('close modal')}>Close modal</button>
                    </Modal.Footer>
                </Modal.Layout>,
                callback
            );
            open();

            return <button>Show modal</button>;
        };
        render(component());
        const box = screen.getByTestId('Modal.Box');
        await waitFor(() => expect(window.getComputedStyle(box).opacity).toBe('1')); // wait animation

        const closeIcon = screen.getByRole('button', { name: /Close modal/i });
        userEvent.click(closeIcon);

        const [firstArg] = callback.mock.calls[0];
        expect(callback).toHaveBeenCalledTimes(1);
        expect(firstArg).toBe('close modal');
        await waitFor(() => expect(box).not.toBeInTheDocument());
    });
});
