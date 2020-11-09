import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Drawer } from './Drawer';

let drawers: React.ReactNode[] = [];
let setDrawers: React.Dispatch<React.ReactNode[]>;
let container: HTMLDivElement;

const DrawerContainer = () => {
    const [drawers, _setDrawer] = useState<React.ReactNode[]>([]);
    setDrawers = _setDrawer;
    return <>{drawers.map((modal) => modal)}</>;
};

type DrawerHookOpen = () => void;
type DrawerHookClose = <T extends any>(data?: T) => void;

interface DrawerHook {
    open: DrawerHookOpen;
    close: DrawerHookClose;
}

export function useDrawer(): DrawerHook;
export function useDrawer(drawer: React.ReactNode, onClose: DrawerHookClose): [DrawerHookOpen, DrawerHookClose];
export function useDrawer(drawer?: any, onClose?: any): any {
    const drawerRef: any = { current: { close: null } };
    let instanse: React.ReactNode;

    const closeHandler: DrawerHookClose = (data) => {
        drawers = drawers.filter((m) => m !== instanse);
        if (typeof onClose === 'function') {
            onClose(data);
        }
    };

    const close: DrawerHookClose = (data) => {
        if (typeof drawerRef.current.close === 'function' && drawers.includes(instanse)) {
            drawerRef.current.close(data);
        }
    };

    const open: DrawerHookOpen = () => {
        if (!container) {
            container = document.createElement('div');
            document.body.appendChild(container);
            ReactDOM.render(<DrawerContainer />, container);
        }

        const state: any = { open: null };

        const handleRef = (ref) => {
            drawerRef.current = ref;
            state.open();
        };

        instanse = (
            <Drawer key={Math.random()} state={state} ref={handleRef} onClose={closeHandler}>
                {drawer}
            </Drawer>
        );

        drawers.push(instanse);
        if (setDrawers) {
            setDrawers([...drawers]);
        }
    };

    if (!drawer && !onClose) {
        return {
            set children(val) {
                drawer = val;
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
