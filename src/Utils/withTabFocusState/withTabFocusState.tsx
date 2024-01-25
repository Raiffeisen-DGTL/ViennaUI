import React, { FocusEventHandler, MouseEventHandler, useState, FocusEvent } from 'react';

export interface FocusableWithTab<El extends HTMLElement> {
    onFocus?: FocusEventHandler<El>;
    onMouseDown?: MouseEventHandler<El>;
    onMouseUp?: MouseEventHandler<El>;
    isFocusStateVisible: boolean;
}

export function withTabFocusState<El extends HTMLElement, P extends FocusableWithTab<El>>(Component: React.FC<P>) {
    return (props: Omit<P, 'isFocusStateVisible'>) => {
        const [isFocusStateVisible, setVisibleFocusedState] = useState(false);
        let insideMouseClick = false;

        const onFocus = (e: FocusEvent<El>) => {
            setVisibleFocusedState(!insideMouseClick);
            props.onFocus?.(e);
        };

        const onMouseDown: MouseEventHandler<El> = (e) => {
            insideMouseClick = true;
            props.onMouseDown?.(e);
        };

        const onMouseUp: MouseEventHandler<El> = (e) => {
            insideMouseClick = false;
            props.onMouseUp?.(e);
        };

        const newProps: any = {
            ...props,
            onFocus,
            onMouseDown,
            onMouseUp,
            isFocusStateVisible,
        };

        return <Component {...newProps} />;
    };
}
