import React, { FC, ForwardRefRenderFunction, PropsWithChildren, ReactElement, Ref } from 'react';

interface ComponentWrapperProps<Props = {}> {
    component?: FC<PropsWithChildren<Props>> | ForwardRefRenderFunction<Ref<HTMLDivElement>, Props>;
    props?: Props;
}

export const ComponentWrapper = <Props extends Record<string, any>>({
    component: Component,
    props,
    children,
}: PropsWithChildren<ComponentWrapperProps<Props>>): ReactElement => {
    if (Component && props) {
        return <Component {...props}>{children}</Component>;
    }
    return <>{children}</>;
};
