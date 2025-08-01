import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from '../Modal';

const waitOpeningAnimation = async () => {
    const box = screen.getByTestId('Modal.Box');
    await waitFor(() => expect(window.getComputedStyle(box).opacity).toBe('1')); // wait animation
};

const focusCloseIconFromInitialStateByTabs = () => {
    userEvent.tab(); // workaround double body focus(ReactFocusLock effect)
    userEvent.tab();
    userEvent.tab();
};

describe('Modal', () => {
    xit('should change focus when press tab key', async () => {
        const handler = jest.fn();
        const component = (
            <Modal isOpen onClose={handler}>
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

        await waitOpeningAnimation();

        const [footerButton, closeIcon] = screen.getAllByRole('button');

        expect(document.body).toHaveFocus();

        userEvent.tab();
        expect(document.body).toHaveFocus(); // wtf! ReactFocusLock effect

        userEvent.tab();
        expect(footerButton).toHaveFocus();

        userEvent.tab();
        expect(closeIcon).toHaveFocus();

        userEvent.tab();
        expect(footerButton).toHaveFocus();
    });

    xit('should trap focus when try leave focus from modal', async () => {
        const handler = jest.fn();
        const component = (
            <Modal isOpen onClose={handler}>
                <Modal.Layout>
                    <Modal.Head>
                        <Modal.Title>Modal header</Modal.Title>
                    </Modal.Head>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </Modal.Body>
                </Modal.Layout>
            </Modal>
        );
        render(component);

        await waitOpeningAnimation();

        const closeIcon = screen.getByRole('button', { name: /Close/i });

        userEvent.tab(); // workaround double body focus(ReactFocusLock effect)

        userEvent.tab();
        expect(closeIcon).toHaveFocus();

        userEvent.tab();
        expect(closeIcon).toHaveFocus();

        userEvent.tab();
        expect(closeIcon).toHaveFocus();
    });

    xit('should call onclose when click to close icon', async () => {
        const handler = jest.fn();
        const component = (
            <Modal isOpen onClose={handler}>
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
        await waitOpeningAnimation();
        const closeIcon = screen.getByRole('button', { name: /Close/i });

        userEvent.click(closeIcon);
        const [firstArg] = handler.mock.calls[0];

        expect(handler).toHaveBeenCalledTimes(1);
        expect(firstArg).toBeNull();
    });

    xit('should call onclose when click outside', async () => {
        const handler = jest.fn();
        const component = (
            <Modal isOpen data-marker='Modal.Fade' onClose={handler}>
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
        await waitOpeningAnimation();
        const fade = screen.getByTestId('Modal.Fade');

        userEvent.click(fade);
        const [firstArg] = handler.mock.calls[0];

        expect(handler).toHaveBeenCalledTimes(1);
        expect(firstArg).toBeNull();
    });

    xit('should call onclose when press enter to close icon', async () => {
        const handler = jest.fn();
        const component = (
            <Modal isOpen onClose={handler}>
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
        await waitOpeningAnimation();
        focusCloseIconFromInitialStateByTabs();

        const closeIcon = screen.getByRole('button', { name: /Close/i });
        expect(closeIcon).toHaveFocus();
        userEvent.keyboard('{enter}');

        const [firstArg] = handler.mock.calls[0];

        expect(handler).toHaveBeenCalledTimes(1);
        expect(firstArg).toBeNull();
    });

    xit('shouldn`t call onclose when press space bar to close icon', async () => {
        const handler = jest.fn();
        const component = (
            <Modal isOpen onClose={handler}>
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
        await waitOpeningAnimation();
        focusCloseIconFromInitialStateByTabs();

        const closeIcon = screen.getByRole('button', { name: /Close/i });
        expect(closeIcon).toHaveFocus();
        userEvent.keyboard('{space}');

        expect(handler).toHaveBeenCalledTimes(0);
    });

    xit('should close modal when use promise based onclose', async () => {
        const handler = jest.fn().mockReturnValue(Promise.resolve());
        const onPreDesposeHandler = jest.fn();
        const component = (
            <Modal isOpen onClose={handler} onPreDespose={onPreDesposeHandler}>
                <Modal.Layout>
                    <Modal.Head>
                        <Modal.Title>Modal header</Modal.Title>
                    </Modal.Head>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </Modal.Body>
                </Modal.Layout>
            </Modal>
        );
        render(component);
        await waitOpeningAnimation();
        const closeIcon = screen.getByRole('button', { name: /Close/i });

        userEvent.click(closeIcon);

        expect(handler).toHaveBeenCalledTimes(1);
        await waitFor(() => expect(onPreDesposeHandler).toHaveBeenCalledTimes(1));

        const box = screen.queryByTestId('Modal.Box');
        expect(box).not.toBeInTheDocument();
    });

    xit('should call onPreDespose when close modal', async () => {
        const handler = jest.fn();
        const onPreDesposeHandler = jest.fn();
        const component = (
            <Modal isOpen onClose={handler} onPreDespose={onPreDesposeHandler}>
                <Modal.Layout>
                    <Modal.Head>
                        <Modal.Title>Modal header</Modal.Title>
                    </Modal.Head>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </Modal.Body>
                </Modal.Layout>
            </Modal>
        );
        render(component);
        await waitOpeningAnimation();
        const closeIcon = screen.getByRole('button', { name: /Close/i });

        userEvent.click(closeIcon);

        expect(handler).toHaveBeenCalledTimes(1);
        await waitFor(() => expect(onPreDesposeHandler).toHaveBeenCalledTimes(1));
    });

    xit('should not call onclose and close when click outside with canCloseOnlyByButton prop', async () => {
        const handler = jest.fn();
        const component = (
            <Modal isOpen closeByFade={false} data-marker='Modal.Box' onClose={handler}>
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
        await waitOpeningAnimation();
        const fade = screen.getByTestId('Modal.Box');
        userEvent.click(fade);

        expect(handler).not.toHaveBeenCalled();
    });

    it('should block scrolling when the modal is open', async () => {
        render(
            <div>
                <Modal isOpen={true} onClose={jest.fn()}>
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
            </div>
        );

        expect(document.body).toHaveStyle({ overflow: 'hidden' });
    });
});
