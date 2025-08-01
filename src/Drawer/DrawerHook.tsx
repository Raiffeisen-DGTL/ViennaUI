import React, { useState, useRef, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Drawer } from './Drawer';
import { RefFunc } from '../Modal/Modal';

let drawers: ReactNode[] = [];
let setDrawers: React.Dispatch<ReactNode[]>;
let container: HTMLDivElement;

const DrawerContainer = () => {
    const [drawers, _setDrawer] = useState<ReactNode[]>([]);
    setDrawers = _setDrawer;
    return <>{drawers.map((modal) => modal)}</>;
};

export type DrawerHookOpen = () => void;
export type DrawerHookClose = <T>(data?: T) => void;

interface DrawerHook {
    children: ReactNode;
    onClose?: DrawerHookClose;
    open: DrawerHookOpen;
    close: DrawerHookClose;
    _open: DrawerHookOpen;
    _close: DrawerHookClose;
}
/**
 * @deprecated
 */
export function useDrawer(): DrawerHook;
export function useDrawer(drawer: ReactNode, onClose: DrawerHookClose): [DrawerHookOpen, DrawerHookClose];
export function useDrawer(
    drawer?: ReactNode,
    onClose?: DrawerHookClose
): DrawerHook | [DrawerHookOpen, DrawerHookClose] {
    /** Ранее было { current: { close: null } }; */
    const drawerRef = useRef<RefFunc | HTMLDivElement | null>({ close: (data: unknown) => close(data) });
    const isOpenRef = useRef(false);
    let instance: React.ReactNode;

    const closeHandler: DrawerHookClose = (data) => {
        drawers = drawers.filter((m) => m !== instance);
        if (typeof onClose === 'function') {
            onClose(data);
        }
    };

    const close: DrawerHookClose = (data) => {
        const drawerClose = (drawerRef?.current as RefFunc)?.close;
        if (typeof drawerClose === 'function' && drawers.includes(instance)) {
            drawerClose(data);
        }
    };

    const open: DrawerHookOpen = () => {
        if (!container) {
            container = document.createElement('div');
            document.body.appendChild(container);
            ReactDOM.render(<DrawerContainer />, container);
        }

        const state: { open: Nullable<DrawerHookOpen> } = { open: null };

        isOpenRef.current = false;

        const handleRef = (ref: RefFunc | HTMLDivElement | null) => {
            if (!isOpenRef.current && ref) {
                (drawerRef.current as HTMLDivElement | RefFunc | null) = ref;
                state.open?.();
                isOpenRef.current = true;
            }
        };

        instance = (
            <Drawer key={Math.random()} state={state} ref={handleRef} onClose={closeHandler}>
                {drawer}
            </Drawer>
        );

        drawers.push(instance);
        if (setDrawers) {
            setDrawers([...drawers]);
        }
    };

    if (!drawer && !onClose) {
        const state: DrawerHook = {
            set children(val: ReactNode) {
                drawer = val;
            },
            set onClose(val: DrawerHookClose | undefined) {
                onClose = val;
            },
            _open: open,
            _close: close,
            set open(val: DrawerHookOpen) {
                this._open = val;
            },
            get open() {
                return this._open;
            },
            set close(val: DrawerHookClose) {
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
