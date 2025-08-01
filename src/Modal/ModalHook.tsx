import React, { useState, Dispatch, ReactNode, MutableRefObject } from 'react';
import { createPortal, render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Modal, ModalProps, RefFunc } from './Modal';
import { ComponentWrapper } from '../Utils';

let modals: ReactNode[] = [];
let setModals: Dispatch<ReactNode[]>;
let container: HTMLDivElement;

const ModalContainer = () => {
    const [modals, _setModals] = useState<ReactNode[]>([]);
    setModals = _setModals;
    return <>{modals.map((modal) => modal)}</>;
};

export type ModalHookOpen = () => void;
export type ModalHookClose = <T>(data?: T) => void;
interface ModalHook {
    children: ReactNode;
    onClose?: ModalHookClose;
    open: ModalHookOpen;
    close: ModalHookClose;
    _open: ModalHookOpen;
    _close: ModalHookClose;
}
type ThemeType = Parameters<typeof ThemeProvider>[0]['theme'];
/**
 * @deprecated
 */
export function useModal(): ModalHook;
export function useModal(
    modal: ReactNode,
    onClose?: ModalHookClose,
    modalProps?: Omit<ModalProps, 'state' | 'onClose' | 'children'>,
    theme?: ThemeType
): [ModalHookOpen, ModalHookClose];
export function useModal(
    modal?: ReactNode,
    onClose?: ModalHookClose,
    modalProps?: Omit<ModalProps, 'state' | 'onClose' | 'children'>,
    theme?: ThemeType
): ModalHook | [ModalHookOpen, ModalHookClose] {
    const modalRef: MutableRefObject<RefFunc> = { current: { close: (data: unknown) => close(data) } };
    let instance: ReactNode;

    const closeHandler: ModalHookClose = (data) => {
        modals = modals.filter((m) => m !== instance);
        if (typeof onClose === 'function') {
            onClose(data);
        }
    };

    let close: ModalHookClose = (data) => {
        if (typeof modalRef.current.close === 'function' && modals.includes(instance)) {
            modalRef.current.close(data);
        }
    };

    let open: ModalHookOpen = () => {
        if (!container) {
            container = document.createElement('div');
            document.body.appendChild(container);
            render(createPortal(<ModalContainer />, container), container);
        }

        const state: { open: (() => void) | null } = { open: null };

        const handleRef = (ref: RefFunc | HTMLDivElement | null) => {
            if (modalRef) {
                (modalRef.current as HTMLDivElement | RefFunc | null) = ref;
            }
            state.open?.();
        };

        instance = (
            <ComponentWrapper component={theme ? ThemeProvider : undefined} props={theme ? { theme } : undefined}>
                <Modal key={Math.random()} state={state} ref={handleRef} onClose={closeHandler} {...modalProps}>
                    {modal}
                </Modal>
            </ComponentWrapper>
        );

        modals.push(instance);
        if (setModals) {
            setModals([...modals]);
        }
    };

    if (!modal && !onClose) {
        const state: ModalHook = {
            set children(val: React.ReactNode) {
                modal = val;
            },
            set onClose(val: ModalHookClose | undefined) {
                onClose = val;
            },
            _open: open,
            _close: close,
            set open(val: ModalHookOpen) {
                this._open = val;
            },
            get open() {
                return this._open;
            },
            set close(val: ModalHookClose) {
                this._close = val;
            },
            get close() {
                return this._close;
            },
        };
        return state;
    }

    return [open, close];
}
