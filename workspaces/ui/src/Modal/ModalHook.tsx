import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from './Modal';

let modals: React.ReactNode[] = [];
let setModals: React.Dispatch<React.ReactNode[]>;
let container: HTMLDivElement;

const ModalContainer = () => {
    const [modals, _setModals] = useState<React.ReactNode[]>([]);
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
export function useModal(modal: React.ReactNode, onClose: ModalHookClose): [ModalHookOpen, ModalHookClose];
export function useModal(modal?: any, onClose?: any): any {
    const modalRef: any = { current: { close: null } };
    let instanse: React.ReactNode;

    const closeHandler: ModalHookClose = (data) => {
        modals = modals.filter((m) => m !== instanse);
        if (typeof onClose === 'function') {
            onClose(data);
        }
    };

    const close: ModalHookClose = (data) => {
        if (typeof modalRef.current.close === 'function' && modals.includes(instanse)) {
            modalRef.current.close(data);
        }
    };

    const open: ModalHookOpen = () => {
        if (!container) {
            container = document.createElement('div');
            document.body.appendChild(container);
            ReactDOM.render(<ModalContainer />, container);
        }

        const state: any = { open: null };

        const handleRef = (ref) => {
            modalRef.current = ref;
            state.open();
        };

        instanse = (
            <Modal key={Math.random()} state={state} ref={handleRef} onClose={closeHandler}>
                {modal}
            </Modal>
        );

        modals.push(instanse);
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
