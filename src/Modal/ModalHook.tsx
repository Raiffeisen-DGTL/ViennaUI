import React, { useState, Dispatch, ReactNode } from 'react';
import  { createPortal, render } from "react-dom";
import { Modal, ModalProps } from './Modal';

let modals: ReactNode[] = [];
let setModals: Dispatch<ReactNode[]>;
let container: HTMLDivElement;

const ModalContainer = () => {
    const [modals, _setModals] = useState<ReactNode[]>([]);
    setModals = _setModals;
    return <>{modals.map((modal) => modal)}</>;
};

type ModalHookOpen = () => void;
type ModalHookClose = <T extends any>(data?: T) => void;

interface ModalHook {
    open: ModalHookOpen;
    close: ModalHookClose;
}

export function useModal(): ModalHook;
export function useModal(
    modal: ReactNode,
    onClose?: ModalHookClose,
    modalProps?: Omit<ModalProps, 'state' | 'onClose' | 'children'>
): [ModalHookOpen, ModalHookClose];
export function useModal(modal?: any, onClose?: any, modalProps?: any): any {
    const modalRef: any = { current: { close: null } };
    let instance: ReactNode;

    const closeHandler: ModalHookClose = (data) => {
        modals = modals.filter((m) => m !== instance);
        if (typeof onClose === 'function') {
            onClose(data);
        }
    };

    const close: ModalHookClose = (data) => {
        if (typeof modalRef.current.close === 'function' && modals.includes(instance)) {
            modalRef.current.close(data);
        }
    };

    const open: ModalHookOpen = () => {
        if (!container) {
            container = document.createElement('div');
            document.body.appendChild(container);
            render(createPortal(<ModalContainer />, container), container);
        }

        const state: { open: (() => void) | null } = { open: null };

        const handleRef = (ref) => {
            modalRef.current = ref;
            state.open?.();
        };

        instance = (
            <Modal key={Math.random()} state={state} ref={handleRef} onClose={closeHandler} {...modalProps}>
                {modal}
            </Modal>
        );

        modals.push(instance);
        if (setModals) {
            setModals([...modals]);
        }
    };

    if (!modal && !onClose) {
        return {
            set children(val) {
                modal = val;
            },
            set onClose(val) {
                onClose = val;
            },
            set open(val) {
                this.nativeOpen = val;
            },
            get open() {
                return open;
            },
            set close(val) {
                this.nativeClose = val;
            },
            get close() {
                return close;
            },
        };
    }

    return [open, close];
}
