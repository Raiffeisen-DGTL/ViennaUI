import React, { FC, ForwardRefRenderFunction, PropsWithChildren, ReactElement, Ref } from 'react';
import { AnyObject } from '../types';

interface ComponentWrapperProps<Props = object> {
    component?: FC<PropsWithChildren<Props>> | ForwardRefRenderFunction<Ref<HTMLDivElement>, Props>;
    props?: Props;
}

export const ComponentWrapper = <Props extends AnyObject>({
    component: Component,
    props,
    children,
}: PropsWithChildren<ComponentWrapperProps<Props>>): ReactElement => {
    if (Component && props) {
        return <Component {...props}>{children}</Component>;
    }
    return <>{children}</>;
};
