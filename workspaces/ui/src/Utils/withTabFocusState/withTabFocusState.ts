import React, { useState } from 'react';

export interface FocusableWithTab {
    onFocus: (event: React.FormEvent) => void;
    onMouseDown: (event: React.FormEvent) => void;
    onMouseUp: (event: React.FormEvent) => void;
    isFocusStateVisible: boolean;
}

export function withTabFocusState<T>(Component: React.FC<T>): React.FC<T> {
    return (props: any) => {
        const [isFocusStateVisible, setVisibleFocusedState] = useState(false);
        let insideMouseClick = false;

        const onFocus = (e) => {
            setVisibleFocusedState(!insideMouseClick);

            if (props.onFocus) {
                props.onFocus(e);
            }
        };

        const onMouseDown = (e) => {
            insideMouseClick = true;

            if (props.onMouseDown) {
                props.onMouseDown(e);
            }
        };

        const onMouseUp = (e) => {
            insideMouseClick = false;

            if (props.onMouseUp) {
                props.onMouseUp(e);
            }
        };

        const params = {
            onFocus,
            onMouseDown,
            onMouseUp,
            isFocusStateVisible,
        };

        return React.createElement(Component, { ...props, ...params });
    };
}
